#! /usr/bin/env node

import { readdir } from 'node:fs/promises'

import { ESLint } from 'eslint'
import Ajv from 'ajv'
import betterAjvErrors from '@sidvind/better-ajv-errors'
import metaSchema from 'ajv/lib/refs/json-schema-draft-04.json' with { type: 'json' }


Error.stackTraceLimit = Infinity;

const pluginConfigurationsDirectoryUrl = new URL('../src/configs/plugins/', import.meta.url)

const ajv = new Ajv({
  strict: false,
  allErrors: true,
  validateSchema: false,
  missingRefs: 'ignore',
  schemaId: 'auto',
  useDefaults: true,
  meta: false,
  verbose: true,
  logger: false,
  jsonPointers: true, // Required by '@sidvind/better-ajv-errors'
})

ajv.addMetaSchema(metaSchema);

/**
 * Get the list of configured plugins from the directory plugins
 * For each configured plugin
 *   Build an object with the following shape:
 *     { pluginPrefix, pluginInstance, configuredPluginRuleSet, configurations: { [fileName]: configuration } }
 *   Detect new rules by comparing the configuredRules with the rules found in pluginInstance
 *   Detect deprecated rules usage by comparing the configuredRules with the rules found in pluginInstance
 *   For each configurations
 *     For each rules in configuration
 *       Validate configuration from rule schema
 *       Detect new optional configuration options (Left TODO:)
 */

;(async () => {
  const configuredPlugins = await readdir(pluginConfigurationsDirectoryUrl)

  for (const pluginName of configuredPlugins) {
    const pluginDescriptor = await getPluginDescriptor(pluginName)

    const newRules = detectNewRules(pluginDescriptor.instance.rules, pluginDescriptor.configuredRuleSet, pluginDescriptor.prefix)
    const deprecatedRules = detectDeprecatedRules(pluginDescriptor.instance.rules, pluginDescriptor.configuredRuleSet, pluginDescriptor.prefix)
    const removedRules = detectRemovedRules(pluginDescriptor.instance.rules, pluginDescriptor.configuredRuleSet, pluginDescriptor.prefix)

    const errors = validateConfigurations(pluginDescriptor, deprecatedRules, removedRules)

    formatMessages(pluginName, newRules, deprecatedRules, removedRules, errors)
  }
})().catch((error) => console.log(error))

async function getPluginDescriptor(pluginName) {
  const pluginConfigurationDirectoryUrl = new URL(`${pluginName}/`, pluginConfigurationsDirectoryUrl)
  const pluginConfigurationFiles = await readdir(pluginConfigurationDirectoryUrl)

  const configurationDictionary = await getPluginConfigurationMap(pluginConfigurationFiles, pluginConfigurationDirectoryUrl)
  const [prefix, instance] = getConsistentAcrossConfigurationsPluginEntry(configurationDictionary, pluginName)
  const configuredRuleSet = getConfiguredPluginRuleSet(configurationDictionary, prefix)

  return {
    prefix,
    instance,
    configuredRuleSet,
    configurationDictionary,
  }
}

async function getPluginConfigurationMap(pluginConfigurationFiles, pluginConfigurationDirectoryUrl) {
  const pluginConfigurationMap = {}

  for (const pluginConfigurationFile of pluginConfigurationFiles) {
    const { default: pluginConfiguration } = await import(new URL(pluginConfigurationFile, pluginConfigurationDirectoryUrl))

    pluginConfigurationMap[pluginConfigurationFile] = pluginConfiguration
  }

  return pluginConfigurationMap
}

function getConsistentAcrossConfigurationsPluginEntry(pluginConfigurationMap, pluginName) {
  const [[firstPluginFileName, firstPluginConfiguration], ...pluginConfigurationList] = Object.entries(pluginConfigurationMap)
  const pluginEntriesInFirstConfiguration = Object.entries(firstPluginConfiguration.plugins ?? (pluginName === 'eslint' ? { '': ESLint.defaultConfig[0].plugins['@'] } : { '': undefined }))
  const [firstPotentialPluginEntry] = pluginEntriesInFirstConfiguration

  if (pluginEntriesInFirstConfiguration.length > 1) {
    throw new Error(`Multiple plugins prefix found for ${pluginName} plugin configuration in ${firstPluginFileName}`)
  }

  return pluginConfigurationList.reduce(([previousPluginPrefix, previousPluginInstance], [pluginFileName, pluginConfiguration]) => {
    const pluginEntries = Object.entries(pluginConfiguration.plugins ?? (pluginName === 'eslint' ? { '': ESLint.defaultConfig[0].plugins['@'] } : { '': undefined }))
    const [firstPluginEntry] = pluginEntries
    const [pluginPrefix, pluginInstance] = firstPluginEntry

    if (pluginEntries.length > 1) {
      throw new Error(`Multiple plugin entries found for ${pluginName} plugin configuration in ${pluginFileName}`)
    }

    if (previousPluginPrefix !== pluginPrefix) {
      throw new Error(`Inconsistent plugin prefix across configurations for plugin ${pluginName} in ${pluginFileName}`)
    }

    if (previousPluginInstance !== pluginInstance) {
      throw new Error(`Inconsistent plugin instance across configurations for plugin ${pluginName} in ${pluginFileName}`)
    }

    return firstPluginEntry
  }, firstPotentialPluginEntry)
}

