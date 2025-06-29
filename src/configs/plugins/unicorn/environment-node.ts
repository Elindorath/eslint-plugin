import unicornPlugin from 'eslint-plugin-unicorn'

import { ERROR } from '../../../constants.ts'
import { getRuleConfigOverride } from '../../../utilities.ts'

import { unicornVanillaConfig } from './vanilla.ts'

import type { Linter } from 'eslint'


export const unicornNodeConfig = {
  plugins: {
    unicorn: unicornPlugin,
  },

  rules: {
    'unicorn/consistent-assert': [ERROR],
    'unicorn/no-instanceof-builtins': getRuleConfigOverride('unicorn/no-instanceof-builtins', unicornVanillaConfig, {
      // `Error.isError` is not available in Node.js
      useErrorIsError: false,
    }),
    'unicorn/prefer-node-protocol': [ERROR],
  },
} as const satisfies Linter.Config
