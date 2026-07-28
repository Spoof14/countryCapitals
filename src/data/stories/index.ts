import type { Story } from '../../types'
import { artIdOverrides, koreanFolkloreStories } from './korean-folklore'
import { andersenStories } from './andersen'
import { grimmStories } from './grimm'
import { aesopStories } from './aesop'
import { worldTaleStories } from './world-tales'
import { koreanTaleStories } from './korean-tales'
import { dailyLifeStories } from './daily-life'

function withParagraphArt(story: Story): Story {
  const artId = artIdOverrides[story.id] ?? story.id
  return {
    ...story,
    paragraphs: story.paragraphs.map((paragraph, index) => ({
      ...paragraph,
      image: paragraph.image ?? `story-art/${artId}-${index + 1}.jpg`,
    })),
  }
}

// The original collection uses the first paragraph illustration as its cover.
const illustratedKoreanStories: Story[] = koreanFolkloreStories.map((story) => {
  const artId = artIdOverrides[story.id] ?? story.id
  const withArt = withParagraphArt(story)
  return {
    ...withArt,
    cover: `story-art/${artId}-1.jpg`,
  }
})

const levelOrder = { A1: 0, A2: 1, B1: 2 } as const

export const stories: Story[] = [
  ...illustratedKoreanStories,
  ...aesopStories.map(withParagraphArt),
  ...andersenStories.map(withParagraphArt),
  ...grimmStories.map(withParagraphArt),
  ...worldTaleStories.map(withParagraphArt),
  ...koreanTaleStories.map(withParagraphArt),
  ...dailyLifeStories.map(withParagraphArt),
].sort((a, b) => levelOrder[a.level] - levelOrder[b.level])

export const getStoryById = (id: string) => stories.find((story) => story.id === id)
