/**
 * TODO: fix it when this plugin expose typings
 */
// @ts-expect-error: TS7016 because this plugin doesn't expose typings
import reactNativePlugin from 'eslint-plugin-react-native'
import globals from 'globals'

import { ERROR } from '../../../constants.ts'

import type { Linter } from 'eslint'


export const reactNativeConfig = {
  plugins: {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- Caused by the absence of types.
    'react-native': reactNativePlugin,
  },

  /* ----- Language options ----- */
  // TODO: Decide if we should keep that as it is very unlikely to use this config without the one from the react plugin.
  languageOptions: {
    globals: {
      ...globals.browser,
    },
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
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
} as const satisfies Linter.Config
