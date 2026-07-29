import { Link, useNavigate } from '@tanstack/react-router'
import { useState } from 'react'
import { usePremium } from '../context/PremiumContext'
import type { CEFRLevel, ProgressState, Story } from '../types'
import { storyCategories, storyMatchesCategory, type StoryCategory } from '../lib/storyCategories'

type StoryLibraryProps = {
  stories: Story[]
  progress: ProgressState
  onOpen?: (storyId: string) => void
}

const levelLabel: Record<CEFRLevel, string> = {
  A1: 'Beginner',
  A2: 'Elementary',
  B1: 'Intermediate',
}

export default function StoryLibrary({ stories, progress, onOpen }: StoryLibraryProps) {
  const navigate = useNavigate()
  const { isPremium, canAccessStory, freeStoryCount, lockedStoryCount } = usePremium()
  const [categoryFilter, setCategoryFilter] = useState<StoryCategory>('all')
  const [levelFilter, setLevelFilter] = useState<CEFRLevel | 'all'>('all')
  const [query, setQuery] = useState('')

  const levels = [...new Set(stories.map((story) => story.level))].sort()
  const trimmedQuery = query.trim().toLowerCase()

  const visibleStories = stories.filter((story) => {
    if (!storyMatchesCategory(story.theme, categoryFilter)) return false
    if (levelFilter !== 'all' && story.level !== levelFilter) return false
    if (!trimmedQuery) return true
    return [story.titleKo, story.titleEn, story.summary, story.theme]
      .join(' ')
      .toLowerCase()
      .includes(trimmedQuery)
  })

  return (
    <section className="panel library">
      <header className="panel__header">
        <h2>Stories</h2>
        <p>
          {isPremium
            ? `${stories.length} stories, Korean first. English waits underneath until you ask.`
            : `${freeStoryCount} free stories · ${lockedStoryCount} more with full unlock.`}
        </p>
      </header>

      {!isPremium ? (
        <div className="library__upgrade">
          <p>Unlock all {stories.length} stories, quizzes, and practice modes for $5 — one time.</p>
          <Link to="/upgrade" className="btn btn--primary">
            Unlock full library
          </Link>
        </div>
      ) : null}

      <div className="library__controls">
        <input
          type="search"
          className="library__search"
          placeholder="Search stories…"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          aria-label="Search stories"
        />

        <div className="library__filter-group">
          <p className="library__filter-label">Category</p>
          <div className="library__filters">
            {storyCategories.map((category) => (
              <button
                key={category.id}
                type="button"
                className={`btn btn--chip ${categoryFilter === category.id ? 'is-active' : ''}`}
                onClick={() => setCategoryFilter(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {levels.length > 1 ? (
          <div className="library__filter-group">
            <p className="library__filter-label">Level</p>
            <div className="library__filters">
              <button
                type="button"
                className={`btn btn--chip ${levelFilter === 'all' ? 'is-active' : ''}`}
                onClick={() => setLevelFilter('all')}
              >
                All levels
              </button>
              {levels.map((level) => (
                <button
                  key={level}
                  type="button"
                  className={`btn btn--chip ${levelFilter === level ? 'is-active' : ''}`}
                  onClick={() => setLevelFilter(level)}
                >
                  {level} · {levelLabel[level]}
                </button>
              ))}
            </div>
          </div>
        ) : null}
      </div>

      {visibleStories.length === 0 ? (
        <p className="empty">No stories match your filters.</p>
      ) : (
        <ul className="story-list">
          {visibleStories.map((story) => {
            const done = progress.completedStoryIds.includes(story.id)
            const locked = !canAccessStory(story.id)
            return (
              <li key={story.id}>
                <button
                  type="button"
                  className={`story-row ${locked ? 'story-row--locked' : ''}`}
                  onClick={() => {
                    if (locked) {
                      navigate({ to: '/upgrade' })
                      return
                    }
                    onOpen?.(story.id)
                    navigate({ to: '/story/$storyId', params: { storyId: story.id } })
                  }}
                >
                  <div className="story-row__body">
                    <div className="story-row__meta">
                      <span className="story-row__theme">{story.theme}</span>
                      <span className="story-row__level">{levelLabel[story.level]}</span>
                      <span className="story-row__time">{story.minutes} min</span>
                      {locked ? <span className="story-row__lock">Locked</span> : null}
                      {done ? <span className="story-row__done">Read</span> : null}
                    </div>
                    <h3 className="story-row__title-ko">{story.titleKo}</h3>
                    <p className="story-row__title-en">{story.titleEn}</p>
                    <p className="story-row__summary">{story.summary}</p>
                  </div>
                  {story.cover ? (
                    <img
                      className="story-row__cover"
                      src={`${import.meta.env.BASE_URL}${story.cover}`}
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                    />
                  ) : null}
                </button>
              </li>
            )
          })}
        </ul>
      )}
    </section>
  )
}
