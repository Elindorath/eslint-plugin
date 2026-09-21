# TODO

- [ ] Rationalize the configs to make the best use of config cascading
- [ ] Make a utility function to change only a subset of options of an already defined rule
- [ ] Consider the changes required in [staycation/mobile-app](https://github.com/staycation/mobile-app)
- [ ] Handle tsconfig.json & associates
- [x] Handle markdown
- [x] Make a function that can show a diff of the rules of a currently plugin version installed and a new one
- [x] Flag non-default configuration values instead of the default one
- [ ] Write missing rules for ESLint from [wotan](https://github.com/fimbullinter/wotan)
- [ ] Develop a typescript error formatter
- [ ] Consider using:
  - [ ] [ts-extras](https://github.com/sindresorhus/ts-extras)
  - [ ] [is](https://github.com/sindresorhus/is)
  - [ ] [eslint-formatter-pretty](https://github.com/sindresorhus/eslint-formatter-pretty)
  - [ ] [eslint-formatter-github](https://github.com/hipstersmoothie/eslint-formatter-github)
  - [ ] [confusing-browser-globals](https://github.com/facebook/create-react-app/tree/main/packages/confusing-browser-globals)
  - [ ] <https://github.com/semantic-release/semantic-release>
  - [ ] <https://github.com/googleapis/release-please>
  - [ ] <https://github.com/coderaiser/putout>
  - [x] [better-typescript-lib](https://github.com/uhyo/better-typescript-lib)
  - [ ] [lint-to-the-future](https://github.com/mansona/lint-to-the-future)
  - [ ] [n8n](https://github.com/n8n-io/n8n) (with its [eslint-plugin](https://www.npmjs.com/package/eslint-plugin-n8n-nodes-base))
  - [x] <https://github.com/readmeio/better-ajv-errors>, <https://github.com/ext/better-ajv-errors> or <https://github.com/grantila/awesome-ajv-errors> to enhanced schema validation errors output
  - [x] <https://dprint.dev/> This tool is promising but it is in a too early stage, it misses a lot of configuration options.
- [ ] Find a proper way to:
  - [x] Detect new rules or changes in rules in new dependencies version (running weekly)
  - [x] Automatically merge new dependencies version that doesn't change the config
  - [ ] Expose an easy way to describe a project structure in order to apply the right rules to the right files
  - [ ] Run the CSpell CLI in CI to cover what the ESLint plugin can't reach: Markdown prose and file names. The plugin only bootstraps from a `Program` node, which the Markdown AST doesn't have (following [#3464](https://github.com/streetsidesoftware/cspell/issues/3464)) <https://cspell.org/docs/installation/>
  - [ ] Write an eslint rule to enforce css properties ordering
  - [ ] Resolve the issue of keys sorting: prioritize code understanding or ease of review?
  - [ ] Let the rule '@stylistic/quote-props' to allow grouping keys when the option 'consistent-as-needed' is chosen

## PRs to make

- [ ] Make [eslint-plugin-filenames-simple](https://github.com/epaew/eslint-plugin-filenames-simple) compatible with ESLint v9 (following [#705](https://github.com/epaew/eslint-plugin-filenames-simple/issues/705))
- [ ] Enhance `Object.entries` typing in [ts-extras](https://github.com/sindresorhus/ts-extras)
- [ ] Modernize or fork [eslint-plugin-self](https://github.com/not-an-aardvark/eslint-plugin-self)
- [ ] Modernize [eslint-plugin-pii](https://github.com/shiva-hack/eslint-plugin-pii)
- [ ] Rework the schema generator of [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y) and [eslint-plugin-react-native-a11y](https://github.com/FormidableLabs/eslint-plugin-react-native-a11y) to not require an object ??
- [ ] Fix the documentation of [eslint-plugin-canonical](https://github.com/gajus/eslint-plugin-canonical):
  - The rules schema differs from documentation
  - The examples are all broken
- [ ] Fix the 'json-files/validate-schema' option 'avjFixerOptions' typo
- [ ] Transfer the 'canonical/sort-react-dependencies' rule to [eslint-plugin-perfectionist](https://github.com/azat-io/eslint-plugin-perfectionist)
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
- [ ] Make `toCompatRule` of [eslint-json-compat-utils](https://github.com/ota-meshi/eslint-json-compat-utils) clone the `meta` object instead of sharing it with the converted rule: writing into the copy, as `eslint-plugin-package-json/experimental` does with `languages`, also mutates the source plugin
- [ ] Drop the `minItems: 1` of the 'perfectionist/sort-arrays' schema, the only one of the 23 sort rules of [eslint-plugin-perfectionist](https://github.com/azat-io/eslint-plugin-perfectionist) to reject an empty option list
- [ ] Fix the 'css/selector-complexity' `meta.defaultOptions` of [@eslint/css](https://github.com/eslint/css): every `max*` option defaults to `null` where its own schema demands an integer
- [ ] Flatten the `configs` of [eslint-plugin-react-hooks](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks): `configs.flat` groups `recommended` and `recommended-latest` under a second level, where the shape ESLint declares for a plugin expects a configuration or an array of them, which makes the whole plugin object unassignable
- [ ] Don't warn in this case:

  ```javascript
  /* eslint arrow-body-style: ["error", "as-needed", { "requireReturnForObjectLiteral": true }] */

  module.exports = (() => 
    /**
    * @type {Array<import('eslint').Linter.Config>}
    */
     elindorathPlugin.configs['project-eslint-plugin']
  )()
  ```

## Deps warnings to resolve

```log
warning " > eslint-plugin-filenames-simple@0.9.0" has incorrect peer dependency "eslint@>=7.0.0 <9.0.0".
warning "eslint-plugin-jest-extended > @typescript-eslint/utils@5.62.0" has incorrect peer dependency "eslint@^6.0.0 || ^7.0.0 || ^8.0.0".
warning " > eslint-plugin-react-i18n@1.0.3" has incorrect peer dependency "eslint@^3 || ^4 || ^5 || ^6".
warning " > eslint-plugin-react-native@4.1.0" has incorrect peer dependency "eslint@^3.17.0 || ^4 || ^5 || ^6 || ^7 || ^8".
warning " > eslint-plugin-react-native-a11y@3.5.0" has incorrect peer dependency "eslint@^3 || ^4 || ^5 || ^6 || ^7 || ^8".
warning "eslint-plugin-sonarjs > @typescript-eslint/eslint-plugin@7.16.1" has unmet peer dependency "@typescript-eslint/parser@^7.0.0".
warning "eslint-plugin-sonarjs > @typescript-eslint/eslint-plugin@7.16.1" has incorrect peer dependency "eslint@^8.56.0".
warning "eslint-plugin-sonarjs > @typescript-eslint/utils@7.16.1" has incorrect peer dependency "eslint@^8.56.0".
warning "eslint-plugin-sonarjs > eslint-plugin-import@2.30.0" has incorrect peer dependency "eslint@^2 || ^3 || ^4 || ^5 || ^6 || ^7.2.0 || ^8".
warning "eslint-plugin-sonarjs > eslint-plugin-react-hooks@4.6.2" has incorrect peer dependency "eslint@^3.0.0 || ^4.0.0 || ^5.0.0 || ^6.0.0 || ^7.0.0 || ^8.0.0-0".
warning "eslint-plugin-sonarjs > @typescript-eslint/eslint-plugin > @typescript-eslint/type-utils@7.16.1" has incorrect peer dependency "eslint@^8.56.0".
```
