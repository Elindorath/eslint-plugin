import { isPlainObject } from 'is-what'

import type { UnknownRecord } from 'type-fest'

import type { FixedLinterConfig, FixedRulesRecord, RuleSeverityAndOptions } from './types.ts'


type CodebaseKnob = {
  format: 'list' | 'map' | 'pattern';
  rules: Array<{ option: string; rule: string; }>;
  settings: Array<{ key: string; namespace: string; }>;
}

type DeclaredKnob = {
  knob: CodebaseKnob;
  value: unknown;
}

/**
 * The names this repository cannot guess: what a codebase calls its own components, hooks and
 * functions. A rule that doesn't know them reports nothing on them, so it looks configured while
 * covering nothing.
 */
type ProjectCodebase = {
  anchorComponents?: string[];
  componentElements?: { [key: string]: string; };
  controlComponents?: string[];
  effectHooks?: string[];
  headingComponents?: string[];
  hooks?: string[];
  imageComponents?: string[];
  inputComponents?: string[];
  invertableComponents?: string[];
  labelAttributes?: string[];
  labelComponents?: string[];
  touchableComponents?: string[];
  translationFunctions?: string[];
}

type Settings = { [key: string]: unknown; }

const COMPONENTS = 'components'
const CONTROL_HAS_ASSOCIATED_LABEL = 'jsx-a11y/control-has-associated-label'
const LABEL_HAS_ASSOCIATED_CONTROL = 'jsx-a11y/label-has-associated-control'
const FIRST_OPTION_INDEX = 1

const CODEBASE_KNOBS: { [key: string]: CodebaseKnob; } = {
  anchorComponents: {
    format: 'list',
    rules: [
      { option: COMPONENTS, rule: 'jsx-a11y/anchor-has-content' },
      { option: COMPONENTS, rule: 'jsx-a11y/anchor-is-valid' },
    ],
    settings: [],
  },
  componentElements: {
    format: 'map',
    rules: [],
    settings: [{ key: COMPONENTS, namespace: 'jsx-a11y' }],
  },
  controlComponents: {
    format: 'list',
    rules: [
      { option: 'controlComponents', rule: CONTROL_HAS_ASSOCIATED_LABEL },
      { option: 'controlComponents', rule: LABEL_HAS_ASSOCIATED_CONTROL },
    ],
    settings: [],
  },
  effectHooks: {
    format: 'pattern',
    rules: [{ option: 'additionalHooks', rule: '@eslint-react/exhaustive-deps' }],
    settings: [{ key: 'additionalEffectHooks', namespace: 'react-hooks' }],
  },
  headingComponents: {
    format: 'list',
    rules: [{ option: COMPONENTS, rule: 'jsx-a11y/heading-has-content' }],
    settings: [],
  },
  hooks: {
    format: 'pattern',
    rules: [{ option: 'additionalHooks', rule: '@eslint-react/rules-of-hooks' }],
    settings: [],
  },
  imageComponents: {
    format: 'list',
    rules: [
      { option: 'img', rule: 'jsx-a11y/alt-text' },
      { option: COMPONENTS, rule: 'jsx-a11y/img-redundant-alt' },
    ],
    settings: [],
  },
  inputComponents: {
    format: 'list',
    rules: [{ option: 'inputComponents', rule: 'jsx-a11y/autocomplete-valid' }],
    settings: [],
  },
  invertableComponents: {
    format: 'list',
    rules: [{ option: 'invertableComponents', rule: 'react-native-a11y/has-valid-accessibility-ignores-invert-colors' }],
    settings: [],
  },
  labelAttributes: {
    format: 'list',
    rules: [
      { option: 'labelAttributes', rule: CONTROL_HAS_ASSOCIATED_LABEL },
      { option: 'labelAttributes', rule: LABEL_HAS_ASSOCIATED_CONTROL },
    ],
    settings: [],
  },
  labelComponents: {
    format: 'list',
    rules: [{ option: 'labelComponents', rule: LABEL_HAS_ASSOCIATED_CONTROL }],
    settings: [],
  },
  touchableComponents: {
    format: 'list',
    rules: [{ option: 'touchables', rule: 'react-native-a11y/has-accessibility-props' }],
    settings: [],
  },
  translationFunctions: {
    format: 'list',
    rules: [
      { option: 'functionNames', rule: 'react-i18n/no-dynamic-translation-keys' },
      { option: 'functionNames', rule: 'react-i18n/no-missing-interpolation-keys' },
    ],
    settings: [],
  },
}

