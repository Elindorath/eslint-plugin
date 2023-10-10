'use strict';


const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';


module.exports = {
  rules: {
    '@elindorath/shopify/react-hooks-strict-return': [ERROR],
    '@elindorath/shopify/react-initialize-state': [ERROR],
    // Testing it, might be turned OFF in the future
    '@elindorath/shopify/react-no-multiple-render-methods': [ERROR],
    // OFF as we don't use private member syntax
    // TODO: enable when we add @babel/plugin-proposal-private-methods
    // @see: https://babeljs.io/docs/en/babel-plugin-proposal-private-methods
    '@elindorath/shopify/react-prefer-private-members': [OFF],
    '@elindorath/shopify/react-type-state': [ERROR],
  },
};
