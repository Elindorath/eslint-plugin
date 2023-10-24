'use strict'

const xssPlugin = require('eslint-plugin-xss')

const { getRuleConfig } = require('../../../utils.js')
const baseConfig = require('../eslint/vanilla.js')

const OFF = 'off'
const WARN = 'warn'
const ERROR = 'error'

/** @type {import('eslint').Linter.FlatConfig} */
module.exports = {
  plugins: {
    xss: xssPlugin,
  },

  rules: {
    // TODO: Decide if we should enable this instead of importing core rule configurations.
    // 'jsonc/auto': [ERROR],

    'jsonc/key-name-casing': [ERROR, {
      camelCase: true,
      PascalCase: false,
      SCREAMING_SNAKE_CASE: false,
      'kebab-case': false,
      'snake_case': false,
      ignores: [],
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
    'jsonc/array-bracket-newline': getRuleConfig('array-bracket-newline', baseConfig),
    'jsonc/array-bracket-spacing': getRuleConfig('array-bracket-spacing', baseConfig),
    'jsonc/array-element-newline': getRuleConfig('array-element-newline', baseConfig),
    'jsonc/comma-dangle': getRuleConfig('comma-dangle', baseConfig),
    'jsonc/comma-style': getRuleConfig('comma-style', baseConfig),
    'jsonc/indent': getRuleConfig('indent', baseConfig),
    'jsonc/key-spacing': getRuleConfig('key-spacing', baseConfig),
    'jsonc/no-dupe-keys': getRuleConfig('no-dupe-keys', baseConfig),
    'jsonc/no-floating-decimal': getRuleConfig('no-floating-decimal', baseConfig),
    'jsonc/no-irregular-whitespace': getRuleConfig('no-irregular-whitespace', baseConfig),
    'jsonc/no-multi-str': getRuleConfig('no-multi-str', baseConfig),
    'jsonc/no-octal-escape': getRuleConfig('no-octal-escape', baseConfig),
    'jsonc/no-octal': getRuleConfig('no-octal', baseConfig),
    'jsonc/no-sparse-arrays': getRuleConfig('no-sparse-arrays', baseConfig),
    'jsonc/no-useless-escape': getRuleConfig('no-useless-escape', baseConfig),
    'jsonc/object-curly-newline': getRuleConfig('object-curly-newline', baseConfig),
    'jsonc/object-curly-spacing': getRuleConfig('object-curly-spacing', baseConfig),
    'jsonc/object-property-newline': getRuleConfig('object-property-newline', baseConfig),
    'jsonc/quote-props': getRuleConfig('quote-props', baseConfig),
    'jsonc/quotes': getRuleConfig('quotes', baseConfig),
    'jsonc/space-unary-ops': getRuleConfig('space-unary-ops', baseConfig),
  },
};
