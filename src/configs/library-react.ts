import { mergeConfigs } from '../configMerger'

import { reactConfig } from './plugins/react/library-react'
import { reactHooksConfig } from './plugins/react-hooks/library-react'
import { unicornReactConfig } from './plugins/unicorn/library-react'


export const libraryReactConfig = mergeConfigs(
  reactConfig,
  reactHooksConfig,
  unicornReactConfig
)
