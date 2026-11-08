import eslintReactPlugin from '@eslint-react/eslint-plugin'

import { ERROR, OFF } from '../../../constants.ts'
import type { FixedLinterConfig } from '../../../types.ts'


// These rules need type information, which only TypeScript files have
export const eslintReactTypescriptConfig: FixedLinterConfig = {
  plugins: {
    '@eslint-react': eslintReactPlugin,
  },

  /* ----- Rules ----- */
  rules: {
    '@eslint-react/no-implicit-children': [ERROR],
    '@eslint-react/no-implicit-key': [ERROR],
    '@eslint-react/no-implicit-ref': [ERROR],
    '@eslint-react/no-unused-props': [ERROR],
    // OFF as it is an alias of '@eslint-react/no-implicit-children'
    '@eslint-react/x-no-implicit-children': [OFF],
    // OFF as it is an alias of '@eslint-react/no-implicit-key'
    '@eslint-react/x-no-implicit-key': [OFF],
    // OFF as it is an alias of '@eslint-react/no-implicit-ref'
    '@eslint-react/x-no-implicit-ref': [OFF],
    // OFF as it is an alias of '@eslint-react/no-unused-props'
    '@eslint-react/x-no-unused-props': [OFF],
  },
}
