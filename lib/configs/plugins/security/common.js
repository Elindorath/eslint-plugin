'use strict';


const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';


module.exports = {
  rules: {
    // OFF as it is a duplicate of the rule unicorn/unsafe-regex
    '@elindorath/security/detect-unsafe-regex': [OFF],
    '@elindorath/security/detect-buffer-noassert': [ERROR],
    '@elindorath/security/detect-child-process': [ERROR],
    '@elindorath/security/detect-disable-mustache-escape': [ERROR],
    '@elindorath/security/detect-eval-with-expression': [ERROR],
    '@elindorath/security/detect-new-buffer': [ERROR],
    '@elindorath/security/detect-no-csrf-before-method-override': [ERROR],
    // TODO: Might be ERROR but it is very restrictive due to lack of intelligence
    '@elindorath/security/detect-non-literal-fs-filename': [OFF],
    '@elindorath/security/detect-non-literal-regexp': [ERROR],
    // OFF as it is a duplicate of the rule import/no-dynamic-require
    '@elindorath/security/detect-non-literal-require': [OFF],
    // OFF as it is too restrictive
    '@elindorath/security/detect-object-injection': [OFF],
    '@elindorath/security/detect-possible-timing-attacks': [ERROR],
    '@elindorath/security/detect-pseudoRandomBytes': [ERROR],
  },
};
