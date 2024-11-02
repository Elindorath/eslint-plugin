import type { Linter } from 'eslint'
import reactPerfPlugin from 'eslint-plugin-react-perf'

import { ERROR } from '../../../constants'


export const reactPerfConfig: Linter.Config = {
  plugins: {
    'react-perf': reactPerfPlugin,
  },

  rules: {
    'react-perf/jsx-no-new-object-as-prop': [ERROR, {
      nativeAllowList: [], // default
    }],
    'react-perf/jsx-no-new-array-as-prop': [ERROR, {
      nativeAllowList: [], // default
    }],
    'react-perf/jsx-no-new-function-as-prop': [ERROR, {
      nativeAllowList: [], // default
    }],
    'react-perf/jsx-no-jsx-as-prop': [ERROR, {
      nativeAllowList: [], // default
    }],
  },
}
