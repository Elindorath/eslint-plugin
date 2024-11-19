import json from '@eslint/json'

import { ERROR } from '../../../constants'

import type { Linter } from 'eslint'


export const jsonConfig = {
  plugins: {
    json,
  },

  language: 'json/json',

  rules: {
    'json/no-duplicate-keys': [ERROR],
    'json/no-empty-keys': [ERROR],
    'json/no-unsafe-values': [ERROR],
  },
} satisfies Linter.Config
