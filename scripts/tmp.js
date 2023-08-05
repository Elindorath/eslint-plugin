#! /usr/bin/env node

'use strict';

const { rules } = require('eslint-plugin-unicorn');
const { rules: myRules } = require('../lib/configs/plugins/unicorn/common.js');


console.log(myRules)
Object.entries(rules).forEach(([ruleId, ruleDefinition]) => {
  if (!ruleId in myRules)
    console.log(`${ruleId} is not configured`);

  // if (ruleId === 'prevent-abbreviations')
  //   console.log(ruleId, ruleDefinition.meta.schema.items[0].properties);
});
