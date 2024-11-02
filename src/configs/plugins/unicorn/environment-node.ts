import type { Linter } from 'eslint'

import unicornPlugin from 'eslint-plugin-unicorn'

import { ERROR } from '../../../constants'


export const unicornNodeConfig: Linter.Config = {
  plugins: {
    unicorn: unicornPlugin,
  },

  rules: {
    'unicorn/prefer-node-protocol': [ERROR],
  },
}
