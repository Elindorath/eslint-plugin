import { mergeConfigs } from './configMerger.ts'

import type { Linter } from 'eslint'
import type { EmptyObject, TaggedUnion } from 'type-fest'


type Environment = 'any' | 'browser' | 'node' | 'worker'

type FileConfiguration = TaggedUnion<'language', LanguageOptions>

type LanguageOptions = {
  javascript: {
    environment: Environment;
    sourceType: SourceType;
    withJsx: boolean;
  };
  json: EmptyObject;
  json5: EmptyObject;
  jsonc: EmptyObject;
  markdown: EmptyObject;
  typescript: {
    environment: Environment;
    sourceType: SourceType;
    withJsx: boolean;
  };
  yaml: EmptyObject;
  yml: EmptyObject;
}

type SourceType = 'any' | 'commonjs' | 'module'

export { defineConfigForFiles }

function defineConfigForFiles(files: string[], fileConfiguration: FileConfiguration): Linter.Config {
  return mergeConfigs(
    { files },
  )
}

defineConfigForFiles(
  ['**/*.ts'],
  {
    environment: 'node',
    language: 'typescript',
    sourceType: 'module',
    withJsx: false,
  }
)

defineConfigForFiles(
  ['**/*.ts'],
  {
    environment: 'node',
    language: 'json',
    sourceType: 'module',
    withJsx: false,
  }
)
