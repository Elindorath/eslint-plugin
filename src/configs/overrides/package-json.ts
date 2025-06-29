import { mergeConfigs } from '../../configMerger.ts'
import { ERROR, OFF } from '../../constants.ts'

import { jsonConfig } from '../plugins/jsonc/syntax-json.ts'
import { jsonLayoutConfig } from '../plugins/jsonc/syntax-json-layout.ts'
import { jsonFilesConfig } from '../plugins/json-files/vanilla.ts'


export const overridePackageJsonConfig = mergeConfigs(
  jsonConfig,
  jsonLayoutConfig,
  jsonFilesConfig,
  {
    files: ['**/package.json'],
    rules: {
      'jsonc/key-name-casing': [ERROR, {
        'camelCase': true,
        'ignores': [String.raw`^@[\w-]*/[\w-]+$`, String.raw`^\w+:\w+`],
        'kebab-case': true,
        // eslint-disable-next-line @typescript-eslint/naming-convention -- Defined by the rule
        'PascalCase': false,
        'SCREAMING_SNAKE_CASE': false,
        // eslint-disable-next-line @typescript-eslint/naming-convention -- Defined by the rule
        'snake_case': false,
      }],
      // OFF as the ordering is handled by the 'json-files/sort-package-json' rule
      'jsonc/sort-keys': [OFF],
    },
  }
)
