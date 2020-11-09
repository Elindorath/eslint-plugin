'use strict';

const { getRuleConfig } = require('../../../utils.js');
const baseConfig = require('../core/common.js');


const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';


module.exports = {
  rules: {
    '@elindorath/jsonc/no-bigint-literals': [ERROR],
    // JSON only
    '@elindorath/jsonc/no-comments': [ERROR],
    '@elindorath/jsonc/no-number-props': [ERROR],
    '@elindorath/jsonc/no-numeric-separators': [ERROR],
    '@elindorath/jsonc/no-regexp-literals': [ERROR],
    '@elindorath/jsonc/no-template-literals': [ERROR],
    '@elindorath/jsonc/no-undefined-value': [ERROR],
    // Allowed in JSON5
    '@elindorath/jsonc/valid-json-number': [ERROR],

    '@elindorath/jsonc/array-bracket-newline': getRuleConfig('array-bracket-newline', baseConfig),
    '@elindorath/jsonc/array-bracket-spacing': getRuleConfig('array-bracket-spacing', baseConfig),
    '@elindorath/jsonc/array-element-newline': getRuleConfig('array-element-newline', baseConfig),
    '@elindorath/jsonc/comma-dangle': getRuleConfig('comma-dangle', baseConfig),
    '@elindorath/jsonc/comma-style': getRuleConfig('comma-style', baseConfig),
    '@elindorath/jsonc/indent': getRuleConfig('indent', baseConfig),
    '@elindorath/jsonc/key-spacing': getRuleConfig('key-spacing', baseConfig),
    '@elindorath/jsonc/no-dupe-keys': getRuleConfig('no-dupe-keys', baseConfig),
    '@elindorath/jsonc/no-multi-str': getRuleConfig('no-multi-str', baseConfig),
    '@elindorath/jsonc/no-octal-escape': getRuleConfig('no-octal-escape', baseConfig),
    '@elindorath/jsonc/no-sparse-arrays': getRuleConfig('no-sparse-arrays', baseConfig),
    '@elindorath/jsonc/no-useless-escape': getRuleConfig('no-useless-escape', baseConfig),
    '@elindorath/jsonc/object-curly-newline': getRuleConfig('object-curly-newline', baseConfig),
    '@elindorath/jsonc/object-curly-spacing': getRuleConfig('object-curly-spacing', baseConfig),
    '@elindorath/jsonc/object-property-newline': getRuleConfig('object-property-newline', baseConfig),
    '@elindorath/jsonc/quote-props': getRuleConfig('quote-props', baseConfig),
    '@elindorath/jsonc/quotes': getRuleConfig('quotes', baseConfig),
    '@elindorath/jsonc/sort-keys': getRuleConfig('sort-keys', baseConfig),
    '@elindorath/jsonc/space-unary-ops': getRuleConfig('space-unary-ops', baseConfig),
  },
};
