import { mergeConfigs } from '../../configMerger.ts'
import { ERROR, OFF } from '../../constants.ts'
import { getRuleConfig } from '../../utilities.ts'

import { environmentNodeConfig } from '../environment-node.ts'
import { overrideEslintConfig } from '../overrides/eslint-config.ts'
import { overridePackageJsonConfig } from '../overrides/package-json.ts'
import { overrideScriptsConfig } from '../overrides/scripts.ts'
import { syntaxTypescriptConfig } from '../syntax-typescript.ts'
import { syntaxTypescriptEnvironmentNodeConfig } from '../syntax-typescript&environment-node.ts'
import { vanillaConfig } from '../vanilla.ts'
import { vanillaLayoutConfig } from '../vanilla-layout.ts'

import type { Linter } from 'eslint'


const typescriptNamingConventionRuleConfig = getRuleConfig('@typescript-eslint/naming-convention', syntaxTypescriptConfig)
const [severity, ...options] = typescriptNamingConventionRuleConfig

export const projectEslintPluginConfig = [
  mergeConfigs(
    vanillaConfig,
    vanillaLayoutConfig,
    syntaxTypescriptConfig,
    environmentNodeConfig,
    syntaxTypescriptEnvironmentNodeConfig,
    {
      files: ['**/*.ts'],
      rules: {
        // OFF as it prevents us to respect the rule configuration format convention
        '@stylistic/array-bracket-newline': [OFF],
        '@typescript-eslint/naming-convention': [severity,
          ...options,
          {
            selector: 'property',
            // eslint-disable-next-line unicorn/no-null -- Required by the rule schema
            format: null,
            modifiers: ['requiresQuotes'],
          },
        ],
        // OFF as we rely on filenames to organize configurations
        'filenames-simple/named-export': [OFF],
        // OFF as we need to import all plugin configurations in final configuration files
        'import-x/max-dependencies': [OFF],
        // OFF as it is more convenient to centralize constants
        'import-x/no-relative-parent-imports': [OFF],
        'multiline-comment-style': [OFF, 'starred-block'],
        'quote-props': [OFF, 'consistent-as-needed', {
          keywords: false,
          numbers: false,
          unnecessary: true,
        }],
        'unicorn/filename-case': [ERROR, {
          cases: {
            camelCase: true,
            kebabCase: true,
          },
        }],
        'unicorn/no-keyword-prefix': [ERROR, {
          // Configured value
          checkProperties: false,
          disallowedPrefixes: ['new', 'class'],
          onlyCamelCase: true,
        }],
        'unicorn/prevent-abbreviations': [ERROR, {
          // Default here: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/28e7498ad06679bb92343db53bb40a7b5ba2990a/rules/shared/abbreviations.js#L230
          allowList: {},
          // Configured value
          checkDefaultAndNamespaceImports: true,
          checkFilenames: true,
          checkProperties: false,
          // Configured value
          checkShorthandImports: true,
          // Configured value
          checkShorthandProperties: true,
          checkVariables: true,
          extendDefaultAllowList: true,
          extendDefaultReplacements: true,
          ignore: [],
          // Default here: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/28e7498ad06679bb92343db53bb40a7b5ba2990a/rules/shared/abbreviations.js#L3
          replacements: {},
        }],
      },
    },
  ),
  overrideEslintConfig,
  overridePackageJsonConfig,
  overrideScriptsConfig,
] as const satisfies Linter.Config[]
