import { useSpeechSettings } from '../context/SpeechSettingsContext'
import type { SpeechMode, SpeechSpeed } from '../config/speech'

const speedOptions: Array<{ value: SpeechSpeed; label: string }> = [
  { value: 'slow', label: 'Slow' },
  { value: 'normal', label: 'Normal' },
  { value: 'fast', label: 'Fast' },
]

const modeOptions: Array<{ value: SpeechMode; label: string }> = [
  { value: 'sentence', label: 'Full sentence' },
  { value: 'word', label: 'Word by word' },
]

type SpeechControlsProps = {
  compact?: boolean
}

export default function SpeechControls({ compact = false }: SpeechControlsProps) {
  const { settings, setSpeed, setMode } = useSpeechSettings()

  return (
    <div className={`speech-controls${compact ? ' speech-controls--compact' : ''}`}>
      <div className="speech-controls__group">
        <span className="speech-controls__label">Speed</span>
        <div className="speech-controls__options" role="group" aria-label="Speech speed">
          {speedOptions.map((option) => (
            <button
              key={option.value}
              type="button"
              className={`btn btn--chip${settings.speed === option.value ? ' is-active' : ''}`}
              aria-pressed={settings.speed === option.value}
              onClick={() => setSpeed(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
      <div className="speech-controls__group">
        <span className="speech-controls__label">Reading</span>
        <div className="speech-controls__options" role="group" aria-label="Reading mode">
          {modeOptions.map((option) => (
            <button
              key={option.value}
              type="button"
              className={`btn btn--chip${settings.mode === option.value ? ' is-active' : ''}`}
              aria-pressed={settings.mode === option.value}
              onClick={() => setMode(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
