import { environmentBrowserConfig } from './configs/environment-browser.ts'
import { environmentNodeConfig } from './configs/environment-node.ts'
import { environmentNodeSourceTypeCommonJsConfig } from './configs/environment-node-source-type-commonjs.ts'
import { libraryAwsConfig } from './configs/library-aws.ts'
import { libraryEslintPluginConfig } from './configs/library-eslint-plugin.ts'
import { libraryI18nextConfig } from './configs/library-i18next.ts'
import { libraryJestConfig } from './configs/library-jest.ts'
import { libraryJestSyntaxTypescriptConfig } from './configs/library-jest&syntax-typescript.ts'
import { libraryReactConfig } from './configs/library-react.ts'
import { libraryReactEnvironmentBrowserConfig } from './configs/library-react&environment-browser.ts'
import { libraryReactSyntaxJsxConfig } from './configs/library-react&syntax-jsx.ts'
import { libraryReactNativeSyntaxJsxConfig } from './configs/library-react-native&syntax-jsx.ts'
import { projectEslintPluginConfig } from './configs/projects/eslint-plugin.ts'
import { projectReactConfig } from './configs/projects/react.ts'
import { projectReactNativeConfig } from './configs/projects/react-native.ts'
import { sourceTypeCommonJsConfig } from './configs/source-type-commonjs.ts'
import { syntaxJsxConfig } from './configs/syntax-jsx.ts'
import { syntaxTypescriptConfig } from './configs/syntax-typescript.ts'
import { syntaxTypescriptEnvironmentNodeConfig } from './configs/syntax-typescript&environment-node.ts'
import { syntaxTypescriptLibraryReactConfig } from './configs/syntax-typescript&library-react.ts'
import { vanillaConfig } from './configs/vanilla.ts'
import { vanillaLayoutConfig } from './configs/vanilla-layout.ts'

export const configs = {
  'environment-browser': environmentBrowserConfig,
  'environment-node': environmentNodeConfig,
  'environment-node-source-type-commonjs': environmentNodeSourceTypeCommonJsConfig,
  'library-aws': libraryAwsConfig,
  'library-eslint-plugin': libraryEslintPluginConfig,
  'library-i18next': libraryI18nextConfig,
  'library-jest': libraryJestConfig,
  'library-jest&syntax-typescript': libraryJestSyntaxTypescriptConfig,
  'library-react': libraryReactConfig,
  'library-react&environment-browser': libraryReactEnvironmentBrowserConfig,
  'library-react&syntax-jsx': libraryReactSyntaxJsxConfig,
  'library-react-native&syntax-jsx': libraryReactNativeSyntaxJsxConfig,
  'project-eslint-plugin': projectEslintPluginConfig,
  'project-react': projectReactConfig,
  'project-react-native': projectReactNativeConfig,
  'source-type-commonjs': sourceTypeCommonJsConfig,
  'syntax-jsx': syntaxJsxConfig,
  'syntax-typescript': syntaxTypescriptConfig,
  'syntax-typescript&environment-node': syntaxTypescriptEnvironmentNodeConfig,
  'syntax-typescript&library-react': syntaxTypescriptLibraryReactConfig,
  'vanilla': vanillaConfig,
  'vanilla-layout': vanillaLayoutConfig,
}
