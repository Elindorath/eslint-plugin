'use strict';


const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';

const ARIA_LABEL = 'aria-label';


module.exports = {
  rules: {
    '@elindorath/shopify/jsx-no-complex-expressions': [ERROR],
    '@elindorath/shopify/jsx-no-hardcoded-content': [ERROR, {
      allowStrings: false, // Default
      allowNumbers: false,
      checkProps: [], // Default
      dom: {
        '*': {
          allowStrings: false, // Default
          allowNumbers: false,
          checkProps: ['title', ARIA_LABEL],
        },
        area: {
          allowStrings: false, // Default
          allowNumbers: false,
          checkProps: ['title', 'alt', ARIA_LABEL],
        },
        img: {
          allowStrings: false, // Default
          allowNumbers: false,
          checkProps: ['title', 'alt', ARIA_LABEL],
        },
        input: {
          allowStrings: false, // Default
          allowNumbers: false,
          checkProps: ['title', 'alt', 'placeholder', ARIA_LABEL],
        },
      },
      modules: {}, // Default
    }],
    '@elindorath/shopify/jsx-prefer-fragment-wrappers': [ERROR],
  },
};
