import jestPlugin from 'eslint-plugin-jest'
import globals from 'globals'

import { ERROR, OFF } from '../../../constants.ts'
import { getRuleConfig } from '../../../utilities.ts'

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
    'jest/no-error-equal': [ERROR],
    'jest/no-unnecessary-assertion': [ERROR],
    'jest/no-untyped-mock-factory': [ERROR],
    // OFF as it is superseded by the 'jest/unbound-method' rule
    // eslint-disable-next-line perfectionist/sort-objects -- TODO: Replace this when we find a way to express linked rules
    '@typescript-eslint/unbound-method': [OFF],
    'jest/unbound-method': getRuleConfig('@typescript-eslint/unbound-method', typescriptConfig),
    'jest/valid-expect-with-promise': [ERROR],
  },
} as const satisfies Linter.Config
