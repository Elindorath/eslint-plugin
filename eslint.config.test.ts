import { ERROR, OFF } from './src/constants.ts'


const configuration = {
  rules: {
    'import-x/order': [OFF],
    'sort-imports': [ERROR],
  },
}

// eslint-disable-next-line no-restricted-exports -- Required by ESLint
export default configuration
