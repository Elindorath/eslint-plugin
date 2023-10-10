'use strict';


const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';


module.exports = {
  ignorePatterns: [
    '!**/.babelrc.js',
  ],
  extends: [
    require.resolve('./common'),
    require.resolve('./+node'),
    require.resolve('./+cli'),
    require.resolve('./+script-type'),
    require.resolve('./_override-eslintrc'),
    require.resolve('./_override-configs'),
    require.resolve('./_override-scripts'),
  ],
  rules: {
    '@elindorath/unicorn/filename-case': [ERROR, {
      cases: {
        kebabCase: true,
        pascalCase: true,
      },
      ignore: [
        /\.md$/ui,
      ],
    }],
  },
};
