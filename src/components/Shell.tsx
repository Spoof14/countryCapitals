import { Link, Outlet, useRouterState } from '@tanstack/react-router'
import { useLearner } from '../context/LearnerContext'
import { usePremium } from '../context/PremiumContext'
import LegalFooter from './LegalFooter'

function navClass(active: boolean) {
  return `topbar__nav-link${active ? ' is-active' : ''}`
}

export default function Shell({ children }: { children?: React.ReactNode }) {
  const { dueWords } = useLearner()
  const { isPremium } = usePremium()
  const pathname = useRouterState({ select: (state) => state.location.pathname })
  const hideChrome = pathname === '/'
  const storiesActive = pathname === '/library' || pathname.startsWith('/story/')
  const wordsActive = pathname === '/words' || pathname === '/review'

  return (
    <div className={`app ${hideChrome ? 'app--home' : ''}`}>
      {!hideChrome ? (
        <header className="topbar">
          <Link to="/" className="topbar__brand">
            <span className="brand__ko">마당</span>
            <span className="brand__en">Madang</span>
          </Link>
          <nav className="topbar__nav" aria-label="Primary">
            <Link to="/library" className={navClass(storiesActive)}>
              Stories
            </Link>
            <Link to="/words" className={navClass(wordsActive)}>
              Words{dueWords.length > 0 ? ` (${dueWords.length})` : ''}
            </Link>
            <Link to="/hangul" className={navClass(pathname === '/hangul')}>
              Hangul
            </Link>
            <Link to="/progress" className={navClass(pathname === '/progress')}>
              Progress
            </Link>
            {!isPremium ? (
              <Link to="/upgrade" className={`${navClass(pathname === '/upgrade')} topbar__nav-link--accent`}>
                Unlock
              </Link>
            ) : null}
          </nav>
        </header>
      ) : null}
      <main className="main">
        {children ?? <Outlet />}
        {!hideChrome ? <LegalFooter /> : null}
      </main>
    </div>
  )
}
