/* eslint-disable unicorn/filename-case -- Temporary disabled to avoid unnecessary noise */

import path from 'node:path'
import { URL } from 'node:url'

import fs from 'fs-extra'

import { config } from './config.ts'

import type {
  PluginName,
  PluginRuleSchemaDescriptor,
  RuleName,
  RuleSchemaEntry,
} from './types.ts'

export async function readPluginRuleSchemas(pluginName: PluginName): Promise<PluginRuleSchemaDescriptor> {
  const ruleSchemaDescriptor: PluginRuleSchemaDescriptor = {
    pluginName,
    ruleSchemaEntries: [],
  }
  const pluginRuleSchemasUrl = new URL(`${pluginName}/`, config.pluginRulesSchemaDirectoryUrl)
  const promises = []

  const ruleSchemaFileNames = await fs.readdir(pluginRuleSchemasUrl.pathname)

  for (const ruleSchemaFileName of ruleSchemaFileNames) {
    promises.push(readPluginRuleSchema(pluginRuleSchemasUrl, ruleSchemaFileName))
  }

  ruleSchemaDescriptor.ruleSchemaEntries = await Promise.all(promises)

  return ruleSchemaDescriptor
}

async function readPluginRuleSchema(pluginRuleSchemasUrl: URL, ruleSchemaFileName: string): Promise<RuleSchemaEntry> {
  const ruleName: RuleName = unescapeRuleName(path.basename(ruleSchemaFileName, '.json'))
  const ruleSchemaUrl = new URL(ruleSchemaFileName, pluginRuleSchemasUrl)
  // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion -- Casting here as it would be hard to correctly type guard
  const ruleSchema = await fs.readJson(ruleSchemaUrl.pathname) as RuleSchemaEntry

  return [ruleName, ruleSchema]
}

function unescapeRuleName(ruleName: string) {
  return ruleName.replaceAll('_', '/')
}

/* eslint-enable */
