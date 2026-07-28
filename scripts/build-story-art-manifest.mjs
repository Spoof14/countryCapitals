#!/usr/bin/env node
/**
 * Builds story-art-manifest.json listing every paragraph illustration needed
 * for cover-only stories (the original 10 Korean folklore entries already have art).
 *
 * Usage: node scripts/build-story-art-manifest.mjs
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const storyDir = path.join(root, 'src/data/stories')
const artDir = path.join(root, 'public/story-art')
const outPath = path.join(root, 'scripts/story-art-manifest.json')

const skipFiles = new Set(['index.ts', 'korean-folklore.ts'])

function parseStories(filePath) {
  const text = fs.readFileSync(filePath, 'utf8')
  const stories = []
  const blocks = text.split(/\n  \{\n    id: '/).slice(1)
  for (const block of blocks) {
    const id = block.slice(0, block.indexOf("'"))
    const titleKo = block.match(/titleKo: '([^']+)'/)?.[1] ?? ''
    const titleEn = block.match(/titleEn: '([^']+)'/)?.[1] ?? ''
    const theme = block.match(/theme: '([^']+)'/)?.[1] ?? ''
    const paragraphsBlock = block.split('paragraphs: [')[1]?.split('\n    ],\n    questions:')[0] ?? ''
    const paragraphChunks = paragraphsBlock.split(/\n      \{/).slice(1)
    const paragraphs = paragraphChunks.map((chunk, index) => {
      const ko = chunk.match(/ko: '((?:\\'|[^'])*)'/)?.[1]?.replace(/\\'/g, "'") ?? ''
      const en = chunk.match(/en: '((?:\\'|[^'])*)'/)?.[1]?.replace(/\\'/g, "'") ?? ''
      return { index: index + 1, ko, en }
    })
    stories.push({ id, titleKo, titleEn, theme, paragraphs })
  }
  return stories
}

const existing = new Set(fs.readdirSync(artDir))
const entries = []

for (const file of fs.readdirSync(storyDir).sort()) {
  if (!file.endsWith('.ts') || skipFiles.has(file)) continue
  for (const story of parseStories(path.join(storyDir, file))) {
    for (const paragraph of story.paragraphs) {
      const filename = `${story.id}-${paragraph.index}.jpg`
      if (existing.has(filename)) continue
      const scene = paragraph.en.replace(/"/g, '')
      entries.push({
        storyId: story.id,
        paragraphIndex: paragraph.index,
        titleEn: story.titleEn,
        theme: story.theme,
        paragraphEn: paragraph.en,
        filename,
        path: `public/story-art/${filename}`,
        prompt: `Korean minhwa folk watercolor illustration, soft muted earthy colors, gentle atmosphere. Scene from "${story.titleEn}": ${scene}. Theme: ${story.theme}. Traditional East Asian brush painting influence, no text, no borders, wide 16:9 composition.`,
      })
    }
  }
}

fs.writeFileSync(outPath, `${JSON.stringify(entries, null, 2)}\n`)
console.log(`Wrote ${entries.length} pending art entries to ${path.relative(root, outPath)}`)
