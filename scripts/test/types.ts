/* eslint-disable no-use-before-define -- TODO: fix the eslint configuration for scripts */

import type { URL } from 'node:url'

import type { ESLint, Linter } from 'eslint'
import type { JSONSchema4 } from 'json-schema'
import type { SetRequired/* , Tagged */ } from 'type-fest'
import type { IChange } from 'json-diff-ts'

type Config = {
  pluginConfigurationsDirectoryUrl: URL;
  pluginRulesSchemaDirectoryUrl: URL;
}


type ESLintPluginWithRule = SetRequired<ESLint.Plugin, 'rules'>
type PluginChangesDescriptor = {
  absentConfiguredRuleNames: RuleName[];
  deprecatedRuleNames: RuleId[];
  notConfiguredRuleNames: RuleName[];
  prefix: PluginPrefix;
  ruleConfigurationChanges: { [key: RuleName]: IChange[]; };
}

type PluginConfigurationEntry = [PluginFilename, Linter.Config]
type PluginDescriptor = {
  configurationEntries: PluginConfigurationEntry[];
  configuredRuleSet: Set<RuleId>;
  instance: ESLintPluginWithRule;
  name: PluginName;
  prefix: PluginPrefix;
}
type PluginEntry = [PluginPrefix, ESLint.Plugin]
type PluginFilename = string

type PluginName = string
type PluginPrefix = string

// type PluginName = Tagged<string, 'PluginName'>
// type PluginFilename = Tagged<string, 'PluginFilename'>
// type PluginPrefix = Tagged<string, 'PluginPrefix'>

type PluginRulesMeta = { [key: RuleName]: RuleSchema; }
type RuleId = `${PluginPrefix}/${RuleName}`

type RuleName = string

type RuleSchema = false | JSONSchema4 | JSONSchema4[] | undefined
type RuleSchemaEntry = [RuleName, RuleSchema]
type PluginRuleSchemaDescriptor = {
  pluginName: PluginName;
  ruleSchemaEntries: RuleSchemaEntry[];
}

export type {
  Config,
  ESLintPluginWithRule,
  PluginChangesDescriptor,
  PluginConfigurationEntry,
  PluginDescriptor,
  PluginEntry,
  PluginFilename,
  PluginName,
  PluginPrefix,
  PluginRuleSchemaDescriptor,
  RuleId,
  RuleName,
  RuleSchemaEntry,
}

/* eslint-enable */
