import type { URL } from 'node:url'

import type { ESLint, Linter } from 'eslint'
import type { IChange } from 'json-diff-ts'
// eslint-disable-next-line n/no-missing-import -- `json-schema` only exists as the `@types/json-schema` package
import type { JSONSchema4 } from 'json-schema'
import type { SetRequired/* , Tagged */ } from 'type-fest'

type Config = {
  jsonIndentationSpacesCount: number;
  pluginConfigurationsDirectoryUrl: URL;
  pluginRulesSchemaDirectoryUrl: URL;
}


type ESLintPluginWithRule = SetRequired<ESLint.Plugin, 'rules'>
type PluginChangesDescriptor = {
  absentConfiguredRuleNames: RuleName[];
  deprecatedRuleNames: RuleName[];
  notConfiguredRuleNames: RuleName[];
  prefix: PluginPrefix;
  ruleConfigChanges: { [key: RuleName]: IChange[]; };
}

type PluginConfigEntry = [PluginFilename, Linter.Config]
type PluginDescriptor = {
  configEntries: PluginConfigEntry[];
  configuredRuleSet: Set<RuleId>;
  instance: ESLintPluginWithRule;
  name: PluginName;
  prefix: PluginPrefix;
}
type PluginEntry = [PluginPrefix, ESLint.Plugin]
type PluginFilename = string

type PluginName = string
type PluginPrefix = string

// type PluginName = Tagged<string, 'PluginName'> type PluginFilename = Tagged<string, 'PluginFilename'> type PluginPrefix = Tagged<string, 'PluginPrefix'>

type PluginRuleSchemaDescriptor = {
  pluginName: PluginName;
  ruleSchemaEntries: RuleSchemaEntry[];
}
type RuleId = `${PluginPrefix}/${RuleName}`

type RuleName = string

type RuleSchema = false | JSONSchema4 | JSONSchema4[] | undefined
type RuleSchemaEntry = [RuleName, RuleSchema]

export type {
  Config,
  ESLintPluginWithRule,
  PluginChangesDescriptor,
  PluginConfigEntry,
  PluginDescriptor,
  PluginEntry,
  PluginFilename,
  PluginName,
  PluginPrefix,
  PluginRuleSchemaDescriptor,
  RuleId,
  RuleName,
  RuleSchema,
  RuleSchemaEntry,
}

