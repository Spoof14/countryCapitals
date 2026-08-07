import { Link } from '@tanstack/react-router'
import type { SavedWord } from '../types'
import { speakKorean } from '../lib/speech'
import SpeechControls from './SpeechControls'

type WordBookProps = {
  words: SavedWord[]
  dueCount: number
  onRemove: (ko: string) => void
  reviewTo: string
}

export default function WordBook({ words, dueCount, onRemove, reviewTo }: WordBookProps) {
  return (
    <section className="panel words">
      <header className="panel__header">
        <h2>Word notebook</h2>
        <p>Words you saved while reading. Review a little, often.</p>
      </header>

      <SpeechControls compact />

      {dueCount > 0 ? (
        <div className="words__due">
          <p>
            {dueCount} {dueCount === 1 ? 'word is' : 'words are'} ready for a quick review.
          </p>
          <Link to={reviewTo} className="btn btn--primary">
            Review now
          </Link>
        </div>
      ) : null}

      {words.length === 0 ? (
        <p className="empty">Save words from a story and they’ll gather here.</p>
      ) : (
        <ul className="notebook">
          {words.map((word) => (
            <li key={`${word.ko}-${word.savedAt}`} className="notebook__row">
              <div>
                <p className="notebook__ko">{word.ko}</p>
                {word.romanization ? <p className="notebook__rom">{word.romanization}</p> : null}
                <p className="notebook__en">{word.en}</p>
              </div>
              <div className="notebook__actions">
                <button type="button" className="btn btn--chip" onClick={() => speakKorean(word.ko)}>
                  Hear
                </button>
                <button type="button" className="btn btn--text" onClick={() => onRemove(word.ko)}>
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
