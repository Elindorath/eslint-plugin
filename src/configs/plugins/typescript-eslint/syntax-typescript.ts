/* eslint-disable max-lines -- TODO: Could be splitted in subparts */

import path from 'node:path'
import process from 'node:process'

import typescriptEslint from 'typescript-eslint'

import { ERROR, OFF } from '../../../constants.ts'
import { getRuleConfig, overrideBaseConfigRule } from '../../../utilities.ts'

import { eslintVanillaConfig } from '../eslint/vanilla.ts'

import type { ESLint, Linter } from 'eslint'


const ARRAY_SIMPLE = 'array-simple'

export const typescriptConfig = {
  // files: ['*.ts', '*.tsx', '*.mts', '*.cts'],

  languageOptions: {
    /**
     * We shouldn't override this type but there are inconsistencies with the expected Linter.Parser type.
     * TODO: fix this when types are fixed
     */
    // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion -- See comment above
    parser: typescriptEslint.parser as unknown as Linter.Parser,
    // Might be exported to environment
    parserOptions: {
      project: path.resolve(process.cwd(), 'tsconfig.json'),
      sourceType: 'module',
      warnOnUnsupportedTypeScriptVersion: true,
    },
  },

  plugins: {
    /**
     * We shouldn't override this type but there are inconsistencies with the expected ESLint.Plugin type.
     * TODO: fix this when types are fixed
     */
    // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion -- See comment above
    '@typescript-eslint': typescriptEslint.plugin as unknown as ESLint.Plugin,
  },

  rules: {
    // Typescript rules
    '@typescript-eslint/adjacent-overload-signatures': [ERROR],
    '@typescript-eslint/array-type': [ERROR, {
      default: ARRAY_SIMPLE,
      readonly: ARRAY_SIMPLE,
    }],
    '@typescript-eslint/await-thenable': [ERROR],
    '@typescript-eslint/ban-ts-comment': [ERROR, {
      // Configured value
      'minimumDescriptionLength': 12,
      'ts-check': false,
      // Configured value
      'ts-expect-error': { descriptionFormat: String.raw`^: TS\d+ because .+$` },
      'ts-ignore': true,
      'ts-nocheck': true,
    }],
    '@typescript-eslint/ban-tslint-comment': [ERROR],
    // Should be 'getters' when used in an publicly exposed lib
    '@typescript-eslint/class-literal-property-style': [ERROR, 'fields'],
    '@typescript-eslint/consistent-generic-constructors': [ERROR, 'constructor'],
    // Might be debatable, see: https://stackoverflow.com/questions/54100025/difference-between-index-signature-and-record-for-empty-object
    '@typescript-eslint/consistent-indexed-object-style': [ERROR, 'index-signature'],
    '@typescript-eslint/consistent-return': getRuleConfig('consistent-return', eslintVanillaConfig),
    '@typescript-eslint/consistent-type-assertions': [ERROR, {
      arrayLiteralTypeAssertions: 'allow',
      assertionStyle: 'as',
      objectLiteralTypeAssertions: 'allow',
    }],
    '@typescript-eslint/consistent-type-definitions': [ERROR, 'type'],
    '@typescript-eslint/consistent-type-exports': [ERROR, {
      fixMixedExportsWithInlineTypeSpecifier: false,
    }],
    '@typescript-eslint/consistent-type-imports': [ERROR, {
      disallowTypeAnnotations: true,
      fixStyle: 'separate-type-imports',
      prefer: 'type-imports',
    }],
    // Disabled because Typescript can infer the return types on its own. Should be used as a way to optimize type checking
    '@typescript-eslint/explicit-function-return-type': [OFF, {
      allowConciseArrowFunctionExpressionsStartingWithVoid: false,
      allowDirectConstAssertionInArrowFunctions: true,
      allowedNames: [],
      allowExpressions: false,
      allowFunctionsWithoutTypeParameters: false,
      allowHigherOrderFunctions: true,
      allowIIFEs: false,
      allowTypedFunctionExpressions: true,
    }],
    // Should probably be tweaked in the future
    '@typescript-eslint/explicit-member-accessibility': [ERROR, {
      accessibility: 'explicit',
      ignoredMethodNames: [],
      overrides: {
        accessors: 'explicit',
        constructors: 'explicit',
        methods: 'explicit',
        parameterProperties: 'explicit',
        properties: 'explicit',
      },
    }],
    // Disabled because Typescript can infer the return types on its own. Should be used as a way to optimize type checking
    '@typescript-eslint/explicit-module-boundary-types': [OFF, {
      allowArgumentsExplicitlyTypedAsAny: false,
      allowDirectConstAssertionInArrowFunctions: true,
      allowedNames: [],
      allowHigherOrderFunctions: true,
      allowOverloadFunctions: false,
      allowTypedFunctionExpressions: true,
    }],
    // Should probably be tweaked in the future
    '@typescript-eslint/member-ordering': [ERROR, {

      classes: [],
      classExpressions: [],
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
      interfaces: [],
      typeLiterals: [],
    }],
    '@typescript-eslint/method-signature-style': [ERROR, 'property'],
    // Should probably be tweaked in the future
    '@typescript-eslint/naming-convention': [ERROR,
      // Configured values
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
        selector: 'objectLiteralProperty',
        format: ['camelCase', 'UPPER_CASE'],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid',
      },

      {
        selector: 'objectLiteralProperty',
        // eslint-disable-next-line unicorn/no-null -- Required by the rule schema
        format: null,
        modifiers: ['requiresQuotes'],
      },

      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
    ],
    '@typescript-eslint/no-base-to-string': [ERROR, {
      // Configured value
      checkUnknown: true,
      ignoredTypeNames: ['Error', 'RegExp', 'URL', 'URLSearchParams'],
    }],
    '@typescript-eslint/no-confusing-non-null-assertion': [ERROR],
    '@typescript-eslint/no-confusing-void-expression': [ERROR, {
      ignoreArrowShorthand: false,
      ignoreVoidOperator: false,
      ignoreVoidReturningFunctions: false,
    }],
    '@typescript-eslint/no-deprecated': [ERROR, {
      allow: [],
    }],
    '@typescript-eslint/no-duplicate-enum-values': [ERROR],
    '@typescript-eslint/no-duplicate-type-constituents': [ERROR, {
      ignoreIntersections: false,
      ignoreUnions: false,
    }],
    '@typescript-eslint/no-dynamic-delete': [ERROR],
    '@typescript-eslint/no-empty-object-type': [ERROR, {
      allowInterfaces: 'never',
      allowObjectTypes: 'never',
      // allowWithName: '',
    }],
    '@typescript-eslint/no-explicit-any': [ERROR, {
      fixToUnknown: false,
      ignoreRestArgs: false,
    }],
    '@typescript-eslint/no-extra-non-null-assertion': [ERROR],
    '@typescript-eslint/no-extraneous-class': [ERROR, {
      allowConstructorOnly: false,
      allowEmpty: false,
      allowStaticOnly: false,
      allowWithDecorator: false,
    }],
    '@typescript-eslint/no-floating-promises': [ERROR, {
      ignoreIIFE: false,
      ignoreVoid: true,
    }],
    '@typescript-eslint/no-for-in-array': [ERROR],
    '@typescript-eslint/no-import-type-side-effects': [ERROR],
    '@typescript-eslint/no-inferrable-types': [ERROR, {
      ignoreParameters: false,
      ignoreProperties: false,
    }],
    '@typescript-eslint/no-invalid-void-type': [ERROR, {
      allowAsThisParameter: false,
      // Configured value
      allowInGenericTypeArguments: false,
    }],
    '@typescript-eslint/no-meaningless-void-operator': [ERROR, {
      // Configured value
      checkNever: true,
    }],
    '@typescript-eslint/no-misused-new': [ERROR],
    '@typescript-eslint/no-misused-promises': [ERROR, {
      checksConditionals: true,
      checksSpreads: true,
      checksVoidReturn: {
        arguments: true,
        attributes: true,
        properties: true,
        returns: true,
        variables: true,
      },
    }],
    '@typescript-eslint/no-misused-spread': [ERROR, {
      allow: [],
    }],
    '@typescript-eslint/no-mixed-enums': [ERROR],
    '@typescript-eslint/no-namespace': [ERROR, {
      allowDeclarations: false,
      // Configured value
      allowDefinitionFiles: false,
    }],
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': [ERROR],
    '@typescript-eslint/no-non-null-asserted-optional-chain': [ERROR],
    '@typescript-eslint/no-non-null-assertion': [ERROR],
    '@typescript-eslint/no-redundant-type-constituents': [ERROR],
    // Might be disabled for CommonJS context
    '@typescript-eslint/no-require-imports': [ERROR, {
      allow: [],
      allowAsImport: false,
    }],
    '@typescript-eslint/no-this-alias': [ERROR, {
      allowDestructuring: true,
      allowedNames: [],
    }],
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': [ERROR, {
      allowComparingNullableBooleansToFalse: true,
      // Configured value
      allowComparingNullableBooleansToTrue: false,
    }],
    '@typescript-eslint/no-unnecessary-condition': [ERROR, {
      allowConstantLoopConditions: 'never',
      allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
      // Configured value
      checkTypePredicates: true,
    }],
    '@typescript-eslint/no-unnecessary-parameter-property-assignment': [ERROR],
    '@typescript-eslint/no-unnecessary-qualifier': [ERROR],
    '@typescript-eslint/no-unnecessary-template-expression': [ERROR],
    '@typescript-eslint/no-unnecessary-type-arguments': [ERROR],
    '@typescript-eslint/no-unnecessary-type-assertion': [ERROR, {
      checkLiteralConstAssertions: true,
      typesToIgnore: [],
    }],
    '@typescript-eslint/no-unnecessary-type-constraint': [ERROR],
    '@typescript-eslint/no-unnecessary-type-conversion': [ERROR],

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
    '@typescript-eslint/no-unsafe-member-access': [ERROR, {
      allowOptionalChaining: false,
    }],
    '@typescript-eslint/no-unsafe-return': [ERROR],
    '@typescript-eslint/no-unsafe-type-assertion': [ERROR],
    '@typescript-eslint/no-unsafe-unary-minus': [ERROR],
    'no-unused-private-class-members': [OFF],
    '@typescript-eslint/no-unused-private-class-members': [ERROR],
    '@typescript-eslint/no-useless-default-assignment': [ERROR, {
      allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
    }],
    '@typescript-eslint/no-useless-empty-export': [ERROR],
    '@typescript-eslint/no-wrapper-object-types': [ERROR],
    '@typescript-eslint/non-nullable-type-assertion-style': [ERROR],
    '@typescript-eslint/only-throw-error': [ERROR, {
      allowRethrowing: false,
      allowThrowingAny: false,
      allowThrowingUnknown: false,
    }],
    '@typescript-eslint/parameter-properties': [ERROR, {
      allow: [],
      prefer: 'class-property',
    }],
    '@typescript-eslint/prefer-as-const': [ERROR],

    /**
     * Disabled object VariableDeclarator
     * It decrease readability for things like the following:
     * `const type = node.data[params.handleType === 'source' ? 'outputs' : 'inputs'][handleId].type`
     */
    '@typescript-eslint/prefer-destructuring': [ERROR, {
      /* eslint-disable @typescript-eslint/naming-convention -- AST Nodes */
      // Configured value
      AssignmentExpression: {
        array: true,
        object: true,
      },
      // Configured value
      VariableDeclarator: {
        array: true,
        object: false,
      },
      /* eslint-enable @typescript-eslint/naming-convention */
    }, {
      // Configured value
      enforceForDeclarationWithTypeAnnotation: true,
      // Configured value
      enforceForRenamedProperties: true,
    }],
    '@typescript-eslint/prefer-enum-initializers': [ERROR],
    '@typescript-eslint/prefer-find': [ERROR],
    '@typescript-eslint/prefer-for-of': [ERROR],
    '@typescript-eslint/prefer-function-type': [ERROR],
    '@typescript-eslint/prefer-includes': [ERROR],
    '@typescript-eslint/prefer-literal-enum-member': [ERROR, {
      allowBitwiseExpressions: false,
    }],
    '@typescript-eslint/prefer-namespace-keyword': [ERROR],
    '@typescript-eslint/prefer-nullish-coalescing': [ERROR, {
      allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
      ignoreBooleanCoercion: false,
      ignoreConditionalTests: false,
      ignoreIfStatements: false,
      ignoreMixedLogicalExpressions: false,
      ignorePrimitives: {
        bigint: false,
        boolean: false,
        number: false,
        string: false,
      },
      ignoreTernaryTests: false,
    }],
    '@typescript-eslint/prefer-optional-chain': [ERROR, {
      // Configured value
      allowPotentiallyUnsafeFixesThatModifyTheReturnTypeIKnowWhatImDoing: true,
      checkAny: true,
      checkBigInt: true,
      checkBoolean: true,
      checkNumber: true,
      checkString: true,
      checkUnknown: true,
      requireNullish: false,
    }],
    // TODO: Should use tsconfig's noImplicitReturns instead of this rule as it has better coverage
    'consistent-return': [OFF],
    'no-throw-literal': [OFF],
    'prefer-destructuring': [OFF],
    ...overrideBaseConfigRule('@typescript-eslint/prefer-promise-reject-errors', {
      // Configured value
      allowThrowingAny: false,
      // Configured value
      allowThrowingUnknown: false,
    }),
    '@typescript-eslint/class-methods-use-this': [ERROR, {
      enforceForClassFields: true,
      exceptMethods: [],
      ignoreClassesThatImplementAnInterface: false,
      ignoreOverrideMethods: false,
    }],

    '@typescript-eslint/default-param-last': [ERROR],
    '@typescript-eslint/dot-notation': [ERROR, {
      allowIndexSignaturePropertyAccess: false,
      // Configured value
      allowKeywords: false,
      allowPattern: '',
      allowPrivateClassPropertyAccess: false,
      allowProtectedClassPropertyAccess: false,
    }],
    '@typescript-eslint/init-declarations': [ERROR, 'always'],
    '@typescript-eslint/prefer-readonly': [ERROR, {
      onlyInlineLambdas: false,
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
      checkParameterProperties: true,
      ignoreInferredTypes: false,
      treatMethodsAsReadonly: false,
    }],
    '@typescript-eslint/prefer-reduce-type-parameter': [ERROR],
    // Disabled because it enforces a inconsistant way to use regex depending on flags usage
    '@typescript-eslint/prefer-regexp-exec': [OFF],
    '@typescript-eslint/prefer-return-this-type': [ERROR],
    '@typescript-eslint/prefer-string-starts-ends-with': [ERROR, {
      allowSingleElementEquality: 'never',
    }],
    '@typescript-eslint/promise-function-async': [ERROR, {
      allowAny: true,
      allowedPromiseNames: [],
      checkArrowFunctions: true,
      checkFunctionDeclarations: true,
      checkFunctionExpressions: true,
      checkMethodDeclarations: true,
    }],
    '@typescript-eslint/related-getter-setter-pairs': [ERROR],
    '@typescript-eslint/require-array-sort-compare': [ERROR, {
      ignoreStringArrays: true,
    }],
    '@typescript-eslint/restrict-plus-operands': [ERROR, {
      // Configured value
      allowAny: false,
      // Configured value
      allowBoolean: false,
      // Configured value
      allowNullish: false,
      // Configured value
      allowNumberAndString: false,
      // Configured value
      allowRegExp: false,
      skipCompoundAssignments: false,
    }],
    '@typescript-eslint/restrict-template-expressions': [ERROR, {
      // Configured value
      allowAny: false,
      allowBoolean: true,
      allowNever: false,
      // Configured value
      allowNullish: false,
      allowNumber: true,
      allowRegExp: true,
    }],
    '@typescript-eslint/strict-boolean-expressions': [ERROR, {
      allowAny: false,
      allowNullableBoolean: false,
      allowNullableEnum: false,
      allowNullableNumber: false,
      allowNullableObject: true,
      allowNullableString: false,
      allowNumber: true,
      allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
      allowString: true,
    }],
    '@typescript-eslint/strict-void-return': [ERROR, {
      allowReturnAny: false,
    }],
    '@typescript-eslint/switch-exhaustiveness-check': [ERROR, {
      allowDefaultCaseForExhaustiveSwitch: true,
      // Configured value
      considerDefaultExhaustiveForUnions: true,
      // Configured value
      defaultCaseCommentPattern: '^no default -- [A-Z].+$',
      // Configured value
      requireDefaultForNonUnion: true,
    }],
    '@typescript-eslint/triple-slash-reference': [ERROR, {
      // Configured value
      lib: 'never',
      path: 'never',
      // Configured value
      types: 'never',
    }],
    // Disabled as Typescript is better at inferring types
    '@typescript-eslint/typedef': [OFF, {
      arrayDestructuring: false,
      arrowParameter: false,
      memberVariableDeclaration: false,
      objectDestructuring: false,
      parameter: false,
      propertyDeclaration: false,
      variableDeclaration: false,
      variableDeclarationIgnoreFunction: false,
    }],
    '@typescript-eslint/unbound-method': [ERROR, {
      ignoreStatic: false,
    }],
    '@typescript-eslint/unified-signatures': [ERROR, {
      ignoreDifferentlyNamedParameters: false,
      ignoreOverloadsWithDifferentJSDoc: false,
    }],
    // Extension rules
    'class-methods-use-this': [OFF],
    'default-param-last': [OFF],
    'dot-notation': [OFF],
    'init-declarations': [OFF],
    ...overrideBaseConfigRule('@typescript-eslint/max-params', {
      countVoidThis: false,
    }),
    '@typescript-eslint/no-array-constructor': [ERROR],
    '@typescript-eslint/no-array-delete': [ERROR],
    '@typescript-eslint/no-dupe-class-members': [OFF],
    '@typescript-eslint/no-empty-function': [ERROR, {
      allow: [],
    }],
    '@typescript-eslint/no-implied-eval': [ERROR],
    '@typescript-eslint/no-invalid-this': [OFF, {
      // Configured value
      capIsConstructor: false,
    }],
    '@typescript-eslint/no-loop-func': [ERROR],
    'no-array-constructor': [OFF],
    // Disabled as Typescript compiler already checks this
    'no-dupe-class-members': [OFF],
    // Might be tweaked in the future
    'no-empty-function': [OFF],
    'no-implied-eval': [OFF],
    // Disabled as Typescript compiler already checks this with the `noImplicitThis` option
    'no-invalid-this': [OFF],
    'no-loop-func': [OFF],
    // Might be tweaked for comfort in the future
    ...overrideBaseConfigRule('@typescript-eslint/no-magic-numbers', {
      ignoreEnums: false,
      ignoreNumericLiteralTypes: false,
      ignoreReadonlyClassProperties: false,
      // Configured value
      ignoreTypeIndexes: true,
    }),
    '@typescript-eslint/no-redeclare': [OFF, {
      builtinGlobals: true,
      ignoreDeclarationMerge: true,
    }],
    '@typescript-eslint/no-restricted-imports': [ERROR, {
      paths: [],
      // Configured value
      patterns: [
        {
          allowTypeImports: false,
          group: ['underscore'],
          message: `'underscore' have many issues. Please consider 'radash' if you really need an utility library.`,
        },
        {
          allowTypeImports: false,
          group: ['lodash'],
          message: `'lodash' have many issues. Please consider 'radash' if you really need an utility library.`,
        },
        {
          allowTypeImports: false,
          group: ['moment'],
          message: `'moment' is now considered legacy. Please consider 'date-fns' or 'luxon'.`,
        },
      ],
    }],
    '@typescript-eslint/no-restricted-types': [ERROR, {
      /**
       * Restriction of wrapper object types are handled by the @typescript-eslint/no-wrapper-object-types rule
       * Restriction of `{}` type is handled by the @typescript-eslint/no-empty-object-type rule
       * Restriction of the `Function` wrapper type is handled by the @typescript-eslint/no-unsafe-function-type rule
       * types: {
       *   TypeName: {
       *     message: '',
       *     fixWith: '',
       *     suggest: [''],
       *   },
       * },
       */
    }],
    '@typescript-eslint/no-shadow': [ERROR, {
      /* TODO: We might want to find a way to enforce the use of 'window.property' to use global */
      // Configured value
      allow: [
        'Buffer',
        'process',
        'TextDecoder',
        'TextEncoder',
        'URL',
        'URLSearchParams',
      ],
      // Configured value
      builtinGlobals: true,
      // Configured value
      hoist: 'all',
      // Configured value
      ignoreFunctionTypeParameterNameValueShadow: false,
      ignoreOnInitialization: false,
      // Configured value
      ignoreTypeValueShadow: false,
    }],
    '@typescript-eslint/no-unused-expressions': [ERROR, {
      allowShortCircuit: false,
      allowTaggedTemplates: false,
      allowTernary: false,
      // Configured value
      enforceForJSX: true,
    }],
    // Might be tweaked in the future
    '@typescript-eslint/no-unused-vars': [ERROR, {
      args: 'after-used',
      argsIgnorePattern: '',
      caughtErrors: 'all',
      caughtErrorsIgnorePattern: '',
      destructuredArrayIgnorePattern: '',
      enableAutofixRemoval: {
        // Configured value
        imports: true,
      },
      ignoreClassWithStaticInitBlock: false,
      ignoreRestSiblings: false,
      ignoreUsingDeclarations: false,
      reportUsedIgnorePattern: false,
      vars: 'all',
      varsIgnorePattern: '',
    }],
    '@typescript-eslint/no-use-before-define': [ERROR, {
      // Configured value
      allowNamedExports: true,
      // Configured value
      classes: false,
      // Configured value
      enums: true,
      // Configured value
      functions: false,
      // Configured value
      ignoreTypeReferences: true,
      // Configured value
      typedefs: true,
      variables: true,
    }],
    '@typescript-eslint/no-useless-constructor': [ERROR],
    '@typescript-eslint/require-await': [ERROR],
    '@typescript-eslint/return-await': [ERROR, 'in-try-catch'],
    '@typescript-eslint/use-unknown-in-catch-callback-variable': [ERROR],
    // Disabled as Typescript compiler already checks this
    'no-redeclare': [OFF],
    'no-restricted-imports': [OFF],
    'no-return-await': [OFF],
    'no-shadow': [OFF],
    'no-unused-expressions': [OFF],
    'no-use-before-define': [OFF],
    'no-useless-constructor': [OFF],
    'require-await': [OFF],
  },
} as const satisfies Linter.Config

/* eslint-enable */
