import { useEffect, useMemo, useState } from 'react'
import type { Story, StoryWord } from '../types'
import { speakKorean, stopSpeaking } from '../lib/speech'
import WordMatch from './WordMatch'

type StoryReaderProps = {
  story: Story
  savedWordKeys: Set<string>
  onBack: () => void
  onComplete: () => void
  onSaveWord: (word: StoryWord) => void
}

export default function StoryReader({
  story,
  savedWordKeys,
  onBack,
  onComplete,
  onSaveWord,
}: StoryReaderProps) {
  const [openParagraphs, setOpenParagraphs] = useState<Record<number, boolean>>({})
  const [showAllEnglish, setShowAllEnglish] = useState(false)
  const [activeWord, setActiveWord] = useState<StoryWord | null>(null)
  const [finished, setFinished] = useState(false)
  const [practicing, setPracticing] = useState(false)

  useEffect(() => {
    return () => stopSpeaking()
  }, [story.id])

  const allWords = useMemo(() => {
    const map = new Map<string, StoryWord>()
    for (const paragraph of story.paragraphs) {
      for (const word of paragraph.words) {
        map.set(word.ko, word)
      }
    }
    return [...map.values()]
  }, [story])

  const toggleParagraph = (index: number) => {
    setOpenParagraphs((prev) => ({ ...prev, [index]: !prev[index] }))
  }

  const handleFinish = () => {
    setFinished(true)
    onComplete()
  }

  return (
    <section className="panel reader">
      <header className="reader__top">
        <button type="button" className="btn btn--text" onClick={onBack}>
          ← Stories
        </button>
        <div className="reader__controls">
          <button
            type="button"
            className={`btn btn--chip ${showAllEnglish ? 'is-active' : ''}`}
            onClick={() => setShowAllEnglish((value) => !value)}
          >
            {showAllEnglish ? 'Hide English' : 'Show English'}
          </button>
          <button
            type="button"
            className="btn btn--chip"
            onClick={() => speakKorean(story.paragraphs.map((p) => p.ko).join(' '))}
          >
            Listen
          </button>
        </div>
      </header>

      <div className="reader__title">
        <p className="reader__theme">
          {story.theme} · {story.level} · {story.minutes} min
        </p>
        <h2 className="reader__title-ko">{story.titleKo}</h2>
        <p className="reader__title-en">{story.titleEn}</p>
        <p className="reader__hint">Tap a paragraph for English. Tap a highlighted word for meaning.</p>
      </div>

      <article className="reader__body">
        {story.paragraphs.map((paragraph, index) => {
          const open = showAllEnglish || openParagraphs[index]
          return (
            <div
              key={index}
              className={`passage ${open ? 'is-open' : ''}`}
              role="button"
              tabIndex={0}
              onClick={() => toggleParagraph(index)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault()
                  toggleParagraph(index)
                }
              }}
            >
              <p className="passage__ko">
                {renderKoreanWithWords(paragraph.ko, paragraph.words, (word) => {
                  setActiveWord(word)
                })}
              </p>
              <p className={`passage__en ${open ? 'is-visible' : ''}`}>{paragraph.en}</p>
            </div>
          )
        })}
      </article>

      {!finished ? (
        <div className="reader__finish">
          <button type="button" className="btn btn--primary" onClick={handleFinish}>
            I finished this story
          </button>
        </div>
      ) : (
        <div className="reader__complete">
          <h3>잘했어요 — nice reading.</h3>
          <p>Save a few words while they’re still warm.</p>
          <ul className="word-save-list">
            {allWords.slice(0, 8).map((word) => {
              const saved = savedWordKeys.has(word.ko)
              return (
                <li key={word.ko}>
                  <button
                    type="button"
                    className={`word-save ${saved ? 'is-saved' : ''}`}
                    onClick={() => onSaveWord(word)}
                    disabled={saved}
                  >
                    <span className="word-save__ko">{word.ko}</span>
                    <span className="word-save__en">{word.en}</span>
                    <span className="word-save__action">{saved ? 'Saved' : 'Save'}</span>
                  </button>
                </li>
              )
            })}
          </ul>

          <div className="reader__practice">
            {practicing ? (
              <WordMatch words={allWords.slice(0, 6)} />
            ) : (
              <button type="button" className="btn btn--ghost" onClick={() => setPracticing(true)}>
                Practice with a matching game
              </button>
            )}
          </div>
        </div>
      )}

      {activeWord ? (
        <div className="word-sheet" role="dialog" aria-label="Word meaning">
          <div className="word-sheet__card">
            <button
              type="button"
              className="word-sheet__close"
              onClick={() => setActiveWord(null)}
              aria-label="Close"
            >
              ×
            </button>
            <p className="word-sheet__ko">{activeWord.ko}</p>
            {activeWord.romanization ? (
              <p className="word-sheet__rom">{activeWord.romanization}</p>
            ) : null}
            <p className="word-sheet__en">{activeWord.en}</p>
            <div className="word-sheet__actions">
              <button
                type="button"
                className="btn btn--chip"
                onClick={() => speakKorean(activeWord.ko)}
              >
                Hear it
              </button>
              <button
                type="button"
                className="btn btn--primary"
                onClick={() => {
                  onSaveWord(activeWord)
                  setActiveWord(null)
                }}
                disabled={savedWordKeys.has(activeWord.ko)}
              >
                {savedWordKeys.has(activeWord.ko) ? 'Already saved' : 'Save word'}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  )
}

function renderKoreanWithWords(
  text: string,
  words: StoryWord[],
  onWord: (word: StoryWord) => void,
) {
  const sorted = [...words].sort((a, b) => b.ko.length - a.ko.length)
  const parts: Array<string | { word: StoryWord }> = [text]

  for (const word of sorted) {
    const next: Array<string | { word: StoryWord }> = []
    for (const part of parts) {
      if (typeof part !== 'string') {
        next.push(part)
        continue
      }
      const chunks = part.split(word.ko)
      chunks.forEach((chunk, index) => {
        if (chunk) next.push(chunk)
        if (index < chunks.length - 1) next.push({ word })
      })
    }
    parts.splice(0, parts.length, ...next)
  }

  return parts.map((part, index) => {
    if (typeof part === 'string') return <span key={index}>{part}</span>
    return (
      <span
        key={`${part.word.ko}-${index}`}
        className="hotword"
        role="button"
        tabIndex={0}
        onClick={(event) => {
          event.stopPropagation()
          onWord(part.word)
        }}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault()
            event.stopPropagation()
            onWord(part.word)
          }
        }}
      >
        {part.word.ko}
      </span>
    )
  })
}
