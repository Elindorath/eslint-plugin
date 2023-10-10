'use strict';


const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';


module.exports = {
  extends: [
    require.resolve('./common'),
    require.resolve('./plugins/jest/common'),
    require.resolve('./plugins/jest-extended/common'),
    require.resolve('./plugins/jest-formatting/common'),
    require.resolve('./plugins/shopify/+jest.js'),
  ],
};
