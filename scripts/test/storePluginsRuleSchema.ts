/* eslint-disable unicorn/filename-case, require-await -- Temporary disabled to avoid unnecessary noise */

import { URL } from 'node:url'

import fs from 'fs-extra'

import { config } from './config.ts'

import type { PluginRuleSchemaDescriptor } from './types.ts'

export async function storePluginsRuleSchema(pluginRuleSchemaDescriptors: PluginRuleSchemaDescriptor[]) {
  const promises = []

  for (const pluginRuleSchemaDescriptor of pluginRuleSchemaDescriptors) {
    for (const [ruleName, ruleSchema] of pluginRuleSchemaDescriptor.ruleSchemaEntries) {
      const ruleSchemaUrl = new URL(`${pluginRuleSchemaDescriptor.pluginName}/${escapeRuleName(ruleName)}.json`, config.pluginRulesSchemaDirectoryUrl)

      promises.push(fs.outputJson(ruleSchemaUrl.pathname, ruleSchema ?? {}, {
        spaces: 2,
      }))
    }
  }

  return Promise.all(promises)
}

function escapeRuleName(ruleName: string) {
  return ruleName.replaceAll('/', '_')
}

/* eslint-enable */
