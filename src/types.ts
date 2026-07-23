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
  /** Path (relative to the site base) of the paragraph illustration. */
  image?: string
}

export type ComprehensionQuestion = {
  question: string
  options: string[]
  answerIndex: number
}

export type Story = {
  id: string
  titleKo: string
  titleEn: string
  summary: string
  level: CEFRLevel
  minutes: number
  theme: string
  /** Cover illustration path (relative to the site base). */
  cover?: string
  paragraphs: StoryParagraph[]
  questions: ComprehensionQuestion[]
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

export type ActivityState = {
  /** Local dates (YYYY-MM-DD) on which the learner read or reviewed. */
  days: string[]
  reviewsDone: number
}

export type ExportedData = {
  version: 1
  exportedAt: number
  progress: ProgressState
  words: SavedWord[]
  activity: ActivityState
}

export type AppView =
  | { name: 'home' }
  | { name: 'library' }
  | { name: 'story'; storyId: string }
  | { name: 'words' }
  | { name: 'review' }
  | { name: 'progress' }
  | { name: 'hangul' }
