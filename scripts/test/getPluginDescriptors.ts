/* eslint-disable import-x/max-dependencies, require-await, no-unsanitized/method, unicorn/no-instanceof-builtins -- TODO: fix the eslint configuration for scripts */

/* eslint-disable max-depth, max-statements, perfectionist/sort-modules -- Temporary disabled to avoid unnecessary noise */

import { readdir } from 'node:fs/promises'
import { URL } from 'node:url'

import { ESLint } from 'eslint'
import { builtinRules } from 'eslint/use-at-your-own-risk'

import { config } from './config.ts'
import { InconsistentPluginEntryError } from './errors/InconsistentPluginEntryError.ts'
import { InconsistentPluginInstanceError } from './errors/InconsistentPluginInstanceError.ts'
import { InconsistentPluginPrefixError } from './errors/InconsistentPluginPrefixError.ts'
import { InvalidPluginEntryError } from './errors/InvalidPluginEntryError.ts'
import { MultiplePluginsDefinedError } from './errors/MultiplePluginsDefinedError.ts'
import { NoRulesFoundInPluginError } from './errors/NoRulesFoundInPluginError.ts'
import { isRuleIdFromPlugin } from './utilities/eslint.ts'
import { objectEntries, objectKeys } from './utilities/object.ts'

import type { Linter, Rule } from 'eslint'

import type {
  ESLintPluginWithRule,
  PluginConfigurationEntry,
  PluginDescriptor,
  PluginEntry,
  PluginFilename,
  PluginName,
  PluginPrefix,
  RuleId,
} from './types.ts'


const EXPECTED_PLUGIN_IN_CONFIGURATION_COUNT = 1

export async function getPluginDescriptors(pluginNames: PluginName[]) {
  const promises: Array<Promise<PluginDescriptor>> = []

  for (const pluginName of pluginNames) {
    // if (pluginName === 'perfectionist') {
      promises.push(getPluginDescriptor(pluginName))
    // }
  }

  return Promise.all(promises)
}

async function getPluginDescriptor(pluginName: PluginName): Promise<PluginDescriptor> {
  const pluginConfigurationDirectoryUrl = new URL(`${pluginName}/`, config.pluginConfigurationsDirectoryUrl)

  const pluginConfigurationFileNames = await readdir(pluginConfigurationDirectoryUrl)

  const pluginConfigurationEntries = await getPluginConfigurationEntries(pluginConfigurationFileNames, pluginConfigurationDirectoryUrl)

  const [prefix, instance] = getConsistentAcrossConfigurationsPluginEntry(pluginName, pluginConfigurationEntries)
  const configuredRuleSet = getConfiguredPluginRuleSet(pluginConfigurationEntries, prefix)

  return {
    name: pluginName,
    configurationEntries: pluginConfigurationEntries,
    configuredRuleSet,
    instance,
    prefix,
  }
}

async function getPluginConfigurationEntries(pluginConfigurationFileNames: PluginFilename[], pluginConfigurationDirectoryUrl: URL): Promise<PluginConfigurationEntry[]> {
  const pluginConfigurationEntryPromises: Array<Promise<[string, Linter.Config]>> = []

  for (const pluginConfigurationFile of pluginConfigurationFileNames) {
    if (pluginConfigurationFile !== '_compat.ts') {
      pluginConfigurationEntryPromises.push(getPluginConfigurationFile(pluginConfigurationFile, pluginConfigurationDirectoryUrl))
    }
  }

  return Promise.all(pluginConfigurationEntryPromises)
}

async function getPluginConfigurationFile(pluginConfigurationFile: PluginFilename, pluginConfigurationDirectoryUrl: URL): Promise<PluginConfigurationEntry> {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- Dynamic imports are always typed as `any`
  const importedPluginConfiguration: { [exportName: string]: Linter.Config; } = await import(new URL(pluginConfigurationFile, pluginConfigurationDirectoryUrl).toString())
  const firstNamedConfig = Object.keys(importedPluginConfiguration).find((namedExport) => {
    return namedExport.endsWith('Config')
  })

  if (firstNamedConfig === undefined) {
    throw new Error(`no named export of a config found in ${pluginConfigurationFile}`)
  }

  return [pluginConfigurationFile, importedPluginConfiguration[firstNamedConfig]]
}

