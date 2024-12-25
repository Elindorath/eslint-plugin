import sonarJsPlugin from 'eslint-plugin-sonarjs'

import { ERROR } from '../../../constants.ts'

import type { Linter } from 'eslint'


export const sonarjsTypescriptConfig = {
  plugins: {
    sonarjs: sonarJsPlugin,
  },

  rules: {
    'sonarjs/no-ignored-return': [ERROR],
  },
} as const satisfies Linter.Config
