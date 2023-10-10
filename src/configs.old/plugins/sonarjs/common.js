'use strict';

const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';


module.exports = {
  rules: {
    /* ----- Bug detection ----- */
    '@elindorath/sonarjs/no-all-duplicated-branches': [ERROR],
    '@elindorath/sonarjs/no-element-overwrite': [ERROR],
    '@elindorath/sonarjs/no-extra-arguments': [ERROR],
    '@elindorath/sonarjs/no-identical-conditions': [ERROR],
    '@elindorath/sonarjs/no-identical-expressions': [ERROR],
    '@elindorath/sonarjs/no-one-iteration-loop': [ERROR],
    '@elindorath/sonarjs/no-use-of-empty-return-value': [ERROR],

    /* ----- Code smell detection ----- */
    '@elindorath/sonarjs/cognitive-complexity': [ERROR, 15], // Default
    '@elindorath/sonarjs/max-switch-cases': [ERROR, 30], // Default
    '@elindorath/sonarjs/no-collapsible-if': [ERROR],
    '@elindorath/sonarjs/no-collection-size-mischeck': [ERROR],
    '@elindorath/sonarjs/no-duplicate-string': [ERROR],
    '@elindorath/sonarjs/no-duplicated-branches': [ERROR],
    '@elindorath/sonarjs/no-identical-functions': [ERROR],
    '@elindorath/sonarjs/no-inverted-boolean-check': [ERROR],
    '@elindorath/sonarjs/no-redundant-boolean': [ERROR],
    '@elindorath/sonarjs/no-redundant-jump': [ERROR],
    '@elindorath/sonarjs/no-same-line-conditional': [ERROR],
    '@elindorath/sonarjs/no-small-switch': [ERROR],
    '@elindorath/sonarjs/no-unused-collection': [ERROR],
    '@elindorath/sonarjs/no-useless-catch': [ERROR],
    '@elindorath/sonarjs/prefer-immediate-return': [ERROR],
    '@elindorath/sonarjs/prefer-object-literal': [ERROR],
    '@elindorath/sonarjs/prefer-single-boolean-return': [ERROR],
    '@elindorath/sonarjs/prefer-while': [ERROR],
  },
};
