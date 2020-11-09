'use strict';


const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';


module.exports = {
  overrides: [
    {
      files: [
        '**/.eslintrc.js',
      ],
      extends: [
        require.resolve('./+eslintrc'),
      ],
    },
  ],
};
