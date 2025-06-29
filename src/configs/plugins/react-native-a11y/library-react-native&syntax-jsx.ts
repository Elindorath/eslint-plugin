/**
 * TODO: fix it when this plugin expose typings
 */
// @ts-expect-error: TS7016 because this plugin doesn't expose typings
import reactNativeA11yPlugin from 'eslint-plugin-react-native-a11y'

import { ERROR } from '../../../constants.ts'

import type { Linter } from 'eslint'


export const reactNativeA11yConfig = {
  plugins: {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- Caused by the absence of types.
    'react-native-a11y': reactNativeA11yPlugin,
  },

  rules: {
    /* ----- Common ----- */
    'react-native-a11y/has-accessibility-hint': [ERROR, {}],
    // Should be filled with all custom touchable components on a per project basis
    'react-native-a11y/has-accessibility-props': [ERROR, {
      touchables: [],
    }],
    'react-native-a11y/has-valid-accessibility-actions': [ERROR, {}],
    'react-native-a11y/has-valid-accessibility-component-type': [ERROR, {}],
    'react-native-a11y/has-valid-accessibility-descriptors': [ERROR, {}],
    'react-native-a11y/has-valid-accessibility-role': [ERROR, {}],
    'react-native-a11y/has-valid-accessibility-state': [ERROR, {}],
    'react-native-a11y/has-valid-accessibility-states': [ERROR, {}],
    'react-native-a11y/has-valid-accessibility-traits': [ERROR, {}],
    'react-native-a11y/has-valid-accessibility-value': [ERROR, {}],
    'react-native-a11y/no-nested-touchables': [ERROR, {}],

    /* ----- iOS specific ----- */
    // Should be filled with all custom invertable components on a per project basis
    'react-native-a11y/has-valid-accessibility-ignores-invert-colors': [ERROR, {
      invertableComponents: [],
    }],

    /* ----- Android specific ----- */
    'react-native-a11y/has-valid-accessibility-live-region': [ERROR, {}],
    'react-native-a11y/has-valid-important-for-accessibility': [ERROR, {}],
  },
} as const satisfies Linter.Config
