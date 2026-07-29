import { Capacitor } from '@capacitor/core'
import { Purchases, LOG_LEVEL } from '@revenuecat/purchases-capacitor'
import { PREMIUM_ENTITLEMENT_ID, PREMIUM_PRODUCT_ID } from '../config/monetization'

const PREMIUM_STORAGE_KEY = 'madang.premium'

export type PurchaseState = {
  isPremium: boolean
  source: 'local' | 'revenuecat' | 'dev'
}

export function readLocalPremium(): boolean {
  try {
    return localStorage.getItem(PREMIUM_STORAGE_KEY) === 'true'
  } catch {
    return false
  }
}

export function writeLocalPremium(isPremium: boolean) {
  try {
    localStorage.setItem(PREMIUM_STORAGE_KEY, isPremium ? 'true' : 'false')
  } catch {
    // Ignore quota errors in private browsing.
  }
}

function revenueCatApiKey(): string | undefined {
  const platform = Capacitor.getPlatform()
  if (platform === 'ios') return import.meta.env.VITE_REVENUECAT_APPLE_API_KEY
  if (platform === 'android') return import.meta.env.VITE_REVENUECAT_GOOGLE_API_KEY
  return undefined
}

export function isNativeStoreAvailable(): boolean {
  return Capacitor.isNativePlatform() && Boolean(revenueCatApiKey())
}

export function webCheckoutUrl(): string | undefined {
  const url = import.meta.env.VITE_STRIPE_PAYMENT_LINK
  return url || undefined
}

export async function configurePurchases(): Promise<void> {
  if (!Capacitor.isNativePlatform()) return

  const apiKey = revenueCatApiKey()
  if (!apiKey) {
    console.warn('[Madang] RevenueCat API key missing — in-app purchases disabled.')
    return
  }

  await Purchases.setLogLevel({ level: import.meta.env.DEV ? LOG_LEVEL.DEBUG : LOG_LEVEL.WARN })
  await Purchases.configure({ apiKey })
}

function hasPremiumEntitlement(customerInfo: { entitlements: { active: Record<string, unknown> } }): boolean {
  return Boolean(customerInfo.entitlements.active[PREMIUM_ENTITLEMENT_ID])
}

export async function syncPremiumFromStore(): Promise<PurchaseState> {
  if (!isNativeStoreAvailable()) {
    const isPremium = readLocalPremium()
    return { isPremium, source: 'local' }
  }

  const { customerInfo } = await Purchases.getCustomerInfo()
  const isPremium = hasPremiumEntitlement(customerInfo)
  writeLocalPremium(isPremium)
  return { isPremium, source: 'revenuecat' }
}

export async function purchasePremium(): Promise<PurchaseState> {
  if (!isNativeStoreAvailable()) {
    throw new Error('In-app purchases are only available in the iOS and Android apps.')
  }

  const offerings = await Purchases.getOfferings()
  const current = offerings.current
  if (!current) {
    throw new Error('No offerings configured in RevenueCat. Add an offering with the full-unlock package.')
  }

  const premiumPackage =
    current.availablePackages.find((pkg) => pkg.product.identifier === PREMIUM_PRODUCT_ID) ??
    current.lifetime ??
    current.availablePackages[0]

  if (!premiumPackage) {
    throw new Error('Premium package not found. Check product id in RevenueCat.')
  }

  const { customerInfo } = await Purchases.purchasePackage({ aPackage: premiumPackage })
  const isPremium = hasPremiumEntitlement(customerInfo)
  writeLocalPremium(isPremium)
  return { isPremium, source: 'revenuecat' }
}

export async function restorePurchases(): Promise<PurchaseState> {
  if (!isNativeStoreAvailable()) {
    const isPremium = readLocalPremium()
    return { isPremium, source: 'local' }
  }

  const { customerInfo } = await Purchases.restorePurchases()
  const isPremium = hasPremiumEntitlement(customerInfo)
  writeLocalPremium(isPremium)
  return { isPremium, source: 'revenuecat' }
}

/** Dev-only helper for testing the paywall flow in a browser. */
export function unlockPremiumForDev(): PurchaseState {
  if (!import.meta.env.DEV) {
    throw new Error('Dev unlock is only available in development builds.')
  }
  writeLocalPremium(true)
  return { isPremium: true, source: 'dev' }
}
