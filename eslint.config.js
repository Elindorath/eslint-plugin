'use strict';

const elindorathPlugin = require('@elindorath/eslint-plugin');


const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';

module.exports = (() => {
  /**
   * @type {Array<import('eslint').Linter.FlatConfig>}
   */
  const config = [
    ...elindorathPlugin.configs['project-eslint-plugin'],
  ];

  return config;
})();
