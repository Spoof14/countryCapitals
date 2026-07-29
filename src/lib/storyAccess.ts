import { FREE_STORY_COUNT } from '../config/monetization'
import { stories } from '../data/stories'

const freeStoryIds = new Set(stories.slice(0, FREE_STORY_COUNT).map((story) => story.id))

export function isStoryFree(storyId: string): boolean {
  return freeStoryIds.has(storyId)
}

export function canAccessStory(storyId: string, isPremium: boolean): boolean {
  return isPremium || isStoryFree(storyId)
}

export function getFreeStoryCount(): number {
  return freeStoryIds.size
}

export function getLockedStoryCount(): number {
  return stories.length - freeStoryIds.size
}
