'use strict'

const process = require('node:process')


const OFF = 'off'
const WARN = 'warn'
const ERROR = 'error'


module.exports = {
  settings: {
    'import/extensions': [
      '.ts',
      '.tsx',
      '.json',
      '.json5',
    ],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        project: process.cwd(),
      },
      node: {},
    },
  },
  rules: {
    /* ----- Helpful warnings ----- */
    // OFF as the plugin doesn't support CommonJS export
    'import/no-unused-modules': [OFF],

    /* ----- Module systems ----- */
    // OFF as we use commonjs in node context
    'import/no-commonjs': [OFF, {
      allowRequire: false, // default
      allowConditionalRequire: true, // default
      allowPrimitiveModules: false, // default
    }],
    // OFF as we use node module in node context
    'import/no-nodejs-modules': [OFF, {
      allow: [], // default
    }],

    /* ----- Style guide ----- */
    'import/extensions': [ERROR, 'always', {
      ignorePackages: true,
      pattern: {
        ts: 'ignorePackages',
        tsx: 'ignorePackages',
      },
    }],
  },
}
