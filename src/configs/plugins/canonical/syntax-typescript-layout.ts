import canonicalPlugin from 'eslint-plugin-canonical'

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
    // TODO: This need some testing
    'canonical/require-extension': [ERROR, {
      ignorePackages: false,
    }],
  },
} as const satisfies Linter.Config
