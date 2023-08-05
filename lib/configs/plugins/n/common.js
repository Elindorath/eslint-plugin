'use strict';

const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';


module.exports = {
  settings: {
    node: {
      // Used by the rules:
      // - no-extraneous-import
      // - no-extraneous-require
      // - no-missing-import
      // - no-missing-require
      allowModules: [], // Default
      resolvePaths: [__dirname],
      tryExtensions: ['.js', '.json'],
    },
  },
  rules: {
    /* ----- Possible errors ----- */
    '@elindorath/n/handle-callback-err': [ERROR, 'error'],
    '@elindorath/n/no-callback-literal': [ERROR],
    '@elindorath/n/no-exports-assign': [ERROR],
    '@elindorath/n/no-extraneous-import': [ERROR],
    '@elindorath/n/no-extraneous-require': [ERROR],
    '@elindorath/n/no-missing-import': [ERROR],
    '@elindorath/n/no-missing-require': [ERROR],
    '@elindorath/n/no-new-require': [ERROR],
    '@elindorath/n/no-path-concat': [ERROR],
    '@elindorath/n/no-process-exit': [ERROR],
    '@elindorath/n/no-unpublished-bin': [ERROR],
    '@elindorath/n/no-unpublished-import': [ERROR],
    '@elindorath/n/no-unpublished-require': [ERROR],
    '@elindorath/n/no-unsupported-features/es-builtins': [ERROR],
    '@elindorath/n/no-unsupported-features/es-syntax': [ERROR],
    '@elindorath/n/no-unsupported-features/node-builtins': [ERROR],
    '@elindorath/n/process-exit-as-throw': [ERROR],
    '@elindorath/n/shebang': [ERROR],

    /* ----- Best practices ----- */
    '@elindorath/n/no-deprecated-api': [ERROR, {
      ignoreModuleItems: [], // Default
      ignoreGlobalItems: [], // Default
    }],

    /* ----- Stylistic issues ----- */
    '@elindorath/n/callback-return': [ERROR, [
      'callback',
      'cb',
      'next',
      'done',
      'res.send',
      'response.send',
    ]],
    '@elindorath/n/exports-style': [ERROR, 'module.exports', {
      allowBatchAssign: false, // Default
    }],
    '@elindorath/n/file-extension-in-import': [ERROR, 'always'],
    '@elindorath/n/global-require': [ERROR],
    '@elindorath/n/no-mixed-requires': [ERROR, {
      grouping: true,
      allowCall: false, // Default
    }],
    '@elindorath/n/no-process-env': [ERROR],
    '@elindorath/n/no-restricted-import': [ERROR],
    '@elindorath/n/no-restricted-require': [ERROR],
    '@elindorath/n/no-sync': [ERROR, {
      allowAtRootLevel: false, // Default
    }],
    '@elindorath/n/prefer-global/buffer': [ERROR, 'never'],
    '@elindorath/n/prefer-global/console': [ERROR, 'never'],
    '@elindorath/n/prefer-global/process': [ERROR, 'never'],
    '@elindorath/n/prefer-global/text-decoder': [ERROR, 'never'],
    '@elindorath/n/prefer-global/text-encoder': [ERROR, 'never'],
    '@elindorath/n/prefer-global/url-search-params': [ERROR, 'never'],
    '@elindorath/n/prefer-global/url': [ERROR, 'never'],
    '@elindorath/n/prefer-promises/dns': [ERROR],
    '@elindorath/n/prefer-promises/fs': [ERROR],

    /* ----- Reset base config ----- */
    // TODO: Make a function to merge with original rule config
    // Resolve conflicts with all n/prefer-global/* rules
    'no-shadow': [ERROR, {
      builtinGlobals: true,
      hoist: 'all',
      allow: [
        'Promise',
        'Buffer',
        'console',
        'process',
        'TextDecoder',
        'TextEncoder',
        'URLSearchParams',
        'URL',
      ],
    }],
  },
};