function getConfiguredPluginRuleSet(pluginConfigurationMap, pluginPrefix) {
  return Object.values(pluginConfigurationMap).reduce((partialRuleSet, pluginConfiguration) => {
    return Object.keys(pluginConfiguration.rules).reduce((s, ruleId) => {
      // Remove other plugin rule overwrites
      if (isRuleIdFromPlugin(ruleId, pluginPrefix)) {
        return s.add(ruleId)
      }

      return s
    }, partialRuleSet)
  }, new Set())
}

function detectNewRules(pluginRules, configuredRuleSet, pluginPrefix) {
  return Object.keys(pluginRules).reduce((newRuleList, ruleName) => {
    if (!configuredRuleSet.has(getRuleIdFromName(ruleName, pluginPrefix)) && !pluginRules[ruleName].meta?.deprecated) {
      const isLayoutRule = pluginRules[ruleName].meta?.type === LAYOUT_TYPE

      newRuleList.push(`${ruleName}${isLayoutRule ? ' (layout)' : ''}`)
    }

    return newRuleList
  }, [])
}

function detectDeprecatedRules(pluginRules, configuredRuleSet, pluginPrefix) {
  return Object.keys(pluginRules).reduce((deprecatedRuleList, ruleName) => {
    if (configuredRuleSet.has(getRuleIdFromName(ruleName, pluginPrefix)) && pluginRules[ruleName].meta?.deprecated) {
      const replacedBy = pluginRules[ruleName].meta?.replacedBy
      const replacedByAsString = Array.isArray(replacedBy) ? replacedBy.join(', ') : replacedBy

      deprecatedRuleList.push(`${ruleName}${replacedByAsString ? ` (replaced by ${replacedByAsString})` : ''}`)
    }

    return deprecatedRuleList
  }, [])
}

function detectRemovedRules(pluginRules, configuredRuleSet, pluginPrefix) {
  return Array.from(configuredRuleSet).reduce((removedRuleList, ruleId) => {
    const ruleName = getRuleNameFromId(ruleId, pluginPrefix)

    if (!pluginRules[ruleName]) {
      removedRuleList.push(ruleName)
    }

    return removedRuleList
  }, [])
}

function validateConfigurations(pluginDescriptor, deprecatedRules, removedRules) {
  return Object.entries(pluginDescriptor.configurationDictionary).reduce((potentialErrors, [fileName, configuration]) => {
    const sanitizedConfiguration = getSanitizedConfiguration(configuration, pluginDescriptor.prefix, deprecatedRules, removedRules)

    potentialErrors.push(...validateConfiguration(sanitizedConfiguration, pluginDescriptor, fileName))

    return potentialErrors
  }, [])
}

function getSanitizedConfiguration(configuration, pluginPrefix, deprecatedRules, removedRules) {
  const sanitizedConfigurationRuleEntries = Object.entries(configuration.rules).filter(([ruleId]) => {
    const ruleName = getRuleNameFromId(ruleId, pluginPrefix)

    return isRuleIdFromPlugin(ruleId, pluginPrefix) && !deprecatedRules.includes(ruleName) && !removedRules.includes(ruleName)
  })

  return {
    ...configuration,
    rules: Object.fromEntries(sanitizedConfigurationRuleEntries),
  }
}

function validateConfiguration(configuration, { prefix, instance }, fileName) {
  return Object.entries(configuration.rules).reduce((potentialErrors, [ruleId, ruleConfiguration]) => {
    const ruleName = getRuleNameFromId(ruleId, prefix)

    potentialErrors.push(...validateRuleConfiguration(ruleId, ruleConfiguration, instance.rules[ruleName], fileName))

    return potentialErrors
  }, [])
}

const LAYOUT_TYPE = 'layout'
const LAYOUT_TYPE_SUFFIX = `-${LAYOUT_TYPE}`

