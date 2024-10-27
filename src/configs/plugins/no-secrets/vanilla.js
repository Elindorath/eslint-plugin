'use strict'

const noSecretsPlugin = require('eslint-plugin-no-secrets')

const OFF = 'off'
const WARN = 'warn'
const ERROR = 'error'

/** @type {import('eslint').Linter.Config} */
module.exports = {
  plugins: {
    'no-secrets': noSecretsPlugin,
  },

  rules: {
    'no-secrets/no-secrets': [ERROR, {
      tolerance: 4, // default
      additionalRegexes: {
        'Basic Auth': 'Authorization: Basic [A-Za-z0-9+/=]*',
      },
      ignoreContent: '', // default
      ignoreModules: true, // default
      ignoreIdentifiers: [], // default
      ignoreCase: false, // default
      additionalDelimiters: [], // default
    }],
  },
}
