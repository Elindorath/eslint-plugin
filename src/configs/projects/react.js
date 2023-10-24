'use strict'

const globals = require('globals')

const { mergeConfigs } = require('../../utils.js')
const reactJsxConfig = require('../library-react&syntax-jsx.js')
const overrideEslintConfig = require('../overrides/eslint-config.js')
const overrideJestTestsConfig = require('../overrides/jest-tests.js')
const overrideWebpackConfig = require('../overrides/webpack-config.js')
const importBrowserConfig = require('../plugins/import/environment-browser.js')
const typescriptReactConfig = require('../plugins/typescript/syntax-typescript&library-react.js')
const unicornBrowserConfig = require('../plugins/unicorn/environment-browser.js')
const typescriptConfig = require('../syntax-typescript.js')
const vanillaConfig = require('../vanilla.js')

const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';

const cssFilesGlob = '**/*.css.ts';

/** @type {Array<import('eslint').Linter.FlatConfig>} */
module.exports = [
  mergeConfigs(
    vanillaConfig,
    reactJsxConfig,
    typescriptConfig,
    typescriptReactConfig,
    importBrowserConfig,
    unicornBrowserConfig,
    {
      files: ['**/*.ts', '**/*.tsx'],
      languageOptions: {
        globals: {
          ...globals.browser,
        },
      },
      rules: {
        // OFF as it is unpractical in react projects
        'import/no-relative-parent-imports': [OFF],
      },
    },
  ),
  {
    files: ['**/*.tsx', cssFilesGlob],
    rules: {
      'unicorn/filename-case': [ERROR, {
        case: 'pascalCase',
        ignore: [
          /\.md$/ui,
        ],
      }],
    },
  },
  {
    files: ['**/main.tsx'],
    rules: {
      'unicorn/filename-case': [ERROR, {
        case: 'kebabCase',
        ignore: [
          /\.md$/ui,
        ],
      }],
    },
  },
  {
    files: [cssFilesGlob],
    rules: {
      // OFF as we want to enforce exporting a unique 'styles' object
      'filenames-simple/named-export': [OFF],
      // OFF as this rule would force us to capitalized the '.css' part
      'unicorn/filename-case': [OFF],
    },
  },
  overrideEslintConfig,
  overrideJestTestsConfig,
  ...overrideWebpackConfig,
]
