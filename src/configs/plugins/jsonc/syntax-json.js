'use strict'

const jsoncPlugin = require('eslint-plugin-jsonc')
const jsonParser = require('jsonc-eslint-parser')

const { getRuleConfig } = require('../../../utils.js')
const baseConfig = require('../eslint/vanilla.js')
const baseStylisticConfig = require('../stylistic/vanilla.js')

const OFF = 'off'
const WARN = 'warn'
const ERROR = 'error'

/** @type {import('eslint').Linter.FlatConfig} */
module.exports = {
  languageOptions: {
    parser: jsonParser,
  },

  plugins: {
    jsonc: jsoncPlugin,
  },

  rules: {
    // TODO: Decide if we should enable this instead of importing core rule configurations.
    // 'jsonc/auto': [ERROR],

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
    'jsonc/array-bracket-newline': getRuleConfig('@stylistic/array-bracket-newline', baseStylisticConfig),
    'jsonc/array-bracket-spacing': getRuleConfig('@stylistic/array-bracket-spacing', baseStylisticConfig),
    'jsonc/array-element-newline': getRuleConfig('@stylistic/array-element-newline', baseStylisticConfig),
    'jsonc/comma-dangle': [ERROR, {
      arrays: 'never',
      objects: 'never',
      imports: 'never',
      exports: 'never',
      functions: 'never',
    }],
    'jsonc/comma-style': getRuleConfig('@stylistic/comma-style', baseStylisticConfig),
    'jsonc/indent': getRuleConfig('@stylistic/indent', baseStylisticConfig),
    'jsonc/key-spacing': getRuleConfig('@stylistic/key-spacing', baseStylisticConfig),
    'jsonc/no-dupe-keys': getRuleConfig('no-dupe-keys', baseConfig),
    'jsonc/no-floating-decimal': getRuleConfig('no-floating-decimal', baseConfig),
    'jsonc/no-irregular-whitespace': getRuleConfig('no-irregular-whitespace', baseConfig),
    'jsonc/no-multi-str': getRuleConfig('no-multi-str', baseConfig),
    'jsonc/no-octal-escape': getRuleConfig('no-octal-escape', baseConfig),
    'jsonc/no-octal': getRuleConfig('no-octal', baseConfig),
    'jsonc/no-sparse-arrays': getRuleConfig('no-sparse-arrays', baseConfig),
    'jsonc/no-useless-escape': getRuleConfig('no-useless-escape', baseConfig),
    'jsonc/object-curly-newline': getRuleConfig('@stylistic/object-curly-newline', baseStylisticConfig),
    'jsonc/object-curly-spacing': getRuleConfig('@stylistic/object-curly-spacing', baseStylisticConfig),
    'jsonc/object-property-newline': getRuleConfig('@stylistic/object-property-newline', baseStylisticConfig),
    'jsonc/quote-props': [ERROR, 'always'],
    'jsonc/quotes': [ERROR, 'double'],
    'jsonc/space-unary-ops': getRuleConfig('@stylistic/space-unary-ops', baseStylisticConfig),
  },
}
