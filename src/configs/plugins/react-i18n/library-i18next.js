'use strict'

const reactI18nPlugin = require('eslint-plugin-react-i18n')


const OFF = 'off'
const WARN = 'warn'
const ERROR = 'error'


const functionNames = ['t'] // default

/** @type {import('eslint').Linter.FlatConfig} */
module.exports = {
  plugins: {
    'react-i18n': reactI18nPlugin,
  },

  rules: {
    'react-i18n/no-dynamic-translation-keys': [ERROR, {
      functionNames,
    }],
    'react-i18n/no-missing-interpolation-keys': [ERROR, {
      functionNames,
      prefix: '{{', // default
      suffix: '}}', // default
    }],
  },
}
