/** RevenueCat entitlement id — create this in the RevenueCat dashboard. */
export const PREMIUM_ENTITLEMENT_ID = 'premium'

/**
 * Store product id for the one-time full unlock ($4.99 in stores; display as $5).
 * Create matching non-consumable IAP in App Store Connect and Google Play Console,
 * then attach to the `premium` entitlement in RevenueCat.
 */
export const PREMIUM_PRODUCT_ID = 'madang_full_unlock'

/** Number of stories available without purchasing. */
export const FREE_STORY_COUNT = 15

export const PREMIUM_PRICE_LABEL = '$5'

export const PREMIUM_FEATURES = [
  'All 100 graded Korean stories',
  'Word notebook & spaced review',
  'Comprehension quizzes & practice games',
  'Hangul primer & progress tracking',
  'Offline reading in the mobile app',
] as const
