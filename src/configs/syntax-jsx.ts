import { mergeConfigs } from '../configMerger.ts'

import { jsxA11yConfig } from './plugins/jsx-a11y/syntax-jsx.ts'
import { reactConfig } from './plugins/react/syntax-jsx.ts'
import { reactPerformanceConfig } from './plugins/react-perf/syntax-jsx.ts'


export const syntaxJsxConfig = mergeConfigs(
  jsxA11yConfig,
  reactConfig,
  reactPerformanceConfig,
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
