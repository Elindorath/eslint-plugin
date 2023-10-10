'use strict';

const eslintVanillaConfig = require('./plugins/eslint/vanilla.js');
const arrayFunctionVanillaConfig = require('./plugins/array-func/vanilla.js');
const eslintCommentsVanillaConfig = require('./plugins/eslint-comments/vanilla.js');
const filenamesVanillaConfig = require('./plugins/filenames-simple/vanilla.js');
const securityVanillaConfig = require('./plugins/security/vanilla.js');
const unicornVanillaConfig = require('./plugins/unicorn/vanilla.js');
const { mergeConfigs } = require('../utils.js');


const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';

/** @type {import('eslint').Linter.FlatConfig} */
module.exports = mergeConfigs(
  eslintVanillaConfig,
  arrayFunctionVanillaConfig,
  eslintCommentsVanillaConfig,
  filenamesVanillaConfig,
  securityVanillaConfig,
  unicornVanillaConfig,
)
