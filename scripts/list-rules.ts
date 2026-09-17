#! /usr/bin/env -S yarn tsx

import { builtinRules } from 'eslint/use-at-your-own-risk'

import plugin from '../src/index.ts'


// eslint-disable-next-line @typescript-eslint/no-deprecated -- Currently the only way to get the core rules
for (const key of builtinRules.keys()) {
  console.log(key)
}

for (const key of Object.keys(plugin.rules)) {
  if (!(/^mysticatea\/.+\//u).test(key)) {
    console.log(key)
  }
}
