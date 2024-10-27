'use strict'

const jsoncPlugin = require('eslint-plugin-jsonc')
const jsonParser = require('jsonc-eslint-parser')

const { getRuleConfig } = require('../../../utils.js')
const baseStylisticConfig = require('../stylistic/vanilla-layout.js')

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
    'jsonc/object-curly-newline': getRuleConfig('@stylistic/object-curly-newline', baseStylisticConfig),
    'jsonc/object-curly-spacing': getRuleConfig('@stylistic/object-curly-spacing', baseStylisticConfig),
    'jsonc/object-property-newline': getRuleConfig('@stylistic/object-property-newline', baseStylisticConfig),
    'jsonc/quote-props': [ERROR, 'always'],
    'jsonc/quotes': [ERROR, 'double', {
      avoidEscape: false,
      allowTemplateLiterals: false,
    }],
    'jsonc/space-unary-ops': getRuleConfig('@stylistic/space-unary-ops', baseStylisticConfig),
  },
}
