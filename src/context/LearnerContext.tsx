import { createContext, useContext, type ReactNode } from 'react'
import { useLearnerState } from '../hooks/useLearnerState'

type LearnerContextValue = ReturnType<typeof useLearnerState>

const LearnerContext = createContext<LearnerContextValue | null>(null)

export function LearnerProvider({ children }: { children: ReactNode }) {
  const value = useLearnerState()
  return <LearnerContext.Provider value={value}>{children}</LearnerContext.Provider>
}

export function useLearner() {
  const context = useContext(LearnerContext)
  if (!context) {
    throw new Error('useLearner must be used within LearnerProvider')
  }
  return context
}
