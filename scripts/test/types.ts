/* eslint-disable no-use-before-define -- TODO: fix the eslint configuration for scripts */

import type { URL } from 'node:url'

import type { ESLint, Linter } from 'eslint'
import type { SetRequired/* , Tagged */ } from 'type-fest'

type Config = {
  pluginConfigurationsDirectoryUrl: URL;
}

type ESLintPluginWithRule = SetRequired<ESLint.Plugin, 'rules'>
type PluginChangesDescriptor = {
  absentConfiguredRuleNames: RuleName[];
  deprecatedRuleNames: RuleId[];
  notConfiguredRuleNames: RuleName[];
  prefix: PluginPrefix;
  ruleConfigurationChanges: RuleId[];
}
type PluginConfigurationEntry = [PluginFilename, Linter.Config]
type PluginDescriptor = {
  configurationEntries: PluginConfigurationEntry[];
  configuredRuleSet: Set<RuleId>;
  instance: ESLintPluginWithRule;
  prefix: PluginPrefix;
}

type PluginEntry = [PluginPrefix, ESLint.Plugin]
type PluginFilename = string

// type PluginName = Tagged<string, 'PluginName'>
// type PluginFilename = Tagged<string, 'PluginFilename'>
// type PluginPrefix = Tagged<string, 'PluginPrefix'>

type PluginName = string
type PluginPrefix = string

type RuleId = `${PluginPrefix}/${RuleName}`

type RuleName = string

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
  RuleId,
  RuleName,
}

/* eslint-enable */
