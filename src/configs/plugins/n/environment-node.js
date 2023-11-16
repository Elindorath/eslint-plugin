'use strict'

const nPlugin = require('eslint-plugin-n')


const OFF = 'off'
const WARN = 'warn'
const ERROR = 'error'

module.exports = {
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
    'n/file-extension-in-import': [ERROR, 'always'], // default
    'n/global-require': [ERROR],
    'n/handle-callback-err': [ERROR, '^.*(?:e|E)rr(?:or)?|e|E'],
    'n/no-callback-literal': [ERROR],
    'n/no-deprecated-api': [ERROR, {
      ignoreModuleItems: [], // default
      ignoreGlobalItems: [], // default
    }],
    'n/no-exports-assign': [ERROR],
    'n/no-extraneous-import': [ERROR],
    'n/no-extraneous-require': [ERROR],
    'n/no-missing-import': [ERROR],
    'n/no-missing-require': [ERROR],
    'n/no-mixed-requires': [ERROR, {
      grouping: true,
      allowCall: false, // default
    }],
    'n/no-new-require': [ERROR],
    'n/no-path-concat': [ERROR],
    'n/no-process-env': [ERROR],
    'n/no-process-exit': [ERROR],
    // Might be overlapping with the 'no-restricted-imports' rule
    'n/no-restricted-import': [ERROR],
    // Might be overlapping with the 'no-restricted-imports' rule
    'n/no-restricted-require': [ERROR],
    'n/no-sync': [ERROR, {
      allowAtRootLevel: false, // default
    }],
    'n/no-unpublished-bin': [ERROR],
    'n/no-unpublished-import': [ERROR, {
      ignoreTypeImport: false, // default
    }],
    'n/no-unpublished-require': [ERROR],
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
    'n/prefer-promises/dns': [ERROR],
    'n/prefer-promises/fs': [ERROR],
    'n/process-exit-as-throw': [ERROR],
    'n/shebang': [ERROR],
  },
}
