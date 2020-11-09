'use strict';

const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';


module.exports = {
  rules: {
    /* ----- Common ----- */
    '@elindorath/react-native-a11y/has-accessibility-hint': [ERROR],
    // Should be filled with all custom touchable components on a per project basis
    '@elindorath/react-native-a11y/has-accessibility-props': [ERROR, {
      touchables: [], // Default
    }],
    '@elindorath/react-native-a11y/has-valid-accessibility-actions': [ERROR],
    '@elindorath/react-native-a11y/has-valid-accessibility-role': [ERROR],
    '@elindorath/react-native-a11y/has-valid-accessibility-state': [ERROR],
    '@elindorath/react-native-a11y/has-valid-accessibility-states': [ERROR],
    '@elindorath/react-native-a11y/has-valid-accessibility-component-type': [ERROR],
    '@elindorath/react-native-a11y/has-valid-accessibility-traits': [ERROR],
    '@elindorath/react-native-a11y/has-valid-accessibility-value': [ERROR],
    '@elindorath/react-native-a11y/no-nested-touchables': [ERROR],

    /* ----- iOS specific ----- */
    // Should be filled with all custom invertable components on a per project basis
    '@elindorath/react-native-a11y/has-valid-accessibility-ignores-invert-colors': [ERROR, {
      invertableComponents: [], // Default
    }],

    /* ----- Android specific ----- */
    '@elindorath/react-native-a11y/has-valid-accessibility-live-region': [ERROR],
    '@elindorath/react-native-a11y/has-valid-important-for-accessibility': [ERROR],
  },
};
