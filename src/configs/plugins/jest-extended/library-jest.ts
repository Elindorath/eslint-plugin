import type { Linter } from 'eslint'

/**
 * TODO: fix it when this plugin expose typings
 */
// @ts-expect-error: TS7016 because this plugin doesn't expose typings
import jestExtendedPlugin from 'eslint-plugin-jest-extended'

import { ERROR } from '../../../constants'


export const jestExtendedConfig: Linter.Config = {
  plugins: {
    'jest-extended': jestExtendedPlugin,
  },

  rules: {
    'jest-extended/prefer-to-be-array': [ERROR],
    'jest-extended/prefer-to-be-false': [ERROR],
    'jest-extended/prefer-to-be-object': [ERROR],
    'jest-extended/prefer-to-be-true': [ERROR],
    'jest-extended/prefer-to-have-been-called-once': [ERROR],
  },
}
