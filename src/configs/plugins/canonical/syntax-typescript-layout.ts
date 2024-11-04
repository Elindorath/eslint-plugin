import type { Linter } from 'eslint'

/**
 * TODO: fix it when this plugin expose typings
 * @see: https://github.com/gajus/eslint-plugin-canonical/issues/39
 */
// @ts-expect-error: TS7016 because this plugin doesn't expose typings
import canonicalPlugin from 'eslint-plugin-canonical'
import { findUpSync } from 'find-up-simple'

import { ERROR } from '../../../constants'


export const canonicalTypescriptLayoutConfig: Linter.Config = {
  plugins: {
    canonical: canonicalPlugin,
  },

  rules: {
    'canonical/destructuring-property-newline': [ERROR, {
      allowAllPropertiesOnSameLine: false, // default
    }],
    'canonical/export-specifier-newline': [ERROR],
    'canonical/import-specifier-newline': [ERROR],
    'canonical/no-barrel-import': [ERROR],
    'canonical/no-export-all': [ERROR],
    'canonical/no-import-namespace-destructure': [ERROR],
    'canonical/no-re-export': [ERROR],
    'canonical/no-unused-exports': [ERROR, {
      allowUnusedEnums: false, // default
      allowUnusedTypes: false, // default
      tsConfigPath: findUpSync('tsconfig.json'),
    }],
    // TODO: This need some testing
    'canonical/require-extension': [ERROR, {
      ignorePackages: false, // default
    }],
  },
}
