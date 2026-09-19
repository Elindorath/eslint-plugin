/**
 * The default entry point declares `jsonc-eslint-parser`, under which these rules stop reporting
 * silently once a `language` takes over parsing
 */
import packageJsonPlugin from 'eslint-plugin-package-json/experimental'

import { ERROR, OFF } from '../../../constants.ts'

import type { Linter } from 'eslint'


export const packageJsonConfig = {
  plugins: {
    'package-json': packageJsonPlugin,
  },

  rules: {
    'package-json/bin-name-casing': [ERROR],
    'package-json/exports-subpaths-style': [ERROR, {
      prefer: 'explicit',
    }],
    'package-json/no-empty-fields': [ERROR, {
      ignoreProperties: [
        'files',
      ],
    }],
    'package-json/no-local-dependencies': [ERROR, {
      ignorePrivate: true,
    }],
    'package-json/no-redundant-files': [ERROR],
    'package-json/no-redundant-publishConfig': [ERROR],
    'package-json/order-properties': [ERROR, {
      order: 'sort-package-json',
    }],
    'package-json/prefer-rolling-workspace-spec': [ERROR, {
      ignoreDependencies: [],
      ignorePatterns: [],
    }],
    'package-json/repository-shorthand': [ERROR, {
      form: 'object',
    }],
    'package-json/require-attribution': [ERROR, {
      ignorePrivate: true,
      preferContributorsOnly: false,
    }],
    // OFF as we rely on the `package-json/require-attribution` rule
    'package-json/require-author': [OFF],
    // OFF as not every package exposes an executable
    'package-json/require-bin': [OFF],
    // OFF as not every package ships a browser specific entry point
    'package-json/require-browser': [OFF],
    'package-json/require-bugs': [ERROR],
    // OFF as bundling dependencies is uncommon
    'package-json/require-bundleDependencies': [OFF],
    // OFF as script configuration is optional
    'package-json/require-config': [OFF],
    // OFF as `require-attribution` accepts `author` alone
    'package-json/require-contributors': [OFF],
    // OFF as most packages are architecture agnostic
    'package-json/require-cpu': [OFF],
    // OFF as a package may have no runtime dependency
    'package-json/require-dependencies': [OFF],
    'package-json/require-description': [ERROR],
    // OFF as a package may have no development dependency
    'package-json/require-devDependencies': [OFF],
    // OFF as `engines` already states the supported runtime
    'package-json/require-devEngines': [OFF],
    // OFF as `files` and `exports` describe the package layout
    'package-json/require-directories': [OFF],
    'package-json/require-engines': [ERROR],
    'package-json/require-exports': [ERROR],
    'package-json/require-files': [ERROR],
    // OFF as soliciting funding is a maintainer choice
    'package-json/require-funding': [OFF],
    // OFF as most packages have no native addon
    'package-json/require-gypfile': [OFF],
    'package-json/require-homepage': [ERROR],
    'package-json/require-keywords': [ERROR],
    // OFF as most packages have no native addon
    'package-json/require-libc': [OFF],
    'package-json/require-license': [ERROR],
    // OFF as `exports` is the entry point we require
    'package-json/require-main': [OFF],
    // OFF as most packages ship no man page
    'package-json/require-man': [OFF],
    // OFF as `type` already declares the module format
    'package-json/require-module': [OFF],
    'package-json/require-name': [ERROR],
    // OFF as a package may have no optional dependency
    'package-json/require-optionalDependencies': [OFF],
    // OFF as most packages are platform agnostic
    'package-json/require-os': [OFF],
    // OFF as pinning the package manager is a repository choice
    'package-json/require-packageManager': [OFF],
    // OFF as a package may have no peer dependency
    'package-json/require-peerDependencies': [OFF],
    // OFF as it only applies to packages declaring optional peers
    'package-json/require-peerDependenciesMeta': [OFF],
    // OFF as it only applies to packages we don't publish
    'package-json/require-private': [OFF],
    // OFF as the default registry and access suit most packages
    'package-json/require-publishConfig': [OFF],
    'package-json/require-repository': [ERROR],
    // OFF as a package may have no script
    'package-json/require-scripts': [OFF],
    'package-json/require-sideEffects': [ERROR],
    'package-json/require-type': [ERROR],
    // OFF as type declarations are shipped with the sources
    'package-json/require-types': [OFF],
    'package-json/require-version': [ERROR],
    // This is configured to promote the use of tools like renovate
    'package-json/restrict-dependency-ranges': [ERROR, [
      {
        forDependencyTypes: ['dependencies', 'devDependencies'],
        rangeType: 'pin',
      },
    ]],
    'package-json/restrict-private-properties': [ERROR, {
      blockedProperties: [
        'files',
        'publishConfig',
      ],
    }],
    // List taken from https://eslint-plugin-package-json.dev/rules/restrict-top-level-properties/#common-tool-specific-properties
    'package-json/restrict-top-level-properties': [ERROR, {
      ban: [
        {
          message: 'Configure Babel in a dedicated config file.',
          property: 'babel',
        },
        {
          message: 'Configure Browserslist in a dedicated config file.',
          property: 'browserslist',
        },
        {
          message: 'Configure commitlint in a dedicated config file.',
          property: 'commitlint',
        },
        {
          message: 'Configure ESLint in a dedicated config file.',
          property: 'eslintConfig',
        },
        {
          message: 'Configure Jest in a dedicated config file.',
          property: 'jest',
        },
        {
          message: 'Configure lint-staged in a dedicated config file.',
          property: 'lint-staged',
        },
        {
          message: 'Configure pnpm in a dedicated config file.',
          property: 'pnpm',
        },
        {
          message: 'Configure Prettier in a dedicated config file.',
          property: 'prettier',
        },
        {
          message: 'Configure release-it in a dedicated config file.',
          property: 'release-it',
        },
        {
          message: 'Configure Renovate in a dedicated config file.',
          property: 'renovate',
        },
        {
          message: 'Configure Stylelint in a dedicated config file.',
          property: 'stylelint',
        },
        {
          message: 'Configure TypeDoc in a dedicated config file.',
          property: 'typedoc',
        },
      ],
    }],
    'package-json/scripts-name-casing': [ERROR, {
      ignoreNames: [],
      ignorePatterns: [],
    }],
    'package-json/sort-collections': [ERROR, [
      'config',
      'dependencies',
      'devDependencies',
      'exports',
      'optionalDependencies',
      'overrides',
      'peerDependencies',
      'peerDependenciesMeta',
      'scripts',
    ]],
    'package-json/specify-peers-locally': [ERROR],
    'package-json/unique-dependencies': [ERROR],
    'package-json/valid-author': [ERROR],
    'package-json/valid-bin': [ERROR],
    'package-json/valid-browser': [ERROR],
    'package-json/valid-bugs': [ERROR],
    'package-json/valid-bundleDependencies': [ERROR],
    'package-json/valid-config': [ERROR],
    'package-json/valid-contributors': [ERROR],
    'package-json/valid-cpu': [ERROR],
    'package-json/valid-dependencies': [ERROR],
    'package-json/valid-description': [ERROR],
    'package-json/valid-devDependencies': [ERROR],
    'package-json/valid-devEngines': [ERROR],
    'package-json/valid-directories': [ERROR],
    'package-json/valid-engines': [ERROR],
    'package-json/valid-exports': [ERROR],
    'package-json/valid-files': [ERROR],
    'package-json/valid-funding': [ERROR],
    'package-json/valid-gypfile': [ERROR],
    'package-json/valid-homepage': [ERROR],
    'package-json/valid-keywords': [ERROR],
    'package-json/valid-libc': [ERROR],
    'package-json/valid-license': [ERROR],
    'package-json/valid-main': [ERROR],
    'package-json/valid-man': [ERROR],
    'package-json/valid-module': [ERROR],
    'package-json/valid-name': [ERROR],
    'package-json/valid-optionalDependencies': [ERROR],
    'package-json/valid-os': [ERROR],
    'package-json/valid-packageManager': [ERROR],
    'package-json/valid-peerDependencies': [ERROR],
    'package-json/valid-peerDependenciesMeta': [ERROR],
    'package-json/valid-peerDependenciesMeta-relationship': [ERROR],
    'package-json/valid-private': [ERROR],
    'package-json/valid-publishConfig': [ERROR],
    'package-json/valid-repository': [ERROR],
    'package-json/valid-repository-directory': [ERROR],
    'package-json/valid-scripts': [ERROR],
    'package-json/valid-sideEffects': [ERROR],
    'package-json/valid-type': [ERROR],
    'package-json/valid-version': [ERROR],
    'package-json/valid-workspaces': [ERROR],
  },
} as const satisfies Linter.Config
