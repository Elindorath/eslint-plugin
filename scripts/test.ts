#! /usr/bin/env -S yarn tsx

import { readdir } from 'node:fs/promises'
import process from 'node:process'

import type { SetFieldType, SetRequired } from 'type-fest'
import type { Linter, Rule } from 'eslint'
import { ESLint } from 'eslint'
import Ajv from 'ajv'
import betterAjvErrors from '@sidvind/better-ajv-errors'
import metaSchema from 'ajv/lib/refs/json-schema-draft-04.json' with { type: 'json' }
import type { JSONSchema4 } from 'json-schema'


type ESLintPluginWithRule = SetRequired<ESLint.Plugin, 'rules'>

type PluginDescriptor = {
  prefix: string;
  instance: ESLintPluginWithRule;
  configuredRuleSet: Set<string>,
  configurationDictionary: Record<string, Linter.Config>,
}

// TODO: This should be used instead of simple string for errors
// type ConfigurationError = {
//   severity: 'error' | 'warning';
//   message: string;
//   ruleId: string;
// }

Error.stackTraceLimit = Infinity;

const pluginConfigurationsDirectoryUrl = new URL('../src/configs/plugins/', import.meta.url)

const ajv = new Ajv({
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

if (!ESLint.defaultConfig[0]?.plugins?.['@']) {
  throw new Error('Pseudo plugin from ESLint default config not found')
}

const eslintPseudoPlugin = ESLint.defaultConfig[0].plugins['@']

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

    if (isPluginDescriptorWithRules(pluginDescriptor)) {
      const newRules = detectNewRules(pluginDescriptor.instance.rules, pluginDescriptor.configuredRuleSet, pluginDescriptor.prefix)
      const deprecatedRules = detectDeprecatedRules(pluginDescriptor.instance.rules, pluginDescriptor.configuredRuleSet, pluginDescriptor.prefix)
      const removedRules = detectRemovedRules(pluginDescriptor.instance.rules, pluginDescriptor.configuredRuleSet, pluginDescriptor.prefix)

      const errors = validateConfigurations(pluginDescriptor, deprecatedRules, removedRules)

      formatMessages(pluginName, newRules, deprecatedRules, removedRules, errors)
    }
  }
})().catch((error) => {
  console.log(error)

  process.exitCode = 1
})

