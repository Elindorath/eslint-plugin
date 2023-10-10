'use strict';

const reactConfig = require('./plugins/react/library-react.js');
const reactHooksConfig = require('./plugins/react-hooks/library-react.js');
const { mergeConfigs } = require('../utils.js');


const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';

/** @type {import('eslint').Linter.FlatConfig} */
module.exports = mergeConfigs(reactConfig, reactHooksConfig)
