'use strict';

const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';


module.exports = {
  parserOptions: {
    ecmaVersion: 12,
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    'react-native/style-sheet-object-names': ['StyleSheet'], // Default
  },
  rules: {
    '@elindorath/react-native/no-unused-styles': [ERROR],
    // OFF as it is a nightmare to maintain for little benefit
    '@elindorath/react-native/sort-styles': [OFF, 'asc', {
      ignoreClassNames: false, // Default
      ignoreStyleProperties: false, // Default
    }],
    '@elindorath/react-native/split-platform-components': [ERROR],
    '@elindorath/react-native/no-inline-styles': [ERROR],
    '@elindorath/react-native/no-color-literals': [ERROR],
    '@elindorath/react-native/no-raw-text': [ERROR, {
      skip: [], // Default
    }],
    '@elindorath/react-native/no-single-element-style-arrays': [ERROR],

    /* ----- Reset base config ----- */
  },
};
