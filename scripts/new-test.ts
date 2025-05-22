#! /usr/bin/env -S yarn tsx

/* eslint-disable no-use-before-define, require-await, no-unsanitized/method, unicorn/no-instanceof-builtins -- TODO: fix the eslint configuration for scripts */

/* eslint-disable max-depth, max-statements, perfectionist/sort-modules, sonarjs/prefer-immediate-return -- Temporary disabled to avoid unnecessary noise */

import { readdir } from 'node:fs/promises'
import process from 'node:process'
import { URL } from 'node:url'

import { ESLint } from 'eslint'

import type { Linter, Rule } from 'eslint'
import type { SetRequired, Tagged, Writable, WritableDeep } from 'type-fest'

/**
 * Get the list of configured plugins from the directory plugins
 * For each configured plugin
 *   Get the plugin prefix: string used to prefix all rules from the plugin
 *   Get the plugin instance: the plugin object
 *   Get the configured rule list: the list of all the rules configured from the plugin
 *   Get the configurations map: an object mapping filename with its exported configuration
 *   Build an object with the following shape:
 *     { pluginPrefix, pluginInstance, configuredPluginRuleSet, configurations: { [fileName]: configuration } }
 *   Detect new rules by comparing the configuredRules with the rules found in pluginInstance
 *   Detect deprecated rules usage by comparing the configuredRules with the rules found in pluginInstance
 *   Detect removed rules usage by comparing the configuredRules with the rules found in pluginInstance
 *   For each configurations
 *     For each rules in configuration
 *       Validate configuration from rule schema
 *       Detect new optional configuration options (Left TODO:)
 */

type ESLintPluginWithRule = SetRequired<ESLint.Plugin, 'rules'>

type PluginName = string
type PluginFilename = string
type PluginPrefix = string

type RuleName = string
type RuleId = `${PluginPrefix}/${RuleName}`

// type PluginName = Tagged<string, 'PluginName'>
// type PluginFilename = Tagged<string, 'PluginFilename'>
// type PluginPrefix = Tagged<string, 'PluginPrefix'>

type PluginEntry = [PluginPrefix, ESLint.Plugin]
type PluginConfigurationEntry = [PluginFilename, Linter.Config]

type PluginDescriptor = {
  configurationEntries: PluginConfigurationEntry[];
  configuredRuleSet: Set<RuleId>;
  instance: ESLintPluginWithRule;
  prefix: PluginPrefix;
}

type Config = {
  pluginConfigurationsDirectoryUrl: URL;
}

/* ----- Utils ----- */

type Cast<TestedType, CastedType> = TestedType extends CastedType ? TestedType : CastedType

type ArrayElement<ArrayType> = ArrayType extends ReadonlyArray<infer Type>
  ? Type
  : never

type FromEntries<Type> = Type extends Array<[infer InferredKey, unknown]>
  ? { [Key in Cast<InferredKey, string>]: Extract<ArrayElement<Type>, [Key, unknown]>[1] }
  : { [Key in string]: unknown }

type ObjectKeys<T extends object> = `${Exclude<keyof T, symbol>}`

const objectFromEntries = Object.fromEntries as <Type>(entries: Type) => FromEntries<WritableDeep<Type>>

const objectEntries = Object.entries as <Type extends object>(object: Type) => Array<{
  [Key in keyof Type]: [Key, Type[Key]];
}[keyof Type]>

const objectKeys = Object.keys as <Type extends object>(object: Type) => Array<ObjectKeys<Type>>

/* ----- End utils ----- */

class InconsistentPluginEntryError extends Error {

  public constructor(message: string, options: { cause: Error; }) {
    super(message, options)
    this.name = 'InconsistentPluginEntryError'
  }

}

class InconsistentPluginPrefixError extends Error {

  public constructor(message: string) {
    super(message)
    this.name = 'InconsistentPluginPrefixError'
  }

}

class InconsistentPluginInstanceError extends Error {

  public constructor(message: string) {
    super(message)
    this.name = 'InconsistentPluginInstanceError'
  }

}

class InvalidPluginEntryError extends Error {

  public constructor(message: string, options: { cause: Error; }) {
    super(message, options)
    this.name = 'InvalidPluginEntryError'
  }

}

class MultiplePluginsDefinedError extends Error {

  public constructor(message: string) {
    super(message)
    this.name = 'MultiplePluginsDefinedError'
  }

}

class NoRulesFoundInPluginError extends Error {

  public constructor(message: string) {
    super(message)
    this.name = 'NoRulesFoundInPluginError'
  }

}

const EXPECTED_PLUGIN_IN_CONFIGURATION_COUNT = 1

const config: Config = {
  pluginConfigurationsDirectoryUrl: new URL('../src/configs/plugins/', import.meta.url),
}

try {
  const results = await main()

  console.log(results)
} catch (error) {
  console.log(error)

  process.exitCode = 1
}

async function main() {
  const installedPluginNames = await getInstalledPluginList()

  const pluginDescriptors = await getPluginDescriptors(installedPluginNames)

  const pluginChangesDescriptors = getPluginChangesDescriptors(pluginDescriptors)

  return pluginChangesDescriptors
}

async function getInstalledPluginList(): Promise<PluginName[]> {
  const configuredPluginNames = await readdir(config.pluginConfigurationsDirectoryUrl)

  return configuredPluginNames
}

