#! /usr/bin/env node

'use strict';

const { Linter } = require('eslint');

const { rules } = require('..');


const linter = new Linter();
const builtInRules = linter.getRules();

for (const key of builtInRules.keys())
  console.log(key);

for (const key of Object.keys(rules)) {
  if (!(/^mysticatea\/.+\//u).test(key))
    console.log(key);
}
