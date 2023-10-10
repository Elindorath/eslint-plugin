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
    '@elindorath/node/handle-callback-err': [ERROR, 'error'],
    '@elindorath/node/no-callback-literal': [ERROR],
    '@elindorath/node/no-exports-assign': [ERROR],
    '@elindorath/node/no-extraneous-import': [ERROR],
    '@elindorath/node/no-extraneous-require': [ERROR],
    '@elindorath/node/no-missing-import': [ERROR],
    '@elindorath/node/no-missing-require': [ERROR],
    '@elindorath/node/no-new-require': [ERROR],
    '@elindorath/node/no-path-concat': [ERROR],
    '@elindorath/node/no-process-exit': [ERROR],
    '@elindorath/node/no-unpublished-bin': [ERROR],
    '@elindorath/node/no-unpublished-import': [ERROR],
    '@elindorath/node/no-unpublished-require': [ERROR],
    '@elindorath/node/no-unsupported-features/es-builtins': [ERROR],
    '@elindorath/node/no-unsupported-features/es-syntax': [ERROR],
    '@elindorath/node/no-unsupported-features/node-builtins': [ERROR],
    '@elindorath/node/process-exit-as-throw': [ERROR],
    '@elindorath/node/shebang': [ERROR],

    /* ----- Best practices ----- */
    '@elindorath/node/no-deprecated-api': [ERROR, {
      ignoreModuleItems: [], // Default
      ignoreGlobalItems: [], // Default
    }],

    /* ----- Stylistic issues ----- */
    '@elindorath/node/callback-return': [ERROR, [
      'callback',
      'cb',
      'next',
      'done',
      'res.send',
      'response.send',
    ]],
    '@elindorath/node/exports-style': [ERROR, 'module.exports', {
      allowBatchAssign: false, // Default
    }],
    '@elindorath/node/file-extension-in-import': [ERROR, 'always'],
    '@elindorath/node/global-require': [ERROR],
    '@elindorath/node/no-mixed-requires': [ERROR, {
      grouping: true,
      allowCall: false, // Default
    }],
    '@elindorath/node/no-process-env': [ERROR],
    '@elindorath/node/no-restricted-import': [ERROR],
    '@elindorath/node/no-restricted-require': [ERROR],
    '@elindorath/node/no-sync': [ERROR, {
      allowAtRootLevel: false, // Default
    }],
    '@elindorath/node/prefer-global/buffer': [ERROR, 'never'],
    '@elindorath/node/prefer-global/console': [ERROR, 'never'],
    '@elindorath/node/prefer-global/process': [ERROR, 'never'],
    '@elindorath/node/prefer-global/text-decoder': [ERROR, 'never'],
    '@elindorath/node/prefer-global/text-encoder': [ERROR, 'never'],
    '@elindorath/node/prefer-global/url-search-params': [ERROR, 'never'],
    '@elindorath/node/prefer-global/url': [ERROR, 'never'],
    '@elindorath/node/prefer-promises/dns': [ERROR],
    '@elindorath/node/prefer-promises/fs': [ERROR],

    /* ----- Reset base config ----- */
    // TODO: Make a function to merge with original rule config
    // Resolve conflicts with all node/prefer-global/* rules
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
