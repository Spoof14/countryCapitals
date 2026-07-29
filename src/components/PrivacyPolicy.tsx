import { Link } from '@tanstack/react-router'
import { PRIVACY_CONTACT_EMAIL, PRIVACY_LAST_UPDATED } from '../config/legal'

export default function PrivacyPolicy() {
  return (
    <section className="panel legal">
      <header className="panel__header">
        <h2>Privacy Policy</h2>
        <p>Last updated: {PRIVACY_LAST_UPDATED}</p>
      </header>

      <div className="legal__body">
        <p>
          Madang (“we”, “our”, “the app”) is a Korean language learning app built around graded
          stories. This policy explains what information the app handles and how.
        </p>

        <h3>Summary</h3>
        <ul>
          <li>We do not require an account to use Madang.</li>
          <li>Your reading progress and saved words are stored on your device.</li>
          <li>If you purchase the full library, payment is processed by Apple, Google, or Stripe — not by us directly.</li>
          <li>We do not sell your personal information.</li>
        </ul>

        <h3>Information stored on your device</h3>
        <p>
          Madang saves learning data locally in your browser or app storage, including:
        </p>
        <ul>
          <li>Stories you have read and your last-read story</li>
          <li>Words you save to your notebook and spaced-review schedule</li>
          <li>Reading activity used for streaks and progress</li>
          <li>Whether you have unlocked the full library (premium status)</li>
        </ul>
        <p>
          This data stays on your device unless you export it from the Progress screen. Clearing app
          data or uninstalling the app will remove it.
        </p>

        <h3>Purchases</h3>
        <p>
          If you buy the full story library, the transaction is handled by the platform you use:
        </p>
        <ul>
          <li>
            <strong>Apple App Store</strong> or <strong>Google Play</strong> on mobile — governed by
            Apple’s or Google’s privacy policies
          </li>
          <li>
            <strong>Stripe</strong> on the web, if enabled — governed by Stripe’s privacy policy
          </li>
        </ul>
        <p>
          We use RevenueCat to validate purchases and unlock premium content. RevenueCat receives
          purchase receipts and anonymous device identifiers needed to restore purchases. See{' '}
          <a href="https://www.revenuecat.com/privacy" target="_blank" rel="noreferrer">
            RevenueCat’s privacy policy
          </a>
          .
        </p>
        <p>We do not receive or store your credit card number.</p>

        <h3>Data sharing for app improvement (optional)</h3>
        <p>
          If you use third-party AI services through future features, those providers may process
          text you submit according to their own policies. The core Madang app does not send your
          reading history to our servers.
        </p>

        <h3>Text-to-speech</h3>
        <p>
          The “Listen” feature uses your device’s built-in speech engine. Audio is generated locally
          or by your operating system — it is not sent to our servers.
        </p>

        <h3>Children</h3>
        <p>
          Madang is suitable for learners of all ages. We do not knowingly collect personal
          information from children. The app does not require registration.
        </p>

        <h3>Your choices</h3>
        <ul>
          <li>Export or delete your progress from the Progress screen</li>
          <li>Restore purchases from the Unlock screen on mobile</li>
          <li>Uninstall the app to remove locally stored data</li>
        </ul>

        <h3>Changes</h3>
        <p>
          We may update this policy as the app changes. The “Last updated” date at the top will
          reflect the latest version.
        </p>

        <h3>Contact</h3>
        <p>
          Questions about privacy:{' '}
          <a href={`mailto:${PRIVACY_CONTACT_EMAIL}`}>{PRIVACY_CONTACT_EMAIL}</a>
        </p>
      </div>

      <footer className="legal__footer">
        <Link to="/library" className="btn btn--ghost">
          Back to stories
        </Link>
      </footer>
    </section>
  )
}
