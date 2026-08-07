export type SpeechSpeed = 'slow' | 'normal' | 'fast'
export type SpeechMode = 'sentence' | 'word'

export type SpeechSettings = {
  speed: SpeechSpeed
  mode: SpeechMode
}

export const SPEECH_SETTINGS_STORAGE_KEY = 'madang-speech-settings'

export const SPEECH_SPEED_RATES: Record<SpeechSpeed, number> = {
  slow: 0.55,
  normal: 0.85,
  fast: 1.05,
}

/** Pause between words when word-by-word mode is on. */
export const SPEECH_WORD_GAP_MS = 450

export const DEFAULT_SPEECH_SETTINGS: SpeechSettings = {
  speed: 'slow',
  mode: 'sentence',
}
