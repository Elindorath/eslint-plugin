import canonicalPlugin from 'eslint-plugin-canonical'
import { findUpSync } from 'find-up-simple'

import { ERROR } from '../../../constants.ts'

import type { Linter } from 'eslint'


export const canonicalTypescriptLayoutConfig = {
  plugins: {
    canonical: canonicalPlugin,
  },

  rules: {
    'canonical/destructuring-property-newline': [ERROR, {
      allowAllPropertiesOnSameLine: false,
    }],
    'canonical/export-specifier-newline': [ERROR],
    'canonical/import-specifier-newline': [ERROR],
    'canonical/no-barrel-import': [ERROR],
    'canonical/no-export-all': [ERROR],
    'canonical/no-import-namespace-destructure': [ERROR],
    'canonical/no-re-export': [ERROR],
    'canonical/no-unused-exports': [ERROR, {
      allowUnusedEnums: false,
      allowUnusedTypes: false,

      /**
       * TODO: This should not be required anymore in a future update
       * @see: https://github.com/gajus/eslint-plugin-canonical/pull/25
       */
      // eslint-disable-next-line n/no-sync -- Eslint config can't be asynchronous
      tsConfigPath: findUpSync('tsconfig.json'),
    }],
    // TODO: This need some testing
    'canonical/require-extension': [ERROR, {
      ignorePackages: false,
    }],
  },
} as const satisfies Linter.Config
