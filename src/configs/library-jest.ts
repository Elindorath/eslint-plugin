import globals from 'globals'

import { mergeConfigs } from '../configMerger.ts'

import { jestDomConfig } from './plugins/jest-dom/library-jest.ts'
import { jestExtendedConfig } from './plugins/jest-extended/library-jest.ts'
import { jestFormattingConfig } from './plugins/jest-formatting/library-jest.ts'
import { jestLayoutConfig } from './plugins/jest/library-jest-layout.ts'
import { jestConfig } from './plugins/jest/library-jest.ts'


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
