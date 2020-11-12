'use strict';


const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';


module.exports = {
  rules: {
    '@elindorath/unicorn/better-regex': [ERROR, {
      sortCharacterClasses: true, // Default
    }],
    '@elindorath/unicorn/catch-error-name': [ERROR, {
      name: 'error', // Default
      ignore: [], // Default
    }],
    '@elindorath/unicorn/consistent-function-scoping': [ERROR],
    '@elindorath/unicorn/custom-error-definition': [ERROR],
    '@elindorath/unicorn/error-message': [ERROR],
    '@elindorath/unicorn/escape-case': [ERROR],
    // Related to the core rule no-warning-comments
    '@elindorath/unicorn/expiring-todo-comments': [ERROR, {
      ignoreDatesOnPullRequests: true, // Default
      terms: ['todo', 'fixme'],
      allowWarningComments: true, // Default
      ignore: [], // Default
    }],
    // Debatable, the usage might prevail
    '@elindorath/unicorn/explicit-length-check': [ERROR, {
      'non-zero': 'greater-than', // Default
    }],
    '@elindorath/unicorn/filename-case': [ERROR, {
      case: 'kebabCase',
      ignore: [
        /\.md$/ui,
      ],
    }],
    // Might cause issue in node context
    '@elindorath/unicorn/import-index': [ERROR, {
      ignoreImports: false, // Default
    }],
    '@elindorath/unicorn/import-style': [ERROR, {
      // Default
      styles: {
        util: { named: true },
        path: { default: true },
        chalk: { default: true },
      },
      extendDefaultStyles: true, // Default
      checkImport: true, // Default
      checkDynamicImport: true, // Default
      checkExportFrom: false, // Default
      checkRequire: true, // Default
    }],
    // Related to the core rule no-new-wrappers
    '@elindorath/unicorn/new-for-builtins': [ERROR],
    // TODO: Might be duplicate of the rule eslint-comments/no-unlimited-disable
    '@elindorath/unicorn/no-abusive-eslint-disable': [ERROR],
    '@elindorath/unicorn/no-array-instanceof': [ERROR],
    '@elindorath/unicorn/no-console-spaces': [ERROR],
    '@elindorath/unicorn/no-fn-reference-in-iterator': [ERROR],
    '@elindorath/unicorn/no-for-loop': [ERROR],
    '@elindorath/unicorn/no-hex-escape': [ERROR],
    '@elindorath/unicorn/no-keyword-prefix': [ERROR, {
      blacklist: ['new', 'class'], // Default
      checkProperties: false,
      onlyCamelCase: true, // Default
    }],
    // Supersed the core rule no-nested-ternary
    '@elindorath/unicorn/no-nested-ternary': [ERROR],
    // OFF as it is already handle by the rule node/no-deprecated-api
    '@elindorath/unicorn/no-new-buffer': [OFF],
    // OFF as it is too restrictive
    '@elindorath/unicorn/no-null': [OFF, {
      checkStrictEquality: true,
    }],
    '@elindorath/unicorn/no-object-as-default-parameter': [ERROR],
    // Supersed the core rule no-process-exit
    '@elindorath/unicorn/no-process-exit': [ERROR],
    // OFF as we are not ready for that
    '@elindorath/unicorn/no-reduce': [OFF],
    '@elindorath/unicorn/no-unreadable-array-destructuring': [ERROR],
    '@elindorath/unicorn/no-unsafe-regex': [ERROR],
    '@elindorath/unicorn/no-unused-properties': [ERROR],
    // TODO: Might conflict with the core rule array-callback-return
    '@elindorath/unicorn/no-useless-undefined': [ERROR, {
      checkArguments: true, // Default
    }],
    '@elindorath/unicorn/no-zero-fractions': [ERROR],
    '@elindorath/unicorn/number-literal-case': [ERROR],
    '@elindorath/unicorn/numeric-separators-style': [ERROR, {
      hexadecimal: {
        minimumDigits: 0,
        groupLength: 2,
      },
      binary: {
        minimumDigits: 0,
        groupLength: 4,
      },
      octal: {
        minimumDigits: 0,
        groupLength: 4,
      },
      number: {
        minimumDigits: 5,
        groupLength: 3,
      },
    }],
    '@elindorath/unicorn/prefer-array-find': [ERROR],
    '@elindorath/unicorn/prefer-flat-map': [ERROR],
    '@elindorath/unicorn/prefer-includes': [ERROR],
    '@elindorath/unicorn/prefer-math-trunc': [ERROR],
    '@elindorath/unicorn/prefer-negative-index': [ERROR],
    '@elindorath/unicorn/prefer-number-properties': [ERROR, {
      checkInfinity: false,
    }],
    '@elindorath/unicorn/prefer-optional-catch-binding': [ERROR],
    '@elindorath/unicorn/prefer-reflect-apply': [ERROR],
    '@elindorath/unicorn/prefer-replace-all': [ERROR],
    '@elindorath/unicorn/prefer-set-has': [ERROR],
    // Related to the core rule prefer-spread
    '@elindorath/unicorn/prefer-spread': [ERROR],
    '@elindorath/unicorn/prefer-starts-ends-with': [ERROR],
    '@elindorath/unicorn/prefer-string-slice': [ERROR],
    '@elindorath/unicorn/prefer-ternary': [ERROR],
    '@elindorath/unicorn/prefer-text-content': [ERROR],
    '@elindorath/unicorn/prefer-trim-start-end': [ERROR],
    '@elindorath/unicorn/prefer-type-error': [ERROR],
    // Should be configured according to specific project standard
    '@elindorath/unicorn/prevent-abbreviations': [ERROR, {
      replacements: {}, // Default here: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/rules/prevent-abbreviations.js#L18
      extendDefaultReplacements: true, // Default
      // Default here: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/rules/prevent-abbreviations.js#L222
      whitelist: {
        i: true,
        str: true,
        src: true,
        dest: true,
      },
      extendDefaultWhitelist: true, // Default
      checkDefaultAndNamespaceImports: 'internal', // Default
      checkShorthandImports: 'internal', // Default
      checkShorthandProperties: false, // Default
      checkProperties: false, // Default
      checkVariables: true, // Default
      checkFilenames: true, // Default
    }],
    '@elindorath/unicorn/string-content': [ERROR, {
      patterns: {
        '^http:\\/\\/': {
          suggest: '^https:\\/\\/',
          message: 'Please secure your links or disable the rule on this line',
        },
      },
    }],
    '@elindorath/unicorn/throw-new-error': [ERROR],

    /* ----- Reset base config ----- */
    // Superseded by unicorn/no-nested-ternary
    'no-nested-ternary': [OFF],
    // Superseded by unicorn/no-process-exit
    'no-process-exit': [OFF],
  },
};
