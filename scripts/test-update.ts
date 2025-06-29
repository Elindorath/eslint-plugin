#! /usr/bin/env -S yarn tsx

/* eslint-disable sonarjs/prefer-immediate-return -- Better for debugging */

import process from 'node:process'

import { displayPluginChangesDescriptors } from './test/displayPluginChangesDescriptors.ts'
import { getInstalledPluginList } from './test/getInstalledPluginList.ts'
import { getPluginChangesDescriptors } from './test/getPluginChangesDescriptors.ts'
import { getPluginDescriptors } from './test/getPluginDescriptors.ts'

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

try {
  const pluginChangesDisplayedCount = await main()

  if (pluginChangesDisplayedCount > 0) {
    process.exitCode = 1
  }
} catch (error) {
  console.log(error)

  process.exitCode = 1
}

async function main() {
  const installedPluginNames = await getInstalledPluginList()

  const pluginDescriptors = await getPluginDescriptors(installedPluginNames)

  const pluginChangesDescriptors = await getPluginChangesDescriptors(pluginDescriptors)

  const pluginChangesDisplayedCount = displayPluginChangesDescriptors(pluginChangesDescriptors)

  return pluginChangesDisplayedCount
}

/* eslint-enable */
