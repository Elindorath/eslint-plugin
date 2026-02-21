import importPlugin from 'eslint-plugin-import-x'

import { ERROR } from '../../../constants.ts'

import type { ESLint, Linter } from 'eslint'


export const browserConfig = {
  plugins: {
    /**
     * We shouldn't override this type but there are inconsistencies with the expected ESLint.Plugin type.
     * TODO: fix this when types are fixed
     */
    // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion -- See comment above
    'import-x': importPlugin as unknown as ESLint.Plugin,
  },

  rules: {
    'import-x/no-unassigned-import': [ERROR, {
      // Configured value
      allow: ['**/*.?(s)css'],
    }],
  },
} as const satisfies Linter.Config
