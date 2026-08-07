import { createContext, useContext, useEffect, type ReactNode } from 'react'
import {
  DEFAULT_SPEECH_SETTINGS,
  SPEECH_SETTINGS_STORAGE_KEY,
  type SpeechMode,
  type SpeechSettings,
  type SpeechSpeed,
} from '../config/speech'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { setActiveSpeechSettings } from '../lib/speech'

type SpeechSettingsContextValue = {
  settings: SpeechSettings
  setSpeed: (speed: SpeechSpeed) => void
  setMode: (mode: SpeechMode) => void
}

const SpeechSettingsContext = createContext<SpeechSettingsContextValue | null>(null)

export function SpeechSettingsProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useLocalStorage<SpeechSettings>(
    SPEECH_SETTINGS_STORAGE_KEY,
    DEFAULT_SPEECH_SETTINGS,
  )

  useEffect(() => {
    setActiveSpeechSettings(settings)
  }, [settings])

  const value: SpeechSettingsContextValue = {
    settings,
    setSpeed: (speed) => setSettings((current) => ({ ...current, speed })),
    setMode: (mode) => setSettings((current) => ({ ...current, mode })),
  }

  return <SpeechSettingsContext.Provider value={value}>{children}</SpeechSettingsContext.Provider>
}

export function useSpeechSettings() {
  const context = useContext(SpeechSettingsContext)
  if (!context) {
    throw new Error('useSpeechSettings must be used within SpeechSettingsProvider')
  }
  return context
}
