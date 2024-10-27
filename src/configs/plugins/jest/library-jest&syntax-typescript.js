'use strict'

const jestPlugin = require('eslint-plugin-jest')
const globals = require('globals')

const { getRuleConfig } = require('../../../utils.js')
const baseTypescriptConfig = require('../typescript-eslint/syntax-typescript.js')

const OFF = 'off'
const WARN = 'warn'
const ERROR = 'error'

/** @type {import('eslint').Linter.Config} */
module.exports = {
  plugins: {
    jest: jestPlugin,
  },

  languageOptions: {
    globals: {
      ...globals.jest,
    },
  },

  rules: {
    'jest/no-untyped-mock-factory': [ERROR],
    // OFF as it is superseded by the 'jest/unbound-method' rule
    '@typescript-eslint/unbound-method': [OFF],
    'jest/unbound-method': getRuleConfig('@typescript-eslint/unbound-method', baseTypescriptConfig),
  },
}
