import reactHooksPlugin from 'eslint-plugin-react-hooks'

import { ERROR } from '../../../constants.ts'

import type { Linter } from 'eslint'


export const reactHooksConfig = {
  plugins: {
    'react-hooks': reactHooksPlugin,
  },

  rules: {
    // TODO: 'additionalHooks' should be configured on a per project basis
    'react-hooks/exhaustive-deps': [ERROR, {
      additionalHooks: '',
      enableDangerousAutofixThisMayCauseInfiniteLoops: false,
    }],
    'react-hooks/rules-of-hooks': [ERROR],
  },
} as const satisfies Linter.Config
