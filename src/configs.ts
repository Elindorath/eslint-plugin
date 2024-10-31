import { environmentNodeSourceTypeCommonJsConfig } from './configs/environment-node-source-type-commonjs'
import { environmentNodeConfig } from './configs/environment-node'
import { libraryJestConfig } from './configs/library-jest'
import { libraryJestSyntaxTypescriptConfig } from './configs/library-jest&syntax-typescript'
import { libraryReactNativeSyntaxJsxConfig } from './configs/library-react-native&syntax-jsx'
import { libraryReactConfig } from './configs/library-react'
import { libraryReactSyntaxJsxConfig } from './configs/library-react&syntax-jsx'
import { sourceTypeCommonJsConfig } from './configs/source-type-commonjs'
import { syntaxJsxConfig } from './configs/syntax-jsx'
import { syntaxTypescriptConfig } from './configs/syntax-typescript'
import { vanillaConfig } from './configs/vanilla'
import { projectEslintPluginConfig } from './configs/projects/eslint-plugin'
import { projectReactNativeConfig } from './configs/projects/react-native'
import { projectReactConfig } from './configs/projects/react'

export default {
  'environment-node-source-type-commonjs': environmentNodeSourceTypeCommonJsConfig,
  'environment-node': environmentNodeConfig,
  'library-jest': libraryJestConfig,
  'library-jest&syntax-typescript': libraryJestSyntaxTypescriptConfig,
  'library-react-native&syntax-jsx': libraryReactNativeSyntaxJsxConfig,
  'library-react': libraryReactConfig,
  'library-react&syntax-jsx': libraryReactSyntaxJsxConfig,
  'source-type-commonjs': sourceTypeCommonJsConfig,
  'syntax-jsx': syntaxJsxConfig,
  'syntax-typescript': syntaxTypescriptConfig,
  'vanilla': vanillaConfig,
  'project-eslint-plugin': projectEslintPluginConfig,
  'project-react-native': projectReactNativeConfig,
  'project-react': projectReactConfig,
}
