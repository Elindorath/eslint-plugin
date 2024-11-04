import type { Linter } from 'eslint'

/**
 * TODO: fix it when this plugin expose typings
 */
// @ts-expect-error: TS7016 because this plugin doesn't expose typings
import jestDomPlugin from 'eslint-plugin-jest-dom'

import { ERROR } from '../../../constants'


export const jestDomConfig: Linter.Config = {
  plugins: {
    'jest-dom': jestDomPlugin,
  },

  rules: {
    'jest-dom/prefer-checked': [ERROR],
    'jest-dom/prefer-empty': [ERROR],
    'jest-dom/prefer-enabled-disabled': [ERROR],
    'jest-dom/prefer-focus': [ERROR],
    'jest-dom/prefer-in-document': [ERROR],
    'jest-dom/prefer-required': [ERROR],
    'jest-dom/prefer-to-have-attribute': [ERROR],
    'jest-dom/prefer-to-have-class': [ERROR],
    'jest-dom/prefer-to-have-style': [ERROR],
    'jest-dom/prefer-to-have-text-content': [ERROR],
    'jest-dom/prefer-to-have-value': [ERROR],
  },
}
