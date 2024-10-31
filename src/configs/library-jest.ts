import globals from 'globals'

import { mergeConfigs } from '../configMerger'

import { jestConfig } from './plugins/jest/library-jest'
import { jestLayoutConfig } from './plugins/jest/library-jest-layout'
import { jestDomConfig } from './plugins/jest-dom/library-jest'
import { jestExtendedConfig } from './plugins/jest-extended/library-jest'
import { jestFormattingConfig } from './plugins/jest-formatting/library-jest'


export const libraryJestConfig = mergeConfigs(
  jestConfig,
  jestLayoutConfig,
  jestDomConfig,
  jestExtendedConfig,
  jestFormattingConfig,
  {
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
  },
)
