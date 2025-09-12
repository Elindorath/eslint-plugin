import cspellPlugin from '@cspell/eslint-plugin'

import { ERROR } from '../../../constants.ts'

import type { Linter } from 'eslint'


export const cspellVanillaConfig = {
  plugins: {
    '@cspell': cspellPlugin,
  },

  rules: {
    '@cspell/spellchecker': [ERROR, {
      // Configured value
      autoFix: true,
      checkComments: true,
      checkIdentifiers: true,
      checkJSXText: true,
      checkScope: [
        ['JSONProperty[key] JSONLiteral', false],
      ],
      checkStrings: true,
      checkStringTemplates: true,
      // Relative paths, will be relative to the current working directory.
      // configFile: '.cspell.json',
      cspell: {
        allowCompoundWords: false,
        dictionaries: [],
        dictionaryDefinitions: [],
        flagWords: [],
        ignoreRegExpList: [],
        ignoreWords: [],
        import: [],
        includeRegExpList: [],
        language: 'en,fr,es',
        words: [],
      },
      cspellOptionsRoot: '',
      customWordListFile: {
        path: '',
      },
      debugMode: false,
      generateSuggestions: true,
      ignoreImportProperties: true,
      ignoreImports: true,
      numSuggestions: 8,
    }],
  },
} satisfies Linter.Config
