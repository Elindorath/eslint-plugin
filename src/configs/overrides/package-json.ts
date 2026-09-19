import { mergeConfigs } from '../../configMerger.ts'
import { ERROR, OFF } from '../../constants.ts'

import { languageJsonConfig } from '../language-json.ts'
import { languageJsonLayoutConfig } from '../language-json-layout.ts'
import { packageJsonConfig } from '../plugins/package-json/syntax-json.ts'


export const overridePackageJsonConfig = mergeConfigs(
  languageJsonConfig,
  languageJsonLayoutConfig,
  packageJsonConfig,
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
