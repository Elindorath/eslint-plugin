'use strict';


const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';


module.exports = {
  settings: {
    // TODO: Should be monitored and changed if necessary
    '@elindorath/json/sort-package-json': 'standard',
    '@elindorath/json/ignore-files': ['**/package-lock.json'],
    '@elindorath/json/json-with-comments-files': [
      '**/tsconfig.json',
      '.vscode/**',
    ],
  },
};
