/* eslint-disable unicorn/filename-case -- TODO: fix the eslint configuration for scripts */

/* eslint-disable max-statements, perfectionist/sort-modules -- Temporary disabled to avoid unnecessary noise */

import { config } from './config.ts'
import { objectEntries, objectKeys } from './utilities/object.ts'

import type { IChange } from 'json-diff-ts'

import type {
  PluginChangesDescriptor,
} from './types.ts'


export function displayPluginChangesDescriptors(pluginChangesDescriptors: PluginChangesDescriptor[]) {
  let pluginChangesDisplayedCount = 0

  for (const pluginChangesDescriptor of pluginChangesDescriptors) {
    pluginChangesDisplayedCount += displayPluginChangesDescriptor(pluginChangesDescriptor)
  }

  if (pluginChangesDisplayedCount === 0) {
    console.log('Everything seems to be up to date')
  }

  return pluginChangesDisplayedCount
}

function displayPluginChangesDescriptor(pluginChangesDescriptor: PluginChangesDescriptor) {
  const hasRuleConfigurationChanges = objectKeys(pluginChangesDescriptor.ruleConfigurationChanges).length > 0
  const hasSomethingToDisplay = pluginChangesDescriptor.absentConfiguredRuleNames.length > 0
    || pluginChangesDescriptor.deprecatedRuleNames.length > 0
    || pluginChangesDescriptor.notConfiguredRuleNames.length > 0
    || hasRuleConfigurationChanges
  const pluginName = pluginChangesDescriptor.prefix.length > 0
    ? pluginChangesDescriptor.prefix
    : 'eslint'

  if (!hasSomethingToDisplay) {
    return 0
  }

  console.log(`===== ${pluginName} =====`)

  if (pluginChangesDescriptor.absentConfiguredRuleNames.length > 0) {
    console.log('  Configured rules absent from plugin:')

    for (const ruleName of pluginChangesDescriptor.absentConfiguredRuleNames) {
      console.log(`    ${ruleName}`)
    }
  }

  if (pluginChangesDescriptor.deprecatedRuleNames.length > 0) {
    console.log('  Deprecated rules:')

    for (const ruleName of pluginChangesDescriptor.deprecatedRuleNames) {
      console.log(`    ${ruleName}`)
    }
  }

  if (pluginChangesDescriptor.notConfiguredRuleNames.length > 0) {
    console.log('  Not configured rules:')

    for (const ruleName of pluginChangesDescriptor.notConfiguredRuleNames) {
      console.log(`    ${ruleName}`)
    }
  }

  if (hasRuleConfigurationChanges) {
    console.log('  Rule configuration changes:')

    for (const [ruleName, changes] of objectEntries(pluginChangesDescriptor.ruleConfigurationChanges)) {
      console.log(`    ${ruleName}:`)

      displayRuleChanges(changes)
    }
  }

  console.log('')

  return 1
}

function displayRuleChanges(changes: IChange[]) {
  for (const change of changes) {
    displayRuleChange(change)
  }
}

function displayRuleChange(change: IChange) {
  const changeAsJsonStrings = JSON.stringify(change, undefined, config.jsonIndentationSpacesCount).split('\n')

  for (const changeAsJsonString of changeAsJsonStrings) {
    console.log(`      ${changeAsJsonString}`)
  }
}

/* eslint-enable */
