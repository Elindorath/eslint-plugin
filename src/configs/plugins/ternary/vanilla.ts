/**
 * TODO: fix it when this plugin expose typings
 */
// @ts-expect-error: TS7016 because this plugin doesn't expose typings
import ternaryPlugin from 'eslint-plugin-ternary'

import { ERROR, OFF } from '../../../constants.ts'

import type { Linter } from 'eslint'


export const ternaryVanillaConfig = {
  plugins: {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- Caused by the absence of types.
    ternary: ternaryPlugin,
  },

  rules: {
    /**
     * Conflicts with unicorn/no-nested-ternary
     * OFF as we don't want to nest ternary
     */
    'ternary/nesting': [OFF, {
      alternate: true,
      consequent: true,
      depth: 1,
      test: false,
    }],
    'ternary/no-dupe': [ERROR],

    /**
     * OFF as it reports false positive
     * @see: https://github.com/GrayedFox/eslint-plugin-ternary/issues/9
     */
    'ternary/no-unreachable': [OFF, {
      // Configured value
      allowDuplicateOrConditions: false,
    }],
  },
} as const satisfies Linter.Config
