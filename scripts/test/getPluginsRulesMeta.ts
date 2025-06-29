/* eslint-disable unicorn/filename-case, perfectionist/sort-modules -- Temporary disabled to avoid unnecessary noise */

import { objectEntries } from './utilities/object.ts'

import type { Rule } from 'eslint'

import type { PluginDescriptor, PluginRuleSchemaDescriptor } from './types.ts'


export {
  getPluginRulesMeta,
  getPluginsRulesMeta,
}

function getPluginsRulesMeta(pluginDescriptors: PluginDescriptor[]) {
  const pluginRuleSchemaDescriptors: PluginRuleSchemaDescriptor[] = []

  for (const pluginDescriptor of pluginDescriptors) {
    pluginRuleSchemaDescriptors.push(getPluginRulesMeta(pluginDescriptor))
  }

  return pluginRuleSchemaDescriptors
}

function getPluginRulesMeta(pluginDescriptor: PluginDescriptor) {
  const pluginRuleSchemaDescriptor: PluginRuleSchemaDescriptor = {
    pluginName: pluginDescriptor.name,
    ruleSchemaEntries: [],
  }

  for (const [ruleName, ruleDefinition] of objectEntries(pluginDescriptor.instance.rules)) {
    pluginRuleSchemaDescriptor.ruleSchemaEntries.push([ruleName, getRuleMeta(ruleDefinition) ?? {}])
  }

  return pluginRuleSchemaDescriptor
}

function getRuleMeta(ruleDefinition: Rule.RuleModule) {
  return ruleDefinition.meta?.schema
}

/* eslint-enable */
