import process from 'node:process'

import importPlugin from 'eslint-plugin-import-x'

import { OFF } from '../../../constants'

import type { ESLint, Linter } from 'eslint'


export const nodeConfig: Linter.Config = {
  plugins: {
    /**
     * We shouldn't override this type but there are inconsistencies with the expected ESLint.Plugin type.
     * TODO: fix this when types are fixed
     */
    'import-x': importPlugin as unknown as ESLint.Plugin,
  },

  settings: {
    'import-x/resolver': {
      node: {},
    },
  },
  rules: {
    /* ----- Helpful warnings ----- */
    // OFF as the plugin doesn't support CommonJS export
    'import-x/no-unused-modules': [OFF, {
      missingExports: true,
      unusedExports: true,
      ignoreUnusedTypeExports: true,
      src: [process.cwd()],
      ignoreExports: [],
    }],

    /* ----- Module systems ----- */
    // OFF as we use commonjs in node context
    'import-x/no-commonjs': [OFF, {
      allowRequire: false, // default
      allowConditionalRequire: true, // default
      allowPrimitiveModules: false, // default
    }],
    // OFF as we use node module in node context
    'import-x/no-nodejs-modules': [OFF, {
      allow: [], // default
    }],
  },
}
