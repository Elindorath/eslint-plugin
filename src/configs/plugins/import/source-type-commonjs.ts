import type { Linter } from 'eslint'
import importPlugin from 'eslint-plugin-import'

import { OFF, ERROR } from '../../../constants'


export const importCommonJsConfig: Linter.Config = {
  plugins: {
    import: importPlugin,
  },

  rules: {
    /* ----- Helpful warnings ----- */
    // OFF as the plugin doesn't support CommonJS export
    // 'import/no-unused-modules': [OFF],

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

    /* ----- Style guide ----- */
    'import/order': [ERROR, {
      'groups': [
        'builtin',
        'external',
        'internal',
        'parent',
        'sibling',
        'index',
        'unknown',
        // Typescript only
        'object',
        'type',
      ],
      'pathGroups': [],
      // default
      'pathGroupsExcludedImportTypes': [
        'builtin',
        'external',
        'object',
      ],
      'distinctGroup': false,
      'newlines-between': 'always',
      'alphabetize': {
        order: 'asc',
        orderImportKind: 'asc',
        caseInsensitive: true,
      },
      'warnOnUnassignedImports': false, // default
    }],
  },
}
