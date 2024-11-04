# Plugins

## Included

| Name                                                               |
| ------------------------------------------------------------------ |
| [@eslint-community/eslint-plugin-eslint-comments][eslint-comments] |
| [@eslint/markdown][markdown]                                       |
| [@stylistic/eslint-plugin][@stylistic]                             |
| [eslint][eslint]                                                   |
| [eslint-plugin-array-func][array-func]                             |
| [eslint-plugin-canonical][canonical]                               |
| [eslint-plugin-eslint-plugin][eslint-plugin]                       |
| [eslint-plugin-filenames-simple][filenames-simple]                 |
| [eslint-plugin-import-x][import-x]                                 |
| [eslint-plugin-jest][jest]                                         |
| [eslint-plugin-jest-dom][jest-dom]                                 |
| [eslint-plugin-jest-extended][jest-extended]                       |
| [eslint-plugin-jest-formatting][jest-formatting]                   |
| [eslint-plugin-json-files][json-files]                             |
| [eslint-plugin-jsonc][jsonc]                                       |
| [eslint-plugin-jsx-a11y][jsx-a11y]                                 |
| [eslint-plugin-listeners][listeners]                               |
| [eslint-plugin-n][n]                                               |
| [eslint-plugin-no-constructor-bind][no-constructor-bind]           |
| [eslint-plugin-no-secrets][no-secrets]                             |
| [eslint-plugin-no-unsanitized][no-unsanitized]                     |
| [eslint-plugin-no-use-extend-native][no-use-extend-native]         |
| [eslint-plugin-perfectionist][perfectionist]                       |
| [eslint-plugin-promise][promise]                                   |
| [eslint-plugin-react][react]                                       |
| [eslint-plugin-react-hooks][react-hooks]                           |
| [eslint-plugin-react-i18n][react-i18n]                             |
| [eslint-plugin-react-native][react-native]                         |
| [eslint-plugin-react-native-a11y][react-native-a11y]               |
| [eslint-plugin-react-perf][react-perf]                             |
| [eslint-plugin-security][security]                                 |
| [eslint-plugin-sonarjs][sonarjs]                                   |
| [eslint-plugin-ternary][ternary]                                   |
| [eslint-plugin-unicorn][unicorn]                                   |
| [typescript-eslint][typescript-eslint]                             |

## Considering

