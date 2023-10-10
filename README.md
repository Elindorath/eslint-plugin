# Introduction

This plugin is built around the power of exhaustiveness. It aggregate a lots of other plugins carefully selected and define a configuration for every rules available.

## Organization

We defined 4 types of rules:

- Vanilla: Those are rules that could be applied to vanilla javascript, in every context. Files containing those rules are always called `vanilla.js`.
- Syntax: jsx, typescript. File names containing those rules are formatted as `syntax-${syntaxIdentifier}`.
- Environment: browser, node. File names containing those rules are formatted as `environment-${environmentIdentifier}`.
- Library: react, react-native, jest. File names containing those rules are formatted as `library-${libraryIdentifier}`.

Each plugin used is configured in its own directory under `configs/plugins/${pluginName}`. Its rules are segregated following the 3 types.

To remain modular and adaptable to any project, none of the typed configuration exposed by this plugin constrains the linted files. It is the responsibility of the developer who consumed the configurations to do so. Since eslint configuration are just simple object, it is fairly easy to do it like this:

```javascript
const elindorath = require('@elindorath/eslint-plugin');

module.exports = [
  {
    files: ['**/*.ts'],
    ...elindorath.configs['syntax-typescript'],
  },
];
```

For ease of use, this plugin also exposes special configurations that aggregate multiple typed configurations tailored to commonly used file organisations in projects. Those configurations are array of typed configurations with a file constraint:

- The `eslint.config.js` is treated as an eslint config file.
- All files in the root `scripts` directory are treated as Node.js scripts that are used only in development environment.
- All files with the suffix `.test.${extension}` are treated as jest test files.

### Execution contexts

node
browser
react
react-native

### Transpiler

Typescript
Babel

jest
json

electron

### Projects

React website:
  Parser:
    - Vanilla
    - Typescript
    - Babel
  Context:
    - Browser

React-native app:
  Parser:
    - Vanilla
    - Typescript
    - Babel
  Context:
    - Browser

cli:
  Parser:
    - Vanilla
    - Typescript
    - Babel
  Context:
    - node

tests:
  Parser:
    - Vanilla
    - Typescript
    - Babel
  Context:
    - node
    - jest

JSX without react:
  Parser:
    - Vanilla
    - Typescript
    - Babel
  Context:
    - browser

React without jsx:
  Parser:
    - Vanilla
    - Typescript
    - Babel
  Context:
    - browser
