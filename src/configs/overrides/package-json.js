'use strict'

const { mergeConfigs } = require('../../utils.js')
const jsonFilesConfig = require('../plugins/json-files/vanilla.js')
const jsonConfig = require('../plugins/jsonc/syntax-json.js')

const OFF = 'off'
const WARN = 'warn'
const ERROR = 'error'

/** @type {Array<import('eslint').Linter.FlatConfig>} */
module.exports = mergeConfigs(jsonConfig, jsonFilesConfig, {
  files: ['**/package.json'],
  rules: {
    'jsonc/key-name-casing': [ERROR, {
      'camelCase': true,
      'PascalCase': false,
      'SCREAMING_SNAKE_CASE': false,
      'kebab-case': true,
      'snake_case': false,
      'ignores': ['^@[\\w-]*/[\\w-]+$', '^\\w+:\\w+'],
    }],
    // OFF as the ordering is handled by the 'json-files/sort-package-json' rule
    'jsonc/sort-keys': [OFF],
  },
})
