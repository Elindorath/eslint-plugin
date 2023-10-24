'use strict';

const globals = require('globals')

const { mergeConfigs } = require('../utils.js');

const importCommonJsConfig = require('./plugins/import/source-type-commonjs.js');
const unicornCommonJsConfig = require('./plugins/unicorn/source-type-commonjs.js');

const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';

/** @type {import('eslint').Linter.FlatConfig} */
module.exports = mergeConfigs(importCommonJsConfig, unicornCommonJsConfig, {
  languageOptions: {
    sourceType: 'commonjs',
    globals: {
      ...globals.commonjs,
    },
  },
})
