import {
  DEFAULT_SPEECH_SETTINGS,
  SPEECH_SPEED_RATES,
  SPEECH_WORD_GAP_MS,
  type SpeechSettings,
} from '../config/speech'

let activeSettings: SpeechSettings = { ...DEFAULT_SPEECH_SETTINGS }
let playbackSession = 0
let playbackTimer: ReturnType<typeof setTimeout> | null = null

export function setActiveSpeechSettings(settings: SpeechSettings) {
  activeSettings = settings
}

export function getActiveSpeechSettings(): SpeechSettings {
  return activeSettings
}

export function tokenizeKorean(text: string): string[] {
  return text.trim().split(/\s+/).filter(Boolean)
}

export function getSpeechWordGapMs() {
  return SPEECH_WORD_GAP_MS
}

function clearPlaybackTimer() {
  if (playbackTimer) {
    clearTimeout(playbackTimer)
    playbackTimer = null
  }
}

function delay(ms: number, session: number): Promise<void> {
  return new Promise((resolve) => {
    playbackTimer = setTimeout(() => {
      playbackTimer = null
      if (session === playbackSession) resolve()
    }, ms)
  })
}

function pickKoreanVoice() {
  const voices = window.speechSynthesis.getVoices()
  return voices.find((voice) => voice.lang.toLowerCase().startsWith('ko'))
}

export function createKoreanUtterance(text: string): SpeechSynthesisUtterance {
  const utterance = new SpeechSynthesisUtterance(text)
  utterance.lang = 'ko-KR'
  utterance.rate = SPEECH_SPEED_RATES[activeSettings.speed]

  const koreanVoice = pickKoreanVoice()
  if (koreanVoice) utterance.voice = koreanVoice

  return utterance
}

export function speakAndWait(text: string): Promise<void> {
  return new Promise((resolve) => {
    if (typeof window === 'undefined' || !window.speechSynthesis) {
      resolve()
      return
    }

    const utterance = createKoreanUtterance(text)
    utterance.onend = () => resolve()
    utterance.onerror = () => resolve()
    window.speechSynthesis.speak(utterance)
  })
}

export type SpeakKoreanCallbacks = {
  onStart?: () => void
  onWordStart?: (wordIndex: number, word: string) => void
  onEnd?: () => void
}

export async function speakKorean(text: string, callbacks?: SpeakKoreanCallbacks) {
  if (typeof window === 'undefined' || !window.speechSynthesis) return

  stopSpeaking()
  const session = playbackSession
  const tokens = activeSettings.mode === 'word' ? tokenizeKorean(text) : [text]

  callbacks?.onStart?.()

  for (let index = 0; index < tokens.length; index += 1) {
    if (session !== playbackSession) return

    const token = tokens[index]
    callbacks?.onWordStart?.(index, token)
    await speakAndWait(token)
    if (session !== playbackSession) return

    if (activeSettings.mode === 'word' && index < tokens.length - 1) {
      await delay(SPEECH_WORD_GAP_MS, session)
    }
  }

  if (session === playbackSession) callbacks?.onEnd?.()
}

export function stopSpeaking() {
  playbackSession += 1
  clearPlaybackTimer()
  if (typeof window === 'undefined' || !window.speechSynthesis) return
  window.speechSynthesis.cancel()
}

export function isPlaybackCancelled(session: number) {
  return session !== playbackSession
}

export function beginPlaybackSession() {
  stopSpeaking()
  return playbackSession
}
