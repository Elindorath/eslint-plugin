import type { Linter } from 'eslint'

import filenamesSimplePlugin from 'eslint-plugin-filenames-simple'
// import filenamesSimplePlugin from './_compat'

import { OFF, ERROR } from '../../../constants'

// console.log(filenamesSimplePlugin)


export const filenamesVanillaConfig: Linter.Config = {
  plugins: {
    'filenames-simple': filenamesSimplePlugin,
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
