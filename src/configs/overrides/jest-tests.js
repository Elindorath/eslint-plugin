'use strict';

const { mergeConfigs } = require('../../utils.js');
const jestTypescriptConfig = require('../library-jest&syntax-typescript.js')
const vanillaConfig = require('../vanilla.js')


const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';

/** @type {Array<import('eslint').Linter.FlatConfig>} */
module.exports = mergeConfigs(vanillaConfig, jestTypescriptConfig, {
  files: ['**/*.test.{ts,tsx}'],
})
