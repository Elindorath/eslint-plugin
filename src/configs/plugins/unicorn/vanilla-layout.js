'use strict'

const unicornPlugin = require('eslint-plugin-unicorn')


const OFF = 'off'
const WARN = 'warn'
const ERROR = 'error'


/** @type {import('eslint').Linter.Config} */
module.exports = {
  plugins: {
    unicorn: unicornPlugin,
  },

  rules: {
    'unicorn/empty-brace-spaces': [ERROR],
    'unicorn/switch-case-braces': [ERROR, 'always'], // default
  },
}
