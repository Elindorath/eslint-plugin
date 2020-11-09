'use strict';


const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';


module.exports = {
  rules: {
    // TODO: Might conflict with the rule react/sort-comp
    '@elindorath/sort-class-members/sort-class-members': [ERROR, {
      order: [
        'static-properties',
        'properties',
        'conventional-private-properties',
        'constructor',
        'getters',
        'accessor-pairs',
        'setters',
        'arrow-function-properties',
        'methods',
        'async-methods',
        'event-handlers',
        'conventional-private-methods',
        'static-methods',
        'everything-else',
      ],
      groups: {
        'event-handlers': [
          { name: '/^handle.+$/', type: 'property' },
          { name: '/^handle.+$/', type: 'method' },
        ],
      },
      accessorPairPositioning: 'getThenSet',
      stopAfterFirstProblem: false, // Default
    }],
  },
};
