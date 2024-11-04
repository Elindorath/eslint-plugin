import importPlugin from 'eslint-plugin-import-x'

import { ERROR } from '../../../constants'

import type { ESLint, Linter } from 'eslint'


export const importBrowserConfig: Linter.Config = {
  plugins: {
    /**
     * We shouldn't override this type but there are inconsistencies with the expected ESLint.Plugin type.
     * TODO: fix this when types are fixed
     */
    'import-x': importPlugin as unknown as ESLint.Plugin,
  },

  rules: {
    'import-x/no-unassigned-import': [ERROR, {
      allow: ['**/*.?(s)css'],
    }],
  },
}
