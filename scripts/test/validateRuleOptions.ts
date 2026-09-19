// eslint-disable-next-line @typescript-eslint/naming-convention -- Constructor exported by `ajv`
import Ajv from 'ajv'
import draft04MetaSchema from 'ajv/lib/refs/json-schema-draft-04.json' with { type: 'json' }
import { builtinRules } from 'eslint/use-at-your-own-risk'

import type { ErrorObject } from 'ajv'
import type { Linter, Rule } from 'eslint'
import type { JSONSchema4 } from 'json-schema'


type RuleOptionsFailure = {
  message: string;
  ruleId: string;
}

/** `ajv` v6 resolves to `any` here, so its surface is narrowed to what this file uses */
type SchemaValidator = {
  errors: ErrorObject[];
  validate: (schema: JSONSchema4, value: unknown) => boolean;
}

const NOT_FOUND_INDEX = -1
const RULE_ID_SEPARATOR_LENGTH = 1
const RULE_SEVERITY_LENGTH = 1
const NO_OPTIONS_SCHEMA = { maxItems: 0, minItems: 0, type: 'array' } as const

const ajv = createAjv()

export function validateRuleOptions(pluginConfig: Linter.Config): RuleOptionsFailure[] {
  const plugins = pluginConfig.plugins ?? {}

  return Object.entries(pluginConfig.rules ?? {})
    .map(([ruleId, ruleConfig]) => {
      return getRuleOptionsFailure(ruleId, ruleConfig, plugins)
    })
    .filter((failure) => {
      return failure !== undefined
    })
}

// Same instance options as `eslint/lib/shared/ajv`, so that what passes here is what ESLint accepts
function createAjv(): SchemaValidator {
  const instance = new Ajv({
    schemaId: 'auto',
    meta: false,
    // eslint-disable-next-line unicorn/name-replacements -- Option name defined by `ajv`
    missingRefs: 'ignore',
    useDefaults: true,
    validateSchema: false,
    verbose: true,
  })

  instance.addMetaSchema(draft04MetaSchema)

  // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion -- See `SchemaValidator`
  return instance as SchemaValidator
}

function getRule(ruleId: string, plugins: NonNullable<Linter.Config['plugins']>): Rule.RuleModule | undefined {
  const separatorIndex = ruleId.lastIndexOf('/')

  if (separatorIndex === NOT_FOUND_INDEX) {
    // eslint-disable-next-line @typescript-eslint/no-deprecated -- Currently the only way to get the core rules
    return builtinRules.get(ruleId)
  }

  const pluginName = ruleId.slice(0, separatorIndex)
  const pluginRules = Object.hasOwn(plugins, pluginName) ? plugins[pluginName].rules : undefined
  const rule = pluginRules?.[ruleId.slice(separatorIndex + RULE_ID_SEPARATOR_LENGTH)]

  return typeof rule === 'object' ? rule : undefined
}

function getRuleOptionsFailure(
  ruleId: string,
  ruleConfig: Linter.RuleEntry | undefined,
  plugins: NonNullable<Linter.Config['plugins']>
): RuleOptionsFailure | undefined {
  const rule = getRule(ruleId, plugins)
  const schema = rule === undefined ? undefined : getRuleOptionsSchema(rule)

  if (schema === undefined || !Array.isArray(ruleConfig)) {
    return undefined
  }

  // `useDefaults` makes `ajv` write into what it validates, and `structuredClone` preserves `Infinity`
  if (ajv.validate(schema, structuredClone(ruleConfig.slice(RULE_SEVERITY_LENGTH)))) {
    return undefined
  }

  const [firstError] = ajv.errors

  return {
    ruleId,
    message: `options${firstError.dataPath} ${firstError.message ?? 'is invalid'}`,
  }
}

// Mirrors `getRuleOptionsSchema` in `eslint/lib/config/config`
function getRuleOptionsSchema(rule: Rule.RuleModule): JSONSchema4 | undefined {
  const schema = rule.meta?.schema

  if (schema === undefined) {
    return { ...NO_OPTIONS_SCHEMA }
  }

  // `schema: false` opts the rule out of option validation
  if (schema === false || typeof schema !== 'object') {
    return undefined
  }

  if (Array.isArray(schema)) {
    return schema.length > 0
      ? { items: schema, maxItems: schema.length, minItems: 0, type: 'array' }
      : { ...NO_OPTIONS_SCHEMA }
  }

  return schema
}

export type { RuleOptionsFailure }
