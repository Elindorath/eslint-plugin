/**
 * TODO: fix it when this plugin expose typings
 */
// @ts-expect-error: TS7016 because this plugin doesn't expose typings
import noUseExtendNativePlugin from 'eslint-plugin-no-use-extend-native'

import { ERROR } from '../../../constants.ts'

import type { Linter } from 'eslint'


export const noUseExtendNativeVanillaConfig = {
  plugins: {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- Caused by the absence of types.
    'no-use-extend-native': noUseExtendNativePlugin,
  },

  rules: {
    // TODO: Make a PR to the plugin to allow extending specific native objects
    'no-use-extend-native/no-use-extend-native': [ERROR],
  },
} as const satisfies Linter.Config
