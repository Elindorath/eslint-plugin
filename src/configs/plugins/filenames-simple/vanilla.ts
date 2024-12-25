import { fixupPluginRules } from '@eslint/compat'
import filenamesSimplePlugin from 'eslint-plugin-filenames-simple'

import { ERROR, OFF } from '../../../constants.ts'

import type { Linter } from 'eslint'


export const filenamesVanillaConfig = {
  plugins: {
    /**
     * TODO: remove the compatibility wrapper when plugin add support for ESLint v9
     * @see: https://github.com/epaew/eslint-plugin-filenames-simple/issues/705
     */
    'filenames-simple': fixupPluginRules(filenamesSimplePlugin),
  },

  rules: {
    'filenames-simple/extension': [ERROR],
    'filenames-simple/named-export': [ERROR, 'always'],
    // OFF as it checks the same as the 'unicorn/filename-case' rule
    'filenames-simple/naming-convention': [OFF, {
      excepts: ['index'],
      // Configured value
      rule: 'camelCase',
    }],
    'filenames-simple/no-index': [ERROR],
    // OFF as it is too restrictive and/or lack configuration to be smart enough
    'filenames-simple/pluralize': [OFF, {
      // Configured value
      file: 'singular',
      // Configured value
      parentDir: 'plural',
    }],
    'filenames-simple/typescript-module-declaration': [ERROR],
  },
} as const satisfies Linter.Config