function validateRuleConfiguration(ruleId, ruleConfiguration, rule, fileName) {
  const potentialErrors = []

  if (!rule.meta) {
    potentialErrors.push(`${ruleId}: missing meta object (in ${fileName})`)
  }

  if (!Array.isArray(ruleConfiguration)) {
    potentialErrors.push(`${ruleId}: configuration is not an array (in ${fileName})`)
  }

  if (potentialErrors.length > 0) {
    return potentialErrors
  }

  const schema = rule.meta.schema
  const [, ...ruleConfigurationOptions] = ruleConfiguration

  if (!rule.meta.type) {
    potentialErrors.push(`LAYOUT ISSUE: ${ruleId}: missing type in the meta object of the rule, it may be a ${LAYOUT_TYPE} rule (in ${fileName})`)
  } else if (rule.meta.type === LAYOUT_TYPE && !fileName.includes(LAYOUT_TYPE_SUFFIX)) {
    potentialErrors.push(`LAYOUT ISSUE: ${ruleId}: the rule should be in a file suffixed with '${LAYOUT_TYPE_SUFFIX}' (in ${fileName})`)
  } else if (rule.meta.type !== LAYOUT_TYPE && fileName.includes(LAYOUT_TYPE_SUFFIX)) {
    potentialErrors.push(`LAYOUT ISSUE: ${ruleId}: the rule should NOT be in a file suffixed with '${LAYOUT_TYPE_SUFFIX}' (in ${fileName})`)
  }

  if (schema === false) {
    potentialErrors.push(`${ruleId}: schema validation is explicitly disabled (in ${fileName})`)
  } else if (!schema) {
    potentialErrors.push(`${ruleId}: schema of the rule is falsy but not false (in ${fileName})`)
  } else if (Array.isArray(schema)) {
    potentialErrors.push(...validateRuleWithSchemaAsArray(schema, ruleConfigurationOptions, ruleId, fileName))
  } else {
    potentialErrors.push(...validateRuleWithSchemaAsObject(schema, ruleConfigurationOptions, ruleId, fileName))
  }

  return potentialErrors
}

function validateRuleWithSchemaAsArray(schema, ruleConfigurationOptions = [], ruleId, fileName) {
  const errors = []
  const schemaSize = schema.length
  const ruleConfigurationOptionSize = ruleConfigurationOptions.length

  if (schemaSize > ruleConfigurationOptionSize) {
    errors.push(`${ruleId}: missing ${schemaSize - ruleConfigurationOptionSize} configuration options (in ${fileName})`)
  }

  errors.push(
    ...schema.reduce((potentialErrors, schemaObject, index) => {
      const ruleConfigurationOption = ruleConfigurationOptions[index]

      if (ruleConfigurationOption && !ajv.validate(schemaObject, ruleConfigurationOption)) {
        // potentialErrors.push(`${ruleId}: errors while validating the rule configuration (in ${fileName}): ${ajv.errorsText(ajv.errors)}`)
        potentialErrors.push(`${ruleId}: errors while validating the rule configuration (in ${fileName}):\n${betterAjvErrors(schemaObject, ruleConfigurationOption, ajv.errors)}`)
      }

      return potentialErrors
    }, [])
  )

  if (schemaSize < ruleConfigurationOptionSize) {
    errors.push(`${ruleId}: ${ruleConfigurationOptionSize - schemaSize} extra configuration options (in ${fileName})`)
  }

  return errors
}

function validateRuleWithSchemaAsObject(schema, ruleConfigurationOptions = [], ruleId, fileName) {
  if (!ajv.validate(schema, ruleConfigurationOptions)) {
    return [`${ruleId}: errors while validating the rule configuration (in ${fileName}):\n${betterAjvErrors(schema, ruleConfigurationOptions, ajv.errors)}`]
  }

  return []
}

const INDENT = '  '

function formatMessages(pluginName, newRules = [], deprecatedRules = [], removedRules = [], errors = []) {
  console.log(`Plugin: ${pluginName}`)

  if (newRules.length > 0 || deprecatedRules.length > 0 || removedRules.length > 0 || errors.length > 0) {
    if (newRules.length > 0) {
      console.log(`\n${INDENT}New rules:\n${INDENT}${INDENT}${newRules.join(`\n${INDENT}${INDENT}`)}`)
    }

    if (deprecatedRules.length > 0) {
      console.log(`\n${INDENT}Deprecated rules:\n${INDENT}${INDENT}${deprecatedRules.join(`\n${INDENT}${INDENT}`)}`)
    }

    if (removedRules.length > 0) {
      console.log(`\n${INDENT}Removed rules:\n${INDENT}${INDENT}${removedRules.join(`\n${INDENT}${INDENT}`)}`)
    }

    if (errors.length > 0) {
      console.log(`\n${INDENT}Errors:\n${INDENT}${INDENT}${errors.join(`\n${INDENT}${INDENT}`)}`)
    }
  } else {
    console.log('All good')
  }

  console.log(`\n=====\n`)
}

function getRuleIdFromName(ruleName, pluginPrefix) {
  return `${pluginPrefix}/${ruleName}`
}

function getRuleNameFromId(ruleId, pluginPrefix) {
  return ruleId.replace(`${pluginPrefix}/`, '')
}

function isRuleIdFromPlugin(ruleId, pluginPrefix) {
  return ruleId.startsWith(`${pluginPrefix}/`)
}
