import { useEffect, useState } from 'react'
import type { ActivityState, ExportedData, ProgressState, SavedWord, StoryWord } from '../types'
import { isoDay } from '../lib/streak'
import { useLocalStorage } from './useLocalStorage'

const DAY_MS = 24 * 60 * 60 * 1000
const MINUTE_MS = 60 * 1000

const initialProgress: ProgressState = {
  completedStoryIds: [],
  lastReadStoryId: null,
}

const initialActivity: ActivityState = {
  days: [],
  reviewsDone: 0,
}

export function useLearnerState() {
  const [progress, setProgress] = useLocalStorage<ProgressState>(
    'madang.progress',
    initialProgress,
  )
  const [words, setWords] = useLocalStorage<SavedWord[]>('madang.words', [])
  const [activity, setActivity] = useLocalStorage<ActivityState>(
    'madang.activity',
    initialActivity,
  )

  // Keep a "current time" in state so due-word calculations stay pure during
  // render and refresh on a light interval.
  const [now, setNow] = useState(() => Date.now())
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), MINUTE_MS)
    return () => clearInterval(id)
  }, [])

  const recordActivity = (options?: { review?: boolean }) => {
    setActivity((prev) => {
      const today = isoDay(Date.now())
      return {
        days: prev.days.includes(today) ? prev.days : [...prev.days, today],
        reviewsDone: prev.reviewsDone + (options?.review ? 1 : 0),
      }
    })
  }

  const markStoryCompleted = (storyId: string) => {
    recordActivity()
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
    recordActivity({ review: true })
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

  const exportData = (): ExportedData => ({
    version: 1,
    exportedAt: Date.now(),
    progress,
    words,
    activity,
  })

  const importData = (data: unknown): boolean => {
    if (typeof data !== 'object' || data === null) return false
    const candidate = data as Partial<ExportedData>
    if (
      candidate.version !== 1 ||
      !candidate.progress ||
      !Array.isArray(candidate.progress.completedStoryIds) ||
      !Array.isArray(candidate.words) ||
      !candidate.activity ||
      !Array.isArray(candidate.activity.days)
    ) {
      return false
    }
    setProgress(candidate.progress)
    setWords(candidate.words)
    setActivity(candidate.activity)
    return true
  }

  const dueWords = words
    .filter((word) => word.nextReviewAt <= now)
    .sort((a, b) => a.nextReviewAt - b.nextReviewAt)

  return {
    now,
    progress,
    activity,
    words,
    dueWords,
    markStoryCompleted,
    setLastRead,
    saveWord,
    removeWord,
    reviewWord,
    recordActivity,
    exportData,
    importData,
  }
}
