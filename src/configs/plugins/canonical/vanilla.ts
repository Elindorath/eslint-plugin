import canonicalPlugin from 'eslint-plugin-canonical'

import { ERROR, OFF } from '../../../constants.ts'
import { overrideBaseConfigRule } from '../../../utilities.ts'

import type { Linter } from 'eslint'


export const canonicalVanillaConfig = {
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
    // OFF as it reports exactly what the 'filenames-simple/no-index' rule reports
    'canonical/filename-no-index': [OFF],
    ...overrideBaseConfigRule('canonical/id-match', undefined, {
      ignoreNamedImports: false,
    }),

    /**
     * OFF as it resolves every import through a resolver this configuration doesn't declare,
     * so it only ever reports resolution failures
     */
    'canonical/no-barrel-import': [OFF],
    'canonical/no-export-all': [ERROR],
    'canonical/no-import-namespace-destructure': [ERROR],
    'canonical/no-re-export': [ERROR],
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
    // OFF as it is the same implementation as the 'no-use-extend-native/no-use-extend-native' rule, down to the reported location
    'canonical/no-use-extend-native': [OFF],
    // OFF as I don't understand what this rule does. TODO: needs further testing
    'canonical/prefer-import-alias': [OFF, {
      aliases: [{ alias: '', matchParent: '', matchPath: '', maxRelativeDepth: 1 }],
      cwd: '',
    }],
    // OFF as it reports the same statements as the 'import-x/extensions' rule
    'canonical/require-extension': [OFF, {
      ignorePackages: false,
    }],
  },
} as const satisfies Linter.Config
