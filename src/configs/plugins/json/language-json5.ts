import json from '@eslint/json'

import { ERROR, OFF } from '../../../constants.ts'

import type { ESLint, Linter } from 'eslint'


export const json5Config = {
  plugins: {
    /**
     * We shouldn't override this type but there are inconsistencies with the expected ESLint.Plugin type.
     * TODO: fix this when types are fixed
     */
    // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion -- See comment above
    json: json as unknown as ESLint.Plugin,
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
    // OFF as the ordering is handled by the 'jsonc/sort-keys' rule
    'json/sort-keys': [OFF],
    'json/top-level-interop': [ERROR],
  },
} as const satisfies Linter.Config
