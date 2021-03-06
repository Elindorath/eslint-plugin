'use strict';

const path = require('path');
const process = require('process');

const fs = require('fs-extra');
const pkgDir = require('pkg-dir');
const { ESLint } = require('eslint');


(async function main() {
  const targetFile = path.resolve(__dirname, `../lib/configs.js`);
  const configFileNames = await fs.readdir(path.resolve(__dirname, `../lib/configs`));

  await fs.outputFile(
    targetFile,
    `\
/**
* DON'T EDIT THIS FILE WHICH WAS GENERATED BY '${path.relative(pkgDir.sync(__dirname), __filename)}'.
*/

'use strict';

module.exports = {
${configFileNames
    .map((fileName) => path.basename(fileName, '.js'))
    .filter((id) => !id.startsWith('_') && id !== 'plugins')
    .map((id) => `  '${id}': require('./configs/${id}'),`)
    .join('\n')}
};
`
  );

  try {
    const eslint = new ESLint({ fix: true });
    const result = await eslint.lintFiles([targetFile]);

    await ESLint.outputFixes(result);
  } catch (error) {
    console.log(error.message);
    console.log('Failed to fix lint error, try to run it again');
  }
})().catch((error) => {
  process.exitCode = 1;
  console.error(error);
});
