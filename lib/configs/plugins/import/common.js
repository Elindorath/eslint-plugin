'use strict';

const process = require('process');


const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';


module.exports = {
  settings: {
    'import/extensions': [
      '.js',
      '.jsx',
      '.json',
      '.json5',
    ],
    'import/ignore': [
      'node_modules',
      'node_modules/react-native/index\\.js$',
    ],
    'import/core-modules': [],
    'import/external-module-folders': [
      'node_modules',
    ],
    'import/parsers': {},
    'import/resolver': {
      'babel-module': {},
    },
    // Might change when using eslint_d
    // @see https://github.com/benmosher/eslint-plugin-import#importcache
    'import/cache': {
      lifetime: Infinity,
    },
    'import/internal-regex': '',
  },
  rules: {
    /* ----- Static analysis ----- */
    '@elindorath/import/no-unresolved': [ERROR, {
      commonjs: true,
      amd: false, // Default
      caseSensitive: true, // Default
    }],
    '@elindorath/import/named': [ERROR],
    '@elindorath/import/default': [ERROR],
    '@elindorath/import/namespace': [ERROR, {
      allowComputed: true,
    }],
    // OFF as this rule is project specific
    '@elindorath/import/no-restricted-paths': [OFF],
    '@elindorath/import/no-absolute-path': [ERROR, {
      esmodule: true, // Default
      commonjs: true, // Default
      amd: false, // Default
    }],
    '@elindorath/import/no-dynamic-require': [ERROR],
    // TODO: Might be set to ERROR
    '@elindorath/import/no-internal-modules': [OFF, {
      allow: [], // Default
    }],
    '@elindorath/import/no-webpack-loader-syntax': [ERROR],
    '@elindorath/import/no-self-import': [ERROR],
    '@elindorath/import/no-cycle': [ERROR, {
      maxDepth: Infinity, // Default
      commonjs: false, // Default
      amd: false, // Default
      ignoreExternal: false, // Default
    }],
    '@elindorath/import/no-useless-path-segments': [ERROR, {
      noUselessIndex: true,
    }],
    // TODO: Check if it works correctly with aliases
    '@elindorath/import/no-relative-parent-imports': [ERROR],

    /* ----- Helpful warnings ----- */
    '@elindorath/import/export': [ERROR],
    '@elindorath/import/no-named-as-default': [ERROR],
    '@elindorath/import/no-named-as-default-member': [ERROR],
    '@elindorath/import/no-deprecated': [ERROR],
    // TODO: Needs to be modified for test, tools, ...
    '@elindorath/import/no-extraneous-dependencies': [ERROR, {
      devDependencies: false,
      optionalDependencies: false,
      peerDependencies: false, // Default
      bundledDependencies: false,
    }],
    '@elindorath/import/no-mutable-exports': [ERROR],
    '@elindorath/import/no-unused-modules': [ERROR, {
      missingExports: true,
      unusedExports: true,
      src: [process.cwd()], // Default
      // ignoreExports: [], // Default
    }],

    /* ----- Module systems ----- */
    '@elindorath/import/unambiguous': [ERROR],
    // Dependent of the project type
    '@elindorath/import/no-commonjs': [ERROR, {
      allowRequire: false, // Default
      allowConditionalRequire: true, // Default
      allowPrimitiveModules: false, // Default
    }],
    '@elindorath/import/no-amd': [ERROR],
    '@elindorath/import/no-nodejs-modules': [ERROR, {
      allow: [], // Default
    }],

    /* ----- Style guide ----- */
    '@elindorath/import/first': [ERROR],
    '@elindorath/import/exports-last': [ERROR],
    '@elindorath/import/no-duplicates': [ERROR, {
      considerQueryString: false, // Default
    }],
    // OFF as it is useful
    '@elindorath/import/no-namespace': [OFF],
    '@elindorath/import/extensions': [ERROR, 'always', {
      ignorePackages: true,
      pattern: {
        js: 'ignorePackages',
      },
    }],
    '@elindorath/import/order': [ERROR, {
      groups: [
        'builtin',
        'external',
        'internal',
        'parent',
        'index',
        'sibling',
        'unknown',
        // Typescript only
        'object',
      ],
      pathGroups: [],
      pathGroupsExcludedImportTypes: [], // Default
      'newlines-between': 'always',
      alphabetize: {
        order: 'ignore', // Default
        caseInsensitive: false, // Default
      },
    }],
    '@elindorath/import/newline-after-import': [ERROR, {
      count: 2,
    }],
    '@elindorath/import/prefer-default-export': [ERROR],
    // Should be OFF for flow type project
    '@elindorath/import/max-dependencies': [ERROR, {
      max: 10, // Default
    }],
    '@elindorath/import/no-unassigned-import': [ERROR],
    '@elindorath/import/no-named-default': [ERROR],
    // OFF as it conlicts with the rule import/prefer-default-export
    '@elindorath/import/no-default-export': [OFF],
    // OFF as named exports are good
    '@elindorath/import/no-named-export': [OFF],
    '@elindorath/import/no-anonymous-default-export': [ERROR, {
      allowArray: true,
      allowArrowFunction: false, // Default
      allowAnonymousClass: false, // Default
      allowAnonymousFunction: false, // Default
      allowCallExpression: false,
      allowLiteral: false, // Default
      allowObject: true,
    }],
    // OFF as it causes too much constraints on code organization
    '@elindorath/import/group-exports': [OFF],
    '@elindorath/import/dynamic-import-chunkname': [ERROR, {
      importFunctions: ['import'], // Default
      webpackChunknameFormat: '[a-zA-Z0-9-/_]+', // Default
    }],

    /* ----- Reset base config ----- */
    // Enhanced by the rule import/no-duplicates
    'no-duplicate-imports': [OFF],
  },
};
