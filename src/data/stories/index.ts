import type { Story } from '../../types'
import { artIdOverrides, koreanFolkloreStories } from './korean-folklore'
import { andersenStories } from './andersen'
import { grimmStories } from './grimm'
import { aesopStories } from './aesop'
import { worldTaleStories } from './world-tales'
import { koreanTaleStories } from './korean-tales'
import { dailyLifeStories } from './daily-life'

// The original collection has per-paragraph art named `story-art/<artId>-<n>.jpg`;
// its cover is the first paragraph's illustration.
const illustratedKoreanStories: Story[] = koreanFolkloreStories.map((story) => {
  const artId = artIdOverrides[story.id] ?? story.id
  return {
    ...story,
    cover: `story-art/${artId}-1.jpg`,
    paragraphs: story.paragraphs.map((paragraph, index) => ({
      ...paragraph,
      image: `story-art/${artId}-${index + 1}.jpg`,
    })),
  }
})

const levelOrder = { A1: 0, A2: 1, B1: 2 } as const

export const stories: Story[] = [
  ...illustratedKoreanStories,
  ...aesopStories,
  ...andersenStories,
  ...grimmStories,
  ...worldTaleStories,
  ...koreanTaleStories,
  ...dailyLifeStories,
].sort((a, b) => levelOrder[a.level] - levelOrder[b.level])

export const getStoryById = (id: string) => stories.find((story) => story.id === id)
