/* eslint-disable filenames-simple/no-index -- This is the entrypoint */
/* eslint-disable n/global-require -- Respect the format of eslint-plugin */

import { ESLint } from 'eslint'

import { name, version } from '../package.json'

// const { name, version } = require('../package.json')

/** @typedef {import('eslint').Linter.Config} Config */
/** @typedef {import('eslint').ESLint.Plugin} Plugin */

const index: ESLint.Plugin = {
  meta: {
    name,
    version,
  },
  configs:
}

module.exports = {
  meta: {
    name,
    version,
  },
  configs: require('./configs.js'),
  // environments: require('./lib/environments'),
  // processors: require('./lib/processors'),
  // rules: require('./lib/rules'),
  // TODO: Decide about it
  utils: require('./utils.js'),
}

/* eslint-enable */
