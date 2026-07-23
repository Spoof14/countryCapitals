import { useState } from 'react'
import type { Story } from '../types'
import { speakKorean } from '../lib/speech'

type ClozeQuestion = {
  prompt: string
  answer: string
  choices: string[]
  translation: string
}

type WordClozeProps = {
  story: Story
}

const shuffle = <T,>(items: T[]): T[] => [...items].sort(() => Math.random() - 0.5)

const buildQuestions = (story: Story): ClozeQuestion[] => {
  const wordPool = [
    ...new Set(story.paragraphs.flatMap((paragraph) => paragraph.words.map((word) => word.ko))),
  ]

  const questions: ClozeQuestion[] = []
  for (const paragraph of story.paragraphs) {
    const inSentence = paragraph.words.filter((word) => paragraph.ko.includes(word.ko))
    if (inSentence.length === 0) continue
    const target = inSentence[Math.floor(Math.random() * inSentence.length)]
    const distractors = shuffle(wordPool.filter((ko) => ko !== target.ko)).slice(0, 3)
    questions.push({
      prompt: paragraph.ko.replace(target.ko, '＿＿＿'),
      answer: target.ko,
      choices: shuffle([target.ko, ...distractors]),
      translation: paragraph.en,
    })
  }
  return shuffle(questions).slice(0, 5)
}

export default function WordCloze({ story }: WordClozeProps) {
  const [questions, setQuestions] = useState<ClozeQuestion[]>(() => buildQuestions(story))
  const [index, setIndex] = useState(0)
  const [picked, setPicked] = useState<string | null>(null)
  const [correctCount, setCorrectCount] = useState(0)

  const current = questions[index]

  if (!current) {
    return (
      <div className="cloze cloze--done">
        <p className="cloze__score">
          {correctCount} / {questions.length} correct — 수고했어요!
        </p>
        <button
          type="button"
          className="btn btn--chip"
          onClick={() => {
            setQuestions(buildQuestions(story))
            setIndex(0)
            setPicked(null)
            setCorrectCount(0)
          }}
        >
          Play again
        </button>
      </div>
    )
  }

  const pick = (choice: string) => {
    if (picked !== null) return
    setPicked(choice)
    if (choice === current.answer) setCorrectCount((count) => count + 1)
  }

  return (
    <div className="cloze">
      <p className="cloze__hint">
        Question {index + 1} of {questions.length} · pick the missing word.
      </p>
      <p className="cloze__sentence">{current.prompt}</p>
      {picked !== null ? <p className="cloze__translation">{current.translation}</p> : null}
      <div className="cloze__choices">
        {current.choices.map((choice) => {
          let state = ''
          if (picked !== null) {
            if (choice === current.answer) state = 'is-correct'
            else if (choice === picked) state = 'is-wrong'
          }
          return (
            <button
              key={choice}
              type="button"
              className={`cloze__choice ${state}`}
              onClick={() => pick(choice)}
            >
              {choice}
            </button>
          )
        })}
      </div>
      {picked !== null ? (
        <div className="cloze__actions">
          <button type="button" className="btn btn--chip" onClick={() => speakKorean(current.answer)}>
            Hear word
          </button>
          <button
            type="button"
            className="btn btn--primary"
            onClick={() => {
              setPicked(null)
              setIndex((value) => value + 1)
            }}
          >
            {index + 1 === questions.length ? 'See score' : 'Next'}
          </button>
        </div>
      ) : null}
    </div>
  )
}
