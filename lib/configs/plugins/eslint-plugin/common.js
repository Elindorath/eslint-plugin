'use strict';

const readPkgUp = require('read-pkg-up');


const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';

const { packageJson } = readPkgUp.sync({ cwd: __dirname, normalize: true });
const repositoryUrl = packageJson.repository.url.replace('git+', '');
const { version } = packageJson;


module.exports = {
  rules: {
    'consistent-output': [ERROR, 'always'],
    'fixer-return': [ERROR],
    'meta-property-ordering': [ERROR, [
      'deprecated',
      'docs',
      'fixable',
      'messages',
      'replacedBy',
      'schema',
      'type',
    ]],
    'no-deprecated-context-methods': [ERROR],
    'no-deprecated-report-api': [ERROR],
    'no-identical-tests': [ERROR],
    'no-missing-placeholders': [ERROR],
    'no-unused-placeholders': [ERROR],
    'no-useless-token-range': [ERROR],
    'prefer-object-rule': [ERROR],
    'prefer-output-null': [ERROR],
    'prefer-placeholders': [ERROR],
    'prefer-replace-text': [ERROR],
    'report-message-format': [ERROR, '[^a-z\'"{].*\\.$'],
    'require-meta-docs-description': [ERROR, {
      pattern: '^(enforce|require|disallow)',
    }],
    'require-meta-docs-url': [ERROR, {
      pattern: `${repositoryUrl}/blob/v${version}/docs/rules/{{name}}.md`,
    }],
    'require-meta-fixable': [ERROR],
    'require-meta-schema': [ERROR],
    'require-meta-type': [ERROR],
    'test-case-property-ordering': [ERROR, [
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
    'test-case-shorthand-strings': [ERROR, 'as-needed'],
  },
};
