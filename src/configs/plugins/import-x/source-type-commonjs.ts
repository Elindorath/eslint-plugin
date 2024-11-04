import importPlugin from 'eslint-plugin-import-x'

import { OFF, ERROR } from '../../../constants'

import type { ESLint, Linter } from 'eslint'


export const importCommonJsConfig: Linter.Config = {
  plugins: {
    /**
     * We shouldn't override this type but there are inconsistencies with the expected ESLint.Plugin type.
     * TODO: fix this when types are fixed
     */
    'import-x': importPlugin as unknown as ESLint.Plugin,
  },

  rules: {
    /* ----- Helpful warnings ----- */
    // OFF as the plugin doesn't support CommonJS export
    // 'import-x/no-unused-modules': [OFF],

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

    /* ----- Style guide ----- */
    'import-x/order': [ERROR, {
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
