/**
 * TODO: fix it when this plugin expose typings
 */
// @ts-expect-error: TS7016 because this plugin doesn't expose typings
import reactPerfPlugin from 'eslint-plugin-react-perf'

import { ERROR } from '../../../constants.ts'

import type { Linter } from 'eslint'


export const reactPerfConfig = {
  plugins: {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- Caused by the absence of types.
    'react-perf': reactPerfPlugin,
  },

  rules: {
    'react-perf/jsx-no-jsx-as-prop': [ERROR, {
      nativeAllowList: [],
    }],
    'react-perf/jsx-no-new-array-as-prop': [ERROR, {
      nativeAllowList: [],
    }],
    'react-perf/jsx-no-new-function-as-prop': [ERROR, {
      nativeAllowList: [],
    }],
    'react-perf/jsx-no-new-object-as-prop': [ERROR, {
      nativeAllowList: [],
    }],
  },
} as const satisfies Linter.Config
