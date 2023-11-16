'use strict'

const unicornPlugin = require('eslint-plugin-unicorn')


const OFF = 'off'
const WARN = 'warn'
const ERROR = 'error'


/** @type {import('eslint').Linter.FlatConfig} */
module.exports = {
  plugins: {
    unicorn: unicornPlugin,
  },

  rules: {
    // OFF for obvious reasons
    'unicorn/prefer-module': [OFF],
    // OFF as top level await are not allowed in CommonJS format
    'unicorn/prefer-top-level-await': [OFF],
  },
}
