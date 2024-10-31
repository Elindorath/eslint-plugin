import type { Linter } from 'eslint'
import jestPlugin from 'eslint-plugin-jest'
import globals from 'globals'

import { getRuleConfig } from '../../../utils'
import { typescriptConfig } from '../typescript-eslint/syntax-typescript'

import { OFF, ERROR } from '../../../constants'


export const jestTypescriptConfig: Linter.Config = {
  plugins: {
    jest: jestPlugin,
  },

  languageOptions: {
    globals: {
      ...globals.jest,
    },
  },

  rules: {
    'jest/no-untyped-mock-factory': [ERROR],
    // OFF as it is superseded by the 'jest/unbound-method' rule
    '@typescript-eslint/unbound-method': [OFF],
    'jest/unbound-method': getRuleConfig('@typescript-eslint/unbound-method', typescriptConfig),
  },
}
