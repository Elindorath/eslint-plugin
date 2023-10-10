'use strict';

const jestDomPlugin = require('eslint-plugin-jest-dom')

const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';

/** @type {import('eslint').Linter.FlatConfig} */
module.exports = {
  plugins: {
    'jest-dom': jestDomPlugin,
  },

  rules: {
    'jest-dom/prefer-checked': [ERROR],
    'jest-dom/prefer-empty': [ERROR],
    'jest-dom/prefer-enabled-disabled': [ERROR],
    'jest-dom/prefer-focus': [ERROR],
    'jest-dom/prefer-in-document': [ERROR],
    'jest-dom/prefer-required': [ERROR],
    'jest-dom/prefer-to-have-attribute': [ERROR],
    'jest-dom/prefer-to-have-class': [ERROR],
    'jest-dom/prefer-to-have-style': [ERROR],
    'jest-dom/prefer-to-have-text-content': [ERROR],
    'jest-dom/prefer-to-have-value': [ERROR],
  },
};
