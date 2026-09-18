import typescriptEslint from 'typescript-eslint'

import { mergeConfigs } from '../../configMerger.ts'
import { OFF } from '../../constants.ts'
import type { FixedRulesRecord } from '../../types.ts'

import { markdownVanillaConfig } from '../plugins/markdown/vanilla.ts'


/**
 * `typescript-eslint` writes bare severities, which the configuration merger doesn't accept.
 * Every rule of this configuration is turned off, so no option is lost by rewriting them.
 */
const disableTypeCheckedRules = Object.fromEntries(
  Object.keys(typescriptEslint.configs.disableTypeChecked.rules ?? {}).map((ruleId) => {
    return [ruleId, [OFF]]
  })
) satisfies FixedRulesRecord

const overrideMarkdownConfig = mergeConfigs(
  markdownVanillaConfig,
  {
    files: ['**/*.md'],
  }
)

// The markdown processor turns fenced code blocks into virtual files, which no tsconfig lists
const overrideMarkdownCodeBlockConfig = mergeConfigs(
  {
    languageOptions: {
      parserOptions: {
        project: false,
        projectService: false,
      },
    },
    rules: disableTypeCheckedRules,
  },
  {
    files: ['**/*.md/**'],
  }
)

export {
  overrideMarkdownCodeBlockConfig,
  overrideMarkdownConfig,
}
