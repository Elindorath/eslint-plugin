import unicornPlugin from 'eslint-plugin-unicorn'

import { ERROR } from '../../../constants.ts'

import type { Linter } from 'eslint'


export const unicornVanillaLayoutConfig = {
  plugins: {
    unicorn: unicornPlugin,
  },

  rules: {
    'unicorn/empty-brace-spaces': [ERROR],
    'unicorn/switch-case-braces': [ERROR, 'always'],
  },
} as const satisfies Linter.Config
