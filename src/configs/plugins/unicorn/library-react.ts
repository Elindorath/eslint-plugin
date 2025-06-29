import unicornPlugin from 'eslint-plugin-unicorn'

import { ERROR } from '../../../constants.ts'

import type { Linter } from 'eslint'


export const unicornReactConfig = {
  plugins: {
    unicorn: unicornPlugin,
  },

  rules: {
    'unicorn/prevent-abbreviations': [ERROR, {
      // Default here: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/28e7498ad06679bb92343db53bb40a7b5ba2990a/rules/shared/abbreviations.js#L230
      allowList: {},
      // Configured value
      checkDefaultAndNamespaceImports: true,
      checkFilenames: true,
      // Configured value
      checkProperties: true,
      // Configured value
      checkShorthandImports: false,
      // Configured value
      checkShorthandProperties: true,
      checkVariables: true,
      extendDefaultAllowList: true,
      extendDefaultReplacements: true,
      ignore: [],
      // Configured value
      replacements: {
        props: {
          properties: false,
        },
      },
    }],
  },
} as const satisfies Linter.Config
