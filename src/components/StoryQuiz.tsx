import { useState } from 'react'
import type { ComprehensionQuestion } from '../types'

type StoryQuizProps = {
  questions: ComprehensionQuestion[]
}

export default function StoryQuiz({ questions }: StoryQuizProps) {
  const [index, setIndex] = useState(0)
  const [picked, setPicked] = useState<number | null>(null)
  const [correctCount, setCorrectCount] = useState(0)
  const [done, setDone] = useState(false)

  const current = questions[index]

  if (done || !current) {
    const perfect = correctCount === questions.length
    return (
      <div className="quiz quiz--done">
        <p className="quiz__score">
          {correctCount} / {questions.length} correct{perfect ? ' — 완벽해요!' : ''}
        </p>
        <button
          type="button"
          className="btn btn--chip"
          onClick={() => {
            setIndex(0)
            setPicked(null)
            setCorrectCount(0)
            setDone(false)
          }}
        >
          Try again
        </button>
      </div>
    )
  }

  const pick = (optionIndex: number) => {
    if (picked !== null) return
    setPicked(optionIndex)
    if (optionIndex === current.answerIndex) setCorrectCount((count) => count + 1)
  }

  return (
    <div className="quiz">
      <p className="quiz__hint">
        Question {index + 1} of {questions.length}
      </p>
      <p className="quiz__question">{current.question}</p>
      <div className="quiz__options">
        {current.options.map((option, optionIndex) => {
          let state = ''
          if (picked !== null) {
            if (optionIndex === current.answerIndex) state = 'is-correct'
            else if (optionIndex === picked) state = 'is-wrong'
          }
          return (
            <button
              key={option}
              type="button"
              className={`quiz__option ${state}`}
              onClick={() => pick(optionIndex)}
            >
              {option}
            </button>
          )
        })}
      </div>
      {picked !== null ? (
        <div className="quiz__actions">
          <button
            type="button"
            className="btn btn--primary"
            onClick={() => {
              if (index + 1 === questions.length) setDone(true)
              else {
                setIndex((value) => value + 1)
                setPicked(null)
              }
            }}
          >
            {index + 1 === questions.length ? 'See score' : 'Next'}
          </button>
        </div>
      ) : null}
    </div>
  )
}
