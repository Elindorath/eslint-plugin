import type { Linter } from 'eslint'

/**
 * TODO: fix it when this plugin expose typings
 * @see: https://github.com/freaktechnik/eslint-plugin-array-func/issues/492
 */
// @ts-expect-error: TS7016 because this plugin doesn't expose typings
import arrayFunctionPlugin from 'eslint-plugin-array-func'

import { OFF, ERROR } from '../../../constants'


export const arrayFunctionVanillaConfig: Linter.Config = {
  plugins: {
    'array-func': arrayFunctionPlugin,
  },

  rules: {
    'array-func/from-map': [ERROR],
    // OFF as the rule 'unicorn/no-array-method-this-argument' check the same thing
    'array-func/no-unnecessary-this-arg': [OFF],
    // OFF as it conflicts with the rule 'unicorn/prefer-spread'
    'array-func/prefer-array-from': [OFF],
    'array-func/avoid-reverse': [ERROR],
    // OFF as the rule 'unicorn/prefer-array-flat-map' check the same thing
    'array-func/prefer-flat-map': [OFF],
    'array-func/prefer-flat': [ERROR],
  },
}
