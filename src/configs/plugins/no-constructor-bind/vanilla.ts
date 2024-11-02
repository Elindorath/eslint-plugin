import type { Linter } from 'eslint'
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
