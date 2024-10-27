/* eslint-disable max-lines -- TODO: Could be splitted in subparts */

'use strict'

const path = require('node:path')
const process = require('node:process')

const { plugin: typescriptPlugin, parser: typescriptParser } = require('typescript-eslint')

const { OFF, ERROR } = require('../../../constants.js')
const { getRuleConfig } = require('../../../utils.js')
const baseConfig = require('../eslint/vanilla.js')


// eslint-disable-next-line unicorn/prevent-abbreviations -- To match the rule name
const [maxParamsSeverity, maxParamsConfig] = getRuleConfig('max-params', baseConfig)

/** @type {import('eslint').Linter.Config} */
module.exports = {
  // files: ['*.ts', '*.tsx', '*.mts', '*.cts'],

  languageOptions: {
    parser: typescriptParser,
    // Might be exported to environment
    parserOptions: {
      sourceType: 'module',
      warnOnUnsupportedTypeScriptVersion: true,
      project: path.resolve(process.cwd(), 'tsconfig.json'),
    },
  },

  plugins: {
    '@typescript-eslint': typescriptPlugin,
  },

  rules: {
    // Typescript rules
    '@typescript-eslint/adjacent-overload-signatures': [ERROR],
    '@typescript-eslint/array-type': [ERROR, {
      default: 'generic',
      readonly: 'generic',
    }],
    '@typescript-eslint/await-thenable': [ERROR],
    '@typescript-eslint/ban-ts-comment': [ERROR, {
      'ts-check': false, // default
      'ts-expect-error': { descriptionFormat: '^: TS\\d+ because .+$' },
      'ts-ignore': true, // default
      'ts-nocheck': true, // default
      'minimumDescriptionLength': 12,
    }],
    '@typescript-eslint/ban-tslint-comment': [ERROR],
    // Should be 'getters' when used in an publicly exposed lib
    '@typescript-eslint/class-literal-property-style': [ERROR, 'fields'], // default
    '@typescript-eslint/consistent-generic-constructors': [ERROR, 'constructor'], // default
    // Might be debatable, see: https://stackoverflow.com/questions/54100025/difference-between-index-signature-and-record-for-empty-object
    '@typescript-eslint/consistent-indexed-object-style': [ERROR, 'index-signature'],
    // TODO: Should use tsconfig's noImplicitReturns instead of this rule as it has better coverage
    'consistent-return': [OFF],
    '@typescript-eslint/consistent-return': getRuleConfig('consistent-return', baseConfig),
    '@typescript-eslint/consistent-type-assertions': [ERROR, {
      assertionStyle: 'as', // default
      objectLiteralTypeAssertions: 'allow', // default
    }],
    '@typescript-eslint/consistent-type-definitions': [ERROR, 'type'],
    '@typescript-eslint/consistent-type-exports': [ERROR, {
      fixMixedExportsWithInlineTypeSpecifier: false, // default
    }],
    '@typescript-eslint/consistent-type-imports': [ERROR, {
      disallowTypeAnnotations: true, // defaults
      fixStyle: 'separate-type-imports', // default
      prefer: 'type-imports', // default
    }],
    // Disabled because Typescript can infer the return types on its own. Should be used as a way to optimize type checking
    '@typescript-eslint/explicit-function-return-type': [OFF, {
      allowConciseArrowFunctionExpressionsStartingWithVoid: false, // default
      allowDirectConstAssertionInArrowFunctions: true, // default
      allowExpressions: false, // default
      allowFunctionsWithoutTypeParameters: false, // default
      allowHigherOrderFunctions: true, // default
      allowIIFEs: false, // default
      allowTypedFunctionExpressions: true, // default
      allowedNames: [], // default
    }],
    // Should probably be tweaked in the future
    '@typescript-eslint/explicit-member-accessibility': [ERROR, {
      accessibility: 'explicit', // default
      ignoredMethodNames: [], // default
      overrides: {
        accessors: 'explicit', // default
        constructors: 'explicit', // default
        methods: 'explicit', // default
        parameterProperties: 'explicit', // default
        properties: 'explicit', // default
      },
    }],
    // Disabled because Typescript can infer the return types on its own. Should be used as a way to optimize type checking
    '@typescript-eslint/explicit-module-boundary-types': [OFF, {
      allowArgumentsExplicitlyTypedAsAny: false, // default
      allowDirectConstAssertionInArrowFunctions: true, // default
      allowHigherOrderFunctions: true, // default
      allowTypedFunctionExpressions: true, // default
      allowedNames: [], // default
    }],
    // Should probably be tweaked in the future
    '@typescript-eslint/member-ordering': [ERROR, {
      // default
      default: [
        // Index signature
        'signature',
        'call-signature',

        // Fields
        'public-static-field',
        'protected-static-field',
        'private-static-field',
        '#private-static-field',

        'public-decorated-field',
        'protected-decorated-field',
        'private-decorated-field',

        'public-instance-field',
        'protected-instance-field',
        'private-instance-field',
        '#private-instance-field',

        'public-abstract-field',
        'protected-abstract-field',

        'public-field',
        'protected-field',
        'private-field',
        '#private-field',

        'static-field',
        'instance-field',
        'abstract-field',

        'decorated-field',

        'field',

        // Static initialization
        'static-initialization',

        // Constructors
        'public-constructor',
        'protected-constructor',
        'private-constructor',

        'constructor',

        // Getters
        'public-static-get',
        'protected-static-get',
        'private-static-get',
        '#private-static-get',

        'public-decorated-get',
        'protected-decorated-get',
        'private-decorated-get',

        'public-instance-get',
        'protected-instance-get',
        'private-instance-get',
        '#private-instance-get',

        'public-abstract-get',
        'protected-abstract-get',

        'public-get',
        'protected-get',
        'private-get',
        '#private-get',

        'static-get',
        'instance-get',
        'abstract-get',

        'decorated-get',

        'get',

        // Setters
        'public-static-set',
        'protected-static-set',
        'private-static-set',
        '#private-static-set',

        'public-decorated-set',
        'protected-decorated-set',
        'private-decorated-set',

        'public-instance-set',
        'protected-instance-set',
        'private-instance-set',
        '#private-instance-set',

        'public-abstract-set',
        'protected-abstract-set',

        'public-set',
        'protected-set',
        'private-set',
        '#private-set',

        'static-set',
        'instance-set',
        'abstract-set',

        'decorated-set',

        'set',

        // Methods
        'public-static-method',
        'protected-static-method',
        'private-static-method',
        '#private-static-method',

        'public-decorated-method',
        'protected-decorated-method',
        'private-decorated-method',

        'public-instance-method',
        'protected-instance-method',
        'private-instance-method',
        '#private-instance-method',

        'public-abstract-method',
        'protected-abstract-method',

        'public-method',
        'protected-method',
        'private-method',
        '#private-method',

        'static-method',
        'instance-method',
        'abstract-method',

        'decorated-method',

        'method',
      ],
      classes: [], // default
      classExpressions: [], // default
      interfaces: [], // default
      typeLiterals: [], // default
    }],
    '@typescript-eslint/method-signature-style': [ERROR, 'property'], // default
    // Should probably be tweaked in the future
    '@typescript-eslint/naming-convention': [ERROR,
      {
        selector: 'default',
        format: ['camelCase'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'allow',
      },

      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'allow',
      },

      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
    ], // default
    '@typescript-eslint/no-base-to-string': [ERROR, {
      ignoredTypeNames: ['Error', 'RegExp', 'URL', 'URLSearchParams'], // default
    }],
    '@typescript-eslint/no-confusing-non-null-assertion': [ERROR],
    '@typescript-eslint/no-confusing-void-expression': [ERROR, {
      ignoreArrowShorthand: false, // default
      ignoreVoidOperator: false, // default
    }],
    '@typescript-eslint/no-deprecated': [ERROR],
    '@typescript-eslint/no-duplicate-enum-values': [ERROR],
    '@typescript-eslint/no-duplicate-type-constituents': [ERROR, {
      ignoreIntersections: false, // default
      ignoreUnions: false, // default
    }],
    '@typescript-eslint/no-dynamic-delete': [ERROR],
    '@typescript-eslint/no-empty-object-type': [ERROR, {
      allowInterfaces: 'never', // default
      allowObjectTypes: 'never', // default
      // allowWithName: '',
    }],
    '@typescript-eslint/no-explicit-any': [ERROR, {
      fixToUnknown: false, // default
      ignoreRestArgs: false, // default
    }],
    '@typescript-eslint/no-extra-non-null-assertion': [ERROR],
    '@typescript-eslint/no-extraneous-class': [ERROR, {
      allowConstructorOnly: false, // default
      allowEmpty: false, // default
      allowStaticOnly: false, // default
      allowWithDecorator: false, // default
    }],
    '@typescript-eslint/no-floating-promises': [ERROR, {
      ignoreVoid: true, // default
      ignoreIIFE: false, // default
    }],
    '@typescript-eslint/no-for-in-array': [ERROR],
    '@typescript-eslint/no-import-type-side-effects': [ERROR],
    '@typescript-eslint/no-inferrable-types': [ERROR, {
      ignoreParameters: false, // default
      ignoreProperties: false, // default
    }],
    '@typescript-eslint/no-invalid-void-type': [ERROR, {
      allowInGenericTypeArguments: false,
      allowAsThisParameter: false, // default
    }],
    '@typescript-eslint/no-meaningless-void-operator': [ERROR, {
      checkNever: true,
    }],
    '@typescript-eslint/no-misused-new': [ERROR],
    '@typescript-eslint/no-misused-promises': [ERROR, {
      checksConditionals: true, // default
      checksSpreads: true, // default
      checksVoidReturn: {
        arguments: true, // default
        attributes: true, // default
        properties: true, // default
        returns: true, // default
        variables: true, // default
      },
    }],
    '@typescript-eslint/no-mixed-enums': [ERROR],
    '@typescript-eslint/no-namespace': [ERROR, {
      allowDeclarations: false, // default
      allowDefinitionFiles: false,
    }],
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': [ERROR],
    '@typescript-eslint/no-non-null-asserted-optional-chain': [ERROR],
    '@typescript-eslint/no-non-null-assertion': [ERROR],
    '@typescript-eslint/no-redundant-type-constituents': [ERROR],
    // Might be disabled for CommonJS context
    '@typescript-eslint/no-require-imports': [ERROR, {
      allow: [], // default
      allowAsImport: false, // default
    }],
    '@typescript-eslint/no-this-alias': [ERROR, {
      allowDestructuring: true, // default
      allowedNames: [], // default
    }],
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': [ERROR, {
      allowComparingNullableBooleansToTrue: false,
      allowComparingNullableBooleansToFalse: true, // default
    }],
    '@typescript-eslint/no-unnecessary-condition': [ERROR, {
      allowConstantLoopConditions: false, // default
      allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false, // default
    }],
    '@typescript-eslint/no-unnecessary-parameter-property-assignment': [ERROR],
    '@typescript-eslint/no-unnecessary-qualifier': [ERROR],
    '@typescript-eslint/no-unnecessary-template-expression': [ERROR],
    '@typescript-eslint/no-unnecessary-type-arguments': [ERROR],
    '@typescript-eslint/no-unnecessary-type-assertion': [ERROR, {
      typesToIgnore: [], // default
    }],
    '@typescript-eslint/no-unnecessary-type-constraint': [ERROR],

    /**
     * This rule could have unexpected behavior
     * @see: https://typescript-eslint.io/rules/no-unnecessary-type-parameters
     */
    '@typescript-eslint/no-unnecessary-type-parameters': [ERROR],
    '@typescript-eslint/no-unsafe-argument': [ERROR],
    '@typescript-eslint/no-unsafe-assignment': [ERROR],
    '@typescript-eslint/no-unsafe-call': [ERROR],
    '@typescript-eslint/no-unsafe-declaration-merging': [ERROR],
    '@typescript-eslint/no-unsafe-enum-comparison': [ERROR],
    '@typescript-eslint/no-unsafe-function-type': [ERROR],
    '@typescript-eslint/no-unsafe-member-access': [ERROR],
    '@typescript-eslint/no-unsafe-return': [ERROR],
    '@typescript-eslint/no-unsafe-unary-minus': [ERROR],
    '@typescript-eslint/no-useless-empty-export': [ERROR],
    '@typescript-eslint/no-wrapper-object-types': [ERROR],
    '@typescript-eslint/non-nullable-type-assertion-style': [ERROR],
    'no-throw-literal': [OFF],
    '@typescript-eslint/only-throw-error': [ERROR, {
      allowThrowingAny: false, // default
      allowThrowingUnknown: false, // default
    }],
    '@typescript-eslint/parameter-properties': [ERROR, {
      allow: [], // default
      prefer: 'class-property', // default
    }],
    '@typescript-eslint/prefer-as-const': [ERROR],
    'prefer-destructuring': [OFF],
    // Disabled object VariableDeclarator
    // It decrease readability for things like the following:
    // `const type = node.data[params.handleType === 'source' ? 'outputs' : 'inputs'][handleId].type`
    '@typescript-eslint/prefer-destructuring': [ERROR, {
      VariableDeclarator: {
        object: false,
        array: true,
      },
      AssignmentExpression: {
        object: true,
        array: true,
      },
    }, {
      enforceForRenamedProperties: true,
      enforceForDeclarationWithTypeAnnotation: true,
    }],
    '@typescript-eslint/prefer-enum-initializers': [ERROR],
    '@typescript-eslint/prefer-find': [ERROR],
    '@typescript-eslint/prefer-for-of': [ERROR],
    '@typescript-eslint/prefer-function-type': [ERROR],
    '@typescript-eslint/prefer-includes': [ERROR],
    '@typescript-eslint/prefer-literal-enum-member': [ERROR, {
      allowBitwiseExpressions: false, // default
    }],
    '@typescript-eslint/prefer-namespace-keyword': [ERROR],
    '@typescript-eslint/prefer-nullish-coalescing': [ERROR, {
      allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false, // default
      ignoreConditionalTests: false, // default
      ignoreTernaryTests: false, // default
      ignoreMixedLogicalExpressions: false, // default
      ignorePrimitives: {
        bigint: false, // default
        boolean: false, // default
        number: false, // default
        string: false, // default
      },
    }],
    '@typescript-eslint/prefer-optional-chain': [ERROR, {
      checkAny: true, // default
      checkUnknown: true, // default
      checkString: true, // default
      checkNumber: true, // default
      checkBoolean: true, // default
      checkBigInt: true, // default
      requireNullish: false, // default
      allowPotentiallyUnsafeFixesThatModifyTheReturnTypeIKnowWhatImDoing: true,
    }],
    'prefer-promise-reject-errors': [OFF],
    '@typescript-eslint/prefer-promise-reject-errors': getRuleConfig('prefer-promise-reject-errors', baseConfig),
    '@typescript-eslint/prefer-readonly': [ERROR, {
      onlyInlineLambdas: false, // default
    }],

    /**
     * OFF as it is very painful to always have to type 'readonly' in front of every parameter.
     * Some complex types need a lot of work to be declared as read only
     * (e.g.: `ReadonlyDeep<DragEvent<HTMLDivElement>>` is not well enough).
     * The 'no-param-reassign` rule with its `props` option set to true prevents us to mutate parameters.
     * Note that discussions are ongoing to make it the default behavior though.
     * See: https://github.com/microsoft/TypeScript/issues/42357
     */
    '@typescript-eslint/prefer-readonly-parameter-types': [OFF, {
      allow: [],
      checkParameterProperties: true, // default
      ignoreInferredTypes: false, // default
      treatMethodsAsReadonly: false, // default
    }],
    '@typescript-eslint/prefer-reduce-type-parameter': [ERROR],
    // Disabled because it enforces a inconsistant way to use regex depending on flags usage
    '@typescript-eslint/prefer-regexp-exec': [OFF],
    '@typescript-eslint/prefer-return-this-type': [ERROR],
    '@typescript-eslint/prefer-string-starts-ends-with': [ERROR, {
      allowSingleElementEquality: 'never', // default
    }],
    '@typescript-eslint/promise-function-async': [ERROR, {
      allowAny: true, // default
      allowedPromiseNames: [], // default
      checkArrowFunctions: true, // default
      checkFunctionDeclarations: true, // default
      checkFunctionExpressions: true, // default
      checkMethodDeclarations: true, // default
    }],
    '@typescript-eslint/require-array-sort-compare': [ERROR, {
      ignoreStringArrays: true, // default
    }],
    '@typescript-eslint/restrict-plus-operands': [ERROR, {
      allowAny: false,
      allowBoolean: false,
      allowNullish: false,
      allowNumberAndString: false,
      allowRegExp: false,
      skipCompoundAssignments: false, // default
    }],
    '@typescript-eslint/restrict-template-expressions': [ERROR, {
      allowAny: false,
      allowBoolean: true, // default
      allowNever: false, // default
      allowNullish: false,
      allowNumber: true, // default
      allowRegExp: true, // default
    }],
    '@typescript-eslint/strict-boolean-expressions': [ERROR, {
      allowString: true, // default
      allowNumber: true, // default
      allowNullableObject: true, // default
      allowNullableBoolean: false, // default
      allowNullableString: false, // default
      allowNullableNumber: false, // default
      allowNullableEnum: false, // default
      allowAny: false, // default
      allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false, // default
    }],
    '@typescript-eslint/switch-exhaustiveness-check': [ERROR, {
      allowDefaultCaseForExhaustiveSwitch: false,
      requireDefaultForNonUnion: true,
    }],
    '@typescript-eslint/triple-slash-reference': [ERROR, {
      lib: 'never',
      path: 'never', // default
      types: 'never',
    }],
    // Disabled as Typescript is better at inferring types
    '@typescript-eslint/typedef': [OFF, {
      arrayDestructuring: false, // default
      arrowParameter: false, // default
      memberVariableDeclaration: false, // default
      objectDestructuring: false, // default
      parameter: false, // default
      propertyDeclaration: false, // default
      variableDeclaration: false, // default
      variableDeclarationIgnoreFunction: false, // default
    }],
    '@typescript-eslint/unbound-method': [ERROR, {
      ignoreStatic: false, // default
    }],
    '@typescript-eslint/unified-signatures': [ERROR, {
      ignoreDifferentlyNamedParameters: false, // default
    }],
    // Extension rules
    'class-methods-use-this': [OFF],
    '@typescript-eslint/class-methods-use-this': [ERROR, {
      exceptMethods: [], // default
      enforceForClassFields: true, // default
      ignoreOverrideMethods: false, // default
      ignoreClassesThatImplementAnInterface: false, // default
    }],
    'default-param-last': [OFF],
    '@typescript-eslint/default-param-last': [ERROR],
    'dot-notation': [OFF],
    '@typescript-eslint/dot-notation': [ERROR, {
      allowKeywords: false,
      allowPattern: '', // default
      allowPrivateClassPropertyAccess: false, // default
      allowProtectedClassPropertyAccess: false, // default
      allowIndexSignaturePropertyAccess: false, // default
    }],
    'init-declarations': [OFF],
    '@typescript-eslint/init-declarations': [ERROR, 'always'],
    'max-params': [OFF],
    '@typescript-eslint/max-params': [maxParamsSeverity, {
      ...maxParamsConfig,
      countVoidThis: false, // default
    }],
    'no-array-constructor': [OFF],
    '@typescript-eslint/no-array-constructor': [ERROR],
    '@typescript-eslint/no-array-delete': [ERROR],
    // Disabled as Typescript compiler already checks this
    'no-dupe-class-members': [OFF],
    '@typescript-eslint/no-dupe-class-members': [OFF],
    // Might be tweaked in the future
    'no-empty-function': [OFF],
    '@typescript-eslint/no-empty-function': [ERROR, {
      allow: [], // default
    }],
    'no-implied-eval': [OFF],
    '@typescript-eslint/no-implied-eval': [ERROR],
    // Disabled as Typescript compiler already checks this with the `noImplicitThis` option
    'no-invalid-this': [OFF],
    '@typescript-eslint/no-invalid-this': [OFF, {
      capIsConstructor: false,
    }],
    'no-loop-func': [OFF],
    '@typescript-eslint/no-loop-func': [ERROR],
    // Might be tweaked for comfort in the future
    'no-magic-numbers': [OFF],
    '@typescript-eslint/no-magic-numbers': [ERROR, {
      ignore: [], // default
      ignoreArrayIndexes: false, // default
      ignoreDefaultValues: false, // default
      ignoreClassFieldInitialValues: false, // default
      enforceConst: true,
      detectObjects: false, // default
      ignoreEnums: false, // default
      ignoreNumericLiteralTypes: false, // default
      ignoreReadonlyClassProperties: false, // default
      ignoreTypeIndexes: false, // default
    }],
    // Disabled as Typescript compiler already checks this
    'no-redeclare': [OFF],
    '@typescript-eslint/no-redeclare': [OFF, {
      builtinGlobals: true, // default
      ignoreDeclarationMerge: true, // default
    }],
    'no-restricted-imports': [OFF],
    '@typescript-eslint/no-restricted-imports': [ERROR, {
      paths: [],
      patterns: [
        {
          group: ['underscore'],
          message: `'underscore' have many issues. Please consider 'radash' if you really need an utility library.`,
          allowTypeImports: false,
        },
        {
          group: ['lodash'],
          message: `'lodash' have many issues. Please consider 'radash' if you really need an utility library.`,
          allowTypeImports: false,
        },
        {
          group: ['moment'],
          message: `'moment' is now considered legacy. Please consider 'date-fns' or 'luxon'.`,
          allowTypeImports: false,
        },
      ],
    }],
    '@typescript-eslint/no-restricted-types': [ERROR, {
      /**
       * Restriction of wrapper object types are handled by the @typescript-eslint/no-wrapper-object-types rule
       * Restriction of `{}` type is handled by the @typescript-eslint/no-empty-object-type rule
       * Restriction of the `Function` wrapper type is handled by the @typescript-eslint/no-unsafe-function-type rule
       */
      // types: {
      //   TypeName: {
      //     message: '',
      //     fixWith: '',
      //     suggest: [''],
      //   },
      // },
    }],
    'no-shadow': [OFF],
    '@typescript-eslint/no-shadow': [ERROR, {
      builtinGlobals: true,
      hoist: 'all',
      // TODO: We might want to find a way to enforce the use of 'window.property' to use global
      allow: ['event', 'name', 'parent', 'process'],
      ignoreOnInitialization: false, // default
      ignoreTypeValueShadow: false,
      ignoreFunctionTypeParameterNameValueShadow: false,
    }],
    'no-unused-expressions': [OFF],
    '@typescript-eslint/no-unused-expressions': [ERROR, {
      allowShortCircuit: false, // default
      allowTernary: false, // default
      allowTaggedTemplates: false, // default
      enforceForJSX: true,
    }],
    // Might be tweaked in the future
    'no-unused-vars': [OFF],
    '@typescript-eslint/no-unused-vars': [ERROR, {
      vars: 'all', // default
      varsIgnorePattern: '', // default
      args: 'after-used', // default
      argsIgnorePattern: '', // default
      caughtErrors: 'all',
      caughtErrorsIgnorePattern: '', // default
      destructuredArrayIgnorePattern: '', // default
      ignoreRestSiblings: false, // default
    }],
    'no-use-before-define': [OFF],
    '@typescript-eslint/no-use-before-define': [ERROR, {
      functions: false,
      classes: false,
      variables: true, // default
      allowNamedExports: true,
      enums: true,
      typedefs: true,
      ignoreTypeReferences: true,
    }],
    'no-useless-constructor': [OFF],
    '@typescript-eslint/no-useless-constructor': [ERROR],
    'require-await': [OFF],
    '@typescript-eslint/require-await': [ERROR],
    'no-return-await': [OFF],
    '@typescript-eslint/return-await': [ERROR, 'in-try-catch'], // default
    '@typescript-eslint/use-unknown-in-catch-callback-variable': [ERROR],
  },
}

/* eslint-enable */
