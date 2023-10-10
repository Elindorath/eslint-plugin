'use strict';

const jestConfig = require('./library-jest.js');
const typescriptConfig = require('./syntax-typescript.js');
const jestTypescriptConfig = require('./plugins/jest/library-jest&syntax-typescript.js');
const { mergeConfigs } = require('../utils.js');


const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';

/** @type {import('eslint').Linter.FlatConfig} */
module.exports = mergeConfigs(
  typescriptConfig,
  jestConfig,
  jestTypescriptConfig,
)
