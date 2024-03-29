'use strict'

const typescriptPlugin = require('@typescript-eslint/eslint-plugin')
const typescriptParser = require('@typescript-eslint/parser')

// const { OFF, ERROR } = require('../constants.js');

const OFF = 'off'
const ERROR = 'error'


/** @type {import('eslint').Linter.FlatConfig} */
module.exports = {
  // files: ['*.ts', '*.tsx', '*.mts', '*.cts'],

  languageOptions: {
    parser: typescriptParser,
    // Might be exported to environment
    parserOptions: {
      sourceType: 'module',
      warnOnUnsupportedTypeScriptVersion: true,
    },
  },

  plugins: {
    '@typescript-eslint': typescriptPlugin,
  },

  rules: {
    // Should probably be tweaked in the future
    '@typescript-eslint/naming-convention': [ERROR,
      {
        selector: 'default',
        format: ['camelCase'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'allow',
      },

      {
        selector: 'variable',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'allow',
      },

      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },

      {
        selector: 'function',
        format: ['camelCase', 'PascalCase'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'allow',
      },
    ],
  },
}
