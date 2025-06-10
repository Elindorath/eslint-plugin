import process from 'node:process'

import importPlugin from 'eslint-plugin-import-x'

import { ERROR, OFF } from '../../../constants.ts'

import type { ESLint, Linter } from 'eslint'


const { createNodeResolver } = importPlugin

export const importVanillaConfig = {
  plugins: {
    /**
     * We shouldn't override this type but there are inconsistencies with the expected ESLint.Plugin type.
     * TODO: fix this when types are fixed
     */
    // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion -- See comment above
    'import-x': importPlugin as unknown as ESLint.Plugin,
  },

  settings: {
    /**
     * Might change when using eslint_d
     * @see: https://github.com/benmosher/eslint-plugin-import#importcache
     */
    'import-x/cache': {
      lifetime: Number.POSITIVE_INFINITY,
    },
    'import-x/core-modules': [],
    'import-x/extensions': [
      '.js',
      '.jsx',
      '.json',
      '.json5',
    ],
    'import-x/external-module-folders': [
      'node_modules',
    ],
    'import-x/ignore': [
      'node_modules',
    ],
    'import-x/internal-regex': '',
    'import-x/parsers': {},
    'import-x/resolver-next': [
      createNodeResolver(),
    ],
  },

  /* ----- Rules ----- */
  rules: {
    /* ----- Helpful warnings ----- */
    'import-x/export': [ERROR],
    'import-x/no-deprecated': [ERROR],
    'import-x/no-empty-named-blocks': [ERROR],
    // TODO: Needs to be modified for test, tools, ...
    'import-x/no-extraneous-dependencies': [ERROR, {
      // Configured value
      bundledDependencies: false,
      // Configured value
      devDependencies: false,
      // Configured value
      includeInternal: false,
      // Configured value
      includeTypes: false,
      // Configured value
      optionalDependencies: false,
      packageDir: process.cwd(),
      peerDependencies: false,
      whitelist: [],
    }],
    'import-x/no-mutable-exports': [ERROR],
    'import-x/no-named-as-default': [ERROR],
    'import-x/no-named-as-default-member': [ERROR],
    // OFF as it doesn't support flat config
    'import-x/no-unused-modules': [ERROR, {
      ignoreExports: [],
      // Configured value
      ignoreUnusedTypeExports: true,
      // Configured value
      missingExports: true,
      src: [process.cwd()],
      // Configured value
      unusedExports: true,
    }],

    /* ----- Module systems ----- */
    'import-x/no-amd': [ERROR],
    // Dependent of the project type
    'import-x/no-commonjs': [ERROR, {
      allowConditionalRequire: true,
      allowPrimitiveModules: false,
      allowRequire: false,
    }],
    'import-x/no-import-module-exports': [ERROR, {
      exceptions: [],
    }],
    'import-x/no-nodejs-modules': [ERROR, {
      allow: [],
    }],
    'import-x/unambiguous': [ERROR],

    /* ----- Static analysis ----- */
    'import-x/default': [ERROR],
    'import-x/named': [ERROR, {
      // Undocumented option
      commonjs: false,
    }],
    'import-x/namespace': [ERROR, {
      allowComputed: true,
    }],
    'import-x/no-absolute-path': [ERROR, {
      // Configured value
      amd: true,
      commonjs: true,
      esmodule: true,
    }],
    'import-x/no-cycle': [ERROR, {
      allowUnsafeDynamicCyclicDependency: false,
      // Configured value
      amd: true,
      // Configured value
      commonjs: true,
      ignoreExternal: false,
      maxDepth: Number.POSITIVE_INFINITY,
    }],
    'import-x/no-dynamic-require': [ERROR, {
      // Undocumented option
      esmodule: false,
    }],
    // OFF as it would require us to use index files, which is not recommended in regards to tree-shaking
    'import-x/no-internal-modules': [OFF, {
      allow: [],
    }],
    // OFF as it only make sense in Yarn/Lerna workspaces, which we don't use/support
    'import-x/no-relative-packages': [OFF, {
      // Undocumented option
      amd: false,
      // Undocumented option
      commonjs: false,
      // Undocumented option
      esmodule: true,
      // Undocumented option
      ignore: [''],
    }],
    // TODO: Check if it works correctly with aliases
    'import-x/no-relative-parent-imports': [ERROR, {
      // Undocumented option
      amd: false,
      // Undocumented option
      commonjs: false,
      // Undocumented option
      esmodule: true,
      // Undocumented option
      ignore: [''],
    }],

    /**
     * OFF as this rule is project specific
     * It can be configured with an object like this:
     * {
     *   basePath: process.cwd(),
     *   zones: [
     *     {
     *       target: '',
     *       from: '',
     *       except: [''],
     *       message: '',
     *     }
     *   ],
     * }
     */
    'import-x/no-restricted-paths': [OFF],
    'import-x/no-self-import': [ERROR],

    /**
     * OFF as it doesn't work when an ES module doesn't specify the 'main' property in its 'package.json'
     * @see:
     *   - https://github.com/import-js/eslint-plugin-import/issues/2703
     *   - https://github.com/browserify/resolve/issues/222
     */
    'import-x/no-unresolved': [OFF, {
      // Configured value
      amd: true,
      caseSensitive: true,
      // Configured value
      caseSensitiveStrict: true,
      // Configured value
      commonjs: true,
      ignore: [],
    }],
    'import-x/no-useless-path-segments': [ERROR, {
      noUselessIndex: false,
    }],
    'import-x/no-webpack-loader-syntax': [ERROR],

    /* ----- Style guide ----- */
    // OFF as this rule seems broken
    'import-x/dynamic-import-chunkname': [OFF, {
      allowEmpty: false,
      importFunctions: ['import'],
      webpackChunknameFormat: '[a-zA-Z0-9-/_]+',
    }],
    // OFF as we prefer files to be structured from general to details
    'import-x/exports-last': [OFF],
    'import-x/extensions': [ERROR, 'always', {
      // Configured value
      ignorePackages: true,
      // Configured value
      pattern: {
        js: 'ignorePackages',
      },
    }],
    // OFF as it clashes with 'import-x/order', especially when dealing with type imports
    'import-x/first': [OFF, 'absolute-first'],
    'import-x/group-exports': [ERROR],
    'import-x/max-dependencies': [ERROR, {
      // Configured value
      ignoreTypeImports: true,
      max: 10,
    }],
    'import-x/no-anonymous-default-export': [ERROR, {
      allowAnonymousClass: false,
      allowAnonymousFunction: false,
      allowArray: false,
      allowArrowFunction: false,
      // Configured value
      allowCallExpression: false,
      allowLiteral: false,
      allowNew: false,
      allowObject: false,
    }],
    // OFF as it is already checked by the 'no-restricted-exports' rule with finer grain
    'import-x/no-default-export': [OFF],
    // Superseded by the 'import-x/no-duplicates' rule
    'no-duplicate-imports': [OFF],

    /* ----- ^ Linked rule v ----- */
    'import-x/no-duplicates': [ERROR, {
      'considerQueryString': false,
      'prefer-inline': false,
    }],
    'import-x/no-named-default': [ERROR],
    // OFF as we prefer named exports in regards to tree-shaking
    'import-x/no-named-export': [OFF],
    // OFF as namespace imports can improve readability
    'import-x/no-namespace': [OFF, {
      ignore: [],
    }],
    'import-x/no-rename-default': [ERROR],
    'import-x/no-unassigned-import': [ERROR, {
      /**
       * Those are present in schema but are not documented and don't seem to be used
       * devDependencies: { type: ['boolean', 'array'] },
       * optionalDependencies: { type: ['boolean', 'array'] },
       * peerDependencies: { type: ['boolean', 'array'] },
       */
      allow: [],
    }],
    // OFF as we prefer to use the perfectionist/sort-imports rule
    'import-x/order': [OFF, {
      'alphabetize': {
        // Configured value
        caseInsensitive: true,
        // Configured value
        order: 'asc',
        // Configured value
        orderImportKind: 'asc',
      },
      // Configured value
      'distinctGroup': false,
      // Configured value
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
      // Configured value
      'newlines-between': 'always',
      'pathGroups': [],
      'pathGroupsExcludedImportTypes': [
        'builtin',
        'external',
        'object',
      ],
      'warnOnUnassignedImports': false,
    }],
    // OFF as we prefer named exports in regards to tree-shaking
    'import-x/prefer-default-export': [OFF, {
      target: 'single',
    }],
  },
} as const satisfies Linter.Config
