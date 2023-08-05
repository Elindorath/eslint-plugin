/* eslint-disable @elindorath/filenames/no-index -- This is the entrypoint */
/* eslint-disable @elindorath/n/global-require -- Respect the format of eslint-plugin */

'use strict';


module.exports = {
  configs: require('./lib/configs'),
  environments: require('./lib/environments'),
  processors: require('./lib/processors'),
  rules: require('./lib/rules'),
  // TODO: Decide about it
  // utils: require('./lib/utils'),
};

/* eslint-enable @elindorath/filenames/no-index */
/* eslint-enable @elindorath/n/global-require */
