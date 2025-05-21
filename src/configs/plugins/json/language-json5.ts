import json from '@eslint/json'

import { ERROR } from '../../../constants.ts'
import { getRuleConfig } from '../../../utils.ts'
import { eslintVanillaConfig } from '../eslint/vanilla.ts'

import type { Linter } from 'eslint'


export const json5Config = {
  plugins: {
    json,
  },

  /* ----- Language ----- */
  language: 'json/json5',

  rules: {
    'json/no-duplicate-keys': [ERROR],
    'json/no-empty-keys': [ERROR],
    'json/no-unnormalized-keys': [ERROR, {
      form: 'NFC',
    }],
    'json/no-unsafe-values': [ERROR],
    'json/sort-keys': getRuleConfig('sort-keys', eslintVanillaConfig),
    'json/top-level-interop': [ERROR],
  },
} as const satisfies Linter.Config
