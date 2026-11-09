import unicornPlugin from 'eslint-plugin-unicorn'

import { ERROR, OFF } from '../../../constants.ts'
import type { FixedLinterConfig } from '../../../types.ts'


export const unicornJsonLayoutConfig: FixedLinterConfig = {
  plugins: {
    unicorn: unicornPlugin,
  },

  rules: {
    'unicorn/comma-spacing': [ERROR],
    // OFF as it is superseded by the `jsonc/indent` rule
    'unicorn/indent': [OFF],
  },
}
