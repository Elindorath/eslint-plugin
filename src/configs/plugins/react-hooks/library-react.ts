import type { Linter } from 'eslint'

/**
 * TODO: fix it when this plugin expose typings
 * @see: https://github.com/facebook/react/issues/30119
 */
// @ts-expect-error: TS7016 because this plugin doesn't expose typings
import reactHooksPlugin from 'eslint-plugin-react-hooks'

import { ERROR } from '../../../constants'


export const reactHooksConfig: Linter.Config = {
  plugins: {
    'react-hooks': reactHooksPlugin,
  },

  rules: {
    'react-hooks/rules-of-hooks': [ERROR],
    // TODO: 'additionalHooks' should be configured on a per project basis
    'react-hooks/exhaustive-deps': [ERROR, {
      additionalHooks: '', // default
      enableDangerousAutofixThisMayCauseInfiniteLoops: false, // default
    }],
  },
}
