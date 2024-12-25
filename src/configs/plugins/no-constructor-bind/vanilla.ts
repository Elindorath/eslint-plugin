/**
 * TODO: fix it when this plugin expose typings
 */
// @ts-expect-error: TS7016 because this plugin doesn't expose typings
import noConstructorBindPlugin from 'eslint-plugin-no-constructor-bind'

import { ERROR } from '../../../constants.ts'

import type { Linter } from 'eslint'


export const noConstructorBindVanillaConfig = {
  plugins: {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- Caused by the absence of types.
    'no-constructor-bind': noConstructorBindPlugin,
  },

  rules: {
    'no-constructor-bind/no-constructor-bind': [ERROR],
    'no-constructor-bind/no-constructor-state': [ERROR],
  },
} as const satisfies Linter.Config
