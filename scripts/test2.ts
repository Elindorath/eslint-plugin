#! /usr/bin/env -S yarn tsx

import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ownFilename = fileURLToPath(import.meta.url)
const ownDirname = path.dirname(ownFilename)

console.log('meta:', import.meta.url)
console.log('filename:', ownFilename)
console.log('dirname:', ownDirname)
