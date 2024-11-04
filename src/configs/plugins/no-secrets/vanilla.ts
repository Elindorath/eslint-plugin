import type { Linter } from 'eslint'

/**
 * TODO: fix it when this plugin expose typings
 * @see: https://github.com/nickdeis/eslint-plugin-no-secrets/pull/34
 */
// @ts-expect-error: TS7016 because this plugin doesn't expose typings
import noSecretsPlugin from 'eslint-plugin-no-secrets'

import { ERROR } from '../../../constants'


export const noSecretsVanillaConfig: Linter.Config = {
  plugins: {
    'no-secrets': noSecretsPlugin,
  },

  rules: {
    'no-secrets/no-secrets': [ERROR, {
      tolerance: 4, // default
      additionalRegexes: {
        'Basic Auth': 'Authorization: Basic [A-Za-z0-9+/=]*',
      },
      ignoreContent: '', // default
      ignoreModules: true, // default
      ignoreIdentifiers: [], // default
      ignoreCase: false, // default
      additionalDelimiters: [], // default
    }],
  },
}
