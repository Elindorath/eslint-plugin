import { ERROR } from '../../../constants.ts'

import { baseConfig } from './baseConfig.ts'

import type { Linter } from 'eslint'


export const nNodeConfig = {
  ...baseConfig,

  settings: {
    ...baseConfig.settings,
    n: {
      ...baseConfig.settings.n,
      tryExtensions: ['.ts', '.json'],
      typescriptExtensionMap: [
        ['.ts', '.ts'],
        ['.tsx', '.tsx'],
        ['.cts', '.cts'],
        ['.mts', '.mts'],
      ],
    },
  },

  rules: {
    ...baseConfig.rules,
    'n/file-extension-in-import': [ERROR, 'always', {
      '.ts': 'always',
    }],
    'n/hashbang': [ERROR, {
      ...baseConfig.rules['n/hashbang'][1],
      executableMap: {
        '.js': 'node',
        '.ts': 'tsx',
      },
    }],
    'n/no-missing-import': [ERROR, {
      ...baseConfig.rules['n/no-missing-import'][1],
      ignoreTypeImport: false,
    }],
    'n/no-unpublished-import': [ERROR, {
      ...baseConfig.rules['n/no-unpublished-import'][1],
      ignorePrivate: true,
      ignoreTypeImport: false,
    }],
  },
} satisfies Linter.Config
