/* eslint-disable perfectionist/sort-modules -- Temporary disabled waiting for decision to keep it or not */

import { ERROR } from './constants.ts'

import type { Linter } from 'eslint'
import type { WritableDeep } from 'type-fest'


type LanguageOptions = Linter.Config['languageOptions']
type EcmaVersion = Required<Linter.Config>['languageOptions']['ecmaVersion']
type SourceType = Required<Linter.Config>['languageOptions']['sourceType']
type Globals = Required<Linter.Config>['languageOptions']['globals']
type Parser = Required<Linter.Config>['languageOptions']['parser']
type ParserOptions = Required<Linter.Config>['languageOptions']['parserOptions']

type Processor = Linter.Config['processor']

type Plugins = Linter.Config['plugins']

type Rules = Linter.Config['rules']
// type Rule = Required<Linter.Config>['rules'][string]

type Settings = Linter.Config['settings']


export function mergeConfigs(...configs: Linter.Config[]) {
  return configs.reduce<Linter.Config>((mergedConfig, config) => {
    return mergeTwoConfig(mergedConfig, config)
  }, {})
}

type Cast<X, Y> = X extends Y ? X : Y

type ArrayElement<A> = A extends ReadonlyArray<infer T>
  ? T
  : never

type FromEntries<T> = T extends Array<[infer Key, unknown]>
  ? { [K in Cast<Key, string>]: Extract<ArrayElement<T>, [K, unknown]>[1] }
  : { [key in string]: unknown }

const objectFromEntries = Object.fromEntries as <T>(entries: T) => FromEntries<WritableDeep<T>>

const objectEntries = Object.entries as <T extends object>(object: T) => Array<{
  [K in keyof T]: [K, T[K]];
}[keyof T]>

const CONFIG_MERGER = {
  /* TODO: implement this */
  // name: mergeNames,
  files: mergeFiles,
  ignores: mergeIgnores,
  languageOptions: mergeLanguageOptions,

  /* TODO: implement this */
  // linterOptions: mergeLinterOptions,
  plugins: mergePlugins,
  processor: mergeProcessor,
  rules: mergeRules,
  settings: mergeSettings,
} as const

function mergeTwoConfig(config1: Linter.Config, config2: Linter.Config) {
  return {
    linterOptions: {
      noInlineConfig: false,
      reportUnusedDisableDirectives: ERROR,
      reportUnusedInlineConfigs: ERROR,
    },
    ...objectFromEntries(
      objectEntries(CONFIG_MERGER)
        .map(([property, merger]) => {
          switch (property) {
            case 'files': {
              return [property, merger(config1[property], config2[property])] as const
            }
            case 'ignores': {
              return [property, merger(config1[property], config2[property])] as const
            }
            case 'languageOptions': {
              return [property, merger(config1[property], config2[property])] as const
            }
            case 'plugins': {
              return [property, merger(config1[property], config2[property])] as const
            }
            case 'processor': {
              return [property, merger(config1[property], config2[property])] as const
            }
            case 'rules': {
              return [property, merger(config1[property], config2[property])] as const
            }
            case 'settings': {
              return [property, merger(config1[property], config2[property])] as const
            }
            default: {
              property satisfies never
              // eslint-disable-next-line @typescript-eslint/restrict-template-expressions -- This should never happen
              throw new TypeError(`no configuration merger found for property ${property}`)
            }
          }
        })
        .filter(([, merged]) => {
          return merged !== undefined
        })
    ),
  } satisfies Linter.Config
}

function mergeFiles(files1: Linter.Config['files'] = [], files2: Linter.Config['files'] = []) {
  return [
    ...files1,
    ...files2,
  ]
}

function mergeIgnores(ignores1: Linter.Config['ignores'] = [], ignores2: Linter.Config['ignores'] = []) {
  return [
    ...ignores1,
    ...ignores2,
  ]
}

const LANGUAGE_OPTIONS_MERGER = {
  ecmaVersion: mergeEcmaVersion,
  globals: mergeGlobals,
  parser: mergeParser,
  parserOptions: mergeParserOptions,
  sourceType: mergeSourceType,
} as const

