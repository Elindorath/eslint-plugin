'use strict';


module.exports = {
  overrides: [
    {
      files: [
        '**/.babelrc.js',
        '**/babel.config.js',
        'webpack.config.js',
      ],
      extends: [
        require.resolve('./+script-type'),
        require.resolve('./+node'),
        require.resolve('./+dev'),
      ],
    },
  ],
};
