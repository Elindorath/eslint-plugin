/* eslint-disable perfectionist/sort-modules, require-await -- Temporary disabled to avoid unnecessary noise */

import { diff } from 'json-diff-ts'

import { getPluginRulesMeta } from './getPluginsRulesMeta.ts'
import { readPluginRuleSchemas } from './readPluginRuleSchemas.ts'
import { getRuleIdFromName, getRuleNameFromId } from './utilities/eslint.ts'
import { objectEntries, objectKeys } from './utilities/object.ts'

import type { Rule } from 'eslint'
import type { IChange } from 'json-diff-ts'
import type { Writable } from 'type-fest'

import type {
  PluginChangesDescriptor,
  PluginDescriptor,
  PluginPrefix,
  RuleId,
  RuleName,
} from './types.ts'


export async function getPluginChangesDescriptors(pluginDescriptors: PluginDescriptor[]) {
  const pluginChangesDescriptorPromises = []

  for (const pluginDescriptor of pluginDescriptors) {
    pluginChangesDescriptorPromises.push(getPluginChangesDescriptor(pluginDescriptor))
  }

  return Promise.all(pluginChangesDescriptorPromises)
}

async function getPluginChangesDescriptor(pluginDescriptor: PluginDescriptor): Promise<PluginChangesDescriptor> {
  const ruleNames = objectKeys(pluginDescriptor.instance.rules)

  const deprecatedRuleMap = getDeprecatedRuleMap(objectEntries(pluginDescriptor.instance.rules), pluginDescriptor.prefix)

  const deprecatedConfiguredRuleNames = [...pluginDescriptor.configuredRuleSet].filter((ruleName) => {
    return deprecatedRuleMap.has(ruleName)
  })
  const noDeprecatedRuleNames = ruleNames.filter((ruleName) => {
    return !deprecatedRuleMap.has(ruleName)
  })

  const notConfiguredRuleNames = getNotConfiguredRuleNames(noDeprecatedRuleNames, pluginDescriptor.configuredRuleSet, pluginDescriptor.prefix)
  const absentConfiguredRuleNames = getAbsentConfiguredRuleNames(pluginDescriptor.instance.rules, pluginDescriptor.configuredRuleSet, pluginDescriptor.prefix)
  const ruleConfigurationChanges = await getRuleConfigurationChanges(pluginDescriptor)

  return {
    absentConfiguredRuleNames,
    deprecatedRuleNames: deprecatedConfiguredRuleNames,
    notConfiguredRuleNames,
    prefix: pluginDescriptor.prefix,
    ruleConfigurationChanges,
  }
}

type ReplacedBy = string | string[] | undefined

function getDeprecatedRuleMap(ruleEntries: Array<[RuleName, Rule.RuleModule]>, pluginPrefix: PluginPrefix): Map<RuleName, ReplacedBy> {
  const deprecatedRuleMap = new Map<RuleName, ReplacedBy>()

  for (const [ruleName, rule] of ruleEntries) {
    if (rule.meta?.deprecated !== undefined && rule.meta.deprecated !== false) {
      deprecatedRuleMap.set(ruleName, getReplacedBy(rule, pluginPrefix))
    }
  }

  return deprecatedRuleMap
}

function getReplacedBy(rule: Rule.RuleModule, pluginPrefix: PluginPrefix): string[] | undefined {
  const deprecatedData = rule.meta?.deprecated

  if (typeof deprecatedData === 'boolean') {
    return getOldReplacedBy(rule)
  }

  if (deprecatedData !== undefined) {
    return deprecatedData.replacedBy?.map(({ plugin: replacedByPlugin, rule: replacedByRule }) => {
      if (replacedByPlugin?.url !== undefined) {
        return replacedByPlugin.url
      }

      if (replacedByRule?.url !== undefined) {
        return replacedByRule.url
      }

      if (replacedByRule?.name !== undefined) {
        return `${replacedByPlugin?.name ?? pluginPrefix}/${replacedByRule.name}`
      }

      if (replacedByPlugin?.name !== undefined) {
        return replacedByPlugin.name
      }

      return 'unknown'
    })
  }

  return deprecatedData
}

/**
 * As of Typescript v5.8.3, `Array.isArray` can't narrow down `readonly Array<any>`.
 * We use `Writable` to remove the `readonly` modifier
 * @see: https://github.com/microsoft/TypeScript/issues/17002
 */
function getOldReplacedBy(rule: Rule.RuleModule) {
  // eslint-disable-next-line @typescript-eslint/no-deprecated -- We specifically want to support deprecated API here
  const oldReplaceBy = asWritableArray(rule.meta?.replacedBy)

  return Array.isArray(oldReplaceBy) ? [...oldReplaceBy] : oldReplaceBy
}

function getNotConfiguredRuleNames(pluginRuleNames: string[], configuredRuleSet: Set<RuleId>, pluginPrefix: PluginPrefix): RuleName[] {
  const notConfiguredRuleNames = []

  for (const pluginRuleName of pluginRuleNames) {
    if (!configuredRuleSet.has(getRuleIdFromName(pluginRuleName, pluginPrefix))) {
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

async function getRuleConfigurationChanges(pluginDescriptor: PluginDescriptor) {
  const storedPluginRuleSchemaDescriptor = await readPluginRuleSchemas(pluginDescriptor.name)
  const pluginRuleSchemaDescriptor = getPluginRulesMeta(pluginDescriptor)
  const pluginRuleSchemaMap = new Map(pluginRuleSchemaDescriptor.ruleSchemaEntries)
  const pluginRuleSchemaChanges: { [key: RuleName]: IChange[]; } = {}

  for (const [storedRuleName, storedRuleSchema] of storedPluginRuleSchemaDescriptor.ruleSchemaEntries) {
    const ruleSchema = pluginRuleSchemaMap.get(storedRuleName)

    if (ruleSchema === undefined) {
      console.log(`Rule ${storedRuleName} is not in the plugin rule schema`)
      continue
    }

    // eslint-disable-next-line unicorn/prefer-structured-clone -- We don't want to deep clone but get ride of undefined values
    const changes = diff(storedRuleSchema, JSON.parse(JSON.stringify(ruleSchema)))

    if (changes.length > 0) {
      pluginRuleSchemaChanges[storedRuleName] = changes
    }
  }

  return pluginRuleSchemaChanges
}

function asWritableArray<T>(readonlyArray?: readonly T[]): Writable<T[]> | undefined {
  if (readonlyArray === undefined) {
    return undefined
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion -- We specifically want to narrow down this type
  return readonlyArray as Writable<T[]>
}

/* eslint-enable */
