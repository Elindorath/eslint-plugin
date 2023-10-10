'use strict';

const globals = require('globals')
const unicornCommonJsConfig = require('./plugins/unicorn/source-type-commonjs.js');
const { mergeConfigs } = require('../utils.js');


const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';

/** @type {import('eslint').Linter.FlatConfig} */
module.exports = mergeConfigs(unicornCommonJsConfig, {
  languageOptions: {
    sourceType: 'commonjs',
    globals: {
      ...globals.commonjs,
    },
  },
})
