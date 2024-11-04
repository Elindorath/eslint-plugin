import typescriptEslint from 'typescript-eslint'

import { ERROR } from '../../../constants.js'

import type { ESLint, Linter } from 'eslint'


export const typescriptReactConfig: Linter.Config = {
  // files: ['*.ts', '*.tsx', '*.mts', '*.cts'],

  languageOptions: {
    /**
     * We shouldn't override this type but there are inconsistencies with the expected Linter.Parser type.
     * TODO: fix this when types are fixed
     */
    parser: typescriptEslint.parser as unknown as Linter.Parser,
    // Might be exported to environment
    parserOptions: {
      sourceType: 'module',
      warnOnUnsupportedTypeScriptVersion: true,
    },
  },

  plugins: {
    /**
     * We shouldn't override this type but there are inconsistencies with the expected ESLint.Plugin type.
     * TODO: fix this when types are fixed
     */
    '@typescript-eslint': typescriptEslint.plugin as unknown as ESLint.Plugin,
  },

  rules: {
    // Should probably be tweaked in the future
    '@typescript-eslint/naming-convention': [ERROR,
      {
        selector: 'default',
        format: ['camelCase'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'allow',
      },

      {
        selector: 'variable',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'allow',
      },

      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },

      {
        selector: 'function',
        format: ['camelCase', 'PascalCase'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'allow',
      },
    ],
  },
}
