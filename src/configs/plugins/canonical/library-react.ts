import canonicalPlugin from 'eslint-plugin-canonical'

import { ERROR } from '../../../constants.ts'

import type { Linter } from 'eslint'


export const canonicalReactConfig = {
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
} as const satisfies Linter.Config
