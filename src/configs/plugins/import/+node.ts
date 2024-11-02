import process from 'node:process'

import type { Linter } from 'eslint'
import importPlugin from 'eslint-plugin-import'

import { OFF } from '../../../constants'


export const nodeConfig: Linter.Config = {
  plugins: {
    import: importPlugin,
  },

  settings: {
    'import/resolver': {
      node: {},
    },
  },
  rules: {
    /* ----- Helpful warnings ----- */
    // OFF as the plugin doesn't support CommonJS export
    'import/no-unused-modules': [OFF, {
      missingExports: true,
      unusedExports: true,
      ignoreUnusedTypeExports: true,
      src: [process.cwd()],
      ignoreExports: [],
    }],

    /* ----- Module systems ----- */
    // OFF as we use commonjs in node context
    'import/no-commonjs': [OFF, {
      allowRequire: false, // default
      allowConditionalRequire: true, // default
      allowPrimitiveModules: false, // default
    }],
    // OFF as we use node module in node context
    'import/no-nodejs-modules': [OFF, {
      allow: [], // default
    }],
  },
}
