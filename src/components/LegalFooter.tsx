import { Link } from '@tanstack/react-router'

export default function LegalFooter() {
  return (
    <footer className="legal-footer">
      <Link to="/privacy" className="legal-footer__link">
        Privacy
      </Link>
    </footer>
  )
}
