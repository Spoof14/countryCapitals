import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import {
  configurePurchases,
  purchasePremium,
  readLocalPremium,
  restorePurchases,
  syncPremiumFromStore,
  unlockPremiumForDev,
  webCheckoutUrl,
  type PurchaseState,
} from '../lib/purchases'
import { canAccessStory, getFreeStoryCount, getLockedStoryCount } from '../lib/storyAccess'

type PremiumContextValue = {
  isPremium: boolean
  isLoading: boolean
  error: string | null
  freeStoryCount: number
  lockedStoryCount: number
  canAccessStory: (storyId: string) => boolean
  purchase: () => Promise<void>
  restore: () => Promise<void>
  clearError: () => void
  webCheckoutUrl?: string
  unlockForDev?: () => void
}

const PremiumContext = createContext<PremiumContextValue | null>(null)

export function PremiumProvider({ children }: { children: ReactNode }) {
  const [isPremium, setIsPremium] = useState(() => readLocalPremium())
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const applyPurchaseState = useCallback((state: PurchaseState) => {
    setIsPremium(state.isPremium)
  }, [])

  useEffect(() => {
    let cancelled = false

    async function init() {
      try {
        await configurePurchases()
        const state = await syncPremiumFromStore()
        if (!cancelled) applyPurchaseState(state)
      } catch (err) {
        if (!cancelled) {
          console.error('[Madang] Purchase init failed:', err)
          setIsPremium(readLocalPremium())
        }
      } finally {
        if (!cancelled) setIsLoading(false)
      }
    }

    void init()
    return () => {
      cancelled = true
    }
  }, [applyPurchaseState])

  const purchase = useCallback(async () => {
    setError(null)
    setIsLoading(true)
    try {
      const state = await purchasePremium()
      applyPurchaseState(state)
      if (!state.isPremium) {
        setError('Purchase completed but premium was not activated. Try restoring purchases.')
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Purchase failed.'
      if (!message.toLowerCase().includes('cancel')) {
        setError(message)
      }
    } finally {
      setIsLoading(false)
    }
  }, [applyPurchaseState])

  const restore = useCallback(async () => {
    setError(null)
    setIsLoading(true)
    try {
      const state = await restorePurchases()
      applyPurchaseState(state)
      if (!state.isPremium) {
        setError('No previous purchase found for this account.')
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not restore purchases.')
    } finally {
      setIsLoading(false)
    }
  }, [applyPurchaseState])

  const value = useMemo<PremiumContextValue>(
    () => ({
      isPremium,
      isLoading,
      error,
      freeStoryCount: getFreeStoryCount(),
      lockedStoryCount: getLockedStoryCount(),
      canAccessStory: (storyId) => canAccessStory(storyId, isPremium),
      purchase,
      restore,
      clearError: () => setError(null),
      webCheckoutUrl: webCheckoutUrl(),
      unlockForDev: import.meta.env.DEV ? () => applyPurchaseState(unlockPremiumForDev()) : undefined,
    }),
    [applyPurchaseState, error, isLoading, isPremium, purchase, restore],
  )

  return <PremiumContext.Provider value={value}>{children}</PremiumContext.Provider>
}

export function usePremium() {
  const context = useContext(PremiumContext)
  if (!context) {
    throw new Error('usePremium must be used within PremiumProvider')
  }
  return context
}
