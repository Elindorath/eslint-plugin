import type { Linter } from 'eslint'

/**
 * TODO: fix it when this plugin expose typings
 */
// @ts-expect-error: TS7016 because this plugin doesn't expose typings
import noConstructorBindPlugin from 'eslint-plugin-no-constructor-bind'

import { ERROR } from '../../../constants'


export const noConstructorBindVanillaConfig: Linter.Config = {
  plugins: {
    'no-constructor-bind': noConstructorBindPlugin,
  },

  rules: {
    'no-constructor-bind/no-constructor-bind': [ERROR],
    'no-constructor-bind/no-constructor-state': [ERROR],
  },
}
