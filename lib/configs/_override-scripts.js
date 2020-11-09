'use strict';


const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';


module.exports = {
  overrides: [
    {
      files: [
        '**/scripts/**',
      ],
      extends: [
        require.resolve('./common'),
        require.resolve('./+script-type'),
        require.resolve('./+node'),
        require.resolve('./+dev'),
      ],
      rules: {
        'no-console': [OFF],
        '@elindorath/node/prefer-global/console': [OFF],
        '@elindorath/node/shebang': [OFF],
        '@elindorath/import/no-extraneous-dependencies': [ERROR, {
          devDependencies: true,
          optionalDependencies: false,
          peerDependencies: false, // Default
          bundledDependencies: false,
        }],
      },
    },
  ],
};
