'use strict';


module.exports = {
  overrides: [
    {
      files: [
        '**/test/**',
        '**/tests/**',
      ],
      extends: [
        require.resolve('./common'),
        require.resolve('./+module-type'),
        require.resolve('./+dev'),
        require.resolve('./+jest'),
      ],
    },
  ],
};
