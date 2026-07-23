import { useEffect, useState } from 'react'
import type { ProgressState, SavedWord, StoryWord } from '../types'
import { useLocalStorage } from './useLocalStorage'

const DAY_MS = 24 * 60 * 60 * 1000
const MINUTE_MS = 60 * 1000

const initialProgress: ProgressState = {
  completedStoryIds: [],
  lastReadStoryId: null,
}

export function useLearnerState() {
  const [progress, setProgress] = useLocalStorage<ProgressState>(
    'madang.progress',
    initialProgress,
  )
  const [words, setWords] = useLocalStorage<SavedWord[]>('madang.words', [])

  // Keep a "current time" in state so due-word calculations stay pure during
  // render and refresh on a light interval.
  const [now, setNow] = useState(() => Date.now())
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), MINUTE_MS)
    return () => clearInterval(id)
  }, [])

  const markStoryCompleted = (storyId: string) => {
    setProgress((prev) => ({
      lastReadStoryId: storyId,
      completedStoryIds: prev.completedStoryIds.includes(storyId)
        ? prev.completedStoryIds
        : [...prev.completedStoryIds, storyId],
    }))
  }

  const setLastRead = (storyId: string) => {
    setProgress((prev) => ({ ...prev, lastReadStoryId: storyId }))
  }

  const saveWord = (word: StoryWord, storyId: string) => {
    setWords((prev) => {
      if (prev.some((item) => item.ko === word.ko && item.en === word.en)) {
        return prev
      }
      const next: SavedWord = {
        ...word,
        storyId,
        savedAt: Date.now(),
        reviews: 0,
        nextReviewAt: Date.now(),
      }
      return [next, ...prev]
    })
  }

  const removeWord = (ko: string) => {
    setWords((prev) => prev.filter((word) => word.ko !== ko))
  }

  const reviewWord = (ko: string, remembered: boolean) => {
    setWords((prev) =>
      prev.map((word) => {
        if (word.ko !== ko) return word
        const reviews = remembered ? word.reviews + 1 : Math.max(0, word.reviews - 1)
        const delayDays = remembered ? Math.min(14, 1 + reviews * 2) : 0.5
        return {
          ...word,
          reviews,
          nextReviewAt: Date.now() + delayDays * DAY_MS,
        }
      }),
    )
  }

  const dueWords = words
    .filter((word) => word.nextReviewAt <= now)
    .sort((a, b) => a.nextReviewAt - b.nextReviewAt)

  return {
    progress,
    words,
    dueWords,
    markStoryCompleted,
    setLastRead,
    saveWord,
    removeWord,
    reviewWord,
  }
}
