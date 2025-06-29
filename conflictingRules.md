# Conflicting rules

no-shadow                             -> vanilla
no-shadow                             -> environment-node
@typescript-eslint/no-shadow          -> syntax-typescript

array-func/no-unnecessary-this-arg
unicorn/no-array-method-this-argument

array-func/prefer-array-from
unicorn/prefer-spread

array-func/prefer-flat-map
unicorn/prefer-array-flat-map

canonical/filename-match-regex
unicorn/filename-case

canonical/no-restricted-imports
no-restricted-imports

id-match
camelcase

import-x/exports-last
perfectionist/sort-modules

import-x/first
import-x/order

import-x/order
perfectionist/sort-imports

perfectionist/sort-imports
sort-imports

import-x/no-default-export
no-restricted-exports

no-duplicate-imports
import-x/no-duplicates

perfectionist/sort-objects
sort-keys

@typescript-eslint/unbound-method
jest/unbound-method

n/hashbang                            -> vanilla
n/hashbang                            -> syntax-typescript&environment-node

n/no-missing-import                   -> vanilla
n/no-missing-import                   -> syntax-typescript&environment-node

n/no-unpublished-import               -> vanilla
n/no-unpublished-import               -> syntax-typescript&environment-node

security/detect-non-literal-require
import-x/no-dynamic-require

ternary/nesting
unicorn/no-nested-ternary

TS noImplicitReturns
consistent-return

no-throw-literal

prefer-destructuring

prefer-promise-reject-errors
@typescript-eslint/prefer-promise-reject-errors

class-methods-use-this
@typescript-eslint/class-methods-use-this

default-param-last
@typescript-eslint/default-param-last

dot-notation
@typescript-eslint/dot-notation

init-declarations
@typescript-eslint/init-declarations

max-params
@typescript-eslint/max-params

no-array-constructor
@typescript-eslint/no-array-constructor

no-dupe-class-members
@typescript-eslint/no-dupe-class-members
TS compiler

no-empty-function
@typescript-eslint/no-empty-function

no-implied-eval
@typescript-eslint/no-implied-eval

no-invalid-this
@typescript-eslint/no-invalid-this

no-loop-func
@typescript-eslint/no-loop-func

no-magic-numbers
@typescript-eslint/no-magic-numbers

no-redeclare
@typescript-eslint/no-redeclare

no-restricted-imports
@typescript-eslint/no-restricted-imports

no-shadow
@typescript-eslint/no-shadow

no-unused-vars
@typescript-eslint/no-unused-vars

no-return-await
@typescript-eslint/no-return-await

no-use-before-define
@typescript-eslint/no-use-before-define

no-useless-constructor
@typescript-eslint/no-useless-constructor

require-await
@typescript-eslint/require-await

## Duplicate warnings

???
import-x/consistent-type-specifier-style
@typescript-eslint/consistent-type-imports

## Link types between rules

Extending base rule
Conflict with another rule

```typescript
const config = {
  rules: {
    ...replaceConflictingRule('perfectionist/sort-imports', [ERROR], ['sort-imports', 'import-x/order']),
  }
}

function replaceConflictingRule(ruleId: string, ruleOptions: RuleOption[], conflictingRules: string[]) {

}
```
