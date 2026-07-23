import { useMemo, useState } from 'react'
import type { SavedWord } from '../types'
import { speakKorean } from '../lib/speech'

type WordReviewProps = {
  dueWords: SavedWord[]
  onGrade: (ko: string, remembered: boolean) => void
  onDone: () => void
}

export default function WordReview({ dueWords, onGrade, onDone }: WordReviewProps) {
  const queue = useMemo(() => dueWords.slice(0, 12), [dueWords])
  const [index, setIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)

  const current = queue[index]
  const remaining = queue.length - index

  if (!current) {
    return (
      <section className="panel review">
        <header className="panel__header">
          <h2>Review complete</h2>
          <p>Come back after your next story. Spaced practice sticks better than cramming.</p>
        </header>
        <button type="button" className="btn btn--primary" onClick={onDone}>
          Back to words
        </button>
      </section>
    )
  }

  const advance = (remembered: boolean) => {
    onGrade(current.ko, remembered)
    setFlipped(false)
    setIndex((value) => value + 1)
  }

  return (
    <section className="panel review">
      <header className="panel__header">
        <h2>Quick review</h2>
        <p>
          {remaining} left · look at the Korean first, then check yourself.
        </p>
      </header>

      <button
        type="button"
        className={`review-card ${flipped ? 'is-flipped' : ''}`}
        onClick={() => setFlipped(true)}
      >
        <p className="review-card__ko">{current.ko}</p>
        {flipped ? (
          <>
            {current.romanization ? <p className="review-card__rom">{current.romanization}</p> : null}
            <p className="review-card__en">{current.en}</p>
          </>
        ) : (
          <p className="review-card__prompt">Tap to reveal</p>
        )}
      </button>

      <div className="review__actions">
        <button type="button" className="btn btn--chip" onClick={() => speakKorean(current.ko)}>
          Hear
        </button>
        {flipped ? (
          <>
            <button type="button" className="btn btn--ghost" onClick={() => advance(false)}>
              Again
            </button>
            <button type="button" className="btn btn--primary" onClick={() => advance(true)}>
              Got it
            </button>
          </>
        ) : null}
      </div>
    </section>
  )
}
