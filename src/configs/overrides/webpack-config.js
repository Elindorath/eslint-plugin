'use strict'

const { mergeConfigs } = require('../../utils.js')
const nodeCommonJsConfig = require('../environment-node-source-type-commonjs.js')
const nodeConfig = require('../environment-node.js')
const typescriptConfig = require('../syntax-typescript.js')
const vanillaConfig = require('../vanilla.js')

const OFF = 'off'
const WARN = 'warn'
const ERROR = 'error'

const webpackRules = {
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

/** @type {Array<import('eslint').Linter.Config>} */
module.exports = [
  mergeConfigs(vanillaConfig, nodeCommonJsConfig, {
    files: ['**/webpack.config.js'],
    rules: webpackRules,
  }),
  mergeConfigs(vanillaConfig, nodeConfig, typescriptConfig, {
    files: ['**/webpack.config.ts'],
    rules: webpackRules,
  }),
]
