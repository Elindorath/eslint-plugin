'use strict';

const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';


module.exports = {
  rules: {
    '@elindorath/no-secrets/no-secrets': [ERROR, {
      tolerance: 4, // Default
      additionalRegexes: {
        'Basic Auth': 'Authorization: Basic [A-Za-z0-9+/=]*',
      },
      ignoreContent: '', // Default
      ignoreModules: true, // Default
      ignoreIdentifiers: [], // Default
      ignoreCase: false, // Default
      additionalDelimiters: [], // Default
    }],
  },
};
