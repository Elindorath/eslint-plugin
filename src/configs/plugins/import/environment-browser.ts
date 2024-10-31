import type { Linter } from 'eslint'
import importPlugin from 'eslint-plugin-import'

import { ERROR } from '../../../constants'


export const importBrowserConfig: Linter.Config = {
  plugins: {
    import: importPlugin,
  },

  rules: {
    'import/no-unassigned-import': [ERROR, {
      allow: ['**/*.?(s)css'],
    }],
  },
}
