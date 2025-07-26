import { mergeConfigs } from '../configMerger.ts'

import { eslintReactConfig } from './plugins/eslint-react/library-react.ts'
import { reactConfig } from './plugins/react/library-react.ts'
import { reactHooksConfig } from './plugins/react-hooks/library-react.ts'
import { unicornReactConfig } from './plugins/unicorn/library-react.ts'


export const libraryReactConfig = mergeConfigs(
  eslintReactConfig,
  reactConfig,
  reactHooksConfig,
  unicornReactConfig
)