| Name                                                         | Reason                                             |
| ------------------------------------------------------------ | -------------------------------------------------- |
| [eslint-plugin-decorator-position][decorator-position]       |                                                    |
| [@shopify/eslint-plugin][@shopify]                           |                                                    |
| [eslint-plugin-toplevel][toplevel]                           |                                                    |
| [eslint-plugin-atomic-design][atomic-design]                 |                                                    |
| [eslint-plugin-depend][depend]                               |                                                    |
| [eslint-plugin-compat][compat]                               |                                                    |
| [eslint-plugin-write-good-comments][write-good-comments]     |                                                    |
| [eslint-plugin-exception-handling][exception-handling]       |                                                    |
| [eslint-plugin-regexp][regexp]                               |                                                    |
| [eslint-plugin-redos][redos]                                 | Overlap with the security/detect-unsafe-regex rule |
| [eslint-plugin-redos-detector][redos-detector]               | Overlap with the security/detect-unsafe-regex rule |
| [eslint-plugin-boundaries][boundaries]                       |                                                    |
| [eslint-plugin-woke][woke]                                   |                                                    |
| [eslint-plugin-misc][misc]                                   |                                                    |
| [eslint-plugin-etc][etc]                                     |                                                    |
| [@definitelytyped/eslint-plugin][@definitelytyped]           |                                                    |
| [eslint-plugin-es-x][es-x]                                   |                                                    |
| [eslint-plugin-unused-imports][unused-imports]               |                                                    |
| [eslint-plugin-sdl][sdl]                                     |                                                    |
| [@rushstack/eslint-plugin-security][@rushstack/security]     |                                                    |
| [eslint-plugin-security-node][security-node]                 | Seems outdated                                     |
| [cspell-eslint-plugin][cspell]                               |                                                    |
| [eslint-plugin-json-schema-validator][json-schema-validator] |                                                    |
| [eslint-plugin-node-dependencies][node-dependencies]         |                                                    |
| [eslint-plugin-package-json][package-json]                   |                                                    |
| [eslint-plugin-sql-template][sql-template]                   |                                                    |
| [eslint-plugin-sql][sql]                                     |                                                    |
| [eslint-plugin-jsdoc][jsdoc]                                 |                                                    |
| [eslint-plugin-yml][yml]                                     |                                                    |
| [eslint-plugin-toml][toml]                                   |                                                    |
| [@html-eslint/eslint-plugin][@html-eslint]                   |                                                    |
| [eslint-plugin-zod][zod]                                     |                                                    |
| [@eslint-react/eslint-plugin][@eslint-react]                 | As a replacement of eslint-plugin-react            |
| [@next/eslint-plugin-next][@next/next]                       |                                                    |
| [@tanstack/eslint-plugin-query][@tanstack/query]             |                                                    |
| [eslint-plugin-expo][expo]                                   |                                                    |
| [eslint-plugin-i18next][i18next]                             |                                                    |
| [eslint-plugin-lingui][lingui]                               |                                                    |
| [eslint-plugin-github][github]                               |                                                    |
| [eslint-plugin-ava][ava]                                     |                                                    |
| [eslint-plugin-cypress][cypress]                             |                                                    |
| [eslint-plugin-playwright][playwright]                       |                                                    |
| [eslint-plugin-testing-library][testing-library]             |                                                    |
| [eslint-plugin-storybook][storybook]                         |                                                    |
| [eslint-plugin-react-refresh][react-refresh]                 |                                                    |
| [eslint-plugin-jsx-expressions][jsx-expressions]             |                                                    |
| [eslint-plugin-tsdoc][tsdoc]                                 |                                                    |
| [eslint-plugin-drizzle][drizzle]                             |                                                    |

## Removed

| Name                                                   | Reason                                                                                                     |
| ------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------- |
| [@mysticatea/eslint-plugin][@mysticatea]               | No longer maintained, not updated since 2019/11/11, replaced by @eslint-community/eslint-plugin-mysticatea |
| [eslint-plugin-babel][babel]                           | We don't use babel parser                                                                                  |
| [eslint-plugin-filenames][filenames]                   | No longer maintained, not updated since 2020/07/28                                                         |
| [eslint-plugin-flowtype][flowtype]                     | We prefer using typescript over flowtype                                                                   |
| [eslint-plugin-import][import]                         | Replaced by the more modern [eslint-plugin-import-x][import-x]                                             |
| [eslint-plugin-json-format][json-format]               | No longer maintained, not updated since 2020/05/14, the same features are done with eslint-plugin-jsonc    |
| [eslint-plugin-optimize-regex][optimize-regex]         | No longer maintained, not updated since 2023/09/10, the same features are done with unicorn/better-regex   |
| [eslint-plugin-perf-standard][perf-standard]           | No longer maintained, not updated since 2016/03/30                                                         |
| [eslint-plugin-react-redux][react-redux]               | We no longer use redux                                                                                     |
| [eslint-plugin-scanjs-rules][scanjs-rules]             | Archived, not updated since 2021/06/09                                                                     |
| [eslint-plugin-shopify][shopify]                       | Replaced by @shopify/eslint-plugin                                                                         |
| [eslint-plugin-simple-import-sort][simple-import-sort] | The same features are done with eslint-plugin-perfectionist                                                |
| [eslint-plugin-sort-class-members][sort-class-members] | The same features are done with eslint-plugin-perfectionist                                                |
| [eslint-plugin-switch-case][switch-case]               | The same features are done with @stylistic/eslint-plugin                                                   |
| [eslint-plugin-xss][xss]                               | Doesn't support ESLint v9 for now                                                                          |

