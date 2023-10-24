'use strict';

const path = require('node:path');
const process = require('node:process');

const { ESLint } = require('eslint');
const fs = require('fs-extra');
const packageDirectory = require('pkg-dir');


(async function main() {
  const eslint = new ESLint({ fix: true });

  await generateIndex('environment', eslint);
  await generateIndex('processor', eslint);
  await generateIndex('rule', eslint);
// eslint-disable-next-line promise/prefer-await-to-callbacks -- require as we can't use global await
})().catch((error) => {
  process.exitCode = 1;
  console.error(error);
});

async function generateIndex(type, eslint) {
  const foreignFileNames = await fs.readdir(path.resolve(__dirname, `../lib/foreign-${type}s`));
  const ownFileNames = await fs.readdir(path.resolve(__dirname, `../lib/${type}s`));
  const targetFile = path.resolve(__dirname, `../lib/${type}s.js`);

  await fs.outputFile(
    targetFile,
    `\
/**
* DON'T EDIT THIS FILE WHICH WAS GENERATED BY '${path.relative(packageDirectory.sync(__dirname), __filename)}'.
*/

'use strict';

module.exports = Object.assign(
${foreignFileNames
    .map((fileName) => path.basename(fileName, '.js'))
    .map((id) => `  require('./foreign-${type}s/${id}'),`)
    .join('\n')}
  {
${ownFileNames
    .map((fileName) => path.basename(fileName, '.js'))
    .map((id) => `    '${id}': require('./${type}s/${id}'),`)
    .join('\n')}
  }
);
`
  );

  try {
    const result = await eslint.lintFiles([targetFile]);

    await ESLint.outputFixes(result);
  } catch (error) {
    console.log(error.message);
    console.log('Failed to fix lint error, try to run it again');
  }
}
