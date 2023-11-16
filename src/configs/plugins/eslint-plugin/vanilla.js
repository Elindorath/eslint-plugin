'use strict'

const eslintPluginPlugin = require('eslint-plugin-eslint-plugin')
const readPackageUp = require('read-package-up')

const OFF = 'off'
const WARN = 'warn'
const ERROR = 'error'

// TODO: Find a way to let cwd be the root directory in which the config is used
const { packageJson } = readPackageUp.sync({ cwd: __dirname, normalize: true })
const repositoryUrl = packageJson.repository.url.replace('git+', '')
const { version } = packageJson

/** @type {import('eslint').Linter.FlatConfig} */
module.exports = {
  plugins: {
    'eslint-plugin': eslintPluginPlugin,
  },

  rules: {
    'eslint-plugin/consistent-output': [ERROR, 'always'],
    'eslint-plugin/fixer-return': [ERROR],
    'eslint-plugin/meta-property-ordering': [ERROR, [
      // default
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
    'eslint-plugin/no-missing-message-ids': [ERROR],
    'eslint-plugin/no-missing-placeholders': [ERROR],
    'eslint-plugin/no-only-tests': [ERROR],
    'eslint-plugin/no-unused-message-ids': [ERROR],
    'eslint-plugin/no-unused-placeholders': [ERROR],
    'eslint-plugin/no-useless-token-range': [ERROR],
    'eslint-plugin/prefer-message-ids': [ERROR],
    'eslint-plugin/prefer-object-rule': [ERROR],
    'eslint-plugin/prefer-output-null': [ERROR],
    'eslint-plugin/prefer-placeholders': [ERROR],
    'eslint-plugin/prefer-replace-text': [ERROR],
    'eslint-plugin/report-message-format': [ERROR, '[^a-z\'"{].*\\.$'],
    'eslint-plugin/require-meta-docs-description': [ERROR, {
      pattern: '^(enforce|require|disallow)', // default
    }],
    'eslint-plugin/require-meta-docs-url': [ERROR, {
      pattern: `${repositoryUrl}/blob/v${version}/docs/rules/{{name}}.md`,
    }],
    'eslint-plugin/require-meta-fixable': [ERROR, {
      catchNoFixerButFixableProperty: true,
    }],
    'eslint-plugin/require-meta-has-suggestions': [ERROR],
    'eslint-plugin/require-meta-schema': [ERROR, {
      requireSchemaPropertyWhenOptionless: true,
    }],
    'eslint-plugin/require-meta-type': [ERROR],
    'eslint-plugin/test-case-property-ordering': [ERROR, [
      // default
      'code',
      'output',
      'options',
      'parserOptions',
      'errors',
    ]],
    'eslint-plugin/test-case-shorthand-strings': [ERROR, 'as-needed'], // default
  },
}
