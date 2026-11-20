/* eslint-disable max-statements, perfectionist/sort-modules -- Temporary disabled to avoid unnecessary noise */

import { objectEntries, objectKeys } from './utilities/object.ts'

import type { IAtomOperation } from 'json-diff-ts'

import type {
  PluginChangesDescriptor,
} from './types.ts'


const DISPLAYED_PLUGIN_COUNT = 1


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
  const hasRuleConfigChanges = objectKeys(pluginChangesDescriptor.ruleConfigChanges).length > 0
  const hasSomethingToDisplay = pluginChangesDescriptor.absentConfiguredRuleNames.length > 0
    || pluginChangesDescriptor.deprecatedRuleNames.length > 0
    || pluginChangesDescriptor.notConfiguredRuleNames.length > 0
    || hasRuleConfigChanges

  if (!hasSomethingToDisplay) {
    return 0
  }

  const pluginName = pluginChangesDescriptor.prefix.length > 0
    ? pluginChangesDescriptor.prefix
    : 'eslint'

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

  if (hasRuleConfigChanges) {
    console.log('  Rule configuration changes:')

    for (const [ruleName, changes] of objectEntries(pluginChangesDescriptor.ruleConfigChanges)) {
      console.log(`    ${ruleName}:`)

      displayRuleChanges(changes)
    }
  }

  console.log('')

  return DISPLAYED_PLUGIN_COUNT
}

function displayRuleChanges(operations: IAtomOperation[]) {
  for (const operation of operations) {
    displayRuleChange(operation)
  }
}

function displayRuleChange(operation: IAtomOperation) {
  const values = [
    ...('oldValue' in operation ? [JSON.stringify(operation.oldValue)] : []),
    ...('value' in operation ? [JSON.stringify(operation.value)] : []),
  ]

  console.log(`      ${operation.op} ${operation.path}: ${values.join(' → ')}`)
}

/* eslint-enable */
