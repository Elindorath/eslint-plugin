import unicornPlugin from 'eslint-plugin-unicorn'

import { ERROR } from '../../../constants.ts'
import type { FixedLinterConfig } from '../../../types.ts'
import { getRuleConfigOverride } from '../../../utilities.ts'

import { unicornJavascriptConfig } from './language-javascript.ts'


export const unicornNodeConfig: FixedLinterConfig = {
  plugins: {
    unicorn: unicornPlugin,
  },

  rules: {
    'unicorn/consistent-assert': [ERROR],
    'unicorn/no-instanceof-builtins': getRuleConfigOverride('unicorn/no-instanceof-builtins', unicornJavascriptConfig, {
      // `Error.isError` is not available in Node.js
      useErrorIsError: false,
    }),
    'unicorn/prefer-node-protocol': [ERROR],
  },
}
