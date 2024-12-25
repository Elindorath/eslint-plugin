/**
 * TODO: fix it when this plugin expose typings
 */
// @ts-expect-error: TS7016 because this plugin doesn't expose typings
import jsonFilesPlugin from 'eslint-plugin-json-files'

import { ERROR, OFF } from '../../../constants.ts'

import type { Linter } from 'eslint'


export const jsonFilesConfig = {
  plugins: {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- Caused by the absence of types.
    'json-files': jsonFilesPlugin,
  },

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access -- Caused by the absence of types.
  processor: jsonFilesPlugin.processors['.json'],

  rules: {
    'json-files/ensure-repository-directory': [ERROR],
    // OFF as we don't use volta
    'json-files/ensure-volta-extends': [OFF],
    'json-files/ensure-workspaces': [ERROR],
    // TODO: Deprecated, replace it by the corresponding one in @stylistic
    'json-files/eol-last': [ERROR, 'always'],
    'json-files/no-branch-in-dependencies': [ERROR, {
      ignore: [],
      // Configured value
      keys: [
        'dependencies',
        'devDependencies',
        'peerDependencies',
        'optionalDependencies',
      ],
    }],
    'json-files/require-engines': [ERROR, 'node-only'],
    'json-files/require-license': [ERROR, 'always'],
    'json-files/require-unique-dependency-names': [ERROR],

    /**
     * Other possible config
     *   packages: [],
     *   OR
     *   packageRegex: '',
     *   AND
     *   versionRegex: '',
     *   OR
     *   pinUnstable: true,
     */
    // TODO: Should be set according to renovate bot config
    'json-files/restrict-ranges': [ERROR, [
      {
        // Configured value
        dependencyTypes: [
          'dependencies',
          'devDependencies',
          'optionalDependencies',
        ],
        // Configured value
        versionHint: 'pin',
      },
      {
        // Configured value
        dependencyTypes: ['peerDependencies'],
        // Configured value
        versionHint: 'caret',
      },
    ]],
    'json-files/sort-package-json': [ERROR, {
      // Configured value
      sortOrder: [
        'name',
        'version',
        'description',
        'main',
        'repository',
        'author',
        'license',
        'private',
        'engines',
        'files',
        'scripts',
        'dependencies',
        'devDependencies',
        'packageManager',
      ],
    }],
    // OFF by default. If enabled, it should be configured on a per file basis.
    'json-files/validate-schema': [OFF, {
      avjFixerOptions: {},
      prettyErrors: true,
      // Configured value, do nothing
      schema: '{}',
    }],
  },
} as const satisfies Linter.Config
