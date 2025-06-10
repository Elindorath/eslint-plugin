/* eslint-disable perfectionist/sort-modules -- Temporary disabled to avoid unnecessary noise */

import { objectEntries, objectKeys } from './utilities/object.ts'

import type { Linter, Rule } from 'eslint'
import type { Writable } from 'type-fest'

import type { PluginConfigurationEntry, PluginDescriptor, PluginPrefix, RuleId, RuleName } from './types.ts'
import type { JSONSchema4 } from 'json-schema'
import { isObject } from 'is-what'


export function getPluginChangesDescriptors(pluginDescriptors: PluginDescriptor[]) {
  const pluginChangesDescriptors = []

  for (const pluginDescriptor of pluginDescriptors) {
    pluginChangesDescriptors.push(getPluginChangesDescriptor(pluginDescriptor))
  }

  return pluginChangesDescriptors
}

function getPluginChangesDescriptor(pluginDescriptor: PluginDescriptor) {
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
  const ruleConfigurationChanges = getRuleConfigurationChanges(pluginDescriptor.instance.rules, pluginDescriptor.configurationEntries, pluginDescriptor.prefix)

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

function getRuleIdFromName(ruleName: RuleName, pluginPrefix: PluginPrefix): RuleId {
  return `${pluginPrefix}/${ruleName}`
}

function getRuleNameFromId(ruleId: RuleId, pluginPrefix: PluginPrefix): RuleName {
  return ruleId.replace(`${pluginPrefix}/`, '')
}

function getRuleConfigurationChanges(pluginRules: { [key: RuleName]: Rule.RuleModule; }, configurationEntries: PluginConfigurationEntry[], pluginPrefix: string) {
  for (const [, config] of configurationEntries) {
    if (config.rules === undefined) {
      continue
    }

    for (const [ruleId, ruleConfiguration] of objectEntries(config.rules)) {
      const ruleName = getRuleNameFromId(ruleId as RuleId, pluginPrefix)
      const schema = pluginRules[ruleName].meta?.schema

      if (schema === undefined || schema === false) {
        console.log(`Schema of rule ${ruleId} is ${schema}`)
        continue
      }

      if (ruleConfiguration === undefined) {
        console.log(`No configuration for rule ${ruleId}`)
        continue
      }

      if (pluginPrefix === 'sonarjs' && ruleName === 'regex-complexity') {
        console.log(JSON.stringify(pluginRules[ruleName].meta?.schema, undefined, 2))
      }

      analyzeSchema(schema, ruleConfiguration, ruleId as RuleId)
    }
  }

  return []
}

function analyzeSchema(ruleSchema: JSONSchema4 | JSONSchema4[], ruleConfiguration: Linter.RuleEntry, ruleId: RuleId) {
  if (Array.isArray(ruleSchema)) {
    console.log(`Schema array is unsupported for rule ${ruleId}`)

    return ''
  }

  if (Array.isArray(ruleSchema.items)) {
    const configSchema = ruleSchema.items[0]

    if (configSchema.type === 'object') {
      if (Array.isArray(ruleConfiguration)) {
        const [, ruleConfigurationWithoutSeverity] = ruleConfiguration

        if (ruleConfigurationWithoutSeverity === undefined) {
          return ruleId
        }

        if (isObject(ruleConfigurationWithoutSeverity)) {

        }
      }
    }
  }
}

function asWritableArray<T>(readonlyArray?: readonly T[]): Writable<T[]> | undefined {
  if (readonlyArray === undefined) {
    return undefined
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion -- We specifically want to narrow down this type
  return readonlyArray as Writable<T[]>
}

/* eslint-enable */
