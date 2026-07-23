export type CEFRLevel = 'A1' | 'A2' | 'B1'

export type StoryWord = {
  ko: string
  en: string
  romanization?: string
}

export type StoryParagraph = {
  ko: string
  en: string
  words: StoryWord[]
}

export type Story = {
  id: string
  titleKo: string
  titleEn: string
  summary: string
  level: CEFRLevel
  minutes: number
  theme: string
  paragraphs: StoryParagraph[]
}

export type SavedWord = StoryWord & {
  storyId: string
  savedAt: number
  reviews: number
  nextReviewAt: number
}

export type ProgressState = {
  completedStoryIds: string[]
  lastReadStoryId: string | null
}

export type AppView =
  | { name: 'home' }
  | { name: 'library' }
  | { name: 'story'; storyId: string }
  | { name: 'words' }
  | { name: 'review' }
