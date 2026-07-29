import { Capacitor } from '@capacitor/core'
import { Link } from '@tanstack/react-router'
import { PREMIUM_FEATURES, PREMIUM_PRICE_LABEL } from '../config/monetization'
import { usePremium } from '../context/PremiumContext'

type PaywallProps = {
  /** Optional story id the user tried to open. */
  storyId?: string
}

export default function Paywall({ storyId }: PaywallProps) {
  const {
    isLoading,
    error,
    freeStoryCount,
    lockedStoryCount,
    purchase,
    restore,
    clearError,
    webCheckoutUrl,
    unlockForDev,
  } = usePremium()

  const onNative = Capacitor.isNativePlatform()
  const canBuyInApp = onNative

  return (
    <section className="panel paywall">
      <header className="panel__header">
        <h2>Unlock Madang</h2>
        <p>
          {storyId
            ? 'This story is part of the full library.'
            : `You have ${freeStoryCount} free stories. Unlock ${lockedStoryCount} more with a one-time purchase.`}
        </p>
      </header>

      <div className="paywall__price">
        <p className="paywall__amount">{PREMIUM_PRICE_LABEL}</p>
        <p className="paywall__once">One-time purchase · yours forever</p>
      </div>

      <ul className="paywall__features">
        {PREMIUM_FEATURES.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>

      {error ? (
        <p className="paywall__error" role="alert">
          {error}{' '}
          <button type="button" className="btn btn--text" onClick={clearError}>
            Dismiss
          </button>
        </p>
      ) : null}

      <div className="paywall__actions">
        {canBuyInApp ? (
          <button type="button" className="btn btn--primary" disabled={isLoading} onClick={() => void purchase()}>
            {isLoading ? 'Please wait…' : `Unlock for ${PREMIUM_PRICE_LABEL}`}
          </button>
        ) : webCheckoutUrl ? (
          <a className="btn btn--primary" href={webCheckoutUrl} target="_blank" rel="noreferrer">
            Unlock for {PREMIUM_PRICE_LABEL}
          </a>
        ) : (
          <p className="paywall__note">
            Download the iOS or Android app to purchase, or configure a Stripe payment link for web checkout.
          </p>
        )}

        <button type="button" className="btn btn--ghost" disabled={isLoading} onClick={() => void restore()}>
          Restore purchase
        </button>

        <Link to="/library" className="btn btn--text">
          Continue with free stories
        </Link>

        {unlockForDev ? (
          <button type="button" className="btn btn--text" onClick={unlockForDev}>
            Dev: unlock premium
          </button>
        ) : null}
      </div>

      {!onNative ? (
        <p className="paywall__store-note">
          Prefer the app? Search for <strong>Madang</strong> on the App Store or Google Play — same one-time
          unlock, works offline.
        </p>
      ) : null}

      <p className="paywall__legal">
        <Link to="/privacy">Privacy policy</Link>
      </p>
    </section>
  )
}
