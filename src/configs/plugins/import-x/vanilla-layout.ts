import importPlugin from 'eslint-plugin-import-x'

import { OFF } from '../../../constants.ts'

import type { ESLint, Linter } from 'eslint'


const { createNodeResolver } = importPlugin

export const importVanillaLayoutConfig = {
  plugins: {
    /**
     * We shouldn't override this type but there are inconsistencies with the expected ESLint.Plugin type.
     * TODO: fix this when types are fixed
     */
    // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion -- See comment above
    'import-x': importPlugin as unknown as ESLint.Plugin,
  },

  settings: {
    /**
     * Might change when using eslint_d
     * @see: https://github.com/benmosher/eslint-plugin-import#importcache
     */
    'import-x/cache': {
      lifetime: Number.POSITIVE_INFINITY,
    },
    'import-x/core-modules': [],
    'import-x/extensions': [
      '.js',
      '.jsx',
      '.json',
      '.json5',
    ],
    'import-x/external-module-folders': [
      'node_modules',
    ],
    'import-x/ignore': [
      'node_modules',
    ],
    'import-x/internal-regex': '',
    'import-x/parsers': {},
    'import-x/resolver-next': [
      createNodeResolver(),
    ],
  },

  /* ----- Rules ----- */
  rules: {
    /* ----- Style guide ----- */
    /**
     * OFF as it doesn't support comments between imports
     * @see: https://github.com/import-js/eslint-plugin-import/issues/2673
     */
    'import-x/newline-after-import': [OFF, {
      // Configured value
      considerComments: true,
      count: 1,
      // Configured value
      exactCount: true,
    }],
  },
} as const satisfies Linter.Config
