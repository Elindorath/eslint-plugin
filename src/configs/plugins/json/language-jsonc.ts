import json from '@eslint/json'

import { ERROR } from '../../../constants.ts'

import type { Linter } from 'eslint'


export const jsoncConfig = {
  plugins: {
    json,
  },

  /* ----- Language ----- */
  language: 'json/jsonc',

  // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion -- Types definitions are not very well handled for other languages
  languageOptions: {
    allowTrailingCommas: true,
  } as Linter.LanguageOptions,

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
