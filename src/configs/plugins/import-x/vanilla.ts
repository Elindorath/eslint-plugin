// import process from 'node:process'

import importPlugin from 'eslint-plugin-import-x'

import { OFF, ERROR } from '../../../constants'

import type { ESLint, Linter } from 'eslint'


export const importVanillaConfig: Linter.Config = {
  plugins: {
    /**
     * We shouldn't override this type but there are inconsistencies with the expected ESLint.Plugin type.
     * TODO: fix this when types are fixed
     */
    'import-x': importPlugin as unknown as ESLint.Plugin,
  },

  settings: {
    'import-x/extensions': [
      '.js',
      '.jsx',
      '.json',
      '.json5',
    ],
    'import-x/ignore': [
      'node_modules',
    ],
    'import-x/core-modules': [],
    'import-x/external-module-folders': [
      'node_modules',
    ],
    'import-x/parsers': {},
    'import-x/resolver': {
      node: true,
    },
    // Might change when using eslint_d
    // @see https://github.com/benmosher/eslint-plugin-import#importcache
    'import-x/cache': {
      lifetime: Number.POSITIVE_INFINITY,
    },
    'import-x/internal-regex': '',
  },
  rules: {
    /* ----- Helpful warnings ----- */
    'import-x/export': [ERROR],
    'import-x/no-deprecated': [ERROR],
    'import-x/no-empty-named-blocks': [ERROR],
    // TODO: Needs to be modified for test, tools, ...
    'import-x/no-extraneous-dependencies': [ERROR, {
      devDependencies: false,
      optionalDependencies: false,
      peerDependencies: false, // default
      bundledDependencies: false,
      includeInternal: false,
      includeTypes: true,
      // packageDir: '',
    }],
    'import-x/no-mutable-exports': [ERROR],
    'import-x/no-named-as-default': [ERROR],
    'import-x/no-named-as-default-member': [ERROR],
    // OFF as it doesn't support flat config
    'import-x/no-unused-modules': [OFF, {
      missingExports: true,
      unusedExports: true,
      // src: [process.cwd()], // default
      // ignoreExports: [], // default
    }],

    /* ----- Module systems ----- */
    'import-x/no-amd': [ERROR],
    // Dependent of the project type
    'import-x/no-commonjs': [ERROR, {
      allowRequire: false, // default
      allowConditionalRequire: true, // default
      allowPrimitiveModules: false, // default
    }],
    'import-x/no-import-module-exports': [ERROR, {
      exceptions: [],
    }],
    'import-x/no-nodejs-modules': [ERROR, {
      allow: [], // default
    }],
    'import-x/unambiguous': [ERROR],

    /* ----- Static analysis ----- */
    'import-x/default': [ERROR],
    'import-x/named': [ERROR, {
      commonjs: false, // default (undocumented)
    }],
    'import-x/namespace': [ERROR, {
      allowComputed: true,
    }],
    'import-x/no-absolute-path': [ERROR, {
      esmodule: true, // default
      commonjs: true, // default
      amd: true,
    }],
    'import-x/no-cycle': [ERROR, {
      maxDepth: Number.POSITIVE_INFINITY, // default
      commonjs: true,
      amd: true,
      ignoreExternal: false, // default
      allowUnsafeDynamicCyclicDependency: false, // default
    }],
    'import-x/no-dynamic-require': [ERROR, {
      esmodule: false, // default (undocumented)
    }],
    // OFF as it would require us to use index files, which is not recommended in regards to tree-shaking
    'import-x/no-internal-modules': [OFF, {
      allow: [], // default
    }],
    // OFF as it only make sense in Yarn/Lerna workspaces, which we don't use/support
    'import-x/no-relative-packages': [OFF, {
      commonjs: false, // default (undocumented)
      amd: false, // default (undocumented)
      esmodule: true, // default (undocumented)
      // ignore: [''], // default  (undocumented)
    }],
    // TODO: Check if it works correctly with aliases
    'import-x/no-relative-parent-imports': [ERROR, {
      commonjs: false, // default (undocumented)
      amd: false, // default (undocumented)
      esmodule: true, // default (undocumented)
      // ignore: [''], // default  (undocumented)
    }],
    // OFF as this rule is project specific
    'import-x/no-restricted-paths': [OFF, {
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
    'import-x/no-self-import': [ERROR],
    // OFF as it doesn't work when an ES module doesn't specify the 'main' property in its 'package.json'
    // See:
    //  - https://github.com/import-js/eslint-plugin-import/issues/2703
    //  - https://github.com/browserify/resolve/issues/222
    'import-x/no-unresolved': [OFF, {
      commonjs: true,
      amd: true,
      // ignore: [], // default
      caseSensitive: true, // default
      caseSensitiveStrict: true,
    }],
    'import-x/no-useless-path-segments': [ERROR, {
      noUselessIndex: true,
    }],
    'import-x/no-webpack-loader-syntax': [ERROR],

    /* ----- Style guide ----- */
    // This rule seems broken
    // 'import-x/dynamic-import-chunkname': [ERROR, {
    //   importFunctions: ['import'], // default
    //   webpackChunknameFormat: '[a-zA-Z0-9-/_]+', // default
    // }],
    // OFF as we prefer files to be structured from general to details
    'import-x/exports-last': [OFF],
    'import-x/extensions': [ERROR, 'always', {
      ignorePackages: true,
      pattern: {
        js: 'ignorePackages',
      },
    }],
    // OFF as it clashes with 'import-x/order', especially when dealing with type imports
    'import-x/first': [OFF, 'absolute-first'],
    'import-x/group-exports': [ERROR],
    'import-x/max-dependencies': [ERROR, {
      max: 10, // default
      ignoreTypeImports: true,
    }],
    'import-x/no-anonymous-default-export': [ERROR, {
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
    'import-x/no-default-export': [OFF],
    // Superseded by the 'import-x/no-duplicates' rule
    'no-duplicate-imports': [OFF],
    'import-x/no-duplicates': [ERROR, {
      'considerQueryString': false, // default
      'prefer-inline': false, // false
    }],
    'import-x/no-named-default': [ERROR],
    // OFF as we prefer named exports in regards to tree-shaking
    'import-x/no-named-export': [OFF],
    // OFF as namespace imports can improve readability
    'import-x/no-namespace': [OFF, {
      ignore: [], // default
    }],
    'import-x/no-unassigned-import': [ERROR, {
      // Those are present in schema but are not documented and don't seem to be used
      // devDependencies: { type: ['boolean', 'array'] },
      // optionalDependencies: { type: ['boolean', 'array'] },
      // peerDependencies: { type: ['boolean', 'array'] },
      allow: [],
    }],
    // OFF as it conflict with the 'import-x/order' rule
    'sort-imports': [OFF],
    'import-x/order': [OFF, {
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
    'import-x/prefer-default-export': [OFF, {
      target: 'single', // default
    }],
  },
}