<!-- Included -->
[eslint-comments]: https://github.com/eslint-community/eslint-plugin-eslint-comments
[markdown]: https://github.com/eslint/markdown
[@stylistic]: https://github.com/eslint-stylistic/eslint-stylistic
[eslint]: https://github.com/eslint/eslint
[array-func]: https://github.com/freaktechnik/eslint-plugin-array-func
[canonical]: https://github.com/gajus/eslint-plugin-canonical
[eslint-plugin]: https://github.com/eslint-community/eslint-plugin-eslint-plugin
[filenames-simple]: https://github.com/epaew/eslint-plugin-filenames-simple
[import]: https://github.com/import-js/eslint-plugin-import
[jest]: https://github.com/jest-community/eslint-plugin-jest
[jest-dom]: https://github.com/testing-library/eslint-plugin-jest-dom
[jest-extended]: https://github.com/jest-community/eslint-plugin-jest-extended
[jest-formatting]: https://github.com/dangreenisrael/eslint-plugin-jest-formatting
[json-files]: https://github.com/kellyselden/eslint-plugin-json-files
[jsonc]: https://github.com/ota-meshi/eslint-plugin-jsonc
[jsx-a11y]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y
[listeners]: https://github.com/foad/eslint-plugin-listeners
[n]: https://github.com/eslint-community/eslint-plugin-n
[no-constructor-bind]: https://github.com/markalfred/eslint-plugin-no-constructor-bind
[no-secrets]: https://github.com/nickdeis/eslint-plugin-no-secrets
[no-unsanitized]: https://github.com/mozilla/eslint-plugin-no-unsanitized
[no-use-extend-native]: https://github.com/dustinspecker/eslint-plugin-no-use-extend-native
[perfectionist]: https://github.com/azat-io/eslint-plugin-perfectionist
[promise]: https://github.com/eslint-community/eslint-plugin-promise
[react]: https://github.com/jsx-eslint/eslint-plugin-react
[react-hooks]: https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks
[react-i18n]: https://github.com/lolatravel/eslint-plugin-react-i18n
[react-native]: https://github.com/intellicode/eslint-plugin-react-native
[react-native-a11y]: https://github.com/FormidableLabs/eslint-plugin-react-native-a11y
[react-perf]: https://github.com/cvazac/eslint-plugin-react-perf
[security]: https://github.com/eslint-community/eslint-plugin-security
[simple-import-sort]: https://github.com/lydell/eslint-plugin-simple-import-sort
[sonarjs]: https://github.com/SonarSource/SonarJS/tree/master/packages/jsts/src/rules
[ternary]: https://github.com/GrayedFox/eslint-plugin-ternary
[unicorn]: https://github.com/sindresorhus/eslint-plugin-unicorn
[typescript-eslint]: https://github.com/typescript-eslint/typescript-eslint

