import { useState } from 'react'
import type { StoryWord } from '../types'

type MatchItem = {
  id: string
  text: string
  pairKey: string
}

type WordMatchProps = {
  words: StoryWord[]
  onAllMatched?: () => void
}

const buildItems = (words: StoryWord[]): MatchItem[] =>
  words
    .flatMap((word) => [
      { id: `${word.ko}::ko`, text: word.ko, pairKey: word.ko },
      { id: `${word.ko}::en`, text: word.en, pairKey: word.ko },
    ])
    .sort(() => Math.random() - 0.5)

export default function WordMatch({ words, onAllMatched }: WordMatchProps) {
  const [items, setItems] = useState<MatchItem[]>(() => buildItems(words))
  const [selectedIds, setSelectedIds] = useState<string[]>([])
  const [isWrong, setIsWrong] = useState(false)

  const handlePick = (item: MatchItem) => {
    if (isWrong) {
      setSelectedIds([item.id])
      setIsWrong(false)
      return
    }
    if (selectedIds.includes(item.id)) {
      setSelectedIds(selectedIds.filter((id) => id !== item.id))
      return
    }
    if (selectedIds.length === 0) {
      setSelectedIds([item.id])
      return
    }

    const first = items.find((candidate) => candidate.id === selectedIds[0])
    if (first && first.pairKey === item.pairKey) {
      const remaining = items.filter((candidate) => candidate.pairKey !== item.pairKey)
      setItems(remaining)
      setSelectedIds([])
      if (remaining.length === 0) onAllMatched?.()
    } else {
      setSelectedIds([...selectedIds, item.id])
      setIsWrong(true)
    }
  }

  const restart = () => {
    setItems(buildItems(words))
    setSelectedIds([])
    setIsWrong(false)
  }

  if (items.length === 0) {
    return (
      <div className="match match--done">
        <p className="match__congrats">참 잘했어요! All matched.</p>
        <button type="button" className="btn btn--chip" onClick={restart}>
          Play again
        </button>
      </div>
    )
  }

  return (
    <div className="match">
      <p className="match__hint">Match each Korean word with its meaning.</p>
      <div className="match__grid">
        {items.map((item) => {
          const selected = selectedIds.includes(item.id)
          return (
            <button
              key={item.id}
              type="button"
              className={`match__tile ${selected ? (isWrong ? 'is-wrong' : 'is-selected') : ''}`}
              onClick={() => handlePick(item)}
            >
              {item.text}
            </button>
          )
        })}
      </div>
    </div>
  )
}