async function getPluginDescriptor(pluginName: string) {
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

async function getPluginConfigurationMap(pluginConfigurationFiles: string[], pluginConfigurationDirectoryUrl: URL) {
  const pluginConfigurationMap: Record<string, Linter.Config> = {}

  for (const pluginConfigurationFile of pluginConfigurationFiles) {
    if (pluginConfigurationFile !== '_compat.ts') {
      const importedPluginConfiguration = await import(new URL(pluginConfigurationFile, pluginConfigurationDirectoryUrl).toString())
      const firstNamedConfig = Object.keys(importedPluginConfiguration).find((namedExport) => namedExport.endsWith('Config'))

      if (!firstNamedConfig) {
        throw new Error(`no named export of a config found in ${pluginConfigurationFile}`)
      }

      pluginConfigurationMap[pluginConfigurationFile] = importedPluginConfiguration[firstNamedConfig] as Linter.Config
    }
  }

  return pluginConfigurationMap
}

function getConsistentAcrossConfigurationsPluginEntry(pluginConfigurationMap: Record<string, Linter.Config>, pluginName: string) {
  const [[firstPluginFileName, firstPluginConfiguration], ...pluginConfigurationEntries] = Object.entries(pluginConfigurationMap)
  const firstPluginConfigurationPluginMap = firstPluginConfiguration.plugins ?? (pluginName === 'eslint' && { '': eslintPseudoPlugin })

  if (!firstPluginConfigurationPluginMap) {
    throw new Error(`No plugin entries found for ${pluginName} plugin configuration in ${firstPluginFileName}`)
  }

  const pluginEntriesInFirstConfiguration = Object.entries(firstPluginConfigurationPluginMap)
  const [firstPotentialPluginEntry] = pluginEntriesInFirstConfiguration

  if (pluginEntriesInFirstConfiguration.length > 1) {
    throw new Error(`Multiple plugins prefix found for ${pluginName} plugin configuration in ${firstPluginFileName}`)
  }

  return pluginConfigurationEntries.reduce(([previousPluginPrefix, previousPluginInstance], [pluginFileName, pluginConfiguration]): [string, ESLint.Plugin] => {
    const pluginEntries = Object.entries(pluginConfiguration.plugins ?? (pluginName === 'eslint' ? { '': eslintPseudoPlugin } : { '': undefined }))
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

    if (!pluginInstance) {
      throw new Error(`No plugin entries found for ${pluginName} plugin configuration in ${pluginFileName}`)
    }

    return [pluginPrefix, pluginInstance]
  }, firstPotentialPluginEntry)
}

function getConfiguredPluginRuleSet(pluginConfigurationMap: Record<string, Linter.Config>, pluginPrefix: string) {
  return Object.values(pluginConfigurationMap).reduce<Set<string>>((partialRuleSet, pluginConfiguration) => {
    return Object.keys(pluginConfiguration.rules ?? {}).reduce((s, ruleId) => {
      // Remove other plugin rule overwrites
      if (isRuleIdFromPlugin(ruleId, pluginPrefix)) {
        return s.add(ruleId)
      }

      return s
    }, partialRuleSet)
  }, new Set())
}

function detectNewRules(pluginRules: Record<string, Rule.RuleModule>, configuredRuleSet: Set<string>, pluginPrefix: string) {
  return Object.keys(pluginRules).reduce<string[]>((newRuleList, ruleName) => {
    if (!configuredRuleSet.has(getRuleIdFromName(ruleName, pluginPrefix)) && !pluginRules[ruleName].meta?.deprecated) {
      const isLayoutRule = pluginRules[ruleName].meta?.type === LAYOUT_TYPE

      newRuleList.push(`${ruleName}${isLayoutRule ? ' (layout)' : ''}`)
    }

    return newRuleList
  }, [])
}

function detectDeprecatedRules(pluginRules: Record<string, Rule.RuleModule>, configuredRuleSet: Set<string>, pluginPrefix: string) {
  return Object.keys(pluginRules).reduce<string[]>((deprecatedRuleList, ruleName) => {
    if (configuredRuleSet.has(getRuleIdFromName(ruleName, pluginPrefix)) && pluginRules[ruleName].meta?.deprecated) {
      const replacedBy = pluginRules[ruleName].meta?.replacedBy
      const replacedByAsString = Array.isArray(replacedBy) ? replacedBy.join(', ') : replacedBy

      deprecatedRuleList.push(`${ruleName}${replacedByAsString ? ` (replaced by ${replacedByAsString})` : ''}`)
    }

    return deprecatedRuleList
  }, [])
}

function detectRemovedRules(pluginRules: Record<string, Rule.RuleModule>, configuredRuleSet: Set<string>, pluginPrefix: string) {
  return Array.from(configuredRuleSet).reduce<string[]>((removedRuleList, ruleId) => {
    const ruleName = getRuleNameFromId(ruleId, pluginPrefix)

    if (!pluginRules[ruleName]) {
      removedRuleList.push(ruleName)
    }

    return removedRuleList
  }, [])
}

function validateConfigurations(pluginDescriptor: PluginDescriptor, deprecatedRules: string[], removedRules: string[]) {
  return Object.entries(pluginDescriptor.configurationDictionary).reduce<string[]>((potentialErrors, [fileName, configuration]) => {
    const sanitizedConfiguration = getSanitizedConfiguration(configuration, pluginDescriptor.prefix, deprecatedRules, removedRules)

    potentialErrors.push(...validateConfiguration(sanitizedConfiguration, pluginDescriptor, fileName))

    return potentialErrors
  }, [])
}

function getSanitizedConfiguration(configuration: Linter.Config, pluginPrefix: string, deprecatedRules: string[], removedRules: string[]) {
  const sanitizedConfigurationRuleEntries = Object.entries(configuration.rules ?? {}).filter(([ruleId]) => {
    const ruleName = getRuleNameFromId(ruleId, pluginPrefix)

    return isRuleIdFromPlugin(ruleId, pluginPrefix) && !deprecatedRules.includes(ruleName) && !removedRules.includes(ruleName)
  })

  return {
    ...configuration,
    rules: Object.fromEntries(sanitizedConfigurationRuleEntries),
  }
}

function validateConfiguration(configuration: Linter.Config, { prefix, instance }: PluginDescriptor, fileName: string) {
  return Object.entries(configuration.rules?? {}).reduce<string[]>((potentialErrors, [ruleId, ruleConfiguration]) => {
    const ruleName = getRuleNameFromId(ruleId, prefix)

    potentialErrors.push(...validateRuleConfiguration(ruleId, ruleConfiguration, instance.rules[ruleName], fileName))

    return potentialErrors
  }, [])
}

const LAYOUT_TYPE = 'layout'
const LAYOUT_TYPE_SUFFIX = `-${LAYOUT_TYPE}`

function validateRuleConfiguration(ruleId: string, ruleConfiguration: Linter.RuleEntry<unknown[]> | undefined, rule: Rule.RuleModule, fileName: string) {
  const potentialErrors: string[] = []

  if (!rule.meta) {
    potentialErrors.push(`${ruleId}: missing meta object (in ${fileName})`)
  }

  if (!Array.isArray(ruleConfiguration)) {
    potentialErrors.push(`${ruleId}: configuration is not an array (in ${fileName})`)
  }

  if (!rule.meta || !Array.isArray(ruleConfiguration) || potentialErrors.length > 0) {
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

function validateRuleWithSchemaAsArray(schema: JSONSchema4[], ruleConfigurationOptions: unknown[] = [], ruleId: string, fileName: string) {
  const errors: string[] = []
  const schemaSize = schema.length
  const ruleConfigurationOptionSize = ruleConfigurationOptions.length

  if (schemaSize > ruleConfigurationOptionSize) {
    errors.push(`${ruleId}: missing ${schemaSize - ruleConfigurationOptionSize} configuration options (in ${fileName})`)
  }

  errors.push(
    ...schema.reduce<string[]>((potentialErrors, schemaObject, index) => {
      const ruleConfigurationOption = ruleConfigurationOptions[index]
      const isSchemaValid = ajv.validate(schemaObject, ruleConfigurationOption)

      if (!isSchemaValid && !!ruleConfigurationOption && ajv.errors) {
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

function validateRuleWithSchemaAsObject(schema: JSONSchema4, ruleConfigurationOptions: unknown[] = [], ruleId: string, fileName: string) {
  const isSchemaValid = ajv.validate(schema, ruleConfigurationOptions)

  if (!isSchemaValid && ajv.errors) {
    return [`${ruleId}: errors while validating the rule configuration (in ${fileName}):\n${betterAjvErrors(schema, ruleConfigurationOptions, ajv.errors)}`]
  }

  return []
}

const INDENT = '  '

function formatMessages(
  pluginName: string,
  newRules: string[] = [],
  deprecatedRules: string[] = [],
  removedRules: string[] = [],
  errors: string[] = []
) {
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

function getRuleIdFromName(ruleName: string, pluginPrefix: string) {
  return `${pluginPrefix}/${ruleName}`
}

function getRuleNameFromId(ruleId: string, pluginPrefix: string) {
  return ruleId.replace(`${pluginPrefix}/`, '')
}

function isRuleIdFromPlugin(ruleId: string, pluginPrefix: string) {
  return ruleId.startsWith(`${pluginPrefix}/`)
}

function isPluginDescriptorWithRules(pluginDescriptor: SetFieldType<PluginDescriptor, 'instance', ESLint.Plugin>): pluginDescriptor is PluginDescriptor {
  return !!pluginDescriptor.instance.rules
}
