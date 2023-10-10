'use strict';

const reactConfig = require('./library-react.js');
const jsxConfig = require('./syntax-jsx.js');
const { mergeConfigs } = require('../utils.js');


const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';

/** @type {import('eslint').Linter.FlatConfig} */
module.exports = mergeConfigs(reactConfig, jsxConfig)
