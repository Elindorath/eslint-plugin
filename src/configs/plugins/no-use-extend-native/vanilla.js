'use strict'

const { default: noUseExtendNativePlugin } = require('eslint-plugin-no-use-extend-native')

const OFF = 'off'
const WARN = 'warn'
const ERROR = 'error'

/** @type {import('eslint').Linter.Config} */
module.exports = {
  plugins: {
    'no-use-extend-native': noUseExtendNativePlugin,
  },

  rules: {
    // TODO: Make a PR to the plugin to allow extending specific native objects
    'no-use-extend-native/no-use-extend-native': [ERROR],
  },
}
