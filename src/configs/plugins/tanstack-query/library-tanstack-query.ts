import tanstackQueryPlugin from '@tanstack/eslint-plugin-query'

import { ERROR } from '../../../constants.ts'
import type { FixedLinterConfig } from '../../../types.ts'

import type { ESLint } from 'eslint'


export const tanstackQueryConfig: FixedLinterConfig = {
  plugins: {
    /*
     * The rules are built with `@typescript-eslint/utils`, whose rule shape differs from the one
     * ESLint declares: a readonly `meta.defaultOptions` and its own `create` context type.
     * Rebuilding the object instead would break the single instance the configurations share.
     */
    // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion -- See comment above
    '@tanstack/query': tanstackQueryPlugin as unknown as ESLint.Plugin,
  },

  rules: {
    '@tanstack/query/exhaustive-deps': [ERROR, {
      allowlist: {
        types: [],
        variables: [],
      },
    }],
    '@tanstack/query/infinite-query-property-order': [ERROR],
    '@tanstack/query/mutation-property-order': [ERROR],
    '@tanstack/query/no-rest-destructuring': [ERROR],
    '@tanstack/query/prefer-query-options': [ERROR],
  },
}
