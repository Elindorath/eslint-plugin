import type { configs } from '../../src/configs.ts'
import type { defineProject } from '../../src/defineProject.ts'

import type { Linter } from 'eslint'
import type { Except } from 'type-fest'


type PluginExports = {
  configs: typeof configs;
  defineProject: typeof defineProject;
}

type RuntimeScenario = {
  // Paths are relative to the fixture directory
  files: { [filePath: string]: string; };
  getConfig: (pluginExports: PluginExports) => ScenarioConfig[];
}

// Exported configurations write rule entries as plain arrays
type ScenarioConfig = Except<Linter.Config, 'rules'> & { rules?: { [ruleId: string]: unknown; }; }

const JAVASCRIPT = `import { readFile } from 'node:fs/promises'

export async function readJson(filePath) {
  const content = await readFile(filePath, 'utf8')

  return JSON.parse(content)
}
`

const COMMONJS = `const { readFile } = require('node:fs/promises')

async function readJson(filePath) {
  const content = await readFile(filePath, 'utf8')

  return JSON.parse(content)
}

module.exports = { readJson }
`

const TYPESCRIPT = `type User = {
  id: number;
  name: string;
}

export function getUserName(user: User): string {
  return user.name
}
`

/* eslint-disable unicorn/no-incorrect-template-string-interpolation -- JSX expressions, not interpolations */
const JSX = `import { useState } from 'react'

export function Counter() {
  const [count, setCount] = useState(0)

  return (
    <button type="button" onClick={() => { setCount(count + 1) }}>
      {count}
    </button>
  )
}
`

const TSX = `import { useState } from 'react'

type CounterProps = {
  initialCount: number;
}

export function Counter({ initialCount }: CounterProps) {
  const [count, setCount] = useState(initialCount)

  return (
    <button type="button" onClick={() => { setCount(count + 1) }}>
      {count}
    </button>
  )
}
`

/* eslint-enable unicorn/no-incorrect-template-string-interpolation */

const JEST = `import { getUserName } from './example'

describe('getUserName', () => {
  let user

  beforeEach(() => {
    user = { id: 1, name: 'Ada' }
  })

  afterEach(() => {
    user = undefined
  })

  it('returns the name', () => {
    expect(getUserName(user)).toBe('Ada')
  })
})
`

const STYLESHEET = `.button {
  color: red;
  padding: 1rem;
}
`

const JSON_DOCUMENT = `{
  "name": "example",
  "version": "1.0.0"
}
`

const JSONC = `{
  // A comment
  "name": "example"
}
`

const JSON5 = `{
  // A comment
  name: 'example',
}
`

const MARKDOWN = `# Example

Some text.

\`\`\`ts
const answer = 42
\`\`\`
`

// `eslint-plugin/require-meta-docs-url` reads `repository` when the configuration is loaded
const PACKAGE_JSON = `{
  "name": "example",
  "version": "1.0.0",
  "repository": "github:example/example",
  "type": "module"
}
`

const TSCONFIG = JSON.stringify({
  compilerOptions: {
    allowJs: true,
    jsx: 'preserve',
    module: 'Preserve',
    strict: true,
    target: 'ESNext',
  },
})

/**
 * Together, these scenarios enable every rule an exported configuration enables. Files sharing a
 * directory need distinct basenames, as TypeScript keeps only one of `example.ts` and `example.tsx`.
 */
const runtimeScenarios: { [scenarioName: string]: RuntimeScenario; } = {
  'commonjs': {
    files: { 'commonjs/example.cjs': COMMONJS },
    getConfig: (pluginExports) => {
      return pluginExports.defineProject({ environment: ['node'], files: ['**/*.cjs'], sourceType: 'commonjs' })
    },
  },
  'css': {
    files: { 'css/example.css': STYLESHEET },
    getConfig: (pluginExports) => {
      return pluginExports.defineProject({ files: ['**/*.css'], language: 'css' })
    },
  },
  'javascript': {
    files: { 'javascript/example.js': JAVASCRIPT },
    getConfig: (pluginExports) => {
      return pluginExports.defineProject({ files: ['**/*.js'] })
    },
  },
  'json': {
    files: { 'json/example.json': JSON_DOCUMENT },
    getConfig: (pluginExports) => {
      return pluginExports.defineProject({ files: ['**/*.json'], language: 'json', layout: true })
    },
  },
  'json5': {
    files: { 'json5/example.json5': JSON5 },
    getConfig: (pluginExports) => {
      return pluginExports.defineProject({ files: ['**/*.json5'], language: 'json5', layout: true })
    },
  },
  'jsonc': {
    files: { 'jsonc/example.jsonc': JSONC },
    getConfig: (pluginExports) => {
      return pluginExports.defineProject({ files: ['**/*.jsonc'], language: 'jsonc' })
    },
  },
  'libraries': {
    files: {
      'libraries/Counter.tsx': TSX,
      'libraries/example.test.ts': JEST,
      'libraries/example.ts': TYPESCRIPT,
    },
    getConfig: (pluginExports) => {
      return pluginExports.defineProject({
        environment: ['browser', 'node'],
        files: ['**/*.ts', '**/*.tsx'],
        layout: true,
        library: ['aws', 'eslint-plugin', 'i18next', 'jest', 'react', 'tanstack-query'],
        syntax: ['typescript', 'jsx'],
      })
    },
  },
  'markdown': {
    files: { 'markdown/README.md': MARKDOWN },
    getConfig: (pluginExports) => {
      return pluginExports.defineProject({ files: ['**/*.md'], language: 'markdown' })
    },
  },
  'project-eslint-plugin': {
    files: {
      'project-eslint-plugin/package.json': PACKAGE_JSON,
      'project-eslint-plugin/README.md': MARKDOWN,
      'project-eslint-plugin/scripts/build.ts': TYPESCRIPT,
      'project-eslint-plugin/src/example.ts': TYPESCRIPT,
    },
    getConfig: (pluginExports) => {
      return pluginExports.configs['project-eslint-plugin']
    },
  },
  'project-react': {
    files: {
      'project-react/src/Counter.tsx': TSX,
      'project-react/src/example.test.ts': JEST,
      'project-react/webpack.config.js': COMMONJS,
    },
    getConfig: (pluginExports) => {
      return pluginExports.configs['project-react']
    },
  },
  'project-react-native': {
    files: {
      'project-react-native/src/Counter.tsx': TSX,
      'project-react-native/src/example.test.ts': JEST,
    },
    getConfig: (pluginExports) => {
      return pluginExports.configs['project-react-native']
    },
  },
  'react-javascript': {
    files: { 'react-javascript/Counter.jsx': JSX },
    getConfig: (pluginExports) => {
      return pluginExports.defineProject({
        environment: ['browser'],
        files: ['**/*.jsx'],
        library: ['react'],
        syntax: ['jsx'],
      })
    },
  },
}

// Written at the root of the fixture directory, which stands for a consumer project
const projectFiles = {
  'package.json': PACKAGE_JSON,
  'tsconfig.json': TSCONFIG,
}

export { projectFiles, runtimeScenarios }

export type { PluginExports, RuntimeScenario }
