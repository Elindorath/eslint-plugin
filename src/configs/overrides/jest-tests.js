'use strict';

const vanillaConfig = require('../vanilla.js')
const jestTypescriptConfig = require('../library-jest&syntax-typescript.js')
const { mergeConfigs } = require('../../utils.js');


const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';

/** @type {Array<import('eslint').Linter.FlatConfig>} */
module.exports = mergeConfigs(vanillaConfig, jestTypescriptConfig, {
  files: ['**/*.test.{ts,tsx}'],
})
