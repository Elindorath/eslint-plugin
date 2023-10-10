'use strict';

const { buildPrefixedRulesFromConfig } = require('../../../utils.js');
const baseConfig = require('../core/common.js');


const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';

const babelRules = [
  'new-cap',
  'no-invalid-this',
  'no-unused-expressions',
  'object-curly-spacing',
  'semi',
];


module.exports = {
  parser: '@babel/eslint-parser',
  rules: buildPrefixedRulesFromConfig('@elindorath/babel', babelRules, baseConfig),
};
