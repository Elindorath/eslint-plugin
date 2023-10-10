'use strict';


const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';


module.exports = {
  extends: [
    require.resolve('./common'),
    require.resolve('./plugins/json-files/common'),
    require.resolve('./plugins/json-format/common'),
    require.resolve('./plugins/jsonc/common'),
  ],
};
