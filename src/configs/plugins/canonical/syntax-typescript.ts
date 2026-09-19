import canonicalPlugin from 'eslint-plugin-canonical'

import { OFF } from '../../../constants.ts'

import type { Linter } from 'eslint'


export const canonicalTypescriptConfig = {
  plugins: {
    canonical: canonicalPlugin,
  },

  rules: {
    // OFF as the '@typescript-eslint/consistent-type-imports' rule is configured to produce the separate form this one rejects
    'canonical/prefer-inline-type-import': [OFF],
  },
} as const satisfies Linter.Config
