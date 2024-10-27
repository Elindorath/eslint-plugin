'use strict'

const jsoncPlugin = require('eslint-plugin-jsonc')
const jsonParser = require('jsonc-eslint-parser')

const { getRuleConfig } = require('../../../utils.js')
const baseConfig = require('../eslint/vanilla.js')

const OFF = 'off'
const WARN = 'warn'
const ERROR = 'error'

/** @type {import('eslint').Linter.Config} */
module.exports = {
  languageOptions: {
    parser: jsonParser,
  },

  plugins: {
    jsonc: jsoncPlugin,
  },

  rules: {
    // OFF as we don't treat the json files the same as the rest of the codebase
    'jsonc/auto': [OFF],

    'jsonc/key-name-casing': [ERROR, {
      'camelCase': true,
      'PascalCase': false,
      'SCREAMING_SNAKE_CASE': false,
      'kebab-case': false,
      'snake_case': false,
      'ignores': [],
    }],
    'jsonc/no-bigint-literals': [ERROR],
    'jsonc/no-binary-expression': [ERROR],
    'jsonc/no-binary-numeric-literals': [ERROR],
    'jsonc/no-comments': [ERROR],
    'jsonc/no-escape-sequence-in-identifier': [ERROR],
    'jsonc/no-hexadecimal-numeric-literals': [ERROR],
    'jsonc/no-infinity': [ERROR],
    'jsonc/no-nan': [ERROR],
    'jsonc/no-number-props': [ERROR],
    'jsonc/no-numeric-separators': [ERROR],
    'jsonc/no-octal-numeric-literals': [ERROR],
    'jsonc/no-parenthesized': [ERROR],
    'jsonc/no-plus-sign': [ERROR],
    'jsonc/no-regexp-literals': [ERROR],
    'jsonc/no-template-literals': [ERROR],
    'jsonc/no-undefined-value': [ERROR],
    'jsonc/no-unicode-codepoint-escapes': [ERROR],
    'jsonc/sort-array-values': [ERROR, {
      pathPattern: '.*',
      order: {
        type: 'asc',
      },
    }],
    'jsonc/sort-keys': [ERROR, {
      // hasProperties: [''],
      pathPattern: '.*',
      order: {
        type: 'asc',
      },
    }],
    'jsonc/valid-json-number': [ERROR],
    'jsonc/vue-custom-block/no-parsing-error': [ERROR],

    /* ----- Extended rules ----- */
    'jsonc/no-dupe-keys': getRuleConfig('no-dupe-keys', baseConfig),
    'jsonc/no-floating-decimal': getRuleConfig('no-floating-decimal', baseConfig),
    'jsonc/no-irregular-whitespace': getRuleConfig('no-irregular-whitespace', baseConfig),
    'jsonc/no-multi-str': getRuleConfig('no-multi-str', baseConfig),
    'jsonc/no-octal-escape': getRuleConfig('no-octal-escape', baseConfig),
    'jsonc/no-octal': getRuleConfig('no-octal', baseConfig),
    'jsonc/no-sparse-arrays': getRuleConfig('no-sparse-arrays', baseConfig),
    'jsonc/no-useless-escape': getRuleConfig('no-useless-escape', baseConfig),
  },
}
