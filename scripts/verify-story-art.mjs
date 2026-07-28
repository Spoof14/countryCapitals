#!/usr/bin/env node
/**
 * Verifies every paragraph image referenced by src/data/stories/index.ts exists on disk.
 * Usage: node scripts/verify-story-art.mjs
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const artDir = path.join(root, 'public/story-art')
const artIdOverrides = { 'dokkaebi-bangmangi': 'dokkaebi' }

function parseStories(filePath) {
  const text = fs.readFileSync(filePath, 'utf8')
  const stories = []
  const blocks = text.split(/\n  \{\n    id: '/).slice(1)
  for (const block of blocks) {
    const id = block.slice(0, block.indexOf("'"))
    const artId = artIdOverrides[id] ?? id
    const paragraphsBlock = block.split('paragraphs: [')[1]?.split('\n    ],\n    questions:')[0] ?? ''
    const paragraphCount = paragraphsBlock.split(/\n      \{/).length - 1
    const images = []
    for (let i = 1; i <= paragraphCount; i += 1) images.push(`${artId}-${i}.jpg`)
    stories.push({ id, images })
  }
  return stories
}

const storyDir = path.join(root, 'src/data/stories')
const required = new Set(
  fs
    .readdirSync(storyDir)
    .filter((file) => file.endsWith('.ts') && file !== 'index.ts')
    .flatMap((file) => parseStories(path.join(storyDir, file)))
    .flatMap((story) => story.images),
)

const missing = [...required].filter((file) => !fs.existsSync(path.join(artDir, file))).sort()

if (missing.length) {
  console.error(`Missing ${missing.length} art files:`)
  for (const file of missing.slice(0, 20)) console.error(`  - ${file}`)
  if (missing.length > 20) console.error(`  … and ${missing.length - 20} more`)
  process.exit(1)
}

console.log(`All ${required.size} referenced paragraph art files exist.`)
