'use strict';


const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';


module.exports = {
  extends: [
    require.resolve('./+jsx'),
    require.resolve('./plugins/react/common'),
    require.resolve('./plugins/react-hooks/common'),
    require.resolve('./plugins/react-i18n/common'),
    require.resolve('./plugins/react-perf/common'),
    require.resolve('./plugins/react-redux/common'),
    require.resolve('./plugins/shopify/+react.js'),
  ],
};
