'use strict';

const reactNativeConfig = require('./plugins/react-native/library-react-native&syntax-jsx.js');
const reactNativeA11yConfig = require('./plugins/react-native-a11y/library-react-native&syntax-jsx.js');
const { mergeConfigs } = require('../utils.js');

const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';

/** @type {import('eslint').Linter.FlatConfig} */
module.exports = mergeConfigs(reactNativeConfig, reactNativeA11yConfig)
