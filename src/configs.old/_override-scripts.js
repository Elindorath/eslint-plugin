'use strict';


const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';


module.exports = {
  files: ['**/scripts/**'],
};

// module.exports = {
//   overrides: [
//     {
//       files: [
//         '**/scripts/**',
//       ],
//       extends: [
//         require.resolve('./+cli'),
//         require.resolve('./+dev'),
//       ],
//     },
//   ],
// };
