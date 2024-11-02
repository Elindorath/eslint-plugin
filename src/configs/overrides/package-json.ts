import { mergeConfigs } from '../../configMerger'
import { jsonFilesConfig } from '../plugins/json-files/vanilla'
import { jsonConfig } from '../plugins/jsonc/syntax-json'
import { jsonLayoutConfig } from '../plugins/jsonc/syntax-json-layout'

import { OFF, ERROR } from '../../constants'


export const overridePackageJsonConfig = mergeConfigs(
  jsonConfig,
  jsonLayoutConfig,
  jsonFilesConfig,
  {
    files: ['**/package.json'],
    rules: {
      'jsonc/key-name-casing': [ERROR, {
        'camelCase': true,
        'PascalCase': false,
        'SCREAMING_SNAKE_CASE': false,
        'kebab-case': true,
        'snake_case': false,
        'ignores': ['^@[\\w-]*/[\\w-]+$', '^\\w+:\\w+'],
      }],
      // OFF as the ordering is handled by the 'json-files/sort-package-json' rule
      'jsonc/sort-keys': [OFF],
    },
  }
)
