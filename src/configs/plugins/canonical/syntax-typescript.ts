import canonicalPlugin from 'eslint-plugin-canonical'

import { OFF } from '../../../constants.ts'
import type { FixedLinterConfig } from '../../../types.ts'


export const canonicalTypescriptConfig: FixedLinterConfig = {
  plugins: {
    canonical: canonicalPlugin,
  },

  rules: {
    // OFF as the '@typescript-eslint/consistent-type-imports' rule is configured to produce the separate form this one rejects
    'canonical/prefer-inline-type-import': [OFF],
  },
}
