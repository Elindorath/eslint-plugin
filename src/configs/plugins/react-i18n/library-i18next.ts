/**
 * TODO: fix it when this plugin expose typings
 */
// @ts-expect-error: TS7016 because this plugin doesn't expose typings
import reactI18nPlugin from 'eslint-plugin-react-i18n'

import { ERROR } from '../../../constants.ts'

import type { Linter } from 'eslint'


const functionNames = ['t']

export const reactI18nextConfig = {
  plugins: {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- Caused by the absence of types.
    'react-i18n': reactI18nPlugin,
  },

  rules: {
    'react-i18n/no-dynamic-translation-keys': [ERROR, {
      functionNames,
    }],
    'react-i18n/no-missing-interpolation-keys': [ERROR, {
      functionNames,
      prefix: '{{',
      suffix: '}}',
    }],
  },
} as const satisfies Linter.Config
