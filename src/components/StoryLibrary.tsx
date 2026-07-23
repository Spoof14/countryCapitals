import { useState } from 'react'
import type { CEFRLevel, ProgressState, Story } from '../types'

type StoryLibraryProps = {
  stories: Story[]
  progress: ProgressState
  onOpen: (storyId: string) => void
}

const levelLabel: Record<CEFRLevel, string> = {
  A1: 'Beginner',
  A2: 'Elementary',
  B1: 'Intermediate',
}

export default function StoryLibrary({ stories, progress, onOpen }: StoryLibraryProps) {
  const [levelFilter, setLevelFilter] = useState<CEFRLevel | 'all'>('all')

  const levels = [...new Set(stories.map((story) => story.level))].sort()
  const visibleStories =
    levelFilter === 'all' ? stories : stories.filter((story) => story.level === levelFilter)

  return (
    <section className="panel library">
      <header className="panel__header">
        <h2>Stories</h2>
        <p>Short Korean texts first. English waits underneath until you ask.</p>
      </header>

      {levels.length > 1 ? (
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
      ) : null}

      <ul className="story-list">
        {visibleStories.map((story) => {
          const done = progress.completedStoryIds.includes(story.id)
          return (
            <li key={story.id}>
              <button type="button" className="story-row" onClick={() => onOpen(story.id)}>
                <div className="story-row__body">
                  <div className="story-row__meta">
                    <span className="story-row__theme">{story.theme}</span>
                    <span className="story-row__level">{levelLabel[story.level]}</span>
                    <span className="story-row__time">{story.minutes} min</span>
                    {done ? <span className="story-row__done">Read</span> : null}
                  </div>
                  <h3 className="story-row__title-ko">{story.titleKo}</h3>
                  <p className="story-row__title-en">{story.titleEn}</p>
                  <p className="story-row__summary">{story.summary}</p>
                </div>
                {story.paragraphs[0]?.image ? (
                  <img
                    className="story-row__cover"
                    src={`${import.meta.env.BASE_URL}${story.paragraphs[0].image}`}
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
    </section>
  )
}
