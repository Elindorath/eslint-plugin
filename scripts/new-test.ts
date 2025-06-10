#! /usr/bin/env -S yarn tsx

/* eslint-disable perfectionist/sort-modules, sonarjs/prefer-immediate-return -- Temporary disabled to avoid unnecessary noise */

import { readdir } from 'node:fs/promises'
import process from 'node:process'

import { config } from './test/config.ts'
import { getPluginChangesDescriptors } from './test/getPluginChangesDescriptors.ts'
import { getPluginDescriptors } from './test/getPluginDescriptors.ts'

import type { PluginName } from './test/types.ts'

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

/* eslint-enable */
