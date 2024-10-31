import type { Linter } from 'eslint'
import reactI18nPlugin from 'eslint-plugin-react-i18n'

import { ERROR } from '../../../constants'


const functionNames = ['t'] // default

export const reactI18nextConfig: Linter.Config = {
  plugins: {
    'react-i18n': reactI18nPlugin,
  },

  rules: {
    'react-i18n/no-dynamic-translation-keys': [ERROR, {
      functionNames,
    }],
    'react-i18n/no-missing-interpolation-keys': [ERROR, {
      functionNames,
      prefix: '{{', // default
      suffix: '}}', // default
    }],
  },
}