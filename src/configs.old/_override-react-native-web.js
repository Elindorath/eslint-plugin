'use strict';


module.exports = {
  overrides: [
    {
      files: [
        '**/web/**',
        '**/*-web/**',
      ],
      extends: [
        require.resolve('./common'),
        require.resolve('./+module-type'),
        require.resolve('./+browser'),
      ],
    },
  ],
};
