import process from 'node:process'

/**
 * TODO: fix it when this plugin expose typings
 * @see: https://github.com/eslint-community/eslint-plugin-eslint-plugin/issues/310
 */
// @ts-expect-error: TS7016 because this plugin doesn't expose typings
import eslintPluginPlugin from 'eslint-plugin-eslint-plugin'
import { readPackageUpSync } from 'read-package-up'

import { ERROR } from '../../../constants.ts'

import type { Linter } from 'eslint'


// eslint-disable-next-line n/no-sync -- TODO: Find a better way to handle this
const normalizedResult = readPackageUpSync({ cwd: process.cwd(), normalize: true })

if (!normalizedResult) {
  throw new Error('package.json not found')
}

const { packageJson } = normalizedResult
const { repository, version } = packageJson

const repositoryUrl = typeof repository === 'string' ? repository : repository?.url

if (repositoryUrl === undefined || !repositoryUrl) {
  throw new Error('missing repository in package.json')
}

const normalizedRepositoryUrl = repositoryUrl.replace('git+', '').replace('github:', 'https://github.com/')

export const eslintPluginConfig = {
  plugins: {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- Caused by the absence of types.
    'eslint-plugin': eslintPluginPlugin,
  },

  rules: {
    'eslint-plugin/consistent-output': [ERROR, 'always'],
    'eslint-plugin/fixer-return': [ERROR],
    'eslint-plugin/meta-property-ordering': [ERROR, [
      'type',
      'docs',
      'fixable',
      'hasSuggestions',
      'schema',
      'messages',
      'deprecated',
      'replacedBy',
    ]],
    'eslint-plugin/no-deprecated-context-methods': [ERROR],
    'eslint-plugin/no-deprecated-report-api': [ERROR],
    'eslint-plugin/no-identical-tests': [ERROR],
    'eslint-plugin/no-matching-violation-suggest-message-ids': [ERROR],
    'eslint-plugin/no-meta-replaced-by': [ERROR],
    'eslint-plugin/no-meta-schema-default': [ERROR],
    'eslint-plugin/no-missing-message-ids': [ERROR],
    'eslint-plugin/no-missing-placeholders': [ERROR],
    'eslint-plugin/no-only-tests': [ERROR],
    'eslint-plugin/no-property-in-node': [ERROR, {
      additionalNodeTypeFiles: [],
    }],
    'eslint-plugin/no-unused-message-ids': [ERROR],
    'eslint-plugin/no-unused-placeholders': [ERROR],
    'eslint-plugin/no-useless-token-range': [ERROR],
    'eslint-plugin/prefer-message-ids': [ERROR],
    'eslint-plugin/prefer-object-rule': [ERROR],
    'eslint-plugin/prefer-output-null': [ERROR],
    'eslint-plugin/prefer-placeholders': [ERROR],
    'eslint-plugin/prefer-replace-text': [ERROR],
    'eslint-plugin/report-message-format': [ERROR, String.raw`[A-Z].*\.$`],
    'eslint-plugin/require-meta-default-options': [ERROR],
    'eslint-plugin/require-meta-docs-description': [ERROR, {
      pattern: '^(enforce|require|disallow)',
    }],
    'eslint-plugin/require-meta-docs-recommended': [ERROR, {
      allowNonBoolean: false,
    }],
    'eslint-plugin/require-meta-docs-url': [ERROR, {
      // Configured value
      pattern: `${normalizedRepositoryUrl}/blob/v${version}/docs/rules/{{name}}.md`,
    }],
    'eslint-plugin/require-meta-fixable': [ERROR, {
      // Configured value
      catchNoFixerButFixableProperty: true,
    }],
    'eslint-plugin/require-meta-has-suggestions': [ERROR],
    'eslint-plugin/require-meta-schema': [ERROR, {
      // Configured value
      requireSchemaPropertyWhenOptionless: true,
    }],
    'eslint-plugin/require-meta-schema-description': [ERROR],
    'eslint-plugin/require-meta-type': [ERROR],
    // Configured value
    'eslint-plugin/require-test-case-name': [ERROR, 'always'],
    'eslint-plugin/test-case-property-ordering': [ERROR, [
      'code',
      'output',
      'options',
      'parserOptions',
      'errors',
    ]],
    'eslint-plugin/test-case-shorthand-strings': [ERROR, 'as-needed'],
    'eslint-plugin/unique-test-case-names': [ERROR],
  },
} as const satisfies Linter.Config
