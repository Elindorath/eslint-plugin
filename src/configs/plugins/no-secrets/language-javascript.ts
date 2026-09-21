import noSecretsPlugin from 'eslint-plugin-no-secrets'

import { ERROR } from '../../../constants.ts'
import type { FixedLinterConfig } from '../../../types.ts'


// eslint-disable-next-line no-secrets/no-pattern-match -- This is the name of the plugin.
export const noSecretsJavascriptConfig: FixedLinterConfig = {
  plugins: {
    'no-secrets': noSecretsPlugin,
  },

  rules: {
    'no-secrets/no-pattern-match': [ERROR, {
      // Configured value
      patterns: {
        // cspell:disable-next-line -- Expected in regex.
        js: /(?:const|let)\s+\w*[Ss]ecret\w*/u,
      },
    }],
    'no-secrets/no-secrets': [ERROR, {
      additionalDelimiters: [],
      // Configured value
      additionalRegexes: {
        'Basic Auth': 'Authorization: Basic [A-Za-z0-9+/=]*',
      },
      ignoreCase: false,
      ignoreContent: '',
      ignoreIdentifiers: [],
      ignoreModules: true,
      tolerance: 4,
    }],
  },
}
