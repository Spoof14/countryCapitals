import type { ReactNode } from 'react'
import type { AppView } from '../types'

type ShellProps = {
  view: AppView
  dueCount: number
  onNavigate: (view: AppView) => void
  children: ReactNode
}

export default function Shell({ view, dueCount, onNavigate, children }: ShellProps) {
  const hideChrome = view.name === 'home'

  return (
    <div className={`app ${hideChrome ? 'app--home' : ''}`}>
      {!hideChrome ? (
        <header className="topbar">
          <button type="button" className="topbar__brand" onClick={() => onNavigate({ name: 'home' })}>
            <span className="brand__ko">마당</span>
            <span className="brand__en">Madang</span>
          </button>
          <nav className="topbar__nav" aria-label="Primary">
            <button
              type="button"
              className={view.name === 'library' || view.name === 'story' ? 'is-active' : ''}
              onClick={() => onNavigate({ name: 'library' })}
            >
              Stories
            </button>
            <button
              type="button"
              className={view.name === 'words' || view.name === 'review' ? 'is-active' : ''}
              onClick={() => onNavigate({ name: 'words' })}
            >
              Words{dueCount > 0 ? ` (${dueCount})` : ''}
            </button>
            <button
              type="button"
              className={view.name === 'hangul' ? 'is-active' : ''}
              onClick={() => onNavigate({ name: 'hangul' })}
            >
              Hangul
            </button>
            <button
              type="button"
              className={view.name === 'progress' ? 'is-active' : ''}
              onClick={() => onNavigate({ name: 'progress' })}
            >
              Progress
            </button>
          </nav>
        </header>
      ) : null}
      <main className="main">{children}</main>
    </div>
  )
}
