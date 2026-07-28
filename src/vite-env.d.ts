/// <reference types="vite/client" />
/// <reference types="vite-plugin-pwa/client" />

interface ImportMetaEnv {
  readonly VITE_REVENUECAT_APPLE_API_KEY?: string
  readonly VITE_REVENUECAT_GOOGLE_API_KEY?: string
  readonly VITE_STRIPE_PAYMENT_LINK?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare const __MOBILE_BUILD__: boolean
