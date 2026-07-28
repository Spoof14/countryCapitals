export type StoryCategory = 'all' | 'korean' | 'fairy-tales' | 'world' | 'daily-life'

export const storyCategories: Array<{ id: StoryCategory; label: string }> = [
  { id: 'all', label: 'All' },
  { id: 'korean', label: 'Korean' },
  { id: 'fairy-tales', label: 'Fairy tales' },
  { id: 'world', label: 'World' },
  { id: 'daily-life', label: 'Daily life' },
]

const categoryThemes: Record<Exclude<StoryCategory, 'all'>, string[]> = {
  korean: ['Folklore', 'Korean tale', 'Classic tale'],
  'fairy-tales': ['Andersen', 'Grimm', 'Aesop', 'Fable'],
  world: ['World tale'],
  'daily-life': ['Daily life'],
}

export function storyMatchesCategory(theme: string, category: StoryCategory): boolean {
  if (category === 'all') return true
  return categoryThemes[category].includes(theme)
}
