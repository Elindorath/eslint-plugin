'use strict'

const { mergeConfigs } = require('../../utils.js')
const nodeCommonJsConfig = require('../environment-node-source-type-commonjs.js')
const vanillaConfig = require('../vanilla.js')

const OFF = 'off'
const WARN = 'warn'
const ERROR = 'error'

/** @type {Array<import('eslint').Linter.FlatConfig>} */
module.exports = mergeConfigs(vanillaConfig, nodeCommonJsConfig, {
  files: ['**/eslint.config.js'],
  rules: {
    'sort-keys': [OFF],
    'no-unused-vars': [ERROR, {
      vars: 'all', // default
      varsIgnorePattern: 'OFF|WARN|ERROR',
      args: 'after-used', // default
      argsIgnorePattern: '', // default
      caughtErrors: 'all',
      caughtErrorsIgnorePattern: '', // default
      destructuredArrayIgnorePattern: '', // default
      ignoreRestSiblings: false, // default
    }],
    'multiline-comment-style': [OFF, 'starred-block'], // default
    'quote-props': [OFF, 'consistent-as-needed', {
      keywords: false, // default
      unnecessary: true, // default
      numbers: false, // default
    }],
    // OFF as it is a dev only file
    'import/no-extraneous-dependencies': [OFF],
    // OFF as it prevents us to respect the rule configuration format convention
    '@stylistic/array-bracket-newline': [OFF],
  },
})

// module.exports = {
//   extends: [
//     require.resolve('./common'),
//     require.resolve('./+script-type'),
//     require.resolve('./+node'),
//     require.resolve('./+eslintrc'),
//     require.resolve('./_override-scripts'),
//   ],
//   rules: {
//     '@elindorath/filenames/match-regex': [ERROR, /^\.?[+-_]?[\da-z-]+$/gu],
//     // OFF to respect the eslint-plugin formatting standard
//     '@elindorath/node/global-require': [OFF],
//     // OFF to respect the eslint-plugin formatting standard
//     '@elindorath/import/max-dependencies': [OFF],
//     // Disabled filenames check to respect eslint plugin name
//     '@elindorath/unicorn/prevent-abbreviations': [ERROR, {
//       replacements: {}, // Default here: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/rules/prevent-abbreviations.js#L18
//       extendDefaultReplacements: true, // Default
//       whitelist: {}, // Default here: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/rules/prevent-abbreviations.js#L222
//       extendDefaultWhitelist: true, // Default
//       checkDefaultAndNamespaceImports: 'internal', // Default
//       checkShorthandImports: 'internal', // Default
//       checkShorthandProperties: false, // Default
//       checkProperties: false, // Default
//       checkVariables: true, // Default
//       checkFilenames: false,
//     }],
//   },
// }
