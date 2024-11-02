import { Linter } from 'eslint'
import sonarJsPlugin from 'eslint-plugin-sonarjs'

import { ERROR } from '../../../constants'


export const sonarjsTypescriptConfig: Linter.Config = {
  plugins: {
    sonarjs: sonarJsPlugin,
  },

  rules: {
    'sonarjs/no-ignored-return': [ERROR],
  },
}
