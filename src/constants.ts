const OFF = 'off'
const WARN = 'warn'
const ERROR = 'error'

const FILES = {
  CONFIG: ['**/*.config.js'],
  JAVASCRIPT: ['**/*.js', '**/*.cjs', '**/*.mjs', '**/*.jsx'],
  JSON: ['**/*.json'],
  JSON5: ['**/*.json5'],
  JSONC: ['**/*.jsonc'],
  MARKDOWN: ['**/*.md'],
  TYPESCRIPT: ['**/*.ts', '**/*.cts', '**/*.mts', '**/*.tsx'],
  YAML: ['**/*.yaml', '**/*.yml'],
} as const

export {
  ERROR,
  FILES,
  OFF,
  WARN,
}
