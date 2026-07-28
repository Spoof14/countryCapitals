import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')

fs.copyFileSync(path.join(dist, 'index.html'), path.join(dist, '404.html'))
console.log('Copied dist/index.html → dist/404.html for GitHub Pages SPA routing')
