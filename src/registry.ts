import { environmentBrowserConfig } from './configs/environment-browser.ts'
import { environmentNodeConfig } from './configs/environment-node.ts'
import { environmentNodeSourceTypeCommonJsConfig } from './configs/environment-node-source-type-commonjs.ts'
import { languageCssConfig } from './configs/language-css.ts'
import { languageJson5Config } from './configs/language-json5.ts'
import { languageJson5LayoutConfig } from './configs/language-json5-layout.ts'
import { languageJsonConfig } from './configs/language-json.ts'
import { languageJsoncConfig } from './configs/language-jsonc.ts'
import { languageJsonLayoutConfig } from './configs/language-json-layout.ts'
import { libraryAwsConfig } from './configs/library-aws.ts'
import { libraryEslintPluginConfig } from './configs/library-eslint-plugin.ts'
import { libraryI18nextConfig } from './configs/library-i18next.ts'
import { libraryJestConfig } from './configs/library-jest.ts'
import { libraryJestSyntaxTypescriptConfig } from './configs/library-jest&syntax-typescript.ts'
import { libraryReactConfig } from './configs/library-react.ts'
import { libraryReactEnvironmentBrowserConfig } from './configs/library-react&environment-browser.ts'
import { libraryReactNativeEnvironmentNativeConfig } from './configs/library-react-native&environment-native.ts'
import { libraryReactNativeSyntaxJsxConfig } from './configs/library-react-native&syntax-jsx.ts'
import { sourceTypeCommonJsConfig } from './configs/source-type-commonjs.ts'
import { syntaxJsxConfig } from './configs/syntax-jsx.ts'
import { syntaxTypescriptConfig } from './configs/syntax-typescript.ts'
import { syntaxTypescriptEnvironmentNodeConfig } from './configs/syntax-typescript&environment-node.ts'
import { syntaxTypescriptLibraryReactConfig } from './configs/syntax-typescript&library-react.ts'
import { vanillaConfig } from './configs/vanilla.ts'
import { vanillaLayoutConfig } from './configs/vanilla-layout.ts'

import type { FixedLinterConfig } from './types.ts'


type Axes = {
  environment: Environment[];
  language: Language;
  library: Library[];
  sourceType: SourceType;
  syntax: Syntax[];
}

type Environment = 'browser' | 'native' | 'node'

type Language = 'css' | 'javascript' | 'json5' | 'json' | 'jsonc'

type Library = 'aws' | 'eslint-plugin' | 'i18next' | 'jest' | 'react' | 'react-native'

/**
 * An entry applies when every value it names is active. `terms` holds the axis values a
 * configuration is written for: none for `vanilla`, one for a main effect, several for a
 * configuration that only makes sense where its axes meet.
 */
type RegistryEntry = {
  config: FixedLinterConfig;
  layout: boolean;
  terms: RegistryTerms;
}

type RegistryTerms = {
  environment?: Environment[];
  language?: Language[];
  library?: Library[];
  sourceType?: SourceType[];
  syntax?: Syntax[];
}

type SourceType = 'commonjs' | 'module'

type Syntax = 'jsx' | 'typescript'

const REACT_NATIVE = 'react-native'

/*
 * Ordered from the least to the most specific, so that a configuration written for several axes
 * has the last word over the ones written for each of them
 */
const REGISTRY: RegistryEntry[] = [
  { config: vanillaConfig, layout: false, terms: { language: ['javascript'] } },
  { config: vanillaLayoutConfig, layout: true, terms: { language: ['javascript'] } },
  { config: languageCssConfig, layout: false, terms: { language: ['css'] } },
  { config: languageJsonConfig, layout: false, terms: { language: ['json'] } },
  { config: languageJsonLayoutConfig, layout: true, terms: { language: ['json'] } },
  { config: languageJsoncConfig, layout: false, terms: { language: ['jsonc'] } },
  { config: languageJson5Config, layout: false, terms: { language: ['json5'] } },
  { config: languageJson5LayoutConfig, layout: true, terms: { language: ['json5'] } },
  { config: sourceTypeCommonJsConfig, layout: false, terms: { sourceType: ['commonjs'] } },
  { config: syntaxTypescriptConfig, layout: false, terms: { syntax: ['typescript'] } },
  { config: syntaxJsxConfig, layout: false, terms: { syntax: ['jsx'] } },
  { config: environmentBrowserConfig, layout: false, terms: { environment: ['browser'] } },
  { config: environmentNodeConfig, layout: false, terms: { environment: ['node'] } },
  { config: libraryAwsConfig, layout: false, terms: { library: ['aws'] } },
  { config: libraryEslintPluginConfig, layout: false, terms: { library: ['eslint-plugin'] } },
  { config: libraryI18nextConfig, layout: false, terms: { library: ['i18next'] } },
  { config: libraryJestConfig, layout: false, terms: { library: ['jest'] } },
  { config: libraryReactConfig, layout: false, terms: { library: ['react'] } },
  {
    config: environmentNodeSourceTypeCommonJsConfig,
    layout: false,
    terms: { environment: ['node'], sourceType: ['commonjs'] },
  },
  {
    config: syntaxTypescriptEnvironmentNodeConfig,
    layout: false,
    terms: { environment: ['node'], syntax: ['typescript'] },
  },
  {
    config: libraryJestSyntaxTypescriptConfig,
    layout: false,
    terms: { library: ['jest'], syntax: ['typescript'] },
  },
  {
    config: libraryReactEnvironmentBrowserConfig,
    layout: false,
    terms: { environment: ['browser'], library: ['react'] },
  },
  {
    config: syntaxTypescriptLibraryReactConfig,
    layout: false,
    terms: { library: ['react'], syntax: ['typescript'] },
  },
  {
    config: libraryReactNativeSyntaxJsxConfig,
    layout: false,
    terms: { library: [REACT_NATIVE], syntax: ['jsx'] },
  },
  {
    config: libraryReactNativeEnvironmentNativeConfig,
    layout: false,
    terms: { environment: ['native'], library: [REACT_NATIVE] },
  },
]

/** Selects every configuration whose axis values are all active, in registry order. */
export function selectConfigs(axes: Axes, hasLayout: boolean): FixedLinterConfig[] {
  return REGISTRY
    .filter((entry) => {
      return (!entry.layout || hasLayout) && isEntryActive(entry.terms, axes)
    })
    .map((entry) => {
      return entry.config
    })
}

function isEntryActive(terms: RegistryTerms, axes: Axes) {
  const isLanguageActive = terms.language?.includes(axes.language) ?? true
  const isSourceTypeActive = terms.sourceType?.includes(axes.sourceType) ?? true

  if (!isLanguageActive || !isSourceTypeActive) {
    return false
  }

  return isSetActive(terms.syntax, axes.syntax)
    && isSetActive(terms.environment, axes.environment)
    && isSetActive(terms.library, axes.library)
}

function isSetActive<Value>(termValues: Value[] | undefined, activeValues: Value[]) {
  return termValues?.every((termValue) => {
    return activeValues.includes(termValue)
  }) ?? true
}

export type { Axes, Environment, Language, Library, SourceType, Syntax }
