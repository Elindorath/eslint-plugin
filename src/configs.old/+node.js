'use strict';


const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';


module.exports = {
  env: {
    node: true,
  },
  extends: [
    require.resolve('./plugins/node/common'),
    require.resolve('./plugins/security/common'),
    require.resolve('./plugins/import/+node'),
    require.resolve('./plugins/shopify/+node'),
    require.resolve('./plugins/toplevel/+node'),
  ],
};
