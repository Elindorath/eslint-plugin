import unicornPlugin from 'eslint-plugin-unicorn'

import { OFF } from '../../../constants.ts'

import type { Linter } from 'eslint'


export const unicornCommonJsConfig = {
  plugins: {
    unicorn: unicornPlugin,
  },

  rules: {
    // OFF for obvious reasons
    'unicorn/prefer-module': [OFF],
    // OFF as top level await are not allowed in CommonJS format
    'unicorn/prefer-top-level-await': [OFF],
  },
} as const satisfies Linter.Config
