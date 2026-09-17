import { mergeConfigs } from '../../configMerger.ts'
import { ERROR, OFF } from '../../constants.ts'

import { jsonConfig } from '../plugins/jsonc/syntax-json.ts'
import { jsonLayoutConfig } from '../plugins/jsonc/syntax-json-layout.ts'
import { packageJsonConfig } from '../plugins/package-json/syntax-json.ts'
import { stylisticJsonLayoutConfig } from '../plugins/stylistic/syntax-json-layout.ts'


export const overridePackageJsonConfig = mergeConfigs(
  jsonConfig,
  jsonLayoutConfig,
  packageJsonConfig,
  stylisticJsonLayoutConfig,
  {
    files: ['**/package.json'],
    rules: {
      'jsonc/key-name-casing': [ERROR, {
        'camelCase': true,
        'ignores': [String.raw`^@[\w-]*/[\w-]+$`, String.raw`^\w+:\w+`, String.raw`^\.(/.*)?$`],
        'kebab-case': true,
        // eslint-disable-next-line @typescript-eslint/naming-convention -- Defined by the rule
        'PascalCase': false,
        'SCREAMING_SNAKE_CASE': false,
        // eslint-disable-next-line @typescript-eslint/naming-convention -- Defined by the rule
        'snake_case': false,
      }],
      // OFF as package.json properties follow a conventional order rather than an alphabetical one
      'jsonc/sort-keys': [OFF],
    },
  }
)
