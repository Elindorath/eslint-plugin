'use strict'

const noConstructorBindPlugin = require('eslint-plugin-no-constructor-bind')

const OFF = 'off'
const WARN = 'warn'
const ERROR = 'error'

/** @type {import('eslint').Linter.Config} */
module.exports = {
  plugins: {
    'no-constructor-bind': noConstructorBindPlugin,
  },

  rules: {
    'no-constructor-bind/no-constructor-bind': [ERROR],
    'no-constructor-bind/no-constructor-state': [ERROR],
  },
}
