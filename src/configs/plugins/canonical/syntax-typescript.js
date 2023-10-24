'use strict';

const canonicalPlugin = require('eslint-plugin-canonical');

const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';


/** @type {import('eslint').Linter.FlatConfig} */
module.exports = {
  plugins: {
    'canonical': canonicalPlugin,
  },

  rules: {
    'canonical/destructuring-property-newline': [ERROR],
    'canonical/export-specifier-newline': [ERROR],
    'canonical/filename-match-exported': [ERROR, {
      transforms: [false, 'pascal'],
    }],
    'canonical/filename-match-regex': [ERROR],
    'canonical/filename-no-index': [ERROR],
    'canonical/id-match': [ERROR],
    'canonical/import-specifier-newline': [ERROR],
    'canonical/no-barrel-import': [ERROR],
    'canonical/no-export-all': [ERROR],
    'canonical/no-reassign-imports': [ERROR],
    'canonical/no-restricted-imports': [ERROR],
    'canonical/no-restricted-strings': [ERROR],
    'canonical/no-unused-exports': [ERROR],
    'canonical/no-use-extend-native': [ERROR],
    'canonical/prefer-import-alias': [ERROR],
    'canonical/prefer-inline-type-import': [ERROR],
    'canonical/prefer-react-lazy': [ERROR],
    'canonical/prefer-use-mount': [ERROR],
    'canonical/require-extension': [ERROR],
    'canonical/sort-destructure-keys': [ERROR],
    'canonical/sort-keys': [ERROR],
    'canonical/sort-react-dependencies': [ERROR],
    'canonical/virtual-module': [ERROR],
  },
};
