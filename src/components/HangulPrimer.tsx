import { hangulSections } from '../data/hangul'
import { speakKorean } from '../lib/speech'
import SpeechControls from './SpeechControls'

export default function HangulPrimer() {
  return (
    <section className="panel hangul">
      <header className="panel__header">
        <h2>Hangul in an afternoon</h2>
        <p>
          Korean is written in syllable blocks built from simple letters: ㅎ + ㅏ + ㄴ stack into 한.
          Learn these sounds and you can read every word in the stories — even before you know what
          they mean.
        </p>
      </header>

      <SpeechControls compact />

      {hangulSections.map((section) => (
        <div key={section.title} className="hangul__section">
          <h3>{section.title}</h3>
          <p className="hangul__description">{section.description}</p>
          <div className="hangul__grid">
            {section.jamo.map((jamo) => (
              <button
                key={jamo.char}
                type="button"
                className="hangul__tile"
                onClick={() => speakKorean(`${jamo.name}. ${jamo.sample}`)}
              >
                <span className="hangul__char">{jamo.char}</span>
                <span className="hangul__roman">{jamo.roman}</span>
                <span className="hangul__sample">{jamo.sample}</span>
              </button>
            ))}
          </div>
        </div>
      ))}

      <p className="hangul__footnote">
        Sounds use your browser's Korean voice. If nothing plays, your device may not have one
        installed.
      </p>
    </section>
  )
}
