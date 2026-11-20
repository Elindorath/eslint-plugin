import markdownPlugin from '@eslint/markdown'

import { meta as pluginMeta } from '../meta.ts'

import type { Linter } from 'eslint'


type MarkdownNode = {
  type: string;
  children?: MarkdownNode[] | undefined;
  lang?: string | null | undefined;
  position?: MarkdownPosition | undefined;
  value?: string | undefined;
}

type MarkdownPosition = {
  start: {
    offset?: number | undefined;
  };
}

const codeBlocksProcessor = markdownPlugin.processors.markdown
const HTML_COMMENT_START = '<!--'
const HTML_COMMENT_END = '-->'
const DIRECTIVE_PATTERN = /^(?:eslint\b|global\s)/u

/**
 * Hands the whole file over as a string block, which ESLint lints with the `.md` configuration,
 * next to the fenced code blocks extracted by `@eslint/markdown`.
 */
export const markdownProcessor: Linter.Processor = {
  // eslint-disable-next-line canonical/no-reassign-imports -- The processor `meta` ESLint reads, not the imported one
  meta: {
    name: `${pluginMeta.name}/markdown`,
    version: pluginMeta.version,
  },
  supportsAutofix: true,

  postprocess: ([contentMessages = [], ...codeBlockMessages], filename) => {
    return [...contentMessages, ...codeBlocksProcessor.postprocess(codeBlockMessages, filename)]
  },
  preprocess: (text, filename) => {
    return [blankCodeBlockDirectives(text), ...codeBlocksProcessor.preprocess(text, filename)]
  },
}

// Directives handed over to a code block only target it, so the content sees them blanked out, offsets unchanged
function blankCodeBlockDirectives(text: string) {
  return getCodeBlockDirectives(text).reduce((content, node) => {
    const start = (node.position?.start.offset ?? 0) + HTML_COMMENT_START.length
    const { length } = getCommentText(node)

    return content.slice(0, start) + ' '.repeat(length) + content.slice(start + length)
  }, text)
}

// Same walk as the `@eslint/markdown` processor: the run of directive comments right before a code block with a language
function getCodeBlockDirectives(text: string) {
  const parseResult = markdownPlugin.languages.commonmark.parse(
    { body: text, bom: false, path: '', physicalPath: '' },
    { languageOptions: {} }
  )
  const directives: MarkdownNode[] = []
  let run: MarkdownNode[] = []

  const visit = (node: MarkdownNode) => {
    if (node.type === 'code') {
      const isSkipped = run.some((comment) => {
        return getCommentText(comment).trim() === 'eslint-skip'
      })

      if (!isSkipped && (node.lang ?? '') !== '') {
        directives.push(...run)
      }

      run = []
    } else if (node.type === 'html' && DIRECTIVE_PATTERN.test(getCommentText(node).trim())) {
      run.push(node)
    } else {
      run = []
    }

    if (node.children !== undefined) {
      for (const child of node.children) {
        visit(child)
      }
    }
  }

  if (parseResult.ok) {
    visit(parseResult.ast)
  }

  return directives
}

function getCommentText({ value = '' }: MarkdownNode) {
  return (value.startsWith(HTML_COMMENT_START) && value.endsWith(HTML_COMMENT_END))
    ? value.slice(HTML_COMMENT_START.length, value.indexOf(HTML_COMMENT_END, HTML_COMMENT_START.length))
    : ''
}
