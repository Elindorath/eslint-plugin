import importPlugin from 'eslint-plugin-import-x'

import { OFF } from '../../../constants'

import type { ESLint, Linter } from 'eslint'


export const importVanillaLayoutConfig: Linter.Config = {
  plugins: {
    /**
     * We shouldn't override this type but there are inconsistencies with the expected ESLint.Plugin type.
     * TODO: fix this when types are fixed
     */
    'import-x': importPlugin as unknown as ESLint.Plugin,
  },

  settings: {
    'import-x/extensions': [
      '.js',
      '.jsx',
      '.json',
      '.json5',
    ],
    'import-x/ignore': [
      'node_modules',
    ],
    'import-x/core-modules': [],
    'import-x/external-module-folders': [
      'node_modules',
    ],
    'import-x/parsers': {},
    'import-x/resolver': {
      node: true,
    },
    // Might change when using eslint_d
    // @see https://github.com/benmosher/eslint-plugin-import#importcache
    'import-x/cache': {
      lifetime: Number.POSITIVE_INFINITY,
    },
    'import-x/internal-regex': '',
  },
  rules: {
    /* ----- Style guide ----- */
    // OFF as it doesn't support comments between imports
    // See: https://github.com/import-js/eslint-plugin-import/issues/2673
    'import-x/newline-after-import': [OFF, {
      count: 1, // default
      exactCount: true,
      considerComments: true,
    }],
  },
}
