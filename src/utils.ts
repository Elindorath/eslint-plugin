import { isArray, isPlainObject, isPrimitive } from 'is-what'

import { eslintVanillaConfig } from './configs/plugins/eslint/vanilla.ts'
import { OFF } from './constants.ts'

import type { Linter } from 'eslint'
import type { UnknownArray, UnknownRecord } from 'type-fest'


type FixedLinterConfig<Rules extends FixedRulesRecord = FixedRulesRecord> = Omit<Linter.Config, 'rules'> & {
  rules?: Rules;
}

type FixedRulesRecord = {
  [rule: string]: RuleSeverityAndOptions;
}

type RuleOption = boolean | number | string | UnknownArray | UnknownRecord

type RuleSeverityAndOptions<Options extends RuleOption[] = RuleOption[]> = [Linter.RuleSeverity, ...Options]


export {
  buildPrefixedRulesFromConfig,
  getRuleConfig,
  getRuleConfigOverride,
  overrideBaseConfigRule,
  replaceConflictingRule,
}

function buildPrefixedRulesFromConfig(prefix: string, rules: string[], config: FixedLinterConfig) {
  return rules.reduce<Linter.Config>((agg, rule) => ({
    ...agg,
    [`${prefix}/${rule}`]: getRuleConfig(rule, config),
    [rule]: [OFF],
  }), {})
}

function getRuleConfig<RuleId extends string, Rules extends FixedRulesRecord>(rule: RuleId, config: FixedLinterConfig<Rules>) {
  const formattedConfigName = (config.name === undefined || !config.name) ? '' : ` ${config.name}`

  if (!config.rules) {
    throw new TypeError(`config${formattedConfigName} has no rules`)
  }

  if (!(rule in config.rules)) {
    throw new TypeError(`config${formattedConfigName} has no '${rule}' rule`)
  }

  if (!Array.isArray(config.rules[rule])) {
    throw new TypeError(`${rule} rule is not configured as an array`)
  }

  return config.rules[rule]
}

function getRuleConfigOverride<Rules extends FixedRulesRecord>(
  rule: string,
  config: FixedLinterConfig<Rules>,
  ...optionsOverride: Array<RuleOption | undefined>
): [Linter.RuleSeverity, ...RuleOption[]] {
  const [ruleSeverity, ...ruleOptions] = getRuleConfig(rule, config)
  const finalConfigs: RuleOption[] = []

  for (const [index, ruleOption] of ruleOptions.entries()) {
    const optionOverride = optionsOverride[index]

    finalConfigs[index] = overrideRuleOption(ruleOption, optionOverride)
  }

  return [
    ruleSeverity,
    ...finalConfigs,
  ]
}

const RULE_ID_SPLITTER = '/'

function overrideBaseConfigRule(ruleId: string, ...optionsOverride: Array<RuleOption | undefined>) {
  const [, ...ruleIdRest] = ruleId.split(RULE_ID_SPLITTER)
  const ruleName = ruleIdRest.join(RULE_ID_SPLITTER)

  return {
    [ruleId]: getRuleConfigOverride(ruleName, eslintVanillaConfig, ...optionsOverride),
    [ruleName]: [OFF],
  }
}

function overrideRuleOption(ruleOption: RuleOption, optionOverride?: RuleOption) {
  if (optionOverride === undefined) {
    return ruleOption
  }

  if (isPrimitive(ruleOption) && isPrimitive(optionOverride)) {
    return optionOverride
  }

  if (isArray(ruleOption) && isArray(optionOverride)) {
    return [
      ...ruleOption,
      ...optionOverride,
    ]
  }

  if (isPlainObject(ruleOption) && isPlainObject(optionOverride)) {
    return {
      ...ruleOption,
      ...optionOverride,
    }
  }

  throw new TypeError(`config overrides don't match the original rule configs`)
}

function replaceConflictingRule(ruleId: string, ruleOptions: RuleSeverityAndOptions, conflictingRuleIds: string[]) {
  const conflictingRuleConfigurations = conflictingRuleIds.reduce((partialConflictingRuleConfigurations, conflictingRuleId) => {
    return {
      ...partialConflictingRuleConfigurations,
      [conflictingRuleId]: [OFF],
    }
  }, {})

  return {
    ...conflictingRuleConfigurations,
    [ruleId]: ruleOptions,
  }
}
