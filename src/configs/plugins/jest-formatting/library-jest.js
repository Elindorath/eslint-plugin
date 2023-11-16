'use strict'

const jestFormattingPlugin = require('eslint-plugin-jest-formatting')

const OFF = 'off'
const WARN = 'warn'
const ERROR = 'error'

/** @type {import('eslint').Linter.FlatConfig} */
module.exports = {
  plugins: {
    'jest-formatting': jestFormattingPlugin,
  },

  rules: {
    'jest-formatting/padding-around-after-all-blocks': [ERROR],
    'jest-formatting/padding-around-after-each-blocks': [ERROR],
    'jest-formatting/padding-around-before-all-blocks': [ERROR],
    'jest-formatting/padding-around-before-each-blocks': [ERROR],
    'jest-formatting/padding-around-describe-blocks': [ERROR],
    'jest-formatting/padding-around-expect-groups': [ERROR],
    'jest-formatting/padding-around-test-blocks': [ERROR],
    'jest-formatting/padding-around-all': [ERROR],
  },
}
