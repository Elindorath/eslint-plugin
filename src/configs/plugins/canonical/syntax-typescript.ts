import canonicalPlugin from 'eslint-plugin-canonical'

import { ERROR, OFF } from '../../../constants.ts'
import { overrideBaseConfigRule } from '../../../utilities.ts'

import type { Linter } from 'eslint'


export const canonicalTypescriptConfig = {
  plugins: {
    canonical: canonicalPlugin,
  },

  rules: {
    'canonical/filename-match-exported': [ERROR, {
      matchCallExpression: false,
      // eslint-disable-next-line unicorn/no-null -- Required by the schema rule
      suffix: null,

      /**
       * The documentation say that we can put `null` in the transforms array to allow non transformed file name.
       * But the rule schema doesn't match the documentation.
       * The empty string should works the same as a falsy value.
       * @see: https://github.com/gajus/eslint-plugin-canonical/blob/main/src/rules/filenameMatchExported.ts#L158
       */
      // Configured value
      transforms: ['', 'pascal'],
    }],
    // OFF as it checks the same as the 'unicorn/filename-case' rule, but this might be more versatile
    'canonical/filename-match-regex': [OFF, {
      ignoreExporting: false,
      regex: String.raw`^[\da-z]+(?:[A-Z][\da-z]+)*$`,
    }],
    'canonical/filename-no-index': [ERROR],
    ...overrideBaseConfigRule('canonical/id-match', undefined, {
      ignoreNamedImports: false,
    }),
    'canonical/no-reassign-imports': [ERROR],

    /**
     * OFF as it is a degraded version of the 'no-restricted-imports' core rule (it doesn't support 'patterns').
     * It was created to workaround the following issue, now resolved.
     * @see: https://github.com/eslint/eslint/issues/15261
     */
    'canonical/no-restricted-imports': [OFF, {
      paths: [],
    }],
    'canonical/no-restricted-strings': [ERROR],
    'canonical/no-use-extend-native': [ERROR],
    // OFF as I don't understand what this rule does. TODO: needs further testing
    'canonical/prefer-import-alias': [OFF, {
      aliases: [{ alias: '', matchParent: '', matchPath: '', maxRelativeDepth: 1 }],
      cwd: '',
    }],
    'canonical/prefer-inline-type-import': [ERROR],
    'canonical/prefer-react-lazy': [ERROR],
    'canonical/prefer-use-mount': [ERROR],
    // Might be OFF if there is overlap with 'eslint-plugin-perfectionist'. TODO: check this
    'canonical/sort-react-dependencies': [ERROR, {
      caseSensitive: true,
    }],
  },
} as const satisfies Linter.Config
