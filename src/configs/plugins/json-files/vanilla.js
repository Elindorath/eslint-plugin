'use strict'

const jsonFilesPlugin = require('eslint-plugin-json-files')

const OFF = 'off'
const WARN = 'warn'
const ERROR = 'error'

/** @type {import('eslint').Linter.FlatConfig} */
module.exports = {
  plugins: {
    'json-files': jsonFilesPlugin,
  },

  rules: {
    'json-files/ensure-repository-directory': [ERROR],
    // OFF as we don't use volta
    'json-files/ensure-volta-extends': [OFF],
    'json-files/eol-last': [ERROR, 'always'], // default
    'json-files/no-branch-in-dependencies': [ERROR, {
      keys: [
        'dependencies',
        'devDependencies',
        'peerDependencies',
        'optionalDependencies',
      ],
      ignore: [], // default
    }],
    'json-files/require-engines': [ERROR, 'node-only'],
    'json-files/require-license': [ERROR, 'always'],
    'json-files/require-unique-dependency-names': [ERROR],
    // TODO: Should be set according to renovate bot config
    'json-files/restrict-ranges': [ERROR, [
      {
        dependencyTypes: [
          'dependencies',
          'devDependencies',
          'optionalDependencies',
        ],
        versionHint: 'pin',
        // Other possible config
        // packages: [],
        // OR
        // packageRegex: '',
        // AND
        // versionRegex: '',
        // OR
        // pinUnstable: true,
      },
      {
        dependencyTypes: ['peerDependencies'],
        versionHint: 'caret',
      }
    ]],
    // OFF as we don't want package.json sorted with the default config of sort-package-json
    // @see: https://github.com/keithamus/sort-package-json
    'json-files/sort-package-json': [OFF],
    // OFF by default. If enabled, it should be configured on a per file basis.
    'json-files/validate-schema': [OFF],
  },
}
