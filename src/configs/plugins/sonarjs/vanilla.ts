import sonarJsPlugin from 'eslint-plugin-sonarjs'

import { ERROR, OFF } from '../../../constants.ts'

import type { Linter } from 'eslint'


const MAX_COGNITIVE_COMPLEXITY = 15
const MAX_SWITCH_CASES = 30
const MIN_FUNCTION_BODY_LINE_COUNT = 3

export const sonarJsVanillaConfig = {
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
    'sonarjs/assertions-in-tests': [ERROR],
    'sonarjs/bitwise-operators': [ERROR],
    'sonarjs/block-scoped-var': [ERROR],
    'sonarjs/bool-param-default': [ERROR],
    'sonarjs/call-argument-line': [ERROR],
    // TODO: Should be put in a library express specific configuration file
    'sonarjs/certificate-transparency': [ERROR],
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
    // TODO: Should be put in a library signale specific configuration file
    'sonarjs/confidential-information-logging': [ERROR],
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
    // TODO: Should be put in a environment node, environment browser or library express specific configuration file
    'sonarjs/cookies': [ERROR],
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
    'sonarjs/elseif-without-else': [ERROR],
    // TODO: Should be put in a environment node specific configuration file
    'sonarjs/encryption-secure-mode': [ERROR],
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
    // TODO: Should be put in a library express specific configuration file
    'sonarjs/frame-ancestors': [ERROR],
    'sonarjs/function-inside-loop': [ERROR],
    'sonarjs/function-name': [ERROR, {
      format: '^[_a-z][a-zA-Z0-9]*$',
    }],
    'sonarjs/future-reserved-words': [ERROR],
    'sonarjs/generator-without-yield': [ERROR],
    // TODO: Should be put in a environment node specific configuration file
    'sonarjs/hashing': [ERROR],
    // TODO: Should be put in a library express specific configuration file
    'sonarjs/hidden-files': [ERROR],
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
    'sonarjs/no-delete-var': [ERROR],
    'sonarjs/no-duplicate-string': [ERROR, {
      ignoreStrings: 'application/json',
      // Configured value
      threshold: 2,
    }],
    'sonarjs/no-duplicated-branches': [ERROR],
    'sonarjs/no-element-overwrite': [ERROR],
    'sonarjs/no-empty-collection': [ERROR],
    'sonarjs/no-empty-test-file': [ERROR],
    'sonarjs/no-equals-in-for-termination': [ERROR],
    'sonarjs/no-exclusive-tests': [ERROR],
    // Might be turned OFF in Typescript projects as it already enforce this
    'sonarjs/no-extra-arguments': [ERROR],
    'sonarjs/no-fallthrough': [ERROR],
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
    'sonarjs/no-intrusive-permissions': [ERROR, {
      permissions: ['geolocation'],
    }],
    'sonarjs/no-invariant-returns': [ERROR],
    'sonarjs/no-inverted-boolean-check': [ERROR],
    // TODO: Should be put in a library http-proxy or http-proxy-middleware specific configuration file
    'sonarjs/no-ip-forward': [ERROR],
    'sonarjs/no-labels': [ERROR],
    'sonarjs/no-literal-call': [ERROR],
    // TODO: Should be put in a library express specific configuration file
    'sonarjs/no-mime-sniff': [ERROR],
    // TODO: Should be put in a library express specific configuration file
    'sonarjs/no-mixed-content': [ERROR],
    'sonarjs/no-nested-assignment': [ERROR],
    'sonarjs/no-nested-conditional': [ERROR],
    'sonarjs/no-nested-functions': [ERROR, {
      threshold: 4,
    }],
    'sonarjs/no-nested-incdec': [ERROR],
    'sonarjs/no-nested-switch': [ERROR],
    'sonarjs/no-nested-template-literals': [ERROR],
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
    // TODO: Should be put in a library chai/mocha specific configuration file
    'sonarjs/no-skipped-tests': [ERROR],
    'sonarjs/no-small-switch': [ERROR],
    'sonarjs/no-sonar-comments': [ERROR],
    // TODO: Should be put in a environment browser specific configuration file
    'sonarjs/no-table-as-layout': [ERROR],

    /**
     * OFF as we intend to stop using 'null'
     * @see: https://github.com/sindresorhus/meta/discussions/7
     */
    'sonarjs/no-undefined-assignment': [OFF],
    'sonarjs/no-unenclosed-multiline-block': [ERROR],
    // TODO: Should be put in a library react specific configuration file
    'sonarjs/no-uniq-key': [ERROR],
    // TODO: Should be put in a library tar, adm-zip, jszip, yauzl or extract-zip specific configuration file
    'sonarjs/no-unsafe-unzip': [ERROR],
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
    // TODO: Should be put in a library vue specific configuration file
    'sonarjs/no-vue-bypass-sanitization': [ERROR],
    // TODO: Should be put in a environment node specific configuration file
    'sonarjs/no-weak-cipher': [ERROR],
    // TODO: Should be put in a environment node specific configuration file
    'sonarjs/no-weak-keys': [ERROR],
    'sonarjs/no-wildcard-import': [ERROR],
    'sonarjs/non-existent-operator': [ERROR],
    // TODO: Should be put in a environment browser specific configuration file
    'sonarjs/object-alt-content': [ERROR],
    // TODO: Should be put in a environment node specific configuration file
    'sonarjs/os-command': [ERROR],
    'sonarjs/prefer-default-last': [ERROR],
    'sonarjs/prefer-immediate-return': [ERROR],
    'sonarjs/prefer-object-literal': [ERROR],
    'sonarjs/prefer-promise-shorthand': [ERROR],
    'sonarjs/prefer-single-boolean-return': [ERROR],
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
    // TODO: Should be put in a library express specific configuration file
    'sonarjs/session-regeneration': [ERROR],
    // OFF as we prefer to sort properties alphabetically
    'sonarjs/shorthand-property-grouping': [OFF],
    // TODO: Should be put in a library pg, mysql, mysql2 or sequelize specific configuration file
    'sonarjs/sql-queries': [ERROR],
    // TODO: Should be put in a library chai/mocha specific configuration file
    'sonarjs/stable-tests': [ERROR],
    'sonarjs/stateful-regex': [ERROR],
    // TODO: Should be put in a library express specific configuration file
    'sonarjs/strict-transport-security': [ERROR],
    'sonarjs/super-invocation': [ERROR],
    // TODO: Should be put in a syntax jsx specific configuration file
    'sonarjs/table-header': [ERROR],
    // TODO: Should be put in a syntax jsx specific configuration file
    'sonarjs/table-header-reference': [ERROR],
    // TODO: Should be put in a library chai/mocha specific configuration file
    'sonarjs/test-check-exception': [ERROR],

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
    // TODO: Should be put in a environment node specific configuration file
    'sonarjs/weak-ssl': [ERROR],
    // TODO: Should be put in a library express specific configuration file
    'sonarjs/x-powered-by': [ERROR],
    // TODO: Should be put in a library libxmljs specific configuration file
    'sonarjs/xml-parser-xxe': [ERROR],
  },
} as const satisfies Linter.Config
