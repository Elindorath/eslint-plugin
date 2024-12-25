import unicornPlugin from 'eslint-plugin-unicorn'

import { ERROR } from '../../../constants.ts'

import type { Linter } from 'eslint'


export const unicornNodeConfig = {
  plugins: {
    unicorn: unicornPlugin,
  },

  rules: {
    'unicorn/prefer-node-protocol': [ERROR],
  },
} as const satisfies Linter.Config
