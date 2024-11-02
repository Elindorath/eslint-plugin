// import process from 'node:process'

import type { Linter } from 'eslint'
import importPlugin from 'eslint-plugin-import'

import { OFF, ERROR } from '../../../constants'

export const importVanillaConfig: Linter.Config = {
  plugins: {
    import: importPlugin,
  },

  settings: {
    'import/extensions': [
      '.js',
      '.jsx',
      '.json',
      '.json5',
    ],
    'import/ignore': [
      'node_modules',
    ],
    'import/core-modules': [],
    'import/external-module-folders': [
      'node_modules',
    ],
    'import/parsers': {},
    'import/resolver': {
      node: true,
    },
    // Might change when using eslint_d
    // @see https://github.com/benmosher/eslint-plugin-import#importcache
    'import/cache': {
      lifetime: Number.POSITIVE_INFINITY,
    },
    'import/internal-regex': '',
  },
  rules: {
    /* ----- Helpful warnings ----- */
    'import/export': [ERROR],
    'import/no-deprecated': [ERROR],
    'import/no-empty-named-blocks': [ERROR],
    // TODO: Needs to be modified for test, tools, ...
    'import/no-extraneous-dependencies': [ERROR, {
      devDependencies: false,
      optionalDependencies: false,
      peerDependencies: false, // default
      bundledDependencies: false,
      includeInternal: false,
      includeTypes: true,
      // packageDir: '',
    }],
    'import/no-mutable-exports': [ERROR],
    'import/no-named-as-default': [ERROR],
    'import/no-named-as-default-member': [ERROR],
    // OFF as it doesn't support flat config
    'import/no-unused-modules': [OFF, {
      missingExports: true,
      unusedExports: true,
      // src: [process.cwd()], // default
      // ignoreExports: [], // default
    }],

    /* ----- Module systems ----- */
    'import/no-amd': [ERROR],
    // Dependent of the project type
    'import/no-commonjs': [ERROR, {
      allowRequire: false, // default
      allowConditionalRequire: true, // default
      allowPrimitiveModules: false, // default
    }],
    'import/no-import-module-exports': [ERROR, {
      exceptions: [],
    }],
    'import/no-nodejs-modules': [ERROR, {
      allow: [], // default
    }],
    'import/unambiguous': [ERROR],

    /* ----- Static analysis ----- */
    'import/default': [ERROR],
    'import/named': [ERROR, {
      commonjs: false, // default (undocumented)
    }],
    'import/namespace': [ERROR, {
      allowComputed: true,
    }],
    'import/no-absolute-path': [ERROR, {
      esmodule: true, // default
      commonjs: true, // default
      amd: true,
    }],
    'import/no-cycle': [ERROR, {
      maxDepth: Number.POSITIVE_INFINITY, // default
      commonjs: true,
      amd: true,
      ignoreExternal: false, // default
      allowUnsafeDynamicCyclicDependency: false, // default
    }],
    'import/no-dynamic-require': [ERROR, {
      esmodule: false, // default (undocumented)
    }],
    // OFF as it would require us to use index files, which is not recommended in regards to tree-shaking
    'import/no-internal-modules': [OFF, {
      allow: [], // default
    }],
    // OFF as it only make sense in Yarn/Lerna workspaces, which we don't use/support
    'import/no-relative-packages': [OFF, {
      commonjs: false, // default (undocumented)
      amd: false, // default (undocumented)
      esmodule: true, // default (undocumented)
      // ignore: [''], // default  (undocumented)
    }],
    // TODO: Check if it works correctly with aliases
    'import/no-relative-parent-imports': [ERROR, {
      commonjs: false, // default (undocumented)
      amd: false, // default (undocumented)
      esmodule: true, // default (undocumented)
      // ignore: [''], // default  (undocumented)
    }],
    // OFF as this rule is project specific
    'import/no-restricted-paths': [OFF, {
      // basePath: process.cwd(),
      // zones: [
      //   {
      //     target: '',
      //     from: '',
      //     except: [''],
      //     message: '',
      //   }
      // ],
    }],
    'import/no-self-import': [ERROR],
    // OFF as it doesn't work when an ES module doesn't specify the 'main' property in its 'package.json'
    // See:
    //  - https://github.com/import-js/eslint-plugin-import/issues/2703
    //  - https://github.com/browserify/resolve/issues/222
    'import/no-unresolved': [OFF, {
      commonjs: true,
      amd: true,
      // ignore: [], // default
      caseSensitive: true, // default
      caseSensitiveStrict: true,
    }],
    'import/no-useless-path-segments': [ERROR, {
      noUselessIndex: true,
    }],
    'import/no-webpack-loader-syntax': [ERROR],

    /* ----- Style guide ----- */
    'import/dynamic-import-chunkname': [ERROR, {
      importFunctions: ['import'], // default
      webpackChunknameFormat: '[a-zA-Z0-9-/_]+', // default
    }],
    // OFF as we prefer files to be structured from general to details
    'import/exports-last': [OFF],
    'import/extensions': [ERROR, 'always', {
      ignorePackages: true,
      pattern: {
        js: 'ignorePackages',
      },
    }],
    // OFF as it clashes with 'import/order', especially when dealing with type imports
    'import/first': [OFF, 'absolute-first'],
    'import/group-exports': [ERROR],
    'import/max-dependencies': [ERROR, {
      max: 10, // default
      ignoreTypeImports: true,
    }],
    'import/no-anonymous-default-export': [ERROR, {
      allowArray: false, // default
      allowArrowFunction: false, // default
      allowAnonymousClass: false, // default
      allowAnonymousFunction: false, // default
      allowCallExpression: false,
      allowNew: false, // default
      allowLiteral: false, // default
      allowObject: false, // default
    }],
    // OFF as it is already checked by the 'no-restricted-exports' rule with finer grain
    'import/no-default-export': [OFF],
    // Superseded by the 'import/no-duplicates' rule
    'no-duplicate-imports': [OFF],
    'import/no-duplicates': [ERROR, {
      'considerQueryString': false, // default
      'prefer-inline': false, // false
    }],
    'import/no-named-default': [ERROR],
    // OFF as we prefer named exports in regards to tree-shaking
    'import/no-named-export': [OFF],
    // OFF as namespace imports can improve readability
    'import/no-namespace': [OFF, {
      ignore: [], // default
    }],
    'import/no-unassigned-import': [ERROR, {
      // Those are present in schema but are not documented and don't seem to be used
      // devDependencies: { type: ['boolean', 'array'] },
      // optionalDependencies: { type: ['boolean', 'array'] },
      // peerDependencies: { type: ['boolean', 'array'] },
      allow: [],
    }],
    // OFF as it conflict with the 'import/order' rule
    'sort-imports': [OFF],
    'import/order': [OFF, {
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
    // OFF as we prefer named exports in regards to tree-shaking
    'import/prefer-default-export': [OFF, {
      target: 'single', // default
    }],
  },
}
