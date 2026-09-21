import unicornPlugin from 'eslint-plugin-unicorn'

import { OFF } from '../../../constants.ts'
import type { FixedLinterConfig } from '../../../types.ts'


export const unicornCommonJsConfig: FixedLinterConfig = {
  plugins: {
    unicorn: unicornPlugin,
  },

  rules: {
    // OFF for obvious reasons
    'unicorn/prefer-module': [OFF],
    // OFF as top level await are not allowed in CommonJS format
    'unicorn/prefer-top-level-await': [OFF],
  },
}
