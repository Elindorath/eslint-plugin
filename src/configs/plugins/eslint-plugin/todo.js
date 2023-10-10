'use strict';

const eslintPluginPlugin = require('eslint-plugin-eslint-plugin');
const readPackageUp = require('read-pkg-up');

const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';

const { packageJson } = readPackageUp.sync({ cwd: __dirname, normalize: true });
const repositoryUrl = packageJson.repository.url.replace('git+', '');
const { version } = packageJson;

// TODO: Configure it
/** @type {import('eslint').Linter.FlatConfig} */
module.exports = {
  plugins: {
    'eslint-plugin': eslintPluginPlugin,
  },

  rules: {
    'eslint-plugin/consistent-output': [ERROR, 'always'],
    'eslint-plugin/fixer-return': [ERROR],
    'eslint-plugin/meta-property-ordering': [ERROR, [
      'deprecated',
      'docs',
      'fixable',
      'messages',
      'replacedBy',
      'schema',
      'type',
    ]],
    'eslint-plugin/no-deprecated-context-methods': [ERROR],
    'eslint-plugin/no-deprecated-report-api': [ERROR],
    'eslint-plugin/no-identical-tests': [ERROR],
    'eslint-plugin/no-missing-placeholders': [ERROR],
    'eslint-plugin/no-unused-placeholders': [ERROR],
    'eslint-plugin/no-useless-token-range': [ERROR],
    'eslint-plugin/prefer-object-rule': [ERROR],
    'eslint-plugin/prefer-output-null': [ERROR],
    'eslint-plugin/prefer-placeholders': [ERROR],
    'eslint-plugin/prefer-replace-text': [ERROR],
    'eslint-plugin/report-message-format': [ERROR, '[^a-z\'"{].*\\.$'],
    'eslint-plugin/require-meta-docs-description': [ERROR, {
      pattern: '^(enforce|require|disallow)',
    }],
    'eslint-plugin/require-meta-docs-url': [ERROR, {
      pattern: `${repositoryUrl}/blob/v${version}/docs/rules/{{name}}.md`,
    }],
    'eslint-plugin/require-meta-fixable': [ERROR],
    'eslint-plugin/require-meta-schema': [ERROR],
    'eslint-plugin/require-meta-type': [ERROR],
    'eslint-plugin/test-case-property-ordering': [ERROR, [
      'filename',
      'code',
      'output',
      'options',
      'parser',
      'parserOptions',
      'globals',
      'env',
      'errors',
    ]],
    'eslint-plugin/test-case-shorthand-strings': [ERROR, 'as-needed'],
  },
};
