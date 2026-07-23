import { useState } from 'react'
import type { Story } from '../types'
import { speakKorean } from '../lib/speech'

type Token = {
  id: number
  text: string
}

type BuilderItem = {
  sentence: string
  bank: Token[]
}

type SentenceBuilderProps = {
  story: Story
}

const shuffle = <T,>(items: T[]): T[] => [...items].sort(() => Math.random() - 0.5)

const buildItems = (story: Story): BuilderItem[] => {
  const sentences = story.paragraphs
    .flatMap((paragraph) => paragraph.ko.split(/(?<=[.!?！？”])\s+/))
    .map((sentence) => sentence.trim())
    .filter((sentence) => {
      const count = sentence.split(' ').length
      return count >= 4 && count <= 9
    })

  return shuffle(sentences)
    .slice(0, 5)
    .map((sentence) => ({
      sentence,
      bank: shuffle(sentence.split(' ').map((text, id) => ({ id, text }))),
    }))
}

export default function SentenceBuilder({ story }: SentenceBuilderProps) {
  const [items, setItems] = useState<BuilderItem[]>(() => buildItems(story))
  const [index, setIndex] = useState(0)
  const [placedIds, setPlacedIds] = useState<number[]>([])
  const [result, setResult] = useState<'correct' | 'wrong' | null>(null)
  const [revealed, setRevealed] = useState(false)
  const [correctCount, setCorrectCount] = useState(0)

  const current = items[index]

  if (!current) {
    return (
      <div className="builder builder--done">
        <p className="builder__score">
          {correctCount} / {items.length} rebuilt — 대단해요!
        </p>
        <button
          type="button"
          className="btn btn--chip"
          onClick={() => {
            setItems(buildItems(story))
            setIndex(0)
            setPlacedIds([])
            setResult(null)
            setRevealed(false)
            setCorrectCount(0)
          }}
        >
          Play again
        </button>
      </div>
    )
  }

  const tokenById = new Map(current.bank.map((token) => [token.id, token]))
  const placed = placedIds.map((id) => tokenById.get(id)!)
  const remaining = current.bank.filter((token) => !placedIds.includes(token.id))

  const placeToken = (token: Token) => {
    if (result === 'correct' || revealed) return
    const nextPlaced = [...placedIds, token.id]
    setPlacedIds(nextPlaced)
    setResult(null)
    if (nextPlaced.length === current.bank.length) {
      const attempt = nextPlaced
        .map((id) => tokenById.get(id)!.text)
        .join(' ')
      if (attempt === current.sentence) {
        setResult('correct')
        setCorrectCount((count) => count + 1)
        speakKorean(current.sentence)
      } else {
        setResult('wrong')
      }
    }
  }

  const removeToken = (id: number) => {
    if (result === 'correct' || revealed) return
    setPlacedIds(placedIds.filter((placedId) => placedId !== id))
    setResult(null)
  }

  const goNext = () => {
    setIndex((value) => value + 1)
    setPlacedIds([])
    setResult(null)
    setRevealed(false)
  }

  return (
    <div className="builder">
      <p className="builder__hint">
        Sentence {index + 1} of {items.length} · listen, then rebuild it in order.
      </p>

      <div className="builder__toolbar">
        <button type="button" className="btn btn--chip" onClick={() => speakKorean(current.sentence)}>
          Listen
        </button>
      </div>

      <div
        className={`builder__answer ${result === 'correct' ? 'is-correct' : ''} ${
          result === 'wrong' ? 'is-wrong' : ''
        }`}
      >
        {revealed ? (
          <span className="builder__revealed">{current.sentence}</span>
        ) : placed.length === 0 ? (
          <span className="builder__placeholder">Tap the words below…</span>
        ) : (
          placed.map((token) => (
            <button
              key={token.id}
              type="button"
              className="builder__tile is-placed"
              onClick={() => removeToken(token.id)}
            >
              {token.text}
            </button>
          ))
        )}
      </div>

      <div className="builder__bank">
        {remaining.map((token) => (
          <button
            key={token.id}
            type="button"
            className="builder__tile"
            onClick={() => placeToken(token)}
          >
            {token.text}
          </button>
        ))}
      </div>

      <div className="builder__actions">
        {result === 'wrong' && !revealed ? (
          <>
            <button
              type="button"
              className="btn btn--ghost"
              onClick={() => {
                setPlacedIds([])
                setResult(null)
              }}
            >
              Try again
            </button>
            <button type="button" className="btn btn--chip" onClick={() => setRevealed(true)}>
              Show answer
            </button>
          </>
        ) : null}
        {result === 'correct' || revealed ? (
          <button type="button" className="btn btn--primary" onClick={goNext}>
            {index + 1 === items.length ? 'See score' : 'Next sentence'}
          </button>
        ) : null}
      </div>
    </div>
  )
}
