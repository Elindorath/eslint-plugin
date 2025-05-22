import { environmentNodeConfig } from './configs/environment-node.ts'
import { environmentNodeSourceTypeCommonJsConfig } from './configs/environment-node-source-type-commonjs.ts'
import { libraryJestConfig } from './configs/library-jest.ts'
import { libraryJestSyntaxTypescriptConfig } from './configs/library-jest&syntax-typescript.ts'
import { libraryReactConfig } from './configs/library-react.ts'
import { libraryReactSyntaxJsxConfig } from './configs/library-react&syntax-jsx.ts'
import { libraryReactNativeSyntaxJsxConfig } from './configs/library-react-native&syntax-jsx.ts'
import { projectEslintPluginConfig } from './configs/projects/eslint-plugin.ts'
import { projectReactConfig } from './configs/projects/react.ts'
import { projectReactNativeConfig } from './configs/projects/react-native.ts'
import { sourceTypeCommonJsConfig } from './configs/source-type-commonjs.ts'
import { syntaxJsxConfig } from './configs/syntax-jsx.ts'
import { syntaxTypescriptConfig } from './configs/syntax-typescript.ts'
import { vanillaConfig } from './configs/vanilla.ts'

export const configs = {
  'environment-node': environmentNodeConfig,
  'environment-node-source-type-commonjs': environmentNodeSourceTypeCommonJsConfig,
  'library-jest': libraryJestConfig,
  'library-jest&syntax-typescript': libraryJestSyntaxTypescriptConfig,
  'library-react': libraryReactConfig,
  'library-react&syntax-jsx': libraryReactSyntaxJsxConfig,
  'library-react-native&syntax-jsx': libraryReactNativeSyntaxJsxConfig,
  'project-eslint-plugin': projectEslintPluginConfig,
  'project-react': projectReactConfig,
  'project-react-native': projectReactNativeConfig,
  'source-type-commonjs': sourceTypeCommonJsConfig,
  'syntax-jsx': syntaxJsxConfig,
  'syntax-typescript': syntaxTypescriptConfig,
  'vanilla': vanillaConfig,
}
