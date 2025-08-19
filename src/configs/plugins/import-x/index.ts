import process from 'node:process'

import importPlugin from 'eslint-plugin-import-x'

import { ERROR, OFF } from '../../../constants.ts'
import { javascriptConfig } from './javascript.ts'
import { typescriptConfig } from './typescript.ts'

import type { ESLint, Linter } from 'eslint'
import { mergeConfigs } from '../../../configMerger.ts'
import { javascriptLayoutConfig } from './javascript-layout.ts'
import { browserConfig } from './browser.ts'
import { nodeConfig } from './node.ts'
import { commonJsConfig } from './commonjs.ts'


const { createNodeResolver } = importPlugin

export {
  importVanillaConfig,
  metadata,
}

const metadata = {
  environment: 'any',
  language: 'javascript',
  sourceType: 'any',
  withJsx: false,
}

language.javascript.environment.any.sourceType.any?.withJsx.withLayout.configuration

type Export = {
  javascript: Language;
  typescript: Language;
}

type Language = WithConfig<WithLayout<{
  environment?: {
    any?: Environment;
    browser?: Environment;
    node?: Environment;
    worker?: Environment;
  };
}>>

type Environment = WithConfig<WithLayout<{
  sourceType?: {
    any?: SourceType;
    commonjs?: SourceType;
    module?: SourceType;
  };
}>>

type SourceType = WithConfig<WithLayout<{
  withJsx?: WithConfig<object>;
}>>

type WithConfig<Type extends object> = Type & {
  config?: Linter.Config;
}

type WithLayout<Type extends object> = Type & {
  withLayout?: Linter.Config;
}

const language: Export = {
  javascript: {
    config: javascriptConfig,
    withLayout: mergeConfigs(javascriptConfig, javascriptLayoutConfig),
    environment: {
      any: {
        config: mergeConfigs(javascriptConfig),
        withLayout: mergeConfigs(javascriptConfig, javascriptLayoutConfig),
        sourceType: {
          any: {
            config: mergeConfigs(javascriptConfig),
            withLayout: mergeConfigs(javascriptConfig, javascriptLayoutConfig),
          },
          commonjs: {
            config: mergeConfigs(javascriptConfig, commonJsConfig),
            withLayout: mergeConfigs(javascriptConfig, javascriptLayoutConfig, commonJsConfig),
          },
          module: {
            config: mergeConfigs(javascriptConfig, moduleConfig),
            withLayout: mergeConfigs(javascriptConfig, javascriptLayoutConfig, moduleConfig),
          },
        },
      },
      browser: {
        config: mergeConfigs(javascriptConfig, browserConfig),
        withLayout: mergeConfigs(javascriptConfig, javascriptLayoutConfig, browserConfig),
        sourceType: {
          commonjs: {
            config: mergeConfigs(javascriptConfig, browserConfig, commonJsConfig),
            withLayout: mergeConfigs(javascriptConfig, javascriptLayoutConfig, browserConfig, commonJsConfig),
          },
        },
      },
      node: {
        config: mergeConfigs(javascriptConfig, nodeConfig),
        withLayout: mergeConfigs(javascriptConfig, javascriptLayoutConfig, nodeConfig),
        sourceType: {
          commonjs: {
            config: mergeConfigs(javascriptConfig, nodeConfig, commonJsConfig),
            withLayout: mergeConfigs(javascriptConfig, javascriptLayoutConfig, nodeConfig, commonJsConfig),
          },
        },
      },
    },
  },
  typescript: {
    config: mergeConfigs(javascriptConfig, typescriptConfig),
    withLayout: mergeConfigs(javascriptConfig, typescriptConfig, javascriptLayoutConfig),
    environment: {
      browser: {
        config: mergeConfigs(javascriptConfig, typescriptConfig, browserConfig),
        withLayout: mergeConfigs(javascriptConfig, typescriptConfig, javascriptLayoutConfig, browserConfig),
        sourceType: {
          commonjs: {
            config: mergeConfigs(javascriptConfig, typescriptConfig, browserConfig, commonJsConfig),
            withLayout: mergeConfigs(javascriptConfig, typescriptConfig, javascriptLayoutConfig, browserConfig, commonJsConfig),
          },
        },
      },
      node: {
        config: mergeConfigs(javascriptConfig, typescriptConfig, nodeConfig),
        withLayout: mergeConfigs(javascriptConfig, typescriptConfig, javascriptLayoutConfig, nodeConfig),
        sourceType: {
          commonjs: {
            config: mergeConfigs(javascriptConfig, typescriptConfig, nodeConfig, commonJsConfig),
            withLayout: mergeConfigs(javascriptConfig, typescriptConfig, javascriptLayoutConfig, nodeConfig, commonJsConfig),
          },
        },
      },
    },
  },
}

