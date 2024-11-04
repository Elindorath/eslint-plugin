import type { Linter } from 'eslint'

/**
 * TODO: fix it when this plugin expose typings
 */
// @ts-expect-error: TS7016 because this plugin doesn't expose typings
import jestFormattingPlugin from 'eslint-plugin-jest-formatting'

import { ERROR } from '../../../constants'


export const jestFormattingConfig: Linter.Config = {
  plugins: {
    'jest-formatting': jestFormattingPlugin,
  },

  rules: {
    'jest-formatting/padding-around-after-all-blocks': [ERROR],
    'jest-formatting/padding-around-after-each-blocks': [ERROR],
    'jest-formatting/padding-around-before-all-blocks': [ERROR],
    'jest-formatting/padding-around-before-each-blocks': [ERROR],
    'jest-formatting/padding-around-describe-blocks': [ERROR],
    'jest-formatting/padding-around-expect-groups': [ERROR],
    'jest-formatting/padding-around-test-blocks': [ERROR],
    'jest-formatting/padding-around-all': [ERROR],
  },
}
