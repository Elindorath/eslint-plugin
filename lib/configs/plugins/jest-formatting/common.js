'use strict';


const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';


module.exports = {
  rules: {
    '@elindorath/jest-formatting/padding-around-after-all-blocks': [ERROR],
    '@elindorath/jest-formatting/padding-around-after-each-blocks': [ERROR],
    '@elindorath/jest-formatting/padding-around-before-all-blocks': [ERROR],
    '@elindorath/jest-formatting/padding-around-before-each-blocks': [ERROR],
    '@elindorath/jest-formatting/padding-around-expect-groups': [ERROR],
    '@elindorath/jest-formatting/padding-around-describe-blocks': [ERROR],
    '@elindorath/jest-formatting/padding-around-test-blocks': [ERROR],
    '@elindorath/jest-formatting/padding-around-all': [ERROR],
  },
};
