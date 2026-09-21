import json from '@eslint/json'

import { ERROR, OFF } from '../../../constants.ts'
import type { FixedLinterConfig } from '../../../types.ts'


export const json5LanguageConfig: FixedLinterConfig = {
  plugins: {
    json,
  },

  /* ----- Language ----- */
  language: 'json/json5',

  rules: {
    // OFF as the 'jsonc/no-dupe-keys' rule reports the same duplicates
    'json/no-duplicate-keys': [OFF],
    'json/no-empty-keys': [ERROR],
    'json/no-unnormalized-keys': [ERROR, {
      form: 'NFC',
    }],
    'json/no-unsafe-values': [ERROR],
    // OFF as the ordering is handled by the 'jsonc/sort-keys' rule
    'json/sort-keys': [OFF],
    'json/top-level-interop': [ERROR],
  },
}
