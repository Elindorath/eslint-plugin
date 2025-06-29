# Notes (draft)

## Languages (mutually exclusive)

javascript
json
jsonc
json5
markdown

## Source types

module
commonjs

## Syntaxes

jsx
typescript

## Libraries

jest
react
react-native ??

## Execution contexts

node
browser
electron
jest
react ??
react-native ??

## Project layouts

Eslint plugin:
  language: javascript
  syntax?: typescript
  source-type: module | commonjs
  context: node
  library: eslint-plugin

React app:
  language: javascript
  syntax?: typescript | jsx
  source-type: module | commonjs
  context: browser
  library: react

React-native app:
  language: javascript
  syntax?: typescript | jsx
  source-type: module | commonjs
  context: browser
  library: react & react-native

Cli app:
  language: javascript
  syntax?: typescript
  source-type: module | commonjs
  context: browser

## Overrides

scripts/:
  language: javascript
  syntax?: typescript
  source-type: module | commonjs
  context: node

eslint-config:
  language: javascript
  syntax?: typescript
  source-type: module | commonjs
  context: node

webpack-config:
  language: javascript
  syntax?: typescript
  source-type: module | commonjs
  context: node

jest-tests:
  language: javascript
  syntax?: typescript | jsx
  source-type: module | commonjs
  context: node & jest
  library: jest

json:
  language: json

jsonc:
  language: jsonc

json5:
  language: json5

package.json:
  language: json

## Table

javascript
javascript & typescript
javascript & jsx
javascript & node


## Transpiler

Typescript
Babel

jest
json

electron

## Projects

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

## Mutually exclusive configurations

Source type:
  commonjs
  module
  script

Parser:
  Typescript
  Espree
  Babel
