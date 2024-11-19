import json from '@eslint/json'

import { ERROR } from '../../../constants'

import type { Linter } from 'eslint'


export const json5Config = {
  plugins: {
    json,
  },

  language: 'json/json5',

  rules: {
    'json/no-duplicate-keys': [ERROR],
    'json/no-empty-keys': [ERROR],
    'json/no-unsafe-values': [ERROR],
  },
} satisfies Linter.Config