<!-- Considering -->
[decorator-position]: https://github.com/NullVoxPopuli/eslint-plugin-decorator-position
[@shopify]: https://github.com/Shopify/web-configs/tree/main/packages/eslint-plugin
[toplevel]: https://github.com/HKalbasi/eslint-plugin-toplevel
[atomic-design]: https://github.com/RyoNkmr/eslint-plugin-atomic-design
[import-x]: https://github.com/un-ts/eslint-plugin-import-x
[depend]: https://github.com/es-tooling/eslint-plugin-depend
[compat]: https://github.com/amilajack/eslint-plugin-compat
[write-good-comments]: https://github.com/kantord/eslint-plugin-write-good-comments
[exception-handling]: https://github.com/Akronae/eslint-plugin-exception-handling
[regexp]: https://github.com/ota-meshi/eslint-plugin-regexp
[redos]: https://github.com/makenowjust-labs/recheck/tree/main/packages/eslint-plugin-redos
[redos-detector]: https://github.com/tjenkinson/eslint-plugin-redos-detector
[boundaries]: https://github.com/javierbrea/eslint-plugin-boundaries
[woke]: https://github.com/amwmedia/eslint-plugin-woke
[misc]: https://github.com/iliubinskii/eslint-plugin-misc
[etc]: https://github.com/cartant/eslint-plugin-etc
[@definitelytyped]: https://github.com/microsoft/DefinitelyTyped-tools/tree/main/packages/eslint-plugin
[es-x]: https://github.com/eslint-community/eslint-plugin-es-x
[unused-imports]: https://github.com/sweepline/eslint-plugin-unused-imports
[sdl]: https://github.com/microsoft/eslint-plugin-sdl
[@rushstack/security]: https://github.com/microsoft/rushstack/tree/main/eslint/eslint-plugin-security
[security-node]: https://github.com/gkouziik/eslint-plugin-security-node
[cspell]: https://github.com/streetsidesoftware/cspell/tree/main/packages/cspell-eslint-plugin
[json-schema-validator]: https://ota-meshi.github.io/eslint-plugin-json-schema-validator
[node-dependencies]: https://github.com/ota-meshi/eslint-plugin-node-dependencies
[package-json]: https://github.com/JoshuaKGoldberg/eslint-plugin-package-json
[sql-template]: https://github.com/uphold/eslint-plugin-sql-template
[sql]: https://github.com/gajus/eslint-plugin-sql
[jsdoc]: https://github.com/gajus/eslint-plugin-jsdoc
[yml]: https://github.com/ota-meshi/eslint-plugin-yml
[toml]: https://github.com/ota-meshi/eslint-plugin-toml
[@html-eslint]: https://github.com/yeonjuan/html-eslint
[zod]: https://github.com/gajus/eslint-plugin-zod
[@eslint-react]: https://github.com/Rel1cx/eslint-react
[@next/next]: https://nextjs.org/docs/pages/building-your-application/configuring/eslint#eslint-plugin
[@tanstack/query]: https://tanstack.com/query/latest/docs/eslint/eslint-plugin-query
[expo]: https://github.com/expo/expo/tree/main/packages/eslint-plugin-expo
[i18next]: https://github.com/edvardchen/eslint-plugin-i18next
[lingui]: https://github.com/lingui/eslint-plugin
[github]: https://github.com/github/eslint-plugin-github
[ava]: https://github.com/avajs/eslint-plugin-ava
[cypress]: https://github.com/cypress-io/eslint-plugin-cypress
[playwright]: https://github.com/playwright-community/eslint-plugin-playwright
[testing-library]: https://github.com/testing-library/eslint-plugin-testing-library
[storybook]: https://github.com/storybookjs/eslint-plugin-storybook
[react-refresh]: https://github.com/ArnaudBarre/eslint-plugin-react-refresh
[jsx-expressions]: https://github.com/hluisson/eslint-plugin-jsx-expressions
[tsdoc]: https://tsdoc.org/pages/packages/eslint-plugin-tsdoc
[drizzle]: https://github.com/drizzle-team/drizzle-orm/tree/main/eslint-plugin-drizzle

<!-- Removed -->
[babel]: https://github.com/babel/eslint-plugin-babel
[filenames]: https://github.com/selaux/eslint-plugin-filenames
[flowtype]: https://github.com/gajus/eslint-plugin-flowtype
[@mysticatea]: https://github.com/mysticatea/eslint-plugin
[scanjs-rules]: https://github.com/mozfreddyb/eslint-plugin-scanjs-rules
[react-redux]: https://github.com/DianaSuvorova/eslint-plugin-react-redux
[sort-class-members]: https://github.com/bryanrsmith/eslint-plugin-sort-class-members
[switch-case]: https://github.com/lukeapage/eslint-plugin-switch-case
[json-format]: https://github.com/kuceb/eslint-plugin-json-format
[optimize-regex]: https://github.com/BrainMaestro/eslint-plugin-optimize-regex
[perf-standard]: https://github.com/Raynos/eslint-plugin-perf-standard
[shopify]: https://github.com/Shopify/eslint-plugin-shopify
[xss]: https://github.com/Rantanen/eslint-plugin-xss
