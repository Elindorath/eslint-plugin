import { ERROR } from './constants'

import type { Linter } from 'eslint'


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

const CONFIG_MERGER = {
  // TODO: implement this
  // name: mergeNames,
  files: mergeFiles,
  ignores: mergeIgnores,
  languageOptions: mergeLanguageOptions,
  // TODO: implement this
  // linterOptions: mergeLinterOptions,
  plugins: mergePlugins,
  processor: mergeProcessor,
  rules: mergeRules,
  settings: mergeSettings,
} as const

function mergeTwoConfig(config1: Linter.Config, config2: Linter.Config) {
  const mergedConfig: Linter.Config = {
    linterOptions: {
      noInlineConfig: false,
      reportUnusedDisableDirectives: ERROR,
    },
  } as const

  for (const [property, merger] of objectEntries(CONFIG_MERGER)) {
    let mergedValue

    if (property === 'files') {
      mergedValue = merger(config1[property], config2[property])

      if (mergedValue) {
        mergedConfig[property] = mergedValue
      }
    } else if (property === 'ignores') {
      mergedValue = merger(config1[property], config2[property])

      if (mergedValue) {
        mergedConfig[property] = mergedValue
      }
    } else if (property === 'languageOptions') {
      mergedValue = merger(config1[property], config2[property])

      if (mergedValue) {
        mergedConfig[property] = mergedValue
      }
    } else if (property === 'processor') {
      mergedValue = merger(config1[property], config2[property])

      if (mergedValue) {
        mergedConfig[property] = mergedValue
      }
    } else if (property === 'plugins') {
      mergedValue = merger(config1[property], config2[property])

      if (mergedValue) {
        mergedConfig[property] = mergedValue
      }
    } else if (property === 'rules') {
      mergedValue = merger(config1[property], config2[property])

      if (mergedValue) {
        mergedConfig[property] = mergedValue
      }
    } else if (property === 'settings') {
      mergedValue = merger(config1[property], config2[property])

      if (mergedValue) {
        mergedConfig[property] = mergedValue
      }
    }
  }

  return mergedConfig
}

function mergeFiles(files1: Linter.Config['files'] = [], files2: Linter.Config['files'] = []) {
  return [
    ...files1,
    ...files2,
  ]

  // if (files1.length > 0 && files2.length > 0 && !areArraysIdentical(files1, files2)) {
  //   throw new Error(`Two different files constraints were provided: [${files1.join(', ')}] and [${files2.join(', ')}]`)
  // }

  // if (files1.length === 0) {
  //   return files2
  // }

  // if (files2.length === 0) {
  //   return files1
  // }
}

function mergeIgnores(ignores1: Linter.Config['ignores'] = [], ignores2: Linter.Config['ignores'] = []) {
  return [
    ...ignores1,
    ...ignores2,
  ]
}

const LANGUAGE_OPTIONS_MERGER = {
  ecmaVersion: mergeEcmaVersion,
  sourceType: mergeSourceType,
  globals: mergeGlobals,
  parser: mergeParser,
  parserOptions: mergeParserOptions,
} as const

function mergeLanguageOptions(languageOptions1: LanguageOptions, languageOptions2: LanguageOptions) {
  const mergedLanguageOptions: Linter.LanguageOptions = {}

  for (const [property, merger] of objectEntries(LANGUAGE_OPTIONS_MERGER)) {
    let mergedValue

    if (property === 'ecmaVersion') {
      mergedValue = merger(languageOptions1?.[property], languageOptions2?.[property])
      mergedLanguageOptions[property] = mergedValue
    } else if (property === 'sourceType') {
      mergedValue = merger(languageOptions1?.[property], languageOptions2?.[property])
      mergedLanguageOptions[property] = mergedValue
    } else if (property === 'parser') {
      mergedValue = merger(languageOptions1?.[property], languageOptions2?.[property])
      mergedLanguageOptions[property] = mergedValue
    } else if (property === 'parserOptions') {
      mergedValue = merger(languageOptions1?.[property], languageOptions2?.[property])
      mergedLanguageOptions[property] = mergedValue
    } else if (property === 'globals') {
      mergedValue = merger(languageOptions1?.[property], languageOptions2?.[property])
      mergedLanguageOptions[property] = mergedValue
    }
  }

  return Object.keys(mergedLanguageOptions).length > 0
    ? mergedLanguageOptions
    : undefined
}

function mergeEcmaVersion(version1: EcmaVersion, version2: EcmaVersion) {
  if (!version1) {
    return version2
  }

  if (!version2) {
    return version1
  }

  const resolvedVersion = version1 > version2
    ? version1
    : version2

  if ([version1, version2].includes('latest')) {
    return 'latest'
  }

  return resolvedVersion
}

/* eslint-disable unicorn/no-unused-properties -- It is actually used but reported as a false positive */
// TODO: remove this directive when https://github.com/sindresorhus/eslint-plugin-unicorn/issues/2051 is fixed
const SOURCE_TYPE_ORDER = {
  undefined: -1,
  script: 0,
  commonjs: 1,
  module: 2,
} as const
/* eslint-enable */

function mergeSourceType(sourceType1: SourceType, sourceType2: SourceType) {
  const order1 = SOURCE_TYPE_ORDER[`${sourceType1}`]
  const order2 = SOURCE_TYPE_ORDER[`${sourceType2}`]

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
  const parserName1 = parser1?.meta?.name ?? parser1?.name
  const parserName2 = parser2?.meta?.name ?? parser2?.name

  if (parserName1 === parserName2) {
    return parser1
  }

  if (!parser1) {
    return parser2
  }

  if (!parser2) {
    return parser1
  }

  throw new Error(`Two different parsers were provided: ${parserName1} and ${parserName2}`)
}

function mergeParserOptions(parserOptions1: ParserOptions, parserOptions2: ParserOptions) {
  return {
    ...parserOptions1,
    ...parserOptions2,
  }
}

function mergeProcessor(processor1: Processor, processor2: Processor) {
  if (processor1 === processor2) {
    return processor1
  }

  if (!processor1) {
    return processor2
  }

  if (!processor2) {
    return processor1
  }

  throw new Error(`Two different processors were provided: ${processor1} and ${processor2}`)
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

// function mergeRule(rule1: Rule, rule2: Rule) {
//   const level1 = Array.isArray(rule1) ? rule1[0] : rule1;
//   const level2 = Array.isArray(rule2) ? rule2[0] : rule2;

//   if ()

//   return
// }

function mergeSettings(settings1: Settings, settings2: Settings) {
  return {
    ...settings1,
    ...settings2,
  }
}

type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];

const objectEntries = Object.entries as <T extends object>(object: T) => {
  [K in keyof T]: [K, T[K]];
}[keyof T][]
