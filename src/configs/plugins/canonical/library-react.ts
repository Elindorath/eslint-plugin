import canonicalPlugin from 'eslint-plugin-canonical'

import { ERROR } from '../../../constants.ts'
import type { FixedLinterConfig } from '../../../types.ts'


export const canonicalReactConfig: FixedLinterConfig = {
  plugins: {
    canonical: canonicalPlugin,
  },

  rules: {
    'canonical/prefer-react-lazy': [ERROR],
    'canonical/prefer-use-mount': [ERROR],
    'canonical/sort-react-dependencies': [ERROR, {
      order: 'asc',
    }],
  },
}
