#! /usr/bin/env -S yarn tsx

import process from 'node:process'

import { configs } from '../src/configs.ts'

import { getInstalledPluginList } from './test/getInstalledPluginList.ts'
import { getPluginDescriptors } from './test/getPluginDescriptors.ts'
import { getReachableRuleIdSet } from './test/getReachableRuleIdSet.ts'

import type { PluginDescriptor } from './test/types.ts'

/**
 * A rule configured under `src/configs/plugins` only reaches a file if a configuration exported by
 * `src/configs.ts` carries it. One that none of them carries is configured, extracted into
 * `artifacts` and counted by `test-update`, and never applied to anything.
 */

const installedPluginNames = await getInstalledPluginList()
const pluginDescriptors = await getPluginDescriptors(installedPluginNames)
const reachableRuleIdSet = getReachableRuleIdSet(configs)

const unreachableOrigins = pluginDescriptors
  .flatMap((pluginDescriptor) => {
    return getConfiguredRuleOrigins(pluginDescriptor)
  })
  .filter(([ruleId]) => {
    return !reachableRuleIdSet.has(ruleId)
  })

if (unreachableOrigins.length > 0) {
  console.log(`===== Unreachable rules (${unreachableOrigins.length}) =====`)

  for (const [ruleId, origin] of unreachableOrigins) {
    console.log(`  ${ruleId} — configured in ${origin}`)
  }

  process.exitCode = 1
} else {
  console.log('Every configured rule is reachable')
}

function getConfiguredRuleOrigins(pluginDescriptor: PluginDescriptor): Array<[string, string]> {
  return pluginDescriptor.configEntries.flatMap(([pluginConfigFilename, pluginConfig]) => {
    const origin = `${pluginDescriptor.name}/${pluginConfigFilename}`

    return Object.keys(pluginConfig.rules ?? {}).map((ruleId): [string, string] => {
      return [ruleId, origin]
    })
  })
}
