#! /usr/bin/env -S yarn tsx

import { Alphabet } from 'eslint-plugin-perfectionist/alphabet'

const myCustomAlphabet = Alphabet
  .generateRecommendedAlphabet()
  .removeCharacters(['.', '/'])
  .pushCharacters(['.', '/'])
  .getCharacters()

console.log(myCustomAlphabet)
