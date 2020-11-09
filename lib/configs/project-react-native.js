'use strict';


const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';


module.exports = {
  ignorePatterns: [
    '!**/.babelrc.js',
  ],
  parser: '@babel/eslint-parser',
  extends: [
    require.resolve('./common'),
    require.resolve('./+react-native'),
    require.resolve('./_override-eslintrc'),
    require.resolve('./_override-configs'),
    require.resolve('./_override-jest-tests'),
    require.resolve('./_override-scripts'),
    require.resolve('./_override-react-native-web'),
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
