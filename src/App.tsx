import { useState } from 'react'
import HangulPrimer from './components/HangulPrimer'
import Landing from './components/Landing'
import ProgressPanel from './components/ProgressPanel'
import Shell from './components/Shell'
import StoryLibrary from './components/StoryLibrary'
import StoryReader from './components/StoryReader'
import WordBook from './components/WordBook'
import WordReview from './components/WordReview'
import { stories, getStoryById } from './data/stories'
import { useLearnerState } from './hooks/useLearnerState'
import type { AppView } from './types'
import './App.css'

function App() {
  const [view, setView] = useState<AppView>({ name: 'home' })
  const {
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
    exportData,
    importData,
  } = useLearnerState()

  const savedWordKeys = new Set(words.map((word) => word.ko))
  const activeStory = view.name === 'story' ? getStoryById(view.storyId) : undefined

  return (
    <Shell view={view} dueCount={dueWords.length} onNavigate={setView}>
      {view.name === 'home' ? (
        <Landing
          onBrowse={() => setView({ name: 'library' })}
          onContinue={
            progress.lastReadStoryId
              ? () => setView({ name: 'story', storyId: progress.lastReadStoryId! })
              : undefined
          }
        />
      ) : null}

      {view.name === 'library' ? (
        <StoryLibrary
          stories={stories}
          progress={progress}
          onOpen={(storyId) => {
            setLastRead(storyId)
            setView({ name: 'story', storyId })
          }}
        />
      ) : null}

      {view.name === 'story' && activeStory ? (
        <StoryReader
          story={activeStory}
          savedWordKeys={savedWordKeys}
          onBack={() => setView({ name: 'library' })}
          onComplete={() => markStoryCompleted(activeStory.id)}
          onSaveWord={(word) => saveWord(word, activeStory.id)}
        />
      ) : null}

      {view.name === 'story' && !activeStory ? (
        <section className="panel">
          <p className="empty">That story could not be found.</p>
          <button type="button" className="btn btn--primary" onClick={() => setView({ name: 'library' })}>
            Back to stories
          </button>
        </section>
      ) : null}

      {view.name === 'words' ? (
        <WordBook
          words={words}
          dueCount={dueWords.length}
          onRemove={removeWord}
          onReview={() => setView({ name: 'review' })}
        />
      ) : null}

      {view.name === 'review' ? (
        <WordReview
          dueWords={dueWords}
          onGrade={reviewWord}
          onDone={() => setView({ name: 'words' })}
        />
      ) : null}

      {view.name === 'hangul' ? <HangulPrimer /> : null}

      {view.name === 'progress' ? (
        <ProgressPanel
          now={now}
          progress={progress}
          activity={activity}
          words={words}
          dueCount={dueWords.length}
          storyCount={stories.length}
          onExport={exportData}
          onImport={importData}
        />
      ) : null}
    </Shell>
  )
}

export default App
