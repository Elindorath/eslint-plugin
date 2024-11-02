import type { Linter } from 'eslint'

import { fixupPluginRules } from '@eslint/compat'
import filenamesSimplePlugin from 'eslint-plugin-filenames-simple'

import { OFF, ERROR } from '../../../constants'


export const filenamesVanillaConfig: Linter.Config = {
  plugins: {
    // TODO: remove the compatibility wrapper when plugin add support for ESLint v9
    'filenames-simple': fixupPluginRules(filenamesSimplePlugin),
  },

  rules: {
    'filenames-simple/extension': [ERROR],
    'filenames-simple/named-export': [ERROR, 'always'], // default
    // OFF as it checks the same as the 'unicorn/filename-case' rule
    'filenames-simple/naming-convention': [OFF, {
      rule: 'camelCase',
      excepts: ['index'], // default
    }],
    'filenames-simple/no-index': [ERROR],
    // OFF as it is too restrictive and/or lack configuration to be smart enough
    'filenames-simple/pluralize': [OFF, {
      parentDir: 'plural',
      file: 'singular',
    }],
    'filenames-simple/typescript-module-declaration': [ERROR],
  },
}
