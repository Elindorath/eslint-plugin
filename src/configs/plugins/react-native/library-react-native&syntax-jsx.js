'use strict';

const globals = require('globals');
const reactNativePlugin = require('eslint-plugin-react-native');


const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';


/** @type {import('eslint').Linter.FlatConfig} */
module.exports = {
  plugins: {
    'react-native': reactNativePlugin,
  },

  // TODO: Decide if we should keep that as it is very unlikely to use this config without the one from the react plugin.
  languageOptions: {
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
    globals: {
      ...globals.browser,
    },
  },

  settings: {
    'react-native/style-sheet-object-names': ['StyleSheet'], // default
  },

  rules: {
    'react-native/no-unused-styles': [ERROR],
    'react-native/sort-styles': [ERROR, 'asc', {
      ignoreClassNames: false, // default
      ignoreStyleProperties: false, // default
    }],
    'react-native/split-platform-components': [ERROR, {
      androidPathRegex: '\\.android.(js|jsx|ts|tsx)$',
      iosPathRegex: '\\.ios.(js|jsx|ts|tsx)$',
    }],
    'react-native/no-inline-styles': [ERROR],
    'react-native/no-color-literals': [ERROR],
    'react-native/no-raw-text': [ERROR, {
      skip: [], // default
    }],
    'react-native/no-single-element-style-arrays': [ERROR],
  },
};
