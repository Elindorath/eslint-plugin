import { mergeConfigs } from '../configMerger.ts'

import { reactHooksConfig } from './plugins/react-hooks/library-react.ts'
import { reactConfig } from './plugins/react/library-react.ts'
import { unicornReactConfig } from './plugins/unicorn/library-react.ts'


export const libraryReactConfig = mergeConfigs(
  reactConfig,
  reactHooksConfig,
  unicornReactConfig
)