export {
  applyProjectCodebase,
  CODEBASE_KNOBS,
}

export type {
  CodebaseKnob,
  ProjectCodebase,
}

/**
 * Writes the declared names into the rules and settings that read them. A knob replaces the value
 * it targets rather than extending it: the defaults shipped here are guesses at common naming, and
 * a codebase that names its own is authoritative.
 */
function applyProjectCodebase(config: FixedLinterConfig, codebase: ProjectCodebase): FixedLinterConfig {
  const declared = Object.entries(codebase).flatMap((entry) => {
    return toDeclaredKnob(entry)
  })

  return {
    ...config,
    ...config.rules !== undefined && {
      rules: declared.reduce((rules, knob) => {
        return writeKnobRules(rules, knob)
      }, config.rules),
    },
    ...config.settings !== undefined && {
      settings: declared.reduce((settings, knob) => {
        return writeKnobSettings(settings, knob)
      }, config.settings),
    },
  }
}

function toDeclaredKnob([knobName, value]: [string, unknown]): DeclaredKnob[] {
  /*
   * The index signature makes the guard look redundant to the type system, but a declaration may
   * name something this version doesn't expose
   */
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- See comment above
  if (value === undefined || !Object.hasOwn(CODEBASE_KNOBS, knobName)) {
    return []
  }

  const knob = CODEBASE_KNOBS[knobName]

  return [{ knob, value: (knob.format === 'pattern') ? toPattern(value) : value }]
}

// The rules reading these match a regular expression against a callee name
function toPattern(value: unknown): string {
  return (Array.isArray(value) && value.length > 0) ? `(${value.map(String).join('|')})` : ''
}

function toRecord(value: unknown): UnknownRecord | undefined {
  return isPlainObject(value) ? { ...value } : undefined
}

function writeKnobRules(rules: FixedRulesRecord, { knob, value }: DeclaredKnob): FixedRulesRecord {
  return knob.rules.reduce((written, { option, rule }) => {
    return writeRuleOption(written, rule, { option, value })
  }, rules)
}

function writeKnobSettings(settings: Settings, { knob, value }: DeclaredKnob): Settings {
  return knob.settings.reduce((written, { key, namespace }) => {
    return writeSetting(written, namespace, { key, value })
  }, settings)
}

function writeRuleOption(rules: FixedRulesRecord, ruleId: string, { option, value }: { option: string; value: unknown; }): FixedRulesRecord {
  /*
   * The index signature makes the guard look redundant to the type system, but a rule a knob names
   * may be absent from the configuration it is written into
   */
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- See comment above
  if (!Object.hasOwn(rules, ruleId)) {
    return rules
  }

  const entry = rules[ruleId]
  const firstOption = toRecord(entry[FIRST_OPTION_INDEX])

  if (firstOption === undefined) {
    return rules
  }

  const [severity, , ...restOptions] = entry
  const rewritten: RuleSeverityAndOptions = [severity, { ...firstOption, [option]: value }, ...restOptions]

  return { ...rules, [ruleId]: rewritten }
}

function writeSetting(settings: Settings, namespace: string, { key, value }: { key: string; value: unknown; }): Settings {
  return {
    ...settings,
    [namespace]: { ...toRecord(settings[namespace]), [key]: value },
  }
}
