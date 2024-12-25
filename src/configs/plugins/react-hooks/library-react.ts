/**
 * TODO: fix it when this plugin expose typings
 * @see: https://github.com/facebook/react/issues/30119
 */
// @ts-expect-error: TS7016 because this plugin doesn't expose typings
import reactHooksPlugin from 'eslint-plugin-react-hooks'

import { ERROR } from '../../../constants.ts'

import type { Linter } from 'eslint'


export const reactHooksConfig = {
  plugins: {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- Caused by the absence of types.
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
