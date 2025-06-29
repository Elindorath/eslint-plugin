#! /usr/bin/env -S yarn tsx

import process from 'node:process'

import fs from 'fs-extra'

import { config } from './test/config.ts'
import { getInstalledPluginList } from './test/getInstalledPluginList.ts'
import { getPluginDescriptors } from './test/getPluginDescriptors.ts'
import { getPluginsRulesMeta } from './test/getPluginsRulesMeta.ts'
import { storePluginsRuleSchema } from './test/storePluginsRuleSchema.ts'

/**
 * Get the list of configured plugins from the directory plugins
 * For each configured plugin:
 *   Get the rules from the plugin
 *   For each rule:
 *     Get the rule meta
 *     Store the rule meta in a file
 */

try {
  await main()
} catch (error) {
  console.log(error)

  process.exitCode = 1
}

async function main() {
  const installedPluginNames = await getInstalledPluginList()

  const pluginDescriptors = await getPluginDescriptors(installedPluginNames)

  const pluginRuleSchemaDescriptors = getPluginsRulesMeta(pluginDescriptors)

  await fs.emptyDir(config.pluginRulesSchemaDirectoryUrl.pathname)

  await storePluginsRuleSchema(pluginRuleSchemaDescriptors)
}
