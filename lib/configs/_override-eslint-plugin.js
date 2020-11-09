'use strict';


module.exports = {
  overrides: [
    {
      files: [
        '**/rules/**',
      ],
      extends: [
        require.resolve('./common'),
        require.resolve('./+script-type'),
        require.resolve('./+dev'),
        require.resolve('./+node'),
      ],
    },
  ],
};
