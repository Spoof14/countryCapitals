import { useState } from 'react'
import {
  commonWordCategories,
  conversations,
  usefulPhraseCategories,
  type Conversation,
  type PhraseEntry,
} from '../data/phrases'
import { speakKorean } from '../lib/speech'
import SpeechControls from './SpeechControls'

type PhrasesTab = 'words' | 'phrases' | 'conversations'

function PhraseCard({ entry }: { entry: PhraseEntry }) {
  return (
    <button type="button" className="phrases__card" onClick={() => speakKorean(entry.ko)}>
      <span className="phrases__ko">{entry.ko}</span>
      {entry.romanization ? <span className="phrases__rom">{entry.romanization}</span> : null}
      <span className="phrases__en">{entry.en}</span>
    </button>
  )
}

function PhraseList({ phrases }: { phrases: PhraseEntry[] }) {
  return (
    <ul className="phrases__list">
      {phrases.map((phrase) => (
        <li key={phrase.ko}>
          <button type="button" className="phrases__row" onClick={() => speakKorean(phrase.ko)}>
            <div>
              <p className="phrases__ko">{phrase.ko}</p>
              {phrase.romanization ? <p className="phrases__rom">{phrase.romanization}</p> : null}
              <p className="phrases__en">{phrase.en}</p>
            </div>
            <span className="phrases__hear">Hear</span>
          </button>
        </li>
      ))}
    </ul>
  )
}

function ConversationCard({ conversation }: { conversation: Conversation }) {
  const [open, setOpen] = useState(false)

  return (
    <article className="phrases__conversation">
      <button
        type="button"
        className="phrases__conversation-toggle"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <div>
          <h3>{conversation.title}</h3>
          <p>{conversation.description}</p>
        </div>
        <span className="phrases__conversation-chevron" aria-hidden>
          {open ? '−' : '+'}
        </span>
      </button>

      {open ? (
        <div className="phrases__dialogue">
          {conversation.lines.map((line, index) => (
            <div
              key={`${line.speaker}-${index}`}
              className={`phrases__bubble${line.speaker === 'You' ? ' phrases__bubble--you' : ''}`}
            >
              <p className="phrases__speaker">{line.speaker}</p>
              <button type="button" className="phrases__bubble-text" onClick={() => speakKorean(line.ko)}>
                <p className="phrases__ko">{line.ko}</p>
                {line.romanization ? <p className="phrases__rom">{line.romanization}</p> : null}
                <p className="phrases__en">{line.en}</p>
              </button>
            </div>
          ))}
          <button
            type="button"
            className="btn btn--chip phrases__play-all"
            onClick={() => speakKorean(conversation.lines.map((line) => line.ko).join('. '))}
          >
            Play full conversation
          </button>
        </div>
      ) : null}
    </article>
  )
}

export default function PhrasesPanel() {
  const [tab, setTab] = useState<PhrasesTab>('words')

  return (
    <section className="panel phrases">
      <header className="panel__header">
        <h2>Everyday Korean</h2>
        <p>
          Common words, ready-made phrases, and short dialogues for real situations. Tap anything
          to hear it aloud.
        </p>
      </header>

      <div className="practice-tabs phrases__tabs" role="tablist" aria-label="Phrase sections">
        <button
          type="button"
          role="tab"
          aria-selected={tab === 'words'}
          className={`btn btn--chip${tab === 'words' ? ' is-active' : ''}`}
          onClick={() => setTab('words')}
        >
          Common words
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={tab === 'phrases'}
          className={`btn btn--chip${tab === 'phrases' ? ' is-active' : ''}`}
          onClick={() => setTab('phrases')}
        >
          Useful phrases
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={tab === 'conversations'}
          className={`btn btn--chip${tab === 'conversations' ? ' is-active' : ''}`}
          onClick={() => setTab('conversations')}
        >
          Conversations
        </button>
      </div>

      <SpeechControls compact />

      {tab === 'words'
        ? commonWordCategories.map((category) => (
            <div key={category.title} className="phrases__section">
              <h3>{category.title}</h3>
              {category.description ? <p className="phrases__description">{category.description}</p> : null}
              <div className="phrases__grid">
                {category.phrases.map((entry) => (
                  <PhraseCard key={entry.ko} entry={entry} />
                ))}
              </div>
            </div>
          ))
        : null}

      {tab === 'phrases'
        ? usefulPhraseCategories.map((category) => (
            <div key={category.title} className="phrases__section">
              <h3>{category.title}</h3>
              <PhraseList phrases={category.phrases} />
            </div>
          ))
        : null}

      {tab === 'conversations' ? (
        <div className="phrases__section">
          {conversations.map((conversation) => (
            <ConversationCard key={conversation.id} conversation={conversation} />
          ))}
        </div>
      ) : null}

      <p className="phrases__footnote">
        Sounds use your browser&apos;s Korean voice. If nothing plays, your device may not have one
        installed.
      </p>
    </section>
  )
}
