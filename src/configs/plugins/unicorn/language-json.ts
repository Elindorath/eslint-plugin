import unicornPlugin from 'eslint-plugin-unicorn'

import { ERROR, OFF } from '../../../constants.ts'
import type { FixedLinterConfig } from '../../../types.ts'


export const unicornJsonConfig: FixedLinterConfig = {
  plugins: {
    unicorn: unicornPlugin,
  },

  rules: {
    // OFF as it is superseded by the `jsonc/key-name-casing` rule
    'unicorn/key-name-casing': [OFF],
    'unicorn/no-loss-of-precision': [ERROR],
  },
}
