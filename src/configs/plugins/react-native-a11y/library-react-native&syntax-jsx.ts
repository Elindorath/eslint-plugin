import type { Linter } from 'eslint'
import reactNativeA11yPlugin from 'eslint-plugin-react-native-a11y'

import { ERROR } from '../../../constants'


export const reactNativeA11yConfig: Linter.Config = {
  plugins: {
    'react-native-a11y': reactNativeA11yPlugin,
  },

  rules: {
    /* ----- Common ----- */
    'react-native-a11y/has-accessibility-hint': [ERROR, {}],
    // Should be filled with all custom touchable components on a per project basis
    'react-native-a11y/has-accessibility-props': [ERROR, {
      touchables: [], // Default
    }],
    'react-native-a11y/has-valid-accessibility-actions': [ERROR, {}],
    'react-native-a11y/has-valid-accessibility-role': [ERROR, {}],
    'react-native-a11y/has-valid-accessibility-state': [ERROR, {}],
    'react-native-a11y/has-valid-accessibility-states': [ERROR, {}],
    'react-native-a11y/has-valid-accessibility-component-type': [ERROR, {}],
    'react-native-a11y/has-valid-accessibility-traits': [ERROR, {}],
    'react-native-a11y/has-valid-accessibility-value': [ERROR, {}],
    'react-native-a11y/no-nested-touchables': [ERROR, {}],
    'react-native-a11y/has-valid-accessibility-descriptors': [ERROR, {}],

    /* ----- iOS specific ----- */
    // Should be filled with all custom invertable components on a per project basis
    'react-native-a11y/has-valid-accessibility-ignores-invert-colors': [ERROR, {
      invertableComponents: [], // Default
    }],

    /* ----- Android specific ----- */
    'react-native-a11y/has-valid-accessibility-live-region': [ERROR, {}],
    'react-native-a11y/has-valid-important-for-accessibility': [ERROR, {}],
  },
}
