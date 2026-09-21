import { environmentBrowserConfig } from './configs/environment-browser.ts'
import { environmentNodeConfig } from './configs/environment-node.ts'
import { environmentNodeSourceTypeCommonJsConfig } from './configs/environment-node-source-type-commonjs.ts'
import { languageCssConfig } from './configs/language-css.ts'
import { languageJavascriptConfig } from './configs/language-javascript.ts'
import { languageJavascriptLayoutConfig } from './configs/language-javascript-layout.ts'
import { languageJson5Config } from './configs/language-json5.ts'
import { languageJson5LayoutConfig } from './configs/language-json5-layout.ts'
import { languageJsonConfig } from './configs/language-json.ts'
import { languageJsoncConfig } from './configs/language-jsonc.ts'
import { languageJsonLayoutConfig } from './configs/language-json-layout.ts'
import { languageMarkdownConfig } from './configs/language-markdown.ts'
import { libraryAwsConfig } from './configs/library-aws.ts'
import { libraryEslintPluginConfig } from './configs/library-eslint-plugin.ts'
import { libraryI18nextConfig } from './configs/library-i18next.ts'
import { libraryJestConfig } from './configs/library-jest.ts'
import { libraryJestSyntaxTypescriptConfig } from './configs/library-jest&syntax-typescript.ts'
import { libraryReactConfig } from './configs/library-react.ts'
import { libraryReactEnvironmentBrowserConfig } from './configs/library-react&environment-browser.ts'
import { libraryReactLibraryTanstackQueryConfig } from './configs/library-react&library-tanstack-query.ts'
import { libraryReactSyntaxJsxConfig } from './configs/library-react&syntax-jsx.ts'
import { libraryReactNativeSyntaxJsxConfig } from './configs/library-react-native&syntax-jsx.ts'
import { libraryTanstackQueryConfig } from './configs/library-tanstack-query.ts'
import { libraryTanstackQuerySyntaxTypescriptConfig } from './configs/library-tanstack-query&syntax-typescript.ts'
import { projectEslintPluginConfig } from './configs/projects/eslint-plugin.ts'
import { projectReactConfig } from './configs/projects/react.ts'
import { projectReactNativeConfig } from './configs/projects/react-native.ts'
import { sourceTypeCommonJsConfig } from './configs/source-type-commonjs.ts'
import { syntaxJsxConfig } from './configs/syntax-jsx.ts'
import { syntaxTypescriptConfig } from './configs/syntax-typescript.ts'
import { syntaxTypescriptEnvironmentNodeConfig } from './configs/syntax-typescript&environment-node.ts'
import { syntaxTypescriptLibraryReactConfig } from './configs/syntax-typescript&library-react.ts'

export const configs = {
  'environment-browser': environmentBrowserConfig,
  'environment-node': environmentNodeConfig,
  'environment-node-source-type-commonjs': environmentNodeSourceTypeCommonJsConfig,
  'language-css': languageCssConfig,
  'language-javascript': languageJavascriptConfig,
  'language-javascript-layout': languageJavascriptLayoutConfig,
  'language-json': languageJsonConfig,
  'language-json5': languageJson5Config,
  'language-json5-layout': languageJson5LayoutConfig,
  'language-json-layout': languageJsonLayoutConfig,
  'language-jsonc': languageJsoncConfig,
  'language-markdown': languageMarkdownConfig,
  'library-aws': libraryAwsConfig,
  'library-eslint-plugin': libraryEslintPluginConfig,
  'library-i18next': libraryI18nextConfig,
  'library-jest': libraryJestConfig,
  'library-jest&syntax-typescript': libraryJestSyntaxTypescriptConfig,
  'library-react': libraryReactConfig,
  'library-react&environment-browser': libraryReactEnvironmentBrowserConfig,
  'library-react&library-tanstack-query': libraryReactLibraryTanstackQueryConfig,
  'library-react&syntax-jsx': libraryReactSyntaxJsxConfig,
  'library-react-native&syntax-jsx': libraryReactNativeSyntaxJsxConfig,
  'library-tanstack-query': libraryTanstackQueryConfig,
  'library-tanstack-query&syntax-typescript': libraryTanstackQuerySyntaxTypescriptConfig,
  'project-eslint-plugin': projectEslintPluginConfig,
  'project-react': projectReactConfig,
  'project-react-native': projectReactNativeConfig,
  'source-type-commonjs': sourceTypeCommonJsConfig,
  'syntax-jsx': syntaxJsxConfig,
  'syntax-typescript': syntaxTypescriptConfig,
  'syntax-typescript&environment-node': syntaxTypescriptEnvironmentNodeConfig,
  'syntax-typescript&library-react': syntaxTypescriptLibraryReactConfig,
}
