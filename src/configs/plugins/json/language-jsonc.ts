import json from '@eslint/json'

import { ERROR } from '../../../constants'

import type { Linter } from 'eslint'


export const jsoncConfig = {
  plugins: {
    json,
  },

  language: 'json/jsonc',

  languageOptions: {
    allowTrailingCommas: true,
  },

  rules: {
    'json/no-duplicate-keys': [ERROR],
    'json/no-empty-keys': [ERROR],
    'json/no-unsafe-values': [ERROR],
  },
} satisfies Linter.Config
