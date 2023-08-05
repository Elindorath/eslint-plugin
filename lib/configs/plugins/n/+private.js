'use strict';

const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';


module.exports = {
  rules: {
    /* ----- Possible errors ----- */
    // OFF as it doesn't make sens in unpublished packages
    '@elindorath/n/no-unpublished-bin': [OFF],
    // OFF as it doesn't make sens in unpublished packages
    '@elindorath/n/no-unpublished-import': [OFF],
    // OFF as it doesn't make sens in unpublished packages
    '@elindorath/n/no-unpublished-require': [OFF],
  },
};
