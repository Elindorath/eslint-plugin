#! /usr/bin/env node

import path from 'node:path'
import process from 'node:process'
import { inspect, isDeepStrictEqual } from 'node:util'

import { ESLint } from 'eslint'

import { defineProject } from '../src/defineProject.ts'
import { markdownProcessor } from '../src/processors/markdown.ts'

/**
 * The Markdown processor leans on ESLint linting a string block with the configuration of the file
 * it comes from, and on mirroring which directive comments `@eslint/markdown` hands over to a code
 * block. Both belong to dependencies, so these tests fail when either changes.
 */

const FENCE = '```'

const HANDED_OVER_FIXTURE = `\
# Handed over

<!-- eslint-disable no-console -->

${FENCE}js title="single"
console.log(answer)
${FENCE}

<!-- eslint-disable no-alert -->
<!-- global answer -->

${FENCE}js title="run"
alert(answer)
${FENCE}

<!-- eslint no-undef: off -->

${FENCE}js title="configuration"
undefinedVariable()
${FENCE}

<!--
eslint-disable no-var
-->

${FENCE}js title="multiline"
var answer = 1
${FENCE}

Some text <!-- eslint-disable no-debugger -->

${FENCE}js title="inline"
debugger
${FENCE}

> <!-- eslint-disable no-empty -->
>
> ${FENCE}js title="quoted"
> if (answer) {}
> ${FENCE}

- Item

  <!-- eslint-disable no-plusplus -->

  ${FENCE}js title="listed"
  answer++
  ${FENCE}

<!-- eslint-disable no-eval -->
<!-- a plain note -->

${FENCE}js title="note"
eval(answer)
${FENCE}

<!-- eslint-disable no-new -->

A paragraph.

${FENCE}js title="paragraph"
new Answer()
${FENCE}

<!-- eslint-disable no-with -->

${FENCE}
with (answer) {}
${FENCE}

<!-- eslint-disable no-void -->
<!-- eslint-skip -->

${FENCE}js title="skipped"
void answer
${FENCE}

<!-- eslint-disable no-label-var -->
`

const EXPECTED_HANDED_OVER_COMMENTS = [
  ' eslint-disable no-console ',
  ' eslint-disable no-alert ',
  ' global answer ',
  ' eslint no-undef: off ',
  '\neslint-disable no-var\n',
  ' eslint-disable no-debugger ',
  ' eslint-disable no-empty ',
  ' eslint-disable no-plusplus ',
]

const LINTED_FIXTURE = `\
# Linted

Visit https://example.com before.

<!-- eslint-disable @eslint/markdown/no-html -->

A paragraph ends the run of comments handed over to the next code block.

<!-- eslint-disable no-console -->

${FENCE}js title="used"
console.log('used')
${FENCE}

<!-- eslint-disable no-alert -->

${FENCE}js title="unused"
console.log('reported')
${FENCE}

<!-- eslint-disable -->

${FENCE}js title="bare"
console.log('silenced')
${FENCE}

Visit https://example.org after.
`

const EXPECTED_LINTED_MESSAGES = [
  '3:@eslint/markdown/no-bare-urls',
  '5:unused-directive',
  '15:unused-directive',
  '18:no-console',
  '27:@eslint/markdown/no-bare-urls',
]

const HTML_COMMENT_PATTERN = /<!--(?<commentText>[\s\S]*?)-->/gu
const HTML_COMMENT_START_LENGTH = '<!--'.length
const FIXTURE_PATH = path.join(process.cwd(), 'fixture.md')

const failures = [
  ...checkHandedOverComments(),
  ...(await checkLintedMessages()),
  ...(await checkFixedOutput()),
]

if (failures.length > 0) {
  process.exitCode = 1
  console.log(`===== Processor failures (${failures.length}) =====`)

  for (const failure of failures) {
    console.log(`  ${failure}`)
  }
} else {
  console.log('The Markdown processor matches ESLint and @eslint/markdown')
}

function checkEquality(title: string, actual: unknown, expected: unknown) {
  return isDeepStrictEqual(actual, expected)
    ? []
    : [`${title}\n    expected: ${inspect(expected)}\n    actual:   ${inspect(actual)}`]
}

