#!/usr/bin/env node
/**
 * Generate a Korean TTS sample via OpenAI for Madang voice comparison.
 *
 * Usage:
 *   OPENAI_API_KEY=sk-... node scripts/generate-openai-tts-sample.mjs
 *   OPENAI_API_KEY=sk-... node scripts/generate-openai-tts-sample.mjs --voice coral --model gpt-4o-mini-tts
 *
 * Output: samples/tts/<story-id>-openai-<voice>.mp3
 *
 * Never commit API keys. Add samples/ to .gitignore if you generate locally.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const outDir = path.join(root, 'samples/tts')

const args = process.argv.slice(2)
const voice = args.includes('--voice') ? args[args.indexOf('--voice') + 1] : 'coral'
const model = args.includes('--model') ? args[args.indexOf('--model') + 1] : 'gpt-4o-mini-tts'

const apiKey = process.env.OPENAI_API_KEY
if (!apiKey) {
  console.error('Set OPENAI_API_KEY in your environment.')
  process.exit(1)
}

// First paragraph of "The Siblings Who Became Sun and Moon"
const text =
  '옛날 옛적에, 산속에 엄마와 남매가 살았습니다. 어느 날 엄마는 장에 갔습니다. 형제는 집에서 기다렸습니다. 갑자기 커다란 호랑이가 나타났습니다.'

const body = {
  model,
  voice,
  input: text,
  response_format: 'mp3',
}

if (model === 'gpt-4o-mini-tts') {
  body.instructions =
    'Speak in native Korean with a warm, gentle storytelling tone, as if reading a children\'s folk tale. Pace slightly slower than conversational speech. Clear pronunciation for language learners.'
}

fs.mkdirSync(outDir, { recursive: true })
const outFile = path.join(outDir, `sun-and-moon-openai-${voice}.mp3`)

const response = await fetch('https://api.openai.com/v1/audio/speech', {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${apiKey}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(body),
})

if (!response.ok) {
  const error = await response.text()
  console.error(`OpenAI TTS failed (${response.status}):`, error)
  process.exit(1)
}

const buffer = Buffer.from(await response.arrayBuffer())
fs.writeFileSync(outFile, buffer)
console.log(`Wrote ${outFile} (${(buffer.length / 1024).toFixed(1)} KB)`)
console.log(`Model: ${model}, voice: ${voice}`)
