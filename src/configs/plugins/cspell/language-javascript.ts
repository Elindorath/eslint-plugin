import cspellPlugin from '@cspell/eslint-plugin'

import { ERROR } from '../../../constants.ts'
import type { FixedLinterConfig } from '../../../types.ts'


export const cspellJavascriptConfig: FixedLinterConfig = {
  plugins: {
    '@cspell': cspellPlugin,
  },

  /* ----- Rules ----- */
  rules: {
    '@cspell/spellchecker': [ERROR, {
      // Configured value
      autoFix: true,
      checkComments: true,
      checkIdentifiers: true,
      checkJSXText: true,
      // Configured value
      checkScope: [
        ['JSONProperty[key] JSONLiteral', false],
      ],
      checkStrings: true,
      checkStringTemplates: true,
      // Empty lets `cspell` discover `cspell.config.mjs` on its own
      configFile: '',
      cspell: {
        flagWords: [],
        ignoreWords: [],
        words: [],
      },
      cspellOptionsRoot: '',
      customWordListFile: '',
      debugMode: false,
      generateSuggestions: true,
      ignoreImportProperties: true,
      ignoreImports: true,
      numSuggestions: 8,
      report: 'all',
    }],
  },
}
