import { useCanGoBack, useNavigate, useRouter } from '@tanstack/react-router'
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import type { Story, StoryWord } from '../types'
import { createKoreanUtterance, speakKorean, stopSpeaking } from '../lib/speech'
import SentenceBuilder from './SentenceBuilder'
import StoryQuiz from './StoryQuiz'
import WordCloze from './WordCloze'
import WordMatch from './WordMatch'

type StoryReaderProps = {
  story: Story
  savedWordKeys: Set<string>
  onComplete: () => void
  onSaveWord: (word: StoryWord) => void
}

export default function StoryReader({
  story,
  savedWordKeys,
  onComplete,
  onSaveWord,
}: StoryReaderProps) {
  const [openParagraphs, setOpenParagraphs] = useState<Record<number, boolean>>({})
  const [showAllEnglish, setShowAllEnglish] = useState(false)
  const [showArt, setShowArt] = useState(true)
  const [activeWord, setActiveWord] = useState<StoryWord | null>(null)
  const [finished, setFinished] = useState(false)
  const [practiceMode, setPracticeMode] = useState<'none' | 'match' | 'cloze' | 'build'>('none')
  const [brokenImages, setBrokenImages] = useState<Set<string>>(() => new Set())

  // Which paragraph is currently being read aloud (null when silent).
  const [speakingIndex, setSpeakingIndex] = useState<number | null>(null)
  // Utterances must stay referenced or some browsers drop their events;
  // the session counter invalidates callbacks from cancelled playback.
  const utterancesRef = useRef<SpeechSynthesisUtterance[]>([])
  const sessionRef = useRef(0)
  const passageRefs = useRef<Array<HTMLDivElement | null>>([])
  const router = useRouter()
  const navigate = useNavigate()
  const canGoBack = useCanGoBack()

  const goBack = () => {
    if (canGoBack) router.history.back()
    else navigate({ to: '/library' })
  }

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [story.id])

  useEffect(() => {
    return () => stopSpeaking()
  }, [story.id])

  useEffect(() => {
    if (speakingIndex === null) return
    passageRefs.current[speakingIndex]?.scrollIntoView({ block: 'center', behavior: 'smooth' })
  }, [speakingIndex])

  const stopPlayback = () => {
    sessionRef.current += 1
    utterancesRef.current = []
    stopSpeaking()
    setSpeakingIndex(null)
  }

  const playParagraphs = (startIndex: number, endIndex?: number) => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return
    stopPlayback()
    const session = sessionRef.current
    const paragraphs = story.paragraphs.slice(startIndex, endIndex ?? story.paragraphs.length)
    const lastIndex = startIndex + paragraphs.length - 1

    paragraphs.forEach((paragraph, offset) => {
      const index = startIndex + offset
      const utterance = createKoreanUtterance(paragraph.ko)
      utterance.onstart = () => {
        if (sessionRef.current === session) setSpeakingIndex(index)
      }
      utterance.onend = () => {
        if (sessionRef.current === session && index === lastIndex) setSpeakingIndex(null)
      }
      utterancesRef.current.push(utterance)
      window.speechSynthesis.speak(utterance)
    })
  }

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
        <button type="button" className="btn btn--text" onClick={goBack}>
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
            className={`btn btn--chip ${showArt ? 'is-active' : ''}`}
            onClick={() => setShowArt((value) => !value)}
          >
            {showArt ? 'Hide art' : 'Show art'}
          </button>
          <button
            type="button"
            className={`btn btn--chip ${speakingIndex !== null ? 'is-active' : ''}`}
            onClick={() => (speakingIndex !== null ? stopPlayback() : playParagraphs(0))}
          >
            {speakingIndex !== null ? 'Stop' : 'Listen'}
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

      {showArt && story.cover && !story.paragraphs.some((paragraph) => paragraph.image) ? (
        <img
          className="reader__cover"
          src={`${import.meta.env.BASE_URL}${story.cover}`}
          alt=""
          aria-hidden="true"
        />
      ) : null}

      <article className="reader__body">
        {story.paragraphs.map((paragraph, index) => {
          const open = showAllEnglish || openParagraphs[index]
          const speaking = speakingIndex === index
          return (
            <div
              key={index}
              ref={(node) => {
                passageRefs.current[index] = node
              }}
              className={`passage ${open ? 'is-open' : ''} ${speaking ? 'is-speaking' : ''}`}
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
              {showArt && paragraph.image && !brokenImages.has(paragraph.image) ? (
                <img
                  className="passage__art"
                  src={`${import.meta.env.BASE_URL}${paragraph.image}`}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  onError={() => {
                    setBrokenImages((prev) => new Set(prev).add(paragraph.image!))
                  }}
                />
              ) : null}
              <div className="passage__row">
                <p className="passage__ko">
                  {renderKoreanWithWords(paragraph.ko, paragraph.words, (word) => {
                    setActiveWord(word)
                  })}
                </p>
                <button
                  type="button"
                  className={`passage__listen ${speaking ? 'is-active' : ''}`}
                  aria-label={speaking ? 'Stop reading' : 'Listen to this paragraph'}
                  title={speaking ? 'Stop' : 'Listen'}
                  onClick={(event) => {
                    event.stopPropagation()
                    if (speaking) stopPlayback()
                    else playParagraphs(index, index + 1)
                  }}
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                    <path
                      d="M4 9v6h4l5 4V5L8 9H4zm12.5 3a3.5 3.5 0 0 0-2-3.15v6.3a3.5 3.5 0 0 0 2-3.15zm-2-7v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </div>
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

          {story.questions.length > 0 ? (
            <div className="reader__quiz">
              <h4>Did you catch it?</h4>
              <StoryQuiz questions={story.questions} />
            </div>
          ) : null}

          <p className="reader__save-hint">Save a few words while they’re still warm.</p>
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
            <div className="practice-tabs">
              <button
                type="button"
                className={`btn btn--chip ${practiceMode === 'match' ? 'is-active' : ''}`}
                onClick={() => setPracticeMode(practiceMode === 'match' ? 'none' : 'match')}
              >
                Matching game
              </button>
              <button
                type="button"
                className={`btn btn--chip ${practiceMode === 'cloze' ? 'is-active' : ''}`}
                onClick={() => setPracticeMode(practiceMode === 'cloze' ? 'none' : 'cloze')}
              >
                Fill in the blank
              </button>
              <button
                type="button"
                className={`btn btn--chip ${practiceMode === 'build' ? 'is-active' : ''}`}
                onClick={() => setPracticeMode(practiceMode === 'build' ? 'none' : 'build')}
              >
                Build sentences
              </button>
            </div>
            {practiceMode === 'match' ? <WordMatch words={allWords.slice(0, 6)} /> : null}
            {practiceMode === 'cloze' ? <WordCloze story={story} /> : null}
            {practiceMode === 'build' ? <SentenceBuilder story={story} /> : null}
          </div>
        </div>
      )}

      {activeWord
        ? // Rendered in a portal: ancestor transforms (e.g. the panel's entry
          // animation) would otherwise re-anchor this fixed overlay.
          createPortal(
            <div
              className="word-sheet"
              role="dialog"
              aria-label="Word meaning"
              onClick={() => setActiveWord(null)}
            >
              <div className="word-sheet__card" onClick={(event) => event.stopPropagation()}>
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
            </div>,
            document.body,
          )
        : null}
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
