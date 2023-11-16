/* eslint-disable import/no-dynamic-require -- TODO: fix */

'use strict'

const path = require('node:path')

const { ESLint, CLIEngine } = require('eslint')
const fs = require('fs-extra')


const OFF = 'off'
const WARN = 'warn'
const ERROR = 'error'

const configsPath = path.resolve(__dirname, 'build', 'configs.js')


module.exports = {
  buildPrefixedRulesFromConfig,
  getRuleConfig,
  compileConfig,
  generateEslintConfig,
  mergeConfigs,
}


function buildPrefixedRulesFromConfig(prefix, rules, config) {
  return rules.reduce((agg, rule) => ({
    ...agg,
    [rule]: [OFF],
    [`${prefix}/${rule}`]: getRuleConfig(rule, config),
  }), {})
}

/**
 * @param {string} rule
 * @param {import('eslint').Linter.FlatConfig} config
 * @returns {import('eslint').Linter.RuleEntry}
 */
function getRuleConfig(rule, config) {
  const { rules: { [rule]: ruleConfig } } = config

  return ruleConfig
}

const INDENTATION_SPACE = 2

async function compileConfig() {
  await fs.emptyDir(path.resolve(__dirname, 'build'))

  const files = await fs.readdir(`${path.resolve(__dirname, 'projects')}`)

  const fileConfigMaps = await Promise.all(
    files.map(async (fileBase) => {
      const fileName = path.basename(fileBase, '.js')
      const eslint = new ESLint({
        useEslintrc: false,
        baseConfig: require(path.resolve(__dirname, 'projects', fileBase)),
      })

      const config = await eslint.calculateConfigForFile(path.resolve(__dirname, 'projects', fileBase))

      return {
        [fileName]: {
          ...config,
          ignorePatterns: undefined,
        },
      }
    })
  )

  const fileConfigMap = fileConfigMaps.reduce((agg, currentFileConfigMap) => ({
    ...agg,
    ...currentFileConfigMap,
  }), {})

  return fs.outputFile(configsPath, `module.exports = ${JSON.stringify(fileConfigMap, undefined, INDENTATION_SPACE)};`)
}

function generateEslintConfig(config) {
  const configs = require(configsPath)
  const { extends: baseExtends, rules: baseRules, overrides } = config

  const basePluginsUnique = new Set(baseExtends.flatMap((name) => configs[normalizeConfigName(name)].plugins))

  const overridesWithoutDuplicatePlugins = overrides.map((overrideConfig) => {
    const { files, ...overrideConfigWithoutFiles } = overrideConfig
    const { extends: overridesExtend, rules: overridesRules } = overrideConfigWithoutFiles

    const cliEngine = new CLIEngine({
      useEslintrc: false,
      baseConfig: overrideConfigWithoutFiles,
    })

    const pluginsUnique = new Set(overridesExtend.flatMap((name) => configs[normalizeConfigName(name)].plugins))

    // eslint-disable-next-line no-unused-vars -- The ignorePatterns var is not used, we use rest operator to exclude it
    const { ignorePatterns, ...computedConfig } = cliEngine.getConfigForFile('./.eslintrc.js')

    return {
      ...computedConfig,
      plugins: [...differenceRight(basePluginsUnique, pluginsUnique)],
      rules: {
        ...computedConfig.rules,
        ...baseRules,
        ...overridesRules,
      },
      files,
    }
  })

  return {
    ...config,
    overrides: overridesWithoutDuplicatePlugins,
  }
}

function normalizeConfigName(name) {
  return name.slice(32)
}

function differenceRight(setA, setB) {
  const diff = new Set(setB)

  for (const element of setA) {
    diff.delete(element)
  }

  return diff
}

/* eslint-enable import/no-dynamic-require */

/** @typedef {import('eslint').Linter.FlatConfig} FlatConfig */
/** @typedef {Required<FlatConfig>['languageOptions']} LanguageOptions */
/** @typedef {Required<FlatConfig>['languageOptions']['ecmaVersion']} EcmaVersion */
/** @typedef {Required<FlatConfig>['languageOptions']['sourceType']} SourceType */
/** @typedef {Required<FlatConfig>['languageOptions']['globals']} Globals */
/** @typedef {Required<FlatConfig>['languageOptions']['parser']} Parser */
/** @typedef {Required<FlatConfig>['languageOptions']['parserOptions']} ParserOptions */
/** @typedef {Required<FlatConfig>['processor']} Processor */
/** @typedef {Required<FlatConfig>['plugins']} Plugins */
/** @typedef {Required<FlatConfig>['rules']} Rules */
/** @typedef {Required<FlatConfig>['rules'][string]} Rule */
/** @typedef {Required<FlatConfig>['settings']} Settings */

/**
 * @param  {...FlatConfig} configs
 * @returns {FlatConfig}
 */
function mergeConfigs(...configs) {
  let result = {}

  for (const config of configs) {
    result = mergeTwoConfig(result, config)
  }

  return result
}

