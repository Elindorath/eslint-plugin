import unicornPlugin from 'eslint-plugin-unicorn'

import { ERROR } from '../../../constants.ts'
import type { FixedLinterConfig } from '../../../types.ts'


export const unicornCssConfig: FixedLinterConfig = {
  plugins: {
    unicorn: unicornPlugin,
  },

  rules: {
    'unicorn/indent': [ERROR, {
      // Configured value
      indent: 2,
      // Configured value
      tabWidth: 2,
    }],
    'unicorn/no-conflicting-constraints': [ERROR],
    'unicorn/no-loss-of-precision': [ERROR],
  },
}
