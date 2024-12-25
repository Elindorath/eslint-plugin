#! /usr/bin/env -S yarn tsx

import { Linter } from 'eslint'

import plugin from '../src/index.ts'


const linter = new Linter()
const builtInRules = linter.getRules()

for (const key of builtInRules.keys()) {
  console.log(key)
}

for (const key of Object.keys(plugin.rules)) {
  if (!(/^mysticatea\/.+\//u).test(key)) {
    console.log(key)
  }
}
