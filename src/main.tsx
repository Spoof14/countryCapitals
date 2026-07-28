import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from '@tanstack/react-router'
import { router } from './router'
import './index.css'
import './App.css'

if (!__MOBILE_BUILD__) {
  void import('virtual:pwa-register').then(({ registerSW }) => registerSW({ immediate: true }))
}

const redirect = sessionStorage.getItem('madang-redirect')
if (redirect) {
  sessionStorage.removeItem('madang-redirect')
  try {
    const { path, search, hash } = JSON.parse(redirect) as {
      path: string
      search: string
      hash: string
    }
    const storyMatch = path.match(/^\/story\/([^/]+)/)
    if (storyMatch) {
      void router.navigate({
        to: '/story/$storyId',
        params: { storyId: storyMatch[1] },
        replace: true,
      })
    } else if (path && path !== '/') {
      void router.navigate({ to: path as '/', replace: true })
    }
    if (search || hash) {
      const url = `${window.location.pathname}${search}${hash}`
      window.history.replaceState(null, '', url)
    }
  } catch {
    // Ignore malformed redirect payloads.
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
