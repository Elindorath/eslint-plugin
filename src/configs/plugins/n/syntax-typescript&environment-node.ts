import { ERROR } from '../../../constants.ts'
import type { FixedLinterConfig } from '../../../types.ts'
import { getRuleConfigOverride } from '../../../utilities.ts'

import { baseConfig, nSettings } from './baseConfig.ts'


export const nNodeConfig: FixedLinterConfig = {
  ...baseConfig,

  settings: {
    ...baseConfig.settings,
    n: {
      ...nSettings,
      tryExtensions: ['.js', '.ts', '.json'],
      typescriptExtensionMap: [
        ['.ts', '.ts'],
        ['.tsx', '.tsx'],
        ['.cts', '.cts'],
        ['.mts', '.mts'],
      ],
    },
  },

  /* ----- Rules ----- */
  rules: {
    ...baseConfig.rules,
    'n/file-extension-in-import': [ERROR, 'always', {
      '.ts': 'always',
    }],
    'n/hashbang': getRuleConfigOverride('n/hashbang', baseConfig, {
      executableMap: {
        '.js': 'node',
        '.ts': 'tsx',
      },
    }),
    'n/no-missing-import': getRuleConfigOverride('n/no-missing-import', baseConfig, {
      ignoreTypeImport: true,
    }),
    'n/no-unpublished-import': getRuleConfigOverride('n/no-unpublished-import', baseConfig, {
      ignorePrivate: true,
      ignoreTypeImport: true,
    }),
  },
}
