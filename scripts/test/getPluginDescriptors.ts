/* eslint-disable import-x/max-dependencies, require-await, no-unsanitized/method -- TODO: fix the eslint configuration for scripts */

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

import type { Linter } from 'eslint'

import type {
  ESLintPluginWithRule,
  PluginConfigEntry,
  PluginDescriptor,
  PluginEntry,
  PluginFilename,
  PluginName,
  PluginPrefix,
  RuleId,
} from './types.ts'


const EXPECTED_PLUGIN_IN_CONFIGURATION_COUNT = 1

export async function getPluginDescriptors(pluginNames: PluginName[]) {
  const promises: Array<Promise<PluginDescriptor>> = Array.from(pluginNames, async (pluginName) => {
    return getPluginDescriptor(pluginName)
  })

  return Promise.all(promises)
}

async function getPluginDescriptor(pluginName: PluginName): Promise<PluginDescriptor> {
  const pluginConfigDirectoryUrl = new URL(`${pluginName}/`, config.pluginConfigurationsDirectoryUrl)

  const pluginConfigFileNames = await readdir(pluginConfigDirectoryUrl)

  const pluginConfigEntries = await getPluginConfigEntries(pluginConfigFileNames, pluginConfigDirectoryUrl)

  const [prefix, instance] = getConsistentAcrossConfigurationsPluginEntry(pluginName, pluginConfigEntries)
  const configuredRuleSet = getConfiguredPluginRuleSet(pluginConfigEntries, prefix)

  return {
    name: pluginName,
    configEntries: pluginConfigEntries,
    configuredRuleSet,
    instance,
    prefix,
  }
}

async function getPluginConfigEntries(pluginConfigFileNames: PluginFilename[], pluginConfigDirectoryUrl: URL): Promise<PluginConfigEntry[]> {
  const pluginConfigEntryPromises: Array<Promise<[string, Linter.Config]>> = []

  for (const pluginConfigFile of pluginConfigFileNames) {
    if (pluginConfigFile !== '_compat.ts') {
      pluginConfigEntryPromises.push(getPluginConfigFile(pluginConfigFile, pluginConfigDirectoryUrl))
    }
  }

  return Promise.all(pluginConfigEntryPromises)
}

async function getPluginConfigFile(pluginConfigFile: PluginFilename, pluginConfigDirectoryUrl: URL): Promise<PluginConfigEntry> {
  const pluginConfigUrl = new URL(pluginConfigFile, pluginConfigDirectoryUrl)
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- Dynamic imports are always typed as `any`
  const importedPluginConfig: { [exportName: string]: Linter.Config; } = await import(pluginConfigUrl.href)
  const firstNamedConfig = Object.keys(importedPluginConfig).find((namedExport) => {
    return namedExport.endsWith('Config')
  })

  if (firstNamedConfig === undefined) {
    throw new Error(`no named export of a config found in ${pluginConfigFile}`)
  }

  return [pluginConfigFile, importedPluginConfig[firstNamedConfig]]
}

function getConsistentAcrossConfigurationsPluginEntry(pluginName: PluginName, pluginConfigEntries: PluginConfigEntry[]) {
  const [firstPluginConfigEntry, ...otherPluginConfigEntries] = pluginConfigEntries

  const firstPluginEntry = getValidPluginEntry(pluginName, firstPluginConfigEntry)

  let previousPluginEntry = firstPluginEntry

  for (const [pluginFilename, pluginConfig] of otherPluginConfigEntries) {
    const currentPluginEntry = getValidPluginEntry(pluginName, [pluginFilename, pluginConfig])

    try {
      assertExpectedPluginEntry(currentPluginEntry, previousPluginEntry)
    } catch (error) {
      // eslint-disable-next-line no-use-extend-native/no-use-extend-native -- `Error.isError` is ES2025, the rule's builtin list predates it
      if (Error.isError(error)) {
        throw new InconsistentPluginEntryError(`inconsistent plugin entry for plugin ${pluginName} in ${pluginFilename}`, { cause: error })
      }

      throw new Error(`unexpected error while getting consistent plugin entry for plugin ${pluginName} in ${pluginFilename}`, { cause: error })
    }

    previousPluginEntry = currentPluginEntry
  }

  return firstPluginEntry
}

function getValidPluginEntry(pluginName: PluginName, [pluginFilename, pluginConfig]: PluginConfigEntry): [PluginPrefix, ESLintPluginWithRule] {
  const pluginConfigPluginMap = pluginConfig.plugins ?? { '': pluginName === 'eslint' ? getEslintPseudoPlugin() : undefined }
  const pluginEntries = objectEntries(pluginConfigPluginMap)
  const [firstPluginEntry] = pluginEntries
  const [pluginPrefix, pluginInstance] = firstPluginEntry

  try {
    assertSinglePluginDefined(pluginEntries)
    assertIsPluginWithRules(pluginInstance)
  } catch (error) {
    // eslint-disable-next-line no-use-extend-native/no-use-extend-native -- `Error.isError` is ES2025, the rule's builtin list predates it
    if (Error.isError(error)) {
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

function assertSinglePluginDefined(pluginEntries: unknown[]): void {
  if (pluginEntries.length > EXPECTED_PLUGIN_IN_CONFIGURATION_COUNT) {
    throw new MultiplePluginsDefinedError('')
  }
}

function assertIsPluginWithRules(potentialPluginInstance: ESLint.Plugin | undefined): asserts potentialPluginInstance is ESLintPluginWithRule {
  if (potentialPluginInstance?.rules === undefined) {
    throw new NoRulesFoundInPluginError('')
  }
}

function getConfiguredPluginRuleSet(pluginConfigEntries: PluginConfigEntry[], pluginPrefix: PluginPrefix) {
  const ruleSet = new Set<RuleId>()

  for (const [, pluginConfig] of pluginConfigEntries) {
    const rules = pluginConfig.rules ?? {}

    for (const ruleId of objectKeys(rules)) {
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
  // eslint-disable-next-line @typescript-eslint/no-deprecated -- Currently the only way to get the core rules
  return Object.fromEntries(builtinRules)
}

/* eslint-enable */
