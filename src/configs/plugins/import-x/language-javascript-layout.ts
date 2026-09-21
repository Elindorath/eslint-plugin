import importPlugin from 'eslint-plugin-import-x'

import { OFF } from '../../../constants.ts'
import type { FixedLinterConfig } from '../../../types.ts'


const { createNodeResolver } = importPlugin

export const importJavascriptLayoutConfig: FixedLinterConfig = {
  plugins: {
    'import-x': importPlugin,
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
}
