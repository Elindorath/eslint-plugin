'use strict';


const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';


module.exports = {
  rules: {
    '@elindorath/json-files/no-branch-in-dependencies': [ERROR, {
      keys: [
        'dependencies',
        'devDependencies',
        'peerDependencies',
        'optionalDependencies',
      ],
      ignore: [], // Default
    }],
    '@elindorath/json-files/require-engines': [ERROR, 'node-only'],
    '@elindorath/json-files/require-license': [ERROR, 'always'],
    // TODO: Should be set according to renovate bot config
    '@elindorath/json-files/restrict-ranges': [ERROR, {
      dependencyTypes: [
        'dependencies',
        'devDependencies',
        'peerDependencies',
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
    }],
    // OFF as we don't want package.json sorted with the default config of sort-package-json
    // @see: https://github.com/keithamus/sort-package-json
    '@elindorath/json-files/sort-package-json': [OFF],
  },
};
