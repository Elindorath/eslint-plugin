import jestPlugin from 'eslint-plugin-jest'
import globals from 'globals'

import { ERROR, OFF } from '../../../constants.ts'
import { getRuleConfig } from '../../../utils.ts'
import { typescriptConfig } from '../typescript-eslint/syntax-typescript.ts'

import type { Linter } from 'eslint'


export const jestTypescriptConfig = {
  plugins: {
    jest: jestPlugin,
  },

  /* ----- Language options ----- */
  languageOptions: {
    globals: {
      ...globals.jest,
    },
  },

  rules: {
    'jest/no-untyped-mock-factory': [ERROR],
    // OFF as it is superseded by the 'jest/unbound-method' rule
    // eslint-disable-next-line perfectionist/sort-objects -- TODO: Replace this when we find a way to express linked rules
    '@typescript-eslint/unbound-method': [OFF],
    'jest/unbound-method': getRuleConfig('@typescript-eslint/unbound-method', typescriptConfig),
  },
} as const satisfies Linter.Config
