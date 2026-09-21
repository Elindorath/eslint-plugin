import plugin from './src/index.ts'


const config = [
  // The build output mirrors `src`, which is already linted
  { ignores: ['dist/'] },
  ...plugin.configs['project-eslint-plugin'],
]

// eslint-disable-next-line no-restricted-exports -- Required by ESLint
export default config
