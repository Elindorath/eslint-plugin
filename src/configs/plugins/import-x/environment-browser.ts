import importPlugin from 'eslint-plugin-import-x'

import { ERROR } from '../../../constants.ts'
import type { FixedLinterConfig } from '../../../types.ts'


export const importBrowserConfig: FixedLinterConfig = {
  plugins: {
    'import-x': importPlugin,
  },

  rules: {
    'import-x/no-unassigned-import': [ERROR, {
      // Configured value
      allow: ['**/*.?(s)css'],
    }],
  },
}
