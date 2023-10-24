'use strict'

const importPlugin = require('eslint-plugin-import')

const OFF = 'off'
const WARN = 'warn'
const ERROR = 'error'

/** @type {import('eslint').Linter.FlatConfig} */
module.exports = {
  plugins: {
    import: importPlugin,
  },

  rules: {
    'import/no-unassigned-import': [ERROR, {
      allow: ['**/*.?(s)css'],
    }],
  },
}
