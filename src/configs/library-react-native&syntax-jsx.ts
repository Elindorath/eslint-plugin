import { mergeConfigs } from '../configMerger'

import { reactNativeConfig } from './plugins/react-native/library-react-native&syntax-jsx'
import { reactNativeA11yConfig } from './plugins/react-native-a11y/library-react-native&syntax-jsx'


export const libraryReactNativeSyntaxJsxConfig = mergeConfigs(
  reactNativeConfig,
  reactNativeA11yConfig
)
