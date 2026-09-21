import sonarJsPlugin from 'eslint-plugin-sonarjs'

import { ERROR, OFF } from '../../../constants.ts'
import type { FixedLinterConfig } from '../../../types.ts'


const MAX_COGNITIVE_COMPLEXITY = 15
const MAX_SWITCH_CASES = 30
const MIN_FUNCTION_BODY_LINE_COUNT = 3

export const sonarJsJavascriptConfig: FixedLinterConfig = {
  plugins: {
    sonarjs: sonarJsPlugin,
  },

  rules: {
    'sonarjs/arguments-usage': [ERROR],
    'sonarjs/array-constructor': [ERROR],
    'sonarjs/arrow-function-convention': [ERROR, {
      requireBodyBraces: true,
      requireParameterParentheses: true,
    }],
    // TODO: Should be put in a tests specific configuration file
    'sonarjs/assertions-in-test-cases': [ERROR],
    // TODO: Should be put in a tests specific configuration file
    'sonarjs/assertions-in-tests': [ERROR],
    // TODO: Should be put in a tests specific configuration file
    'sonarjs/async-test-assertions': [ERROR],
    // TODO: Should be put in a library lodash or underscore.js specific configuration file
    'sonarjs/avoid-mutating-nested-properties-of-shallow-clones': [ERROR],
    'sonarjs/bitwise-operators': [ERROR],
    'sonarjs/block-scoped-var': [ERROR],
    'sonarjs/bool-param-default': [ERROR],
    'sonarjs/call-argument-line': [ERROR],
    // TODO: Should be put in a library chai specific configuration file
    'sonarjs/chai-determinate-assertion': [ERROR],
    'sonarjs/class-name': [ERROR, {
      format: '^[A-Z][a-zA-Z0-9]*$',
    }],
    'sonarjs/code-eval': [ERROR],
    'sonarjs/cognitive-complexity': [ERROR, MAX_COGNITIVE_COMPLEXITY],
    'sonarjs/comma-or-logical-or-case': [ERROR],
    // This could be used to track down comments matching `regularExpression`
    'sonarjs/comment-regex': [OFF, {
      flags: '',
      message: 'Avoid letting todo comments',
      regularExpression: 'TODO:',
    }],
    // TODO: Should be put in a tests specific configuration file
    'sonarjs/composite-assertions': [ERROR],
    'sonarjs/constructor-for-side-effects': [ERROR],
    // TODO: Should be put in a library formidable, multer or body-parser specific configuration file
    'sonarjs/content-length': [ERROR, {
      fileUploadSizeLimit: 8_000_000,
      standardSizeLimit: 2_000_000,
    }],
    // TODO: Should be put in a library express specific configuration file
    'sonarjs/content-security-policy': [ERROR],
    // TODO: Should be put in a library cookie-session, express-session, cookies or csurf specific configuration file
    'sonarjs/cookie-no-httponly': [ERROR],
    // TODO: Should be put in a environment node or library express specific configuration file
    'sonarjs/cors': [ERROR],
    // TODO: Should be put in a library csurf specific configuration file
    'sonarjs/csrf': [ERROR],
    // OFF as the core rule 'complexity' already check this
    'sonarjs/cyclomatic-complexity': [OFF],
    // OFF as it should be ERROR only in non module code
    'sonarjs/declarations-in-global-scope': [OFF],
    'sonarjs/destructuring-assignment-syntax': [ERROR],
    // TODO: Should be put in a library mocha specific configuration file
    'sonarjs/disabled-timeout': [ERROR],
    // TODO: Should be put in a library dompurify specific configuration file
    'sonarjs/dompurify-unsafe-config': [ERROR],
    'sonarjs/dynamically-constructed-templates': [ERROR],
    'sonarjs/elseif-without-else': [ERROR],
    // TODO: Should be put in a environment node specific configuration file
    'sonarjs/encryption-secure-mode': [ERROR],
    // TODO: Should be put in a tests specific configuration file
    'sonarjs/explicit-test-skip': [ERROR],
    'sonarjs/expression-complexity': [ERROR, {
      max: 3,
    }],
    // OFF as we are not currently using file header
    'sonarjs/file-header': [OFF],
    'sonarjs/file-name-differ-from-class': [ERROR],
    // TODO: Should be put in a environment node specific configuration file
    'sonarjs/file-permissions': [ERROR],
    // TODO: Should be put in a library formidable or multer specific configuration file
    'sonarjs/file-uploads': [ERROR],
    'sonarjs/fixme-tag': [ERROR],
    'sonarjs/for-in': [ERROR],
    'sonarjs/for-loop-increment-sign': [ERROR],
    'sonarjs/function-inside-loop': [ERROR],
    'sonarjs/function-name': [ERROR, {
      format: '^[_a-z][a-zA-Z0-9]*$',
    }],
    'sonarjs/future-reserved-words': [ERROR],
    'sonarjs/generator-without-yield': [ERROR],
    'sonarjs/hardcoded-secret-signatures': [ERROR],
    // TODO: Should be put in a environment node specific configuration file
    'sonarjs/hashing': [ERROR],
    // TODO: Should be put in a tests specific configuration file
    'sonarjs/hooks-before-test-cases': [ERROR],
    'sonarjs/inconsistent-function-call': [ERROR],
    // TODO: Should be put in a library cookie-session, express-session, cookies or csurf specific configuration file
    'sonarjs/insecure-cookie': [ERROR],
    // TODO: Should be put in a library jsonwebtoken specific configuration file
    'sonarjs/insecure-jwt-token': [ERROR],
    'sonarjs/inverted-assertion-arguments': [ERROR],
    'sonarjs/label-position': [ERROR],
    // TODO: Should be put in a environment browser specific configuration file
    'sonarjs/link-with-target-blank': [ERROR],
    'sonarjs/max-lines': [ERROR, {
      maximum: 1_000,
    }],
    'sonarjs/max-lines-per-function': [ERROR, {
      maximum: 200,
    }],
    'sonarjs/max-switch-cases': [ERROR, MAX_SWITCH_CASES],
    // TODO: Should be put in a library lodash specific configuration file
    'sonarjs/memoize-cache-key': [ERROR],
    'sonarjs/misplaced-loop-counter': [ERROR],
    'sonarjs/nested-control-flow': [ERROR, {
      maximumNestingLevel: 3,
    }],
    'sonarjs/no-all-duplicated-branches': [ERROR],
    // TODO: Should be put in a library angular specific configuration file
    'sonarjs/no-angular-bypass-sanitization': [ERROR],
    'sonarjs/no-async-constructor': [ERROR],
    'sonarjs/no-built-in-override': [ERROR],
    'sonarjs/no-case-label-in-switch': [ERROR],
    'sonarjs/no-clear-text-protocols': [ERROR],
    // TODO: Should be put in a library chai/mocha specific configuration file
    'sonarjs/no-code-after-done': [ERROR],
    'sonarjs/no-collapsible-if': [ERROR],
    // TODO: might be OFF as it could be too distracting when developing
    'sonarjs/no-commented-code': [ERROR],
    'sonarjs/no-dead-store': [ERROR],
    // TODO: Should be put in a library lodash or underscore.js and library react specific configuration file
    'sonarjs/no-debounce-throttle-in-render': [ERROR],
    // TODO: Should be put in a library Playwright/Cypress specific configuration file
    'sonarjs/no-debug-commands-in-ui-tests': [ERROR],
    // TODO: Should be put in a library lodash specific configuration file
    'sonarjs/no-default-utility-imports': [ERROR],
    'sonarjs/no-delete-var': [ERROR],
    // TODO: Should be put in a tests specific configuration file
    'sonarjs/no-duplicate-parameterized-test-case': [ERROR],
    'sonarjs/no-duplicate-string': [ERROR, {
      ignoreStrings: 'application/json',
      // Configured value
      threshold: 2,
    }],
    // TODO: Should be put in a tests specific configuration file
    'sonarjs/no-duplicate-test-title': [ERROR],
    'sonarjs/no-duplicated-branches': [ERROR],
    'sonarjs/no-element-overwrite': [ERROR],
    'sonarjs/no-empty-collection': [ERROR],
    // TODO: Should be put in a tests specific configuration file
    'sonarjs/no-empty-parameterized-test-dataset': [ERROR],
    // TODO: Should be put in a tests specific configuration file
    'sonarjs/no-empty-test-file': [ERROR],
    // TODO: Should be put in a tests specific configuration file
    'sonarjs/no-empty-test-title': [ERROR],
    'sonarjs/no-equals-in-for-termination': [ERROR],
    'sonarjs/no-exclusive-tests': [ERROR],
    // Might be turned OFF in TypeScript projects as it already enforce this
    'sonarjs/no-extra-arguments': [ERROR],
    'sonarjs/no-fallthrough': [ERROR],
    // TODO: Should be put in a tests specific configuration file
    'sonarjs/no-fixed-wait-in-tests': [ERROR],
    'sonarjs/no-floating-point-equality': [ERROR],
    // TODO: Should be put in a library Playwright/Cypress specific configuration file
    'sonarjs/no-forced-browser-interaction': [ERROR],
    'sonarjs/no-function-declaration-in-block': [ERROR],
    'sonarjs/no-global-this': [ERROR],
    'sonarjs/no-globals-shadowing': [ERROR],
    'sonarjs/no-gratuitous-expressions': [ERROR],
    'sonarjs/no-hardcoded-ip': [ERROR],
    'sonarjs/no-hardcoded-passwords': [ERROR, {
      passwordWords: ['password', 'pwd', 'passwd', 'passphrase'],
    }],
    'sonarjs/no-hardcoded-secrets': [ERROR, {
      randomnessSensibility: 5,
      secretWords: 'api[_.-]?key,auth,credential,secret,token',
    }],
    // TODO: Should be put in a library react specific configuration file
    'sonarjs/no-hook-setter-in-body': [ERROR],
    'sonarjs/no-identical-conditions': [ERROR],
    'sonarjs/no-identical-expressions': [ERROR],
    'sonarjs/no-identical-functions': [ERROR, MIN_FUNCTION_BODY_LINE_COUNT],
    'sonarjs/no-ignored-exceptions': [ERROR],
    'sonarjs/no-implicit-dependencies': [ERROR, {
      whitelist: [],
    }],
    'sonarjs/no-implicit-global': [ERROR],
    // TODO: Should be put in a library chai/mocha specific configuration file
    'sonarjs/no-incomplete-assertions': [ERROR],
    'sonarjs/no-inconsistent-returns': [ERROR],
    'sonarjs/no-internal-api-use': [ERROR],
    // TODO: Should be put in a tests specific configuration file
    'sonarjs/no-interpolation-in-inline-snapshots': [ERROR],
    'sonarjs/no-invariant-returns': [ERROR],
    'sonarjs/no-inverted-boolean-check': [ERROR],
    'sonarjs/no-labels': [ERROR],
    'sonarjs/no-literal-call': [ERROR],
    // TODO: Should be put in a library express specific configuration file
    'sonarjs/no-mime-sniff': [ERROR],
    'sonarjs/no-mixed-completion-style': [ERROR],
    // TODO: Should be put in a library Vue.js specific configuration file
    'sonarjs/no-mutate-reactive-state-in-updated-hook': [ERROR],
    'sonarjs/no-nested-assignment': [ERROR],
    'sonarjs/no-nested-conditional': [ERROR],
    'sonarjs/no-nested-functions': [ERROR, {
      threshold: 4,
    }],
    'sonarjs/no-nested-incdec': [ERROR],
    'sonarjs/no-nested-switch': [ERROR],
    'sonarjs/no-nested-template-literals': [ERROR],
    // TODO: Should be put in a library playwright specific configuration file
    'sonarjs/no-networkidle-wait': [ERROR],
    // TODO: Should be put in a environment node specific configuration file
    'sonarjs/no-os-command-from-path': [ERROR],
    'sonarjs/no-parameter-reassignment': [ERROR],
    'sonarjs/no-primitive-wrappers': [ERROR],
    'sonarjs/no-redundant-assignments': [ERROR],
    'sonarjs/no-redundant-boolean': [ERROR],
    'sonarjs/no-redundant-jump': [ERROR],
    'sonarjs/no-reference-error': [ERROR],
    // TODO: Should be put in a library express specific configuration file
    'sonarjs/no-referrer-policy': [ERROR],
    // TODO: Should be put in a library chai/mocha specific configuration file
    'sonarjs/no-same-argument-assert': [ERROR],
    'sonarjs/no-same-line-conditional': [ERROR],
    // TODO: Should be put in a library cookie-session, express-session, cookies or csurf specific configuration file
    'sonarjs/no-session-cookies-on-static-assets': [ERROR],
    // TODO: Should be put in a library chai/mocha specific configuration file
    'sonarjs/no-skipped-tests': [ERROR],
    'sonarjs/no-small-switch': [ERROR],
    'sonarjs/no-sonar-comments': [ERROR],
    // TODO: Should be put in a environment browser specific configuration file
    'sonarjs/no-table-as-layout': [ERROR],
    'sonarjs/no-trivial-assertions': [ERROR],

    /**
     * OFF as we intend to stop using 'null'
     * @see: https://github.com/sindresorhus/meta/discussions/7
     */
    'sonarjs/no-undefined-assignment': [OFF],
    'sonarjs/no-unenclosed-multiline-block': [ERROR],
    // TODO: Should be put in a library react specific configuration file
    'sonarjs/no-uniq-key': [ERROR],
    'sonarjs/no-unthrown-error': [ERROR],
    'sonarjs/no-unused-collection': [ERROR],
    'sonarjs/no-unused-function-argument': [ERROR],
    'sonarjs/no-unused-vars': [ERROR],
    'sonarjs/no-use-of-empty-return-value': [ERROR],
    'sonarjs/no-useless-catch': [ERROR],
    'sonarjs/no-useless-increment': [ERROR],
    // TODO: Should be put in a library react specific configuration file
    'sonarjs/no-useless-react-setstate': [ERROR],
    'sonarjs/no-variable-usage-before-declaration': [ERROR],
    // TODO: Should be put in a library Vue.js specific configuration file
    'sonarjs/no-vue-class-component': [ERROR],
    // TODO: Should be put in a library Vue.js specific configuration file
    'sonarjs/no-vue-mixins': [ERROR],
    // TODO: Should be put in a environment node specific configuration file
    'sonarjs/no-weak-cipher': [ERROR],
    // TODO: Should be put in a environment node specific configuration file
    'sonarjs/no-weak-keys': [ERROR],
    'sonarjs/no-wildcard-import': [ERROR],
    'sonarjs/non-existent-operator': [ERROR],
    // TODO: Should be put in a environment browser specific configuration file
    'sonarjs/object-alt-content': [ERROR],
    'sonarjs/parameterized-tests': [ERROR],
    // TODO: Should be put in a library cypress specific configuration file
    'sonarjs/prefer-cypress-should': [ERROR],
    'sonarjs/prefer-default-last': [ERROR],
    'sonarjs/prefer-immediate-return': [ERROR],
    // TODO: Should be put in a library axios specific configuration file
    'sonarjs/prefer-native-axios-alternative': [ERROR],
    // TODO: Should be put in a library jQuery specific configuration file
    'sonarjs/prefer-native-jquery-alternative': [ERROR],
    // TODO: Should be put in a library lodash specific configuration file
    'sonarjs/prefer-native-lodash-alternative': [ERROR],
    'sonarjs/prefer-object-literal': [ERROR],
    'sonarjs/prefer-promise-shorthand': [ERROR],
    'sonarjs/prefer-single-boolean-return': [ERROR],
    'sonarjs/prefer-specific-assertions': [ERROR],
    'sonarjs/prefer-while': [ERROR],
    // TODO: Should be put in a library express specific configuration file
    'sonarjs/production-debug': [ERROR],
    // TODO: Should be put in a environment node or browser specific configuration file
    'sonarjs/pseudo-random': [ERROR],
    // TODO: Should be put in a environment node specific configuration file
    'sonarjs/publicly-writable-directories': [ERROR],
    'sonarjs/regex-complexity': [ERROR, {
      threshold: 20,
    }],
    'sonarjs/review-blockchain-mnemonic': [ERROR],
    // TODO: Should be put in a library express specific configuration file
    'sonarjs/session-regeneration': [ERROR],
    // OFF as we prefer to sort properties alphabetically
    'sonarjs/shorthand-property-grouping': [OFF],
    // TODO: Should be put in a library pg, MySQL, mysql2 or sequelize specific configuration file
    'sonarjs/sql-queries': [ERROR],
    // TODO: Should be put in a library chai/mocha specific configuration file
    'sonarjs/stable-tests': [ERROR],
    'sonarjs/stateful-regex': [ERROR],
    // TODO: Should be put in a library express specific configuration file
    'sonarjs/strict-transport-security': [ERROR],
    'sonarjs/super-linear-regex': [ERROR],
    'sonarjs/synchronous-suite-callback': [ERROR],
    // TODO: Should be put in a syntax JSX specific configuration file
    'sonarjs/table-header': [ERROR],
    // TODO: Should be put in a syntax JSX specific configuration file
    'sonarjs/table-header-reference': [ERROR],
    // TODO: Should be put in a library chai/mocha specific configuration file
    'sonarjs/test-check-exception': [ERROR],
    // TODO: Should be put in a library testing-library specific configuration file
    'sonarjs/testing-library-prefer-query-by-disappearance': [ERROR],
    // TODO: Should be put in a library testing-library specific configuration file
    'sonarjs/testing-library-query-assertion': [ERROR],

    /**
     * TODO: Find a way to keep track and manage those comments
     * OFF as we better keep those comments rather than losing information
     */
    'sonarjs/todo-tag': [OFF],
    'sonarjs/too-many-break-or-continue-in-loop': [ERROR],
    // TODO: Should be put in a environment node specific configuration file
    'sonarjs/unverified-certificate': [ERROR],
    // TODO: Should be put in a environment node specific configuration file
    'sonarjs/unverified-hostname': [ERROR],
    'sonarjs/updated-const-var': [ERROR],
    'sonarjs/updated-loop-counter': [ERROR],
    'sonarjs/variable-name': [ERROR, {
      format: '^[_$A-Za-z][$A-Za-z0-9]*$|^[_$A-Z][_$A-Z0-9]+$',
    }],
    // TODO: Should be put in a library vitest specific configuration file
    'sonarjs/vitest-mock-at-module-scope': [ERROR],
    // TODO: Should be put in a environment node specific configuration file
    'sonarjs/weak-ssl': [ERROR],
    // TODO: Should be put in a library express specific configuration file
    'sonarjs/x-powered-by': [ERROR],
    // TODO: Should be put in a library libxmljs specific configuration file
    'sonarjs/xml-parser-xxe': [ERROR],
  },
}
