'use strict';


const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';


module.exports = {
  extends: [
    require.resolve('./+module-type'),
    require.resolve('./plugins/jsx-a11y/common'),
    require.resolve('./plugins/shopify/+jsx'),
  ],
};
