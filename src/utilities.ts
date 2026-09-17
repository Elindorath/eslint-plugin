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

type RuleOptionOverride = typeof REMOVE | RuleOption

type RuleSeverityAndOptions<Options extends RuleOption[] = RuleOption[]> = [Linter.RuleSeverity, ...Options]


export {
  buildPrefixedRulesFromConfig,
  getRuleConfig,
  getRuleConfigOverride,
  overrideBaseConfigRule,
  REMOVE,
  replaceConflictingRule,
}

/**
 * Deletes the property it is given as a value for, in an object option of `getRuleConfigOverride`.
 * Useful when the overriding plugin doesn't support an option the overridden one carries.
 */
const REMOVE = Symbol('remove')

function buildPrefixedRulesFromConfig(prefix: string, rules: string[], config: FixedLinterConfig) {
  return rules.reduce<Linter.Config>((agg, rule) => {
    return {
      ...agg,
      [`${prefix}/${rule}`]: getRuleConfig(rule, config),
      [rule]: [OFF],
    }
  }, {})
}

function getRuleConfig<RuleId extends string, Rules extends FixedRulesRecord>(rule: RuleId, config: FixedLinterConfig<Rules>) {
  const formattedConfigName = (config.name === undefined || !config.name) ? '' : ` ${config.name}`

  if (!config.rules) {
    throw new TypeError(`config${formattedConfigName} has no rules`)
  }

  if (!Object.hasOwn(config.rules, rule)) {
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
  ...optionsOverride: Array<RuleOptionOverride | undefined>
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

function mergeObjectRuleOption(ruleOption: UnknownRecord, optionOverride: UnknownRecord) {
  const mergedEntries = Object.entries({
    ...ruleOption,
    ...optionOverride,
  }).filter(([, value]) => {
    return value !== REMOVE
  })

  return Object.fromEntries(mergedEntries)
}

function overrideBaseConfigRule(ruleId: string, ...optionsOverride: Array<RuleOptionOverride | undefined>) {
  const [, ...ruleIdRest] = ruleId.split(RULE_ID_SPLITTER)
  const ruleName = ruleIdRest.join(RULE_ID_SPLITTER)

  return {
    [ruleId]: getRuleConfigOverride(ruleName, eslintVanillaConfig, ...optionsOverride),
    [ruleName]: [OFF],
  }
}

function overrideRuleOption(ruleOption: RuleOption, optionOverride?: RuleOptionOverride) {
  if (optionOverride === undefined) {
    return ruleOption
  }

  if (isPlainObject(ruleOption) && isPlainObject(optionOverride)) {
    return mergeObjectRuleOption(ruleOption, optionOverride)
  }

  if (isArray(ruleOption) && isArray(optionOverride)) {
    return [
      ...ruleOption,
      ...optionOverride,
    ]
  }

  if (optionOverride !== REMOVE && isPrimitive(ruleOption) && isPrimitive(optionOverride)) {
    return optionOverride
  }

  throw new TypeError(`config overrides don't match the original rule configs, and ${REMOVE.toString()} only applies to a property of an object option`)
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
