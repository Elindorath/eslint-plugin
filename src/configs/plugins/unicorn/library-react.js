'use strict';

const unicornPlugin = require('eslint-plugin-unicorn');


const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';


/** @type {import('eslint').Linter.FlatConfig} */
module.exports = {
  plugins: {
    unicorn: unicornPlugin,
  },

  rules: {
    'unicorn/prevent-abbreviations': [ERROR, {
      replacements: {}, // default here: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/28e7498ad06679bb92343db53bb40a7b5ba2990a/rules/shared/abbreviations.js#L3
      extendDefaultReplacements: true, // default
      allowList: {}, // default here: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/28e7498ad06679bb92343db53bb40a7b5ba2990a/rules/shared/abbreviations.js#L230
      extendDefaultAllowList: true, // default
      checkDefaultAndNamespaceImports: true,
      checkShorthandImports: false,
      checkShorthandProperties: true,
      checkProperties: true,
      checkVariables: true, // default
      checkFilenames: true, // default
      ignore: [], // default
    }],
  },
};
