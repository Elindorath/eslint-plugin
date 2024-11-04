import type { Linter } from 'eslint'

/**
 * TODO: fix it when this plugin expose typings
 * @see: https://github.com/jest-community/eslint-plugin-jest/issues/1469
 */
// @ts-expect-error: TS7016 because this plugin doesn't expose typings
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
