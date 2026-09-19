import globals from 'globals'

import { mergeConfigs } from '../configMerger.ts'


/*
 * React Native running on iOS or Android, as opposed to the same library running through
 * `react-native-web`, which sits on the browser environment and its globals
 */
export const libraryReactNativeEnvironmentNativeConfig = mergeConfigs(
  {
    languageOptions: {
      globals: {
        ...globals['react-native'],
      },
    },
  }
)