async function getPluginDescriptors(pluginNames: PluginName[]) {
  const promises: Array<Promise<PluginDescriptor>> = []

  for (const pluginName of pluginNames) {
    promises.push(getPluginDescriptor(pluginName))
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
  const firstNamedConfig = Object.keys(importedPluginConfiguration).find((namedExport) => namedExport.endsWith('Config'))

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

function isRuleIdFromPlugin(potentialRuleId: string, pluginPrefix: PluginPrefix): potentialRuleId is RuleId {
  return potentialRuleId.startsWith(`${pluginPrefix}/`)
}

function getRuleIdFromName(ruleName: RuleName, pluginPrefix: PluginPrefix): RuleId {
  return `${pluginPrefix}/${ruleName}`
}

function getRuleNameFromId(ruleId: RuleId, pluginPrefix: PluginPrefix): RuleName {
  return ruleId.replace(`${pluginPrefix}/`, '')
}

function getEslintPseudoPlugin() {
  if (!ESLint.defaultConfig[0]?.plugins?.['@']) {
    throw new Error('pseudo plugin from ESLint default config not found')
  }

  return ESLint.defaultConfig[0].plugins['@']
}

function getPluginChangesDescriptors(pluginDescriptors: PluginDescriptor[]) {
  const pluginChangesDescriptors = []

  for (const pluginDescriptor of pluginDescriptors) {
    pluginChangesDescriptors.push(getPluginChangesDescriptor(pluginDescriptor))
  }

  return pluginChangesDescriptors
}

function getPluginChangesDescriptor(pluginDescriptor: PluginDescriptor) {
  const ruleNames = objectKeys(pluginDescriptor.instance.rules)

  const deprecatedRuleMap = getDeprecatedRuleMap(objectEntries(pluginDescriptor.instance.rules), pluginDescriptor.prefix)

  const deprecatedConfiguredRuleNames = [...pluginDescriptor.configuredRuleSet].filter((ruleName) => deprecatedRuleMap.has(ruleName))
  const noDeprecatedRuleNames = ruleNames.filter((ruleName) => !deprecatedRuleMap.has(ruleName))

  const notConfiguredRuleNames = getNotConfiguredRuleNames(noDeprecatedRuleNames, pluginDescriptor.configuredRuleSet, pluginDescriptor.prefix)
  const absentConfiguredRuleNames = getAbsentConfiguredRuleNames(pluginDescriptor.instance.rules, pluginDescriptor.configuredRuleSet, pluginDescriptor.prefix)
  const ruleConfigurationChanges = getRuleConfigurationChanges()

  return {
    absentConfiguredRuleNames,
    deprecatedRuleNames: deprecatedConfiguredRuleNames,
    notConfiguredRuleNames,
    prefix: pluginDescriptor.prefix,
    ruleConfigurationChanges,
  }
}

type ReplacedBy = RuleId | RuleId[] | undefined

function getDeprecatedRuleMap(ruleEntries: Array<[RuleName, Rule.RuleModule]>, pluginPrefix: PluginPrefix): Map<RuleName, ReplacedBy> {
  const deprecatedRuleMap = new Map<RuleName, ReplacedBy>()

  for (const [ruleName, rule] of ruleEntries) {
    if (rule.meta?.deprecated) {
      deprecatedRuleMap.set(ruleName, getReplacedBy(rule, pluginPrefix))
    }
  }

  return deprecatedRuleMap
}

function getReplacedBy(rule: Rule.RuleModule, pluginPrefix: PluginPrefix): RuleId[] | undefined {
  const deprecatedData = rule.meta?.deprecated

  if (typeof deprecatedData === 'boolean') {
    return getOldReplacedBy(rule)
  }

  if (deprecatedData !== undefined) {
    return deprecatedData.replacedBy?.map(({ plugin, rule }) => {
      if (plugin) {
        return `${plugin.name}/${rule?.name}`
      }

      return `${pluginPrefix}/${rule?.name}`
    })
  }
}

/**
 * As of Typescript v5.8.3, `Array.isArray` can't narrow down `readonly Array<any>`.
 * We use `Writable` to remove the `readonly` modifier
 * @see: https://github.com/microsoft/TypeScript/issues/17002
 */
function getOldReplacedBy(rule: Rule.RuleModule) {
  const oldReplaceBy = rule.meta?.replacedBy as Writable<Rule.RuleMetaData['replacedBy']> | undefined

  return Array.isArray(oldReplaceBy) ? [...oldReplaceBy] : oldReplaceBy
}

function getNotConfiguredRuleNames(pluginRuleNames: string[], configuredRuleSet: Set<RuleId>, pluginPrefix: PluginPrefix): RuleName[] {
  const notConfiguredRuleNames = []

  for (const pluginRuleName of pluginRuleNames) {
    if (!configuredRuleSet.has(`${pluginPrefix}/${pluginRuleName}`)) {
      notConfiguredRuleNames.push(pluginRuleName)
    }
  }

  return notConfiguredRuleNames
}

function getAbsentConfiguredRuleNames(pluginRules: { [key: RuleName]: Rule.RuleModule; }, configuredRuleSet: Set<RuleId>, pluginPrefix: string): RuleName[] {
  const absentConfiguredRuleNames = []

  for (const ruleId of configuredRuleSet.keys()) {
    const ruleName = getRuleNameFromId(ruleId, pluginPrefix)

    if (!(ruleName in pluginRules)) {
      absentConfiguredRuleNames.push(ruleName)
    }
  }

  return absentConfiguredRuleNames
}

function getRuleConfigurationChanges() {
  return []
}

/* eslint-enable */
