import { environmentNodeConfig } from './configs/environment-node'
import { environmentNodeSourceTypeCommonJsConfig } from './configs/environment-node-source-type-commonjs'
import { libraryJestConfig } from './configs/library-jest'
import { libraryJestSyntaxTypescriptConfig } from './configs/library-jest&syntax-typescript'
import { libraryReactConfig } from './configs/library-react'
import { libraryReactNativeSyntaxJsxConfig } from './configs/library-react-native&syntax-jsx'
import { libraryReactSyntaxJsxConfig } from './configs/library-react&syntax-jsx'
import { projectEslintPluginConfig } from './configs/projects/eslint-plugin'
import { projectReactConfig } from './configs/projects/react'
import { projectReactNativeConfig } from './configs/projects/react-native'
import { sourceTypeCommonJsConfig } from './configs/source-type-commonjs'
import { syntaxJsxConfig } from './configs/syntax-jsx'
import { syntaxTypescriptConfig } from './configs/syntax-typescript'
import { vanillaConfig } from './configs/vanilla'

export default {
  'environment-node': environmentNodeConfig,
  'environment-node-source-type-commonjs': environmentNodeSourceTypeCommonJsConfig,
  'library-jest': libraryJestConfig,
  'library-jest&syntax-typescript': libraryJestSyntaxTypescriptConfig,
  'library-react': libraryReactConfig,
  'library-react-native&syntax-jsx': libraryReactNativeSyntaxJsxConfig,
  'library-react&syntax-jsx': libraryReactSyntaxJsxConfig,
  'project-eslint-plugin': projectEslintPluginConfig,
  'project-react': projectReactConfig,
  'project-react-native': projectReactNativeConfig,
  'source-type-commonjs': sourceTypeCommonJsConfig,
  'syntax-jsx': syntaxJsxConfig,
  'syntax-typescript': syntaxTypescriptConfig,
  'vanilla': vanillaConfig,
}
