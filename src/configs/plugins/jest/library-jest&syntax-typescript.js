'use strict';

const globals = require('globals');
const jestPlugin = require('eslint-plugin-jest')

const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';

/** @type {import('eslint').Linter.FlatConfig} */
module.exports = {
  plugins: {
    jest: jestPlugin,
  },

  languageOptions: {
    globals: {
      ...globals.jest,
    },
  },

  rules: {
    'jest/no-untyped-mock-factory': [ERROR],
    // OFF as it is superseded by the 'jest/unbound-method' rule
    '@typescript-eslint/unbound-method': [OFF],
    'jest/unbound-method': [ERROR, {
      ignoreStatic: false, // default
    }],
  },
};
