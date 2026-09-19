#! /usr/bin/env -S yarn tsx

import process from 'node:process'

import { getInstalledPluginList } from './test/getInstalledPluginList.ts'
import { getPluginDescriptors } from './test/getPluginDescriptors.ts'
import { validateRuleOptions } from './test/validateRuleOptions.ts'

import type { PluginDescriptor } from './test/types.ts'

/**
 * `test-update` compares the schema a rule ships with the schema stored under `artifacts`, so it
 * reports a schema that moved. Neither side is ever confronted with the options configured here,
 * which is what this does. ESLint itself only validates a rule it is about to run, so an option
 * kept for documentation on a rule that is off can contradict its schema indefinitely.
 */

const installedPluginNames = await getInstalledPluginList()
const pluginDescriptors = await getPluginDescriptors(installedPluginNames)

const reports = pluginDescriptors.flatMap((pluginDescriptor) => {
  return getPluginFailureReports(pluginDescriptor)
})

for (const [origin, failures] of reports) {
  console.log(`===== ${origin} =====`)

  for (const failure of failures) {
    console.log(`  ${failure.ruleId}: ${failure.message}`)
  }
}

const failureCount = reports.reduce((count, [, failures]) => {
  return count + failures.length
}, 0)

if (failureCount > 0) {
  console.log(`\n${failureCount} rule configuration(s) contradict the schema of the installed rule`)
  process.exitCode = 1
} else {
  console.log('Every rule configuration matches the schema of the installed rule')
}

function getPluginFailureReports(pluginDescriptor: PluginDescriptor) {
  return pluginDescriptor.configEntries
    .map(([pluginConfigFilename, pluginConfig]) => {
      return [`${pluginDescriptor.name}/${pluginConfigFilename}`, validateRuleOptions(pluginConfig)] as const
    })
    .filter(([, failures]) => {
      return failures.length > 0
    })
}
