import { mergeConfigs } from '../configMerger'

import { jsxA11yConfig } from './plugins/jsx-a11y/syntax-jsx'
import { reactConfig } from './plugins/react/syntax-jsx'
import { reactPerfConfig } from './plugins/react-perf/syntax-jsx'


export const syntaxJsxConfig = mergeConfigs(
  jsxA11yConfig,
  reactConfig,
  reactPerfConfig,
  {
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  }
)
