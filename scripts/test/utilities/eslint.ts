import type { PluginPrefix, RuleId, RuleName } from '../types.ts'

export {
  getRuleIdFromName,
  getRuleNameFromId,
  isRuleIdFromPlugin,
}

function getRuleIdFromName(ruleName: RuleName, pluginPrefix: PluginPrefix): RuleId {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion -- TODO: Fix this when eslint no longer contains core rules
  return pluginPrefix === '' ? ruleName as RuleId : `${pluginPrefix}/${ruleName}`
}

function getRuleNameFromId(ruleId: RuleId, pluginPrefix: PluginPrefix): RuleName {
  return ruleId.replace(`${pluginPrefix}/`, '')
}

function isRuleIdFromPlugin(potentialRuleId: string, pluginPrefix: PluginPrefix): potentialRuleId is RuleId {
  return pluginPrefix === '' || potentialRuleId.startsWith(`${pluginPrefix}/`)
}
