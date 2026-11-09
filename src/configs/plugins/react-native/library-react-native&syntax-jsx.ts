import { fixupPluginRules } from '@eslint/compat'
// @ts-expect-error: TS7016 because this plugin doesn't expose typings, TODO: remove when it does
import reactNativePlugin from 'eslint-plugin-react-native'

import { ERROR } from '../../../constants.ts'
import type { FixedLinterConfig } from '../../../types.ts'


export const reactNativeConfig: FixedLinterConfig = {
  plugins: {
    /**
     * TODO: remove the compatibility wrapper when plugin add support for ESLint v10
     * @see: https://github.com/Intellicode/eslint-plugin-react-native/issues/333
     */
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument -- Caused by the absence of types.
    'react-native': fixupPluginRules(reactNativePlugin),
  },

  settings: {
    'react-native/style-sheet-object-names': ['StyleSheet'],
  },

  /* ----- Rules ----- */
  rules: {
    'react-native/no-color-literals': [ERROR],
    'react-native/no-inline-styles': [ERROR],
    'react-native/no-raw-text': [ERROR, {
      skip: [],
    }],
    'react-native/no-single-element-style-arrays': [ERROR],
    'react-native/no-unused-styles': [ERROR],
    'react-native/sort-styles': [ERROR, 'asc', {
      ignoreClassNames: false,
      ignoreStyleProperties: false,
    }],
    'react-native/split-platform-components': [ERROR, {
      // Configured value
      androidPathRegex: String.raw`\.android.(js|jsx|ts|tsx)$`,
      // Configured value
      iosPathRegex: String.raw`\.ios.(js|jsx|ts|tsx)$`,
    }],
  },
}