function getConsistentAcrossConfigurationsPluginEntry(pluginName: PluginName, pluginConfigurationEntries: PluginConfigurationEntry[]) {
  const [firstPluginConfigurationEntry, ...otherPluginConfigurationEntries] = pluginConfigurationEntries

  const firstPluginEntry = getValidPluginEntry(pluginName, firstPluginConfigurationEntry)

  let previousPluginEntry = firstPluginEntry

  for (const [pluginFilename, pluginConfiguration] of otherPluginConfigurationEntries) {
    const currentPluginEntry = getValidPluginEntry(pluginName, [pluginFilename, pluginConfiguration])

    try {
      assertExpectedPluginEntry(currentPluginEntry, previousPluginEntry)
    } catch (error) {
      if (error instanceof Error) {
        throw new InconsistentPluginEntryError(`inconsistent plugin entry for plugin ${pluginName} in ${pluginFilename}`, { cause: error })
      }

      throw new Error(`unexpected error while getting consistent plugin entry for plugin ${pluginName} in ${pluginFilename}`, { cause: error })
    }

    previousPluginEntry = currentPluginEntry
  }

  return firstPluginEntry
}

function getValidPluginEntry(pluginName: PluginName, [pluginFilename, pluginConfiguration]: PluginConfigurationEntry): [PluginPrefix, ESLintPluginWithRule] {
  const pluginConfigurationPluginMap = pluginConfiguration.plugins ?? { '': pluginName === 'eslint' ? getEslintPseudoPlugin() : undefined }
  const pluginEntries = objectEntries(pluginConfigurationPluginMap)
  const [firstPluginEntry] = pluginEntries
  const [pluginPrefix, pluginInstance] = firstPluginEntry

  try {
    if (pluginEntries.length > EXPECTED_PLUGIN_IN_CONFIGURATION_COUNT) {
      throw new MultiplePluginsDefinedError('')
    }

    assertIsPluginWithRules(pluginInstance)
  } catch (error) {
    if (error instanceof Error) {
      throw new InvalidPluginEntryError(`invalid plugin entry for plugin ${pluginName} in ${pluginFilename}`, { cause: error })
    }

    throw new Error(`unexpected error while validating plugin entry for plugin ${pluginName} in ${pluginFilename}`, { cause: error })
  }

  return [pluginPrefix, pluginInstance]
}

function assertExpectedPluginEntry([pluginPrefix, pluginInstance]: PluginEntry, [expectedPluginPrefix, expectedPluginInstance]: PluginEntry) {
  if (expectedPluginPrefix !== pluginPrefix) {
    throw new InconsistentPluginPrefixError('')
  }

  if (expectedPluginInstance !== pluginInstance) {
    throw new InconsistentPluginInstanceError('')
  }
}

function assertIsPluginWithRules(potentialPluginInstance: ESLint.Plugin | undefined): asserts potentialPluginInstance is ESLintPluginWithRule {
  if (potentialPluginInstance?.rules === undefined) {
    throw new NoRulesFoundInPluginError('')
  }
}

function getConfiguredPluginRuleSet(pluginConfigurationEntries: PluginConfigurationEntry[], pluginPrefix: PluginPrefix) {
  const ruleSet = new Set<RuleId>()

  for (const [, pluginConfiguration] of pluginConfigurationEntries) {
    for (const ruleId of objectKeys(pluginConfiguration.rules ?? {})) {
      // Remove other plugin rule overwrites
      if (isRuleIdFromPlugin(ruleId, pluginPrefix)) {
        ruleSet.add(ruleId)
      }
    }
  }

  return ruleSet
}

function getEslintPseudoPlugin() {
  if (!ESLint.defaultConfig[0]?.plugins?.['@']) {
    throw new Error('pseudo plugin from ESLint default config not found')
  }

  return {
    ...ESLint.defaultConfig[0].plugins['@'],
    rules: getEslintCoreRules(),
  }
}

function getEslintCoreRules() {
  const coreRuleDefinitions: { [key: string]: Rule.RuleModule; } = {}

  // eslint-disable-next-line @typescript-eslint/no-deprecated -- Currently the only way to get the core rules
  for (const [ruleId, rule] of builtinRules) {
    coreRuleDefinitions[ruleId] = rule
  }

  return coreRuleDefinitions
}

/* eslint-enable */
