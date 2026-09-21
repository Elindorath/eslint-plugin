import process from 'node:process'

import importPlugin from 'eslint-plugin-import-x'

import { OFF } from '../../../constants.ts'
import type { FixedLinterConfig } from '../../../types.ts'


const { createNodeResolver } = importPlugin

export const nodeConfig: FixedLinterConfig = {
  plugins: {
    'import-x': importPlugin,
  },

  settings: {
    'import-x/resolver-next': [
      createNodeResolver(),
    ],
  },

  /* ----- Rules ----- */
  rules: {
    /* ----- Helpful warnings ----- */
    // OFF as the plugin doesn't support CommonJS export
    'import-x/no-unused-modules': [OFF, {
      ignoreExports: [],
      // Configured value
      ignoreUnusedTypeExports: true,
      // Configured value
      missingExports: true,
      src: [process.cwd()],
      suppressMissingFileEnumeratorAPIWarning: false,
      // Configured value
      unusedExports: true,
    }],

    /* ----- Module systems ----- */
    // OFF as we use commonjs in node context
    'import-x/no-commonjs': [OFF, {
      allowConditionalRequire: true,
      allowPrimitiveModules: false,
      allowRequire: false,
    }],
    // OFF as we use node module in node context
    'import-x/no-nodejs-modules': [OFF, {
      allow: [],
    }],
  },
}
