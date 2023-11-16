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

## Maintenance

The Eslint ecosystem is evolving rapidly. To profit from the last improvements as soon as possible and to ease the maintenance burden, we rely on the renovate bot for managing the eslint plugins we use, with the auto merging option activated for minor and patch changes (not major as this would potentially introduce breaking changes). But doing so blindly would break the exhaustiveness principle on which this plugin is based on. We add a bit of intelligence like so:

- We extract and store the meta object of each rule we use (with the script `scripts/extract-meta.js`)
- On each PR created, we compare the stored meta objects with the one of the currently installed rules (`scripts/compare-meta.js`)
- We block the auto-merging feature if two corresponding meta doesn't match and tag the PR with `Need config update`
