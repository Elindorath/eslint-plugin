import type { Linter } from 'eslint'
import unicornPlugin from 'eslint-plugin-unicorn'

import { ERROR } from '../../../constants'


export const unicornReactConfig: Linter.Config = {
  plugins: {
    unicorn: unicornPlugin,
  },

  rules: {
    'unicorn/prevent-abbreviations': [ERROR, {
      // default here: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/28e7498ad06679bb92343db53bb40a7b5ba2990a/rules/shared/abbreviations.js#L3
      replacements: {
        props: {
          properties: false,
        },
      },
      extendDefaultReplacements: true, // default
      allowList: {}, // default here: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/28e7498ad06679bb92343db53bb40a7b5ba2990a/rules/shared/abbreviations.js#L230
      extendDefaultAllowList: true, // default
      checkDefaultAndNamespaceImports: true,
      checkShorthandImports: false,
      checkShorthandProperties: true,
      checkProperties: true,
      checkVariables: true, // default
      checkFilenames: true, // default
      ignore: [], // default
    }],
  },
}
