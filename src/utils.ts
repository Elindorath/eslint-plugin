/* eslint-disable import/no-dynamic-require, n/global-require -- TODO: fix */

import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { ESLint, Linter } from 'eslint'
import fs from 'fs-extra'

import { OFF } from './constants'


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const configsPath = path.resolve(__dirname, 'build', 'configs.js')

export function buildPrefixedRulesFromConfig(prefix: string, rules: string[], config: Linter.Config) {
  return rules.reduce<Linter.Config>((agg, rule) => ({
    ...agg,
    [rule]: [OFF],
    [`${prefix}/${rule}`]: getRuleConfig(rule, config),
  }), {})
}

export function getRuleConfig(rule: string, config: Linter.Config) {
  const formattedConfigName = config.name ? ` ${config.name}` : ''

  if (!config.rules) {
    throw new Error(`config${formattedConfigName} has no rules`)
  }

  if (!config.rules[rule]) {
    throw new Error(`config${formattedConfigName} has no '${rule}' rule`)
  }

  if (!Array.isArray(config.rules[rule])) {
    throw new Error(`${rule} rule is not configured as an array`)
  }

  const ruleConfig = config.rules[rule]

  return ruleConfig
}

const INDENTATION_SPACE = 2

export async function compileConfig() {
  await fs.emptyDir(path.resolve(__dirname, 'build'))

  const files = await fs.readdir(`${path.resolve(__dirname, 'projects')}`)

  const fileConfigMaps = await Promise.all(
    files.map(async (fileBase) => {
      const fileName = path.basename(fileBase, '.js')
      const eslint = new ESLint({
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

// export function generateEslintConfig(config) {
//   const configs = require(configsPath)
//   const { extends: baseExtends, rules: baseRules, overrides } = config

//   const basePluginsUnique = new Set(baseExtends.flatMap((name) => configs[normalizeConfigName(name)].plugins))

//   const overridesWithoutDuplicatePlugins = overrides.map((overrideConfig) => {
//     const { files, ...overrideConfigWithoutFiles } = overrideConfig
//     const { extends: overridesExtend, rules: overridesRules } = overrideConfigWithoutFiles

//     const cliEngine = new CLIEngine({
//       useEslintrc: false,
//       baseConfig: overrideConfigWithoutFiles,
//     })

//     const pluginsUnique = new Set(overridesExtend.flatMap((name) => configs[normalizeConfigName(name)].plugins))

//     // eslint-disable-next-line no-unused-vars -- The ignorePatterns var is not used, we use rest operator to exclude it
//     const { ignorePatterns, ...computedConfig } = cliEngine.getConfigForFile('./.eslintrc.js')

//     return {
//       ...computedConfig,
//       plugins: [...differenceRight(basePluginsUnique, pluginsUnique)],
//       rules: {
//         ...computedConfig.rules,
//         ...baseRules,
//         ...overridesRules,
//       },
//       files,
//     }
//   })

//   return {
//     ...config,
//     overrides: overridesWithoutDuplicatePlugins,
//   }
// }

// function normalizeConfigName(name) {
//   return name.slice(32)
// }

// function differenceRight(setA, setB) {
//   const diff = new Set(setB)

//   for (const element of setA) {
//     diff.delete(element)
//   }

//   return diff
// }

/* eslint-enable import/no-dynamic-require */
