'use strict'

const canonicalPlugin = require('eslint-plugin-canonical')
const { findUpSync } = require('find-up-simple')

const OFF = 'off'
const WARN = 'warn'
const ERROR = 'error'


/** @type {import('eslint').Linter.Config} */
module.exports = {
  plugins: {
    canonical: canonicalPlugin,
  },

  rules: {
    'canonical/destructuring-property-newline': [ERROR, {
      allowAllPropertiesOnSameLine: false, // default
    }],
    'canonical/export-specifier-newline': [ERROR],
    'canonical/import-specifier-newline': [ERROR],
    'canonical/no-barrel-import': [ERROR],
    'canonical/no-export-all': [ERROR],
    'canonical/no-import-namespace-destructure': [ERROR],
    'canonical/no-re-export': [ERROR],
    'canonical/no-unused-exports': [ERROR, {
      allowUnusedEnums: false, // default
      allowUnusedTypes: false, // default
      tsConfigPath: findUpSync('tsconfig.json'),
    }],
    // TODO: This need some testing
    'canonical/require-extension': [ERROR, {
      ignorePackages: false, // default
    }],
  },
}