function mergeLanguageOptions(languageOptions1: LanguageOptions, languageOptions2: LanguageOptions) {
  return objectFromEntries(
    objectEntries(LANGUAGE_OPTIONS_MERGER)
      .map(([property, merger]) => {
        switch (property) {
          case 'ecmaVersion': {
            return [property, merger(languageOptions1?.[property], languageOptions2?.[property])] as const
          }
          case 'globals': {
            return [property, merger(languageOptions1?.[property], languageOptions2?.[property])] as const
          }
          case 'parser': {
            return [property, merger(languageOptions1?.[property], languageOptions2?.[property])] as const
          }
          case 'parserOptions': {
            return [property, merger(languageOptions1?.[property], languageOptions2?.[property])] as const
          }
          case 'sourceType': {
            return [property, merger(languageOptions1?.[property], languageOptions2?.[property])] as const
          }
          default: {
            property satisfies never
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions -- This should never happen
            throw new TypeError(`no language option merger found for property ${property}`)
          }
        }
      })
      .filter(([, merged]) => {
        return merged !== undefined
      })
  ) satisfies LanguageOptions
}

// eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion -- This is used to preserve given literals
const mathMax = Math.max as <T extends number>(...values: [T, ...T[]]) => T

function mergeEcmaVersion(version1: EcmaVersion, version2: EcmaVersion): EcmaVersion {
  if (version1 === undefined) {
    return version2
  }

  if (version2 === undefined) {
    return version1
  }

  if (version1 === 'latest') {
    return version1
  }

  if (version2 === 'latest') {
    return version2
  }

  return mathMax(version1, version2)
}

/* eslint-disable perfectionist/sort-objects -- Keep order in place */
const SOURCE_TYPE_ORDER = {
  undefined: -1,
  script: 0,
  commonjs: 1,
  module: 2,
} as const
/* eslint-enable perfectionist/sort-objects */

function mergeSourceType(sourceType1: SourceType, sourceType2: SourceType) {
  const order1 = SOURCE_TYPE_ORDER[sourceType1 ?? 'undefined']
  const order2 = SOURCE_TYPE_ORDER[sourceType2 ?? 'undefined']

  return order1 > order2
    ? sourceType1
    : sourceType2
}

function mergeGlobals(globals1: Globals, globals2: Globals) {
  return {
    ...globals1,
    ...globals2,
  }
}

function mergeParser(parser1: Parser, parser2: Parser) {
  /* eslint-disable @typescript-eslint/no-deprecated -- Deprecated are only used as fallback */
  const parserName1 = parser1?.meta?.name ?? parser1?.name
  const parserName2 = parser2?.meta?.name ?? parser2?.name
  /* eslint-enable @typescript-eslint/no-deprecated */

  if (parserName1 === parserName2) {
    return parser1
  }

  if (!parser1) {
    return parser2
  }

  if (!parser2) {
    return parser1
  }

  throw new Error(`Two different parsers were provided: ${parserName1 ?? 'unknown'} and ${parserName2 ?? 'unknown'}`)
}

function mergeParserOptions(parserOptions1: ParserOptions, parserOptions2: ParserOptions) {
  return {
    ...parserOptions1,
    ...parserOptions2,
  }
}

function mergeProcessor(processor1: Processor, processor2: Processor) {
  /* eslint-disable @typescript-eslint/no-deprecated -- Deprecated are only used as fallback */
  const processorName1 = typeof processor1 === 'string' ? processor1 : (processor1?.meta?.name ?? processor1?.name)
  const processorName2 = typeof processor2 === 'string' ? processor2 : (processor2?.meta?.name ?? processor2?.name)
  /* eslint-enable @typescript-eslint/no-deprecated */

  if (processorName1 === processorName2) {
    return processor1
  }

  if (processor1 === undefined) {
    return processor2
  }

  if (processor2 === undefined) {
    return processor1
  }

  throw new Error(`Two different processors were provided: ${processorName1 ?? 'unknown'} and ${processorName2 ?? 'unknown'}`)
}

function mergePlugins(plugins1: Plugins, plugins2: Plugins) {
  return {
    ...plugins1,
    ...plugins2,
  }
}

function mergeRules(rules1: Rules, rules2: Rules) {
  return {
    ...rules1,
    ...rules2,
  }
}

function mergeSettings(settings1: Settings, settings2: Settings) {
  return {
    ...settings1,
    ...settings2,
  }
}

/* eslint-enable */
