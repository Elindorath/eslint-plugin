import type { Linter } from 'eslint'

import { mergeConfigs } from '../../configMerger'
import { environmentNodeSourceTypeCommonJsConfig } from '../environment-node-source-type-commonjs'
import { environmentNodeConfig } from '../environment-node'
import { syntaxTypescriptConfig } from '../syntax-typescript'
import { vanillaConfig } from '../vanilla'

import { OFF, ERROR } from '../../constants'


const webpackRules: Linter.RulesRecord = {
  // OFF as webpack config can be very extensive
  'max-lines-per-function': [OFF],
  // OFF as webpack require a default export
  'no-restricted-exports': [OFF],
  // OFF as it is a dev only file
  'import/no-extraneous-dependencies': [OFF],
  // OFF as it is allowed to import nodejs modules
  'import/no-nodejs-modules': [OFF],
  'unicorn/prevent-abbreviations': [ERROR, {
    replacements: {}, // default here: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/28e7498ad06679bb92343db53bb40a7b5ba2990a/rules/shared/abbreviations.js#L3
    extendDefaultReplacements: true, // default
    allowList: {
      envName: true,
      devServer: true,
    }, // default here: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/28e7498ad06679bb92343db53bb40a7b5ba2990a/rules/shared/abbreviations.js#L230
    extendDefaultAllowList: true, // default
    checkDefaultAndNamespaceImports: true,
    checkShorthandImports: true,
    checkShorthandProperties: true,
    checkProperties: true,
    checkVariables: true, // default
    checkFilenames: true, // default
    ignore: [], // default
  }],
}

export const overrideWebpackConfig: Linter.Config[] = [
  mergeConfigs(
    vanillaConfig,
    environmentNodeSourceTypeCommonJsConfig,
    {
      files: ['**/webpack.config.js'],
      rules: webpackRules,
    }
  ),
  mergeConfigs(
    vanillaConfig,
    environmentNodeConfig,
    syntaxTypescriptConfig,
    {
      files: ['**/webpack.config.ts'],
      rules: webpackRules,
    }
  ),
]
