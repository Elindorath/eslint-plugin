import jestPlugin from 'eslint-plugin-jest'

import { ERROR } from '../../../constants.ts'
import type { FixedLinterConfig } from '../../../types.ts'


export const jestLayoutConfig: FixedLinterConfig = {
  plugins: {
    jest: jestPlugin,
  },

  /* ----- Language options ----- */
  rules: {
    'jest/prefer-todo': [ERROR],
  },
}
