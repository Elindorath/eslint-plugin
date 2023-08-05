#! /usr/bin/env node

'use strict';

const { Linter } = require('eslint');


const linter = new Linter();
const builtInRules = linter.getRules();

for (const key of builtInRules.keys())
  console.log(key);
