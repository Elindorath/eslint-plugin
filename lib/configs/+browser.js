'use strict';


const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';


module.exports = {
  parserOptions: {
    sourceType: 'module',
  },
  env: {
    browser: true,
  },
  extends: [
    require.resolve('./common'),
    require.resolve('./plugins/listeners/common'),
    require.resolve('./plugins/no-unsanitized/common'),
    require.resolve('./plugins/xss/common'),
    require.resolve('./plugins/scanjs-rules/common'),
    require.resolve('./plugins/unicorn/+browser.js'),
  ],
};
