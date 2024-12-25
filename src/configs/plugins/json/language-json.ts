import json from '@eslint/json'

import { ERROR } from '../../../constants.ts'

import type { Linter } from 'eslint'


export const jsonConfig = {
  plugins: {
    json,
  },

  /* ----- Language ----- */
  language: 'json/json',

  rules: {
    'json/no-duplicate-keys': [ERROR],
    'json/no-empty-keys': [ERROR],
    'json/no-unnormalized-keys': [ERROR, {
      form: 'NFC',
    }],
    'json/no-unsafe-values': [ERROR],
    'json/top-level-interop': [ERROR],
  },
} as const satisfies Linter.Config
