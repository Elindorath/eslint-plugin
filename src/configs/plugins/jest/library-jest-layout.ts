import type { Linter } from 'eslint'

import jestPlugin from 'eslint-plugin-jest'
import globals from 'globals'

import { ERROR } from '../../../constants'


export const jestLayoutConfig: Linter.Config = {
  plugins: {
    jest: jestPlugin,
  },

  languageOptions: {
    globals: {
      ...globals.jest,
    },
  },

  rules: {
    'jest/prefer-todo': [ERROR],
  },
}