type ConfigType = {
  javascript: Linter.Config;
  javascriptLayout: Linter.Config;
  typescript: Linter.Config;
  typescriptLayout: Linter.Config;
  browser: Linter.Config;
  browserLayout: Linter.Config;
  node: Linter.Config;
  nodeLayout: Linter.Config;
  commonJs: Linter.Config;
  commonJsLayout: Linter.Config;
}

const configPathLeaf = {
  config: true,
  withLayout: true,
}

const configPathWithJsx = {
  withJsx: configPathLeaf,
}

const configPathSourceType = {
  any: { ...configPathLeaf, ...configPathWithJsx },
  commonjs: { ...configPathLeaf, ...configPathWithJsx },
  module: { ...configPathLeaf, ...configPathWithJsx },
}

const configPathEnvironment = {
  any: configPathSourceType,
  browser: configPathSourceType,
  node: configPathSourceType,
  worker: configPathSourceType,
}

const configPaths = {
  javascript: {
    environment: configPathEnvironment,
  },
  typescript: {
    environment: configPathEnvironment,
  },
  json: configPathLeaf,
  jsonc: configPathLeaf,
  json5: configPathLeaf,
  yaml: configPathLeaf,
  markdown: configPathLeaf,
  css: configPathLeaf,
}

function buildConfigPaths(configTypes: ConfigType) {
  Object.entries(configPaths).forEach(([key, value]) => {
    if (configTypes[key]) {}
  })
}

const configurationDescriptors = [
  {
    configuration: javascriptConfig,
    languages: ['javascript', 'typescript'],
    environment: 'any',
    sourceType: 'any',
    withJsx: false,
    isLayout: false,
  },
  {
    configuration: browserConfig,
    languages: ['javascript', 'typescript'],
    environment: 'browser',
    sourceType: 'any',
    withJsx: false,
    isLayout: false,
  },
  {
    configuration: nodeConfig,
    languages: ['javascript', 'typescript'],
    environment: 'node',
    sourceType: 'any',
    withJsx: false,
    isLayout: false,
  },
  {
    configuration: commonJsConfig,
    languages: ['javascript', 'typescript'],
    environment: 'any',
    sourceType: 'commonjs',
    withJsx: false,
    isLayout: false,
  },
  {
    configuration: javascriptLayoutConfig,
    languages: ['javascript', 'typescript'],
    environment: 'any',
    sourceType: 'any',
    withJsx: false,
    isLayout: true,
  },
  {
    configuration: typescriptConfig,
    languages: ['typescript'],
    environment: 'any',
    sourceType: 'any',
    withJsx: false,
    isLayout: false,
  },
]

// language.javascript.environment.any.sourceType.any?.withJsx.withLayout.configuration
// language.javascript.environment.any.sourceType.any?.withLayout.configuration

const configurationPaths = {}

for (const configurationDescriptor of configurationDescriptors) {
  const { configuration, languages, environment, sourceType, withJsx, isLayout } = configurationDescriptor

  const leaf = {
    [isLayout ? 'withLayout' : 'configuration']: configuration,
  }

  const sourceType = {
    sourceType: {
      [sourceType]: leaf,
    },
  }

  const environment = {
    environment: {
      [environment]: sourceType,
    },
  }

  for (const language of languages) {
    const priority = [
      environment === 'any',
      sourceType === 'any',
      !withJsx,
      !isLayout,
    ].filter(Boolean).length

    const isBaseConfiguration = environment === 'any' && sourceType === 'any' && !withJsx && !isLayout
    const existingConfiguration = configurationPaths[language]?.environment?.[environment]?.sourceType?.[sourceType]?.[isLayout ? 'withLayout' : 'configuration']

    if (existingConfiguration) {
      const finalConfiguration = mergeConfigs(
        isBaseConfiguration ? configuration : existingConfiguration,
        isBaseConfiguration ? existingConfiguration : configuration,
      )

      configurationPaths[language] =
    } else {
      configurationPaths[language] = environment
    }
  }
}
