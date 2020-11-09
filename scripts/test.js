#! /usr/bin/env node

'use strict';

const path = require('path');

const { ESLint } = require('eslint');


(async function main() {
  const eslint = new ESLint({});

  const config = await eslint
    .calculateConfigForFile(path.resolve(__dirname, '..', 'libs', 'configs', 'project-eslint-plugin.js'));

  console.log(config);
  console.log(config.rules['@elindorath/node/no-unpublished-require']);
})();
