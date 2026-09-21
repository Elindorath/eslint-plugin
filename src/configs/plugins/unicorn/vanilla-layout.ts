import unicornPlugin from 'eslint-plugin-unicorn'

import { ERROR } from '../../../constants.ts'
import type { FixedLinterConfig } from '../../../types.ts'


export const unicornVanillaLayoutConfig: FixedLinterConfig = {
  plugins: {
    unicorn: unicornPlugin,
  },

  rules: {
    'unicorn/empty-brace-spaces': [ERROR],
    'unicorn/switch-case-braces': [ERROR, 'always'],
  },
}
