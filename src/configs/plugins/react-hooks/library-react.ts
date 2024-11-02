import type { Linter } from 'eslint'
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
