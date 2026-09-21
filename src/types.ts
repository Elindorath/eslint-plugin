import type { Linter } from 'eslint'
import type { Except, UnknownArray, UnknownRecord } from 'type-fest'


type FixedLinterConfig<Rules extends FixedRulesRecord = FixedRulesRecord> = Except<Linter.Config, 'rules'> & {
  rules?: Rules;
}

type FixedRulesRecord = {
  [rule: string]: RuleSeverityAndOptions;
}

type RuleOption = boolean | number | string | UnknownArray | UnknownRecord

type RuleSeverityAndOptions<Options extends RuleOption[] = RuleOption[]> = [Linter.RuleSeverity, ...Options]


export type {
  FixedLinterConfig,
  FixedRulesRecord,
  RuleOption,
  RuleSeverityAndOptions,
}