async function checkFixedOutput() {
  const [result] = await createLinter(true).lintText(LINTED_FIXTURE, { filePath: FIXTURE_PATH })
  const output = result.output ?? ''

  return ['<!-- eslint-disable no-console -->', '<!-- eslint-disable -->']
    .filter((directive) => {
      return !output.includes(directive)
    })
    .map((directive) => {
      return `Fixing removes \`${directive}\`, which a code block uses`
    })
}

function checkHandedOverComments() {
  const [content, ...codeBlocks] = markdownProcessor.preprocess?.(HANDED_OVER_FIXTURE, FIXTURE_PATH) ?? []

  markdownProcessor.postprocess?.([[], ...codeBlocks.map(() => {
    return []
  })], FIXTURE_PATH)

  if (typeof content !== 'string') {
    return ['The content is no longer handed over as a string block']
  }

  const codeBlockTexts = codeBlocks.map((codeBlock) => {
    return typeof codeBlock === 'string' ? codeBlock : codeBlock.text
  })
  const { blankedComments, unexpectedContent } = getBlankedComments(HANDED_OVER_FIXTURE, content)

  return [
    ...checkEquality('@eslint/markdown hands over other comments to code blocks', getHandedOverComments(codeBlockTexts), EXPECTED_HANDED_OVER_COMMENTS),
    ...checkEquality('The processor blanks out other comments', blankedComments, EXPECTED_HANDED_OVER_COMMENTS),
    ...(unexpectedContent ? ['The processor changes the content beyond blanking comments out'] : []),
  ]
}

async function checkLintedMessages() {
  const [result] = await createLinter(false).lintText(LINTED_FIXTURE, { filePath: FIXTURE_PATH })
  const messages = result.messages
    .map((message) => {
      return `${message.line}:${message.ruleId ?? 'unused-directive'}`
    })
    .toSorted((left, right) => {
      return left.localeCompare(right, 'en', { numeric: true })
    })

  return checkEquality('The content and code blocks report other messages', messages, EXPECTED_LINTED_MESSAGES)
}

function createLinter(shouldFix: boolean) {
  return new ESLint({
    cwd: process.cwd(),
    fix: shouldFix,
    overrideConfig: [
      ...defineProject({ files: ['**/*.md'], language: 'markdown' }),
      { files: ['**/*.md/*.js'], rules: { 'no-console': 'error' } },
    ],
    overrideConfigFile: true,
  })
}

// Every comment the content shows blanked out, and whether anything else in the content changed
function getBlankedComments(text: string, content: string) {
  const blankedMatches = text.matchAll(HTML_COMMENT_PATTERN)
    .filter((match) => {
      const commentText = getCommentText(match)
      const start = match.index + HTML_COMMENT_START_LENGTH

      return commentText.trim() !== '' && content.slice(start, start + commentText.length).trim() === ''
    })
    .toArray()
  const expectedContent = blankedMatches.reduce((blankedText, match) => {
    const { length } = getCommentText(match)
    const start = match.index + HTML_COMMENT_START_LENGTH

    return blankedText.slice(0, start) + ' '.repeat(length) + blankedText.slice(start + length)
  }, text)

  const blankedComments = blankedMatches.map((match) => {
    return getCommentText(match)
  })

  return { blankedComments, unexpectedContent: content !== expectedContent }
}

function getCommentText(match: RegExpExecArray) {
  return match.groups?.commentText ?? ''
}

// `@eslint/markdown` writes each comment it hands over as a block comment at the top of the code block
function getHandedOverComments(codeBlockTexts: string[]) {
  return codeBlockTexts.flatMap((codeBlockText) => {
    // Sticky, so that matching stops at the first line that isn't a handed over comment
    const handedOverCommentPattern = /\/\*(?<commentText>[\s\S]*?)\*\/\n/uy
    const comments: string[] = []

    for (let match = handedOverCommentPattern.exec(codeBlockText); match; match = handedOverCommentPattern.exec(codeBlockText)) {
      comments.push(match.groups?.commentText ?? '')
    }

    return comments
  })
}
