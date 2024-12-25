import nPlugin from 'eslint-plugin-n'

import { ERROR } from '../../../constants.ts'

import type { Linter } from 'eslint'


export const baseConfig = {
  plugins: {
    n: nPlugin,
  },

  settings: {
    n: {
      /**
       * Default is read from the package.json's engine field.
       */
      // version: '>= 16.0.0',

      // Should be configured on a per platform basis
      allowModules: [],

      /**
       * This should only be used in specific scenario.
       */
      resolvePaths: [],

      /**
       * This should only be used in specific scenario.
       */
      resolverConfig: {},

      // Used to convert paths when using transpiler.
      // convertPath: [
      //   {
      //     include: ['src/bin/**/*.js'],
      //     exclude: ['**/*.spec.js'],
      //     replace: ['^src/bin/(.+)$', 'bin/$1']
      //   }
      // ],

      tryExtensions: ['.js', '.json', '.node'],

      /**
       * Default is searched up the file tree relative to the currently linted file.
       */
      // tsconfigPath: './tsconfig.json',

      /**
       * Default is dependant of the 'tsconfig.json'.
       * The following is the default fallback.
       */
      // typescriptExtensionMap: 'preserve',
    },
  },

  /* ----- Rules ----- */
  rules: {
    // Might be tweaked in the future
    'n/callback-return': [ERROR, [
      // Configured value
      'callback',
      'cb',
      'next',
      'done',
      'res.send',
      'response.send',
    ]],
    // Should be changed depending of sourceType/environment
    'n/exports-style': [ERROR, 'module.exports', {
      allowBatchAssign: false,
    }],
    'n/file-extension-in-import': [ERROR, 'always', {
      // Do the same as the 'always' string first option
      '.js': 'always',
    }],
    'n/global-require': [ERROR],
    // Configured value
    'n/handle-callback-err': [ERROR, '^.*(?:e|E)rr(?:or)?|e|E'],
    'n/hashbang': [ERROR, {
      additionalExecutables: [],
      // TODO: Should be configured for at least typescript
      executableMap: {
        '.js': 'node',
      },
      // Configured value
      ignoreUnpublished: true,
    }],
    'n/no-callback-literal': [ERROR],
    'n/no-deprecated-api': [ERROR, {
      ignoreGlobalItems: [],
      ignoreModuleItems: [],
    }],
    'n/no-exports-assign': [ERROR],
    'n/no-extraneous-import': [ERROR],
    'n/no-extraneous-require': [ERROR],
    'n/no-missing-import': [ERROR, {
      ignoreTypeImport: false,
    }],
    'n/no-missing-require': [ERROR],
    'n/no-mixed-requires': [ERROR, {
      allowCall: false,
      grouping: true,
    }],
    'n/no-new-require': [ERROR],
    'n/no-path-concat': [ERROR],
    'n/no-process-env': [ERROR, {
      allowedVariables: [],
    }],
    'n/no-process-exit': [ERROR],
    // Might be overlapping with the 'no-restricted-imports' rule
    'n/no-restricted-import': [ERROR, []],
    // Might be overlapping with the 'no-restricted-imports' rule
    'n/no-restricted-require': [ERROR, []],
    'n/no-sync': [ERROR, {
      allowAtRootLevel: false,
      ignores: [],
    }],
    'n/no-unpublished-bin': [ERROR],
    'n/no-unpublished-import': [ERROR, {
      ignorePrivate: true,
      ignoreTypeImport: false,
    }],
    'n/no-unpublished-require': [ERROR, {
      ignorePrivate: true,
    }],
    'n/no-unsupported-features/es-builtins': [ERROR, {
      ignores: [],
    }],
    'n/no-unsupported-features/es-syntax': [ERROR, {
      ignores: [],
    }],
    'n/no-unsupported-features/node-builtins': [ERROR, {
      ignores: [],
    }],
    // Override to allow node globals to be shadowed
    'no-shadow': [ERROR, {
      // Configured value
      allow: [
        'Buffer',
        'process',
        'TextDecoder',
        'TextEncoder',
        'URL',
        'URLSearchParams',
      ],
      // Configured value
      builtinGlobals: true,
      // Configured value
      hoist: 'all',
      ignoreOnInitialization: false,
    }],

    /* ----- Keep order logical ----- */
    'n/prefer-global/buffer': [ERROR, 'never'],
    'n/prefer-global/console': [ERROR, 'always'],
    'n/prefer-global/process': [ERROR, 'never'],
    'n/prefer-global/text-decoder': [ERROR, 'never'],
    'n/prefer-global/text-encoder': [ERROR, 'never'],
    'n/prefer-global/url': [ERROR, 'never'],
    'n/prefer-global/url-search-params': [ERROR, 'never'],
    'n/prefer-node-protocol': [ERROR, {
      // version: '>=16.0.0',
    }],
    'n/prefer-promises/dns': [ERROR],
    'n/prefer-promises/fs': [ERROR],
    'n/process-exit-as-throw': [ERROR],
  },
} as const satisfies Linter.Config
