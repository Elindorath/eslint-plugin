import { mergeConfigs } from '../configMerger.ts'

import { reactNativeA11yConfig } from './plugins/react-native-a11y/library-react-native&syntax-jsx.ts'
import { reactNativeConfig } from './plugins/react-native/library-react-native&syntax-jsx.ts'


export const libraryReactNativeSyntaxJsxConfig = mergeConfigs(
  reactNativeConfig,
  reactNativeA11yConfig
)
