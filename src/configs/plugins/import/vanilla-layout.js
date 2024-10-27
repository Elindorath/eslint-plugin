'use strict'

// const process = require('node:process')
const importPlugin = require('eslint-plugin-import')

const OFF = 'off'
const WARN = 'warn'
const ERROR = 'error'

/** @type {import('eslint').Linter.Config} */
module.exports = {
  plugins: {
    import: importPlugin,
  },

  settings: {
    'import/extensions': [
      '.js',
      '.jsx',
      '.json',
      '.json5',
    ],
    'import/ignore': [
      'node_modules',
    ],
    'import/core-modules': [],
    'import/external-module-folders': [
      'node_modules',
    ],
    'import/parsers': {},
    'import/resolver': {
      node: true,
    },
    // Might change when using eslint_d
    // @see https://github.com/benmosher/eslint-plugin-import#importcache
    'import/cache': {
      lifetime: Number.POSITIVE_INFINITY,
    },
    'import/internal-regex': '',
  },
  rules: {
    /* ----- Style guide ----- */
    // OFF as it doesn't support comments between imports
    // See: https://github.com/import-js/eslint-plugin-import/issues/2673
    'import/newline-after-import': [OFF, {
      count: 1, // default
      exactCount: true,
      considerComments: true,
    }],
  },
}