const CONFIG_MERGER = {
  files: mergeFiles,
  ignores: mergeIgnores,
  languageOptions: mergeLanguageOptions,
  processor: mergeProcessor,
  plugins: mergePlugins,
  rules: mergeRules,
  settings: mergeSettings,
}

/**
 * @param {FlatConfig} config1
 * @param {FlatConfig} config2
 * @returns {FlatConfig}
 */
function mergeTwoConfig(config1, config2) {
  const mergedConfig = {
    linterOptions: {
      noInlineConfig: false,
      reportUnusedDisableDirectives: true,
    },
  }

  for (const [property, merger] of Object.entries(CONFIG_MERGER)) {
    const mergedValue = merger(config1[property], config2[property])

    if ((Array.isArray(mergedValue) && mergedValue.length > 0) || mergedValue) {
      mergedConfig[property] = mergedValue
    }
  }

  return mergedConfig
}

function mergeFiles(files1 = [], files2 = []) {
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

function mergeIgnores(ignores1 = [], ignores2 = []) {
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
}

/**
 * @param {LanguageOptions} languageOptions1
 * @param {LanguageOptions} languageOptions2
 * @returns {LanguageOptions | undefined}
 */
function mergeLanguageOptions(languageOptions1, languageOptions2) {
  const mergedLanguageOptions = {}

  for (const [property, merger] of Object.entries(LANGUAGE_OPTIONS_MERGER)) {
    const mergedValue = merger(languageOptions1?.[property], languageOptions2?.[property])

    if (mergedValue) {
      mergedLanguageOptions[property] = mergedValue
    }
  }

  return Object.keys(mergedLanguageOptions).length > 0
    ? mergedLanguageOptions
    : undefined
}

const UNDEFINED_AS_NUMBER = 0

/**
 * @param {EcmaVersion} version1
 * @param {EcmaVersion} version2
 * @returns {EcmaVersion}
 */
function mergeEcmaVersion(version1 = UNDEFINED_AS_NUMBER, version2 = UNDEFINED_AS_NUMBER) {
  const resolvedVersion = version1 > version2
    ? version1
    : version2

  if ([version1, version2].includes('latest')) {
    return 'latest'
  }

  return resolvedVersion === UNDEFINED_AS_NUMBER
    ? undefined
    : resolvedVersion
}

/* eslint-disable unicorn/no-unused-properties -- It is actually used but reported as a false positive */
// TODO: remove this directive when https://github.com/sindresorhus/eslint-plugin-unicorn/issues/2051 is fixed
const SOURCE_TYPE_ORDER = {
  undefined: -1,
  script: 0,
  commonjs: 1,
  module: 2,
}
/* eslint-enable */

/**
 * @param {SourceType} sourceType1
 * @param {SourceType} sourceType2
 * @returns {SourceType}
 */
function mergeSourceType(sourceType1, sourceType2) {
  const {
    [sourceType1]: order1,
    [sourceType2]: order2,
  } = SOURCE_TYPE_ORDER

  return order1 > order2
    ? sourceType1
    : sourceType2
}

/**
 * @param {Globals} globals1
 * @param {Globals} globals2
 * @returns {Globals}
 */
function mergeGlobals(globals1, globals2) {
  return {
    ...globals1,
    ...globals2,
  }
}

/**
 * @param {Parser} parser1
 * @param {Parser} parser2
 * @returns {Parser}
 */
function mergeParser(parser1, parser2) {
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

/**
 * @param {ParserOptions} parserOptions1
 * @param {ParserOptions} parserOptions2
 * @returns {ParserOptions}
 */
function mergeParserOptions(parserOptions1, parserOptions2) {
  return {
    ...parserOptions1,
    ...parserOptions2,
  }
}

/**
 * @param {Processor} processor1
 * @param {Processor} processor2
 * @returns {Processor}
 */
function mergeProcessor(processor1, processor2) {
  if (!processor1) {
    return processor2
  }

  if (!processor2) {
    return processor1
  }

  if (processor1 !== processor2) {
    throw new Error(`Two different processors were provided: ${processor1} and ${processor2}`)
  }

  return processor1
}

/**
 * @param {Plugins} plugins1
 * @param {Plugins} plugins2
 * @returns {Plugins}
 */
function mergePlugins(plugins1, plugins2) {
  return {
    ...plugins1,
    ...plugins2,
  }
}

/**
 * @param {Rules} rules1
 * @param {Rules} rules2
 * @returns {Rules}
 */
function mergeRules(rules1, rules2) {
  return {
    ...rules1,
    ...rules2,
  }
}

// /**
//  * @param {Rule} rule1
//  * @param {Rule} rule2
//  * @returns {Rule}
//  */
// function mergeRule(rule1, rule2) {
//   const level1 = Array.isArray(rule1) ? rule1[0] : rule1;
//   const level2 = Array.isArray(rule2) ? rule2[0] : rule2;

//   if ()

//   return
// }

/**
 * @param {Settings} settings1
 * @param {Settings} settings2
 * @returns {Settings}
 */
function mergeSettings(settings1, settings2) {
  return {
    ...settings1,
    ...settings2,
  }
}
