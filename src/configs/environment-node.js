'use strict';

const globals = require('globals')
const nNodeConfig = require('./plugins/n/environment-node.js');
const unicornNodeConfig = require('./plugins/unicorn/environment-node.js');
const { mergeConfigs } = require('../utils.js');


const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';

/** @type {import('eslint').Linter.FlatConfig} */
module.exports = mergeConfigs(nNodeConfig, unicornNodeConfig, {
  languageOptions: {
    globals: {
      ...globals.nodeBuiltin,
    },
  },
})
