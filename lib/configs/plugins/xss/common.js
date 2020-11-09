'use strict';


const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';


module.exports = {
  rules: {
    '@elindorath/xss/no-mixed-html': [ERROR, {
      htmlVariableRules: ['AsHtml', 'HtmlEncoded/i', '^html$'],
      htmlFunctionRules: ['.asHtml/i', 'toHtml'],
      functions: {
        $: {
          htmlInput: true,
          safe: ['document', 'this'],
        },
        '.html': {
          htmlInput: true,
          htmlOutput: true,
        },
        '.join': {
          passthrough: { obj: true, args: true },
        },
      },
    }],
    '@elindorath/xss/no-location-href-assign': [ERROR, {
      escapeFunc: 'encodeURI',
    }],
  },
};
