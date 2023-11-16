# TODO

- [x] Remove the following plugins:
  - [x] eslint-plugin-babel
  - [x] eslint-plugin-decorator-position
  - [x] eslint-plugin-filenames
  - [x] eslint-plugin-flowtype
  - [x] @mysticatea/eslint-plugin
  - [x] eslint-plugin-scanjs-rules
  - [x] eslint-plugin-react-redux
  - [x] @shopify/eslint-plugin
  - [x] eslint-plugin-sort-class-members
  - [x] eslint-plugin-switch-case
  - [x] eslint-plugin-toplevel
  - [x] eslint-plugin-json-format
  - [x] eslint-plugin-optimize-regex
  - [x] eslint-plugin-perf-standard
  - [x] eslint-plugin-shopify
- [x] Configure the following plugins:
  - [x] eslint-plugin-eslint-plugin
  - [x] eslint-plugin-import (consider using <https://github.com/un-es/eslint-plugin-i> instead)
  - [x] eslint-plugin-json-files
  - [x] eslint-plugin-jsonc
  - [x] eslint-plugin-listeners
  - [x] eslint-plugin-no-constructor-bind
  - [x] eslint-plugin-no-secrets
  - [x] eslint-plugin-no-unsanitized
  - [x] eslint-plugin-no-use-extend-native
  - [x] eslint-plugin-promise
  - [x] eslint-plugin-sonarjs
  - [x] eslint-plugin-ternary
  - [x] eslint-plugin-xss
- [ ] Rationalize the configs to make the best use of config cascading
- [ ] Make a utility function to change only a subset of options of an already defined rule
- [ ] Consider the changes required in foundation/mobile
- [ ] Handle tsconfig.json & associates
- [ ] Handle markdown
- [ ] Make a function that can show a diff of the rules of a currently plugin version installed and a new one
- [ ] Flag non-default configuration values instead of the default one
- [ ] Consider using:
  - [ ] eslint-plugin-github
  - [ ] eslint-plugin-compat
  - [ ] eslint-plugin-sql
  - [ ] eslint-plugin-jsdoc
  - [ ] eslint-plugin-zod
  - [ ] <https://github.com/semantic-release/semantic-release>
  - [ ] <https://github.com/coderaiser/putout>
  - [x] <https://dprint.dev/> This tool is promising but it is in a too early stage, it misses a lot of configuration options.
- [ ] Find a proper way to:
  - [ ] Detect new rules or changes in rules in new dependencies version (running weekly)
  - [ ] Automatically merge new dependencies version that doesn't change the config
  - [ ] Expose an easy way to describe a project structure in order to apply the right rules to the right files
  - [ ] Run CSpell check in CI <https://cspell.org/docs/installation/>
  - [ ] Write an eslint rule to enforce css properties ordering
  - [ ] Resolve the issue of keys sorting: prioritize code understanding or ease of review?
  - [ ] Let the rule '@stylistic/quote-props' to allow grouping keys when the option 'consistent-as-needed' is chosen

## PRs to make

- [ ] Enhance the 'n/no-process-env' to accept 'NODE_ENV' usage and check its value
- [ ] Fix the 'ternary/no-unreachable' rule to allow using the same condition in multiple non-nested ternaries
- [ ] Fix the 'unicorn/prefer-object-from-entries' rule to allow destructuring object item
- [ ] Fix the 'import/newline-after-import' rule to allow comments between imports (See: <https://github.com/import-js/eslint-plugin-import/issues/2673>)
- [ ] To enhance readability, make both the 'max-lines-per-function' and 'max-statements' rules reports only one line instead of the whole function
- [ ] Enhance the 'react/jsx-no-literals' rule to allow string in non textual attributes (should warn on literal usage in 'alt', but not on 'type')
- [ ] Enhance the 'react/jsx-no-leaked-render' rule to leverage types
- [ ] Modernize eslint-plugin-no-use-extend-native
- [ ] Let no-use-extend-native allow a list of native to be used extended
- [ ] Indicate in the documentation of sonarjs/no-identical-functions that minimum can't be less than 3
- [ ] Fix and normalize meta of plugins rules
- [ ] Report a meaningful message when the error 'An error occurred while traversing' is thrown
- [ ] Don't warn in this case:

  ```javascript
  /* eslint arrow-body-style: ["error", "as-needed", { "requireReturnForObjectLiteral": true }] */

  module.exports = (() => {
    /**
    * @type {Array<import('eslint').Linter.FlatConfig>}
    */
    return elindorathPlugin.configs['project-eslint-plugin']
  })()
  ```
