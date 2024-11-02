import type { Linter } from 'eslint'
import unicornPlugin from 'eslint-plugin-unicorn'

import { ERROR } from '../../../constants'


export const unicornVanillaLayoutConfig: Linter.Config = {
  plugins: {
    unicorn: unicornPlugin,
  },

  rules: {
    'unicorn/empty-brace-spaces': [ERROR],
    'unicorn/switch-case-braces': [ERROR, 'always'], // default
  },
}
