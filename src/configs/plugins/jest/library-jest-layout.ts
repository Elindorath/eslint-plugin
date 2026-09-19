import jestPlugin from 'eslint-plugin-jest'

import { ERROR } from '../../../constants.ts'

import type { Linter } from 'eslint'


export const jestLayoutConfig = {
  plugins: {
    jest: jestPlugin,
  },

  /* ----- Language options ----- */
  rules: {
    'jest/prefer-todo': [ERROR],
  },
} as const satisfies Linter.Config
