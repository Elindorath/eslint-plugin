import type { Linter } from 'eslint'
import nPlugin from 'eslint-plugin-n'

import { ERROR } from '../../../constants'


export const nNodeConfig: Linter.Config = {
  plugins: {
    n: nPlugin,
  },

  settings: {
    n: {
      // Prefer using the 'engines' field in 'package.json'.
      // version: '>= 16.0.0', // default

      allowModules: [], // default

      resolvePaths: [], // default

      // Used to convert paths when using transpiler.
      // convertPath: [
      //   {
      //     include: ['src/bin/**/*.js'],
      //     exclude: ['**/*.spec.js'],
      //     replace: ['^src/bin/(.+)$', 'bin/$1']
      //   }
      // ],

      tryExtensions: ['.js', '.json', '.node'], // default

      // Default is searched up the file tree relative to the currently linted file.
      // tsconfigPath: './tsconfig.json',

      // Default is dependant of the 'tsconfig.json'.
      // typescriptExtensionMap: 'react-jsx',
    },
  },

  rules: {
    // Might be tweaked in the future
    'n/callback-return': [ERROR, [
      'callback',
      'cb',
      'next',
      'done',
      'res.send',
      'response.send',
    ]],
    // Should be changed depending of sourceType/environment
    'n/exports-style': [ERROR, 'module.exports', {
      allowBatchAssign: false, // default
    }],
    'n/file-extension-in-import': [ERROR, 'always', { // default
      '.js': 'always', // Do the same as the 'always' string first option
    }],
    'n/global-require': [ERROR],
    'n/handle-callback-err': [ERROR, '^.*(?:e|E)rr(?:or)?|e|E'],
    'n/hashbang': [ERROR, {
      convertPath: undefined,
      ignoreUnpublished: true,
      additionalExecutables: [],
      // TODO: Should be configured for at least typescript
      executableMap: {
        '.js': 'node',
      },
    }],
    'n/no-callback-literal': [ERROR],
    'n/no-deprecated-api': [ERROR, {
      ignoreModuleItems: [], // default
      ignoreGlobalItems: [], // default
    }],
    'n/no-exports-assign': [ERROR],
    'n/no-extraneous-import': [ERROR, {
      allowModules: [],
      resolvePaths: [],
      // convertPath: [],
    }],
    'n/no-extraneous-require': [ERROR, {
      allowModules: [],
      resolvePaths: [],
      // convertPath: [],
      tryExtensions: [],
    }],
    'n/no-missing-import': [ERROR, {
      allowModules: [],
      resolvePaths: [],
      tsconfigPath: '',
      typescriptExtensionMap: [],
      ignoreTypeImport: false, // default
    }],
    'n/no-missing-require': [ERROR, {
      allowModules: [],
      resolvePaths: [],
      tryExtensions: [],
      tsconfigPath: '',
      typescriptExtensionMap: [],
    }],
    'n/no-mixed-requires': [ERROR, {
      grouping: true,
      allowCall: false, // default
    }],
    'n/no-new-require': [ERROR],
    'n/no-path-concat': [ERROR],
    'n/no-process-env': [ERROR, {
      allowedVariables: [], // default
    }],
    'n/no-process-exit': [ERROR],
    // Might be overlapping with the 'no-restricted-imports' rule
    'n/no-restricted-import': [ERROR, []],
    // Might be overlapping with the 'no-restricted-imports' rule
    'n/no-restricted-require': [ERROR, []],
    'n/no-sync': [ERROR, {
      allowAtRootLevel: false, // default
    }],
    'n/no-unpublished-bin': [ERROR, {
      // convertPath: [],
    }],
    'n/no-unpublished-import': [ERROR, {
      allowModules: [],
      resolvePaths: [],
      // convertPath: [],
      ignoreTypeImport: false, // default
      ignorePrivate: true, // default
    }],
    'n/no-unpublished-require': [ERROR, {
      allowModules: [],
      resolvePaths: [],
      // convertPath: [],
      tryExtensions: [],
      ignorePrivate: true, // default
    }],
    'n/no-unsupported-features/es-builtins': [ERROR, {
      ignores: [], // default
    }],
    'n/no-unsupported-features/es-syntax': [ERROR, {
      ignores: [], // default
    }],
    'n/no-unsupported-features/node-builtins': [ERROR, {
      ignores: [], // default
    }],
    // Override to allow node globals to be shadowed
    'no-shadow': [ERROR, {
      builtinGlobals: true,
      hoist: 'all',
      allow: [
        'Buffer',
        'process',
        'TextDecoder',
        'TextEncoder',
        'URL',
        'URLSearchParams',
      ],
      ignoreOnInitialization: false, // default
    }],
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
}
