import {
  Link,
  Outlet,
  createRootRoute,
  createRoute,
  createRouter,
  redirect,
} from '@tanstack/react-router'
import HangulPrimer from './components/HangulPrimer'
import Landing from './components/Landing'
import ProgressPanel from './components/ProgressPanel'
import Shell from './components/Shell'
import StoryLibrary from './components/StoryLibrary'
import StoryReader from './components/StoryReader'
import WordBook from './components/WordBook'
import WordReview from './components/WordReview'
import { LearnerProvider, useLearner } from './context/LearnerContext'
import { stories, getStoryById } from './data/stories'

function RootLayout() {
  return (
    <LearnerProvider>
      <Shell>
        <Outlet />
      </Shell>
    </LearnerProvider>
  )
}

function HomePage() {
  const { progress } = useLearner()
  return (
    <Landing
      onBrowse="/library"
      continueStoryId={progress.lastReadStoryId ?? undefined}
    />
  )
}

function LibraryPage() {
  const { progress, setLastRead } = useLearner()
  return (
    <StoryLibrary
      stories={stories}
      progress={progress}
      onOpen={(storyId) => {
        setLastRead(storyId)
      }}
    />
  )
}

function StoryPage({ storyId }: { storyId: string }) {
  const { words, saveWord, markStoryCompleted } = useLearner()
  const story = getStoryById(storyId)
  const savedWordKeys = new Set(words.map((word) => word.ko))

  if (!story) {
    return (
      <section className="panel">
        <p className="empty">That story could not be found.</p>
        <Link to="/library" className="btn btn--primary">
          Back to stories
        </Link>
      </section>
    )
  }

  return (
    <StoryReader
      story={story}
      savedWordKeys={savedWordKeys}
      onComplete={() => markStoryCompleted(story.id)}
      onSaveWord={(word) => saveWord(word, story.id)}
    />
  )
}

function WordsPage() {
  const { words, dueWords, removeWord } = useLearner()
  return (
    <WordBook
      words={words}
      dueCount={dueWords.length}
      onRemove={removeWord}
      reviewTo="/review"
    />
  )
}

function ReviewPage() {
  const { dueWords, reviewWord } = useLearner()
  return <WordReview dueWords={dueWords} onGrade={reviewWord} doneTo="/words" />
}

function ProgressPage() {
  const { now, progress, activity, words, dueWords, exportData, importData } = useLearner()
  return (
    <ProgressPanel
      now={now}
      progress={progress}
      activity={activity}
      words={words}
      dueCount={dueWords.length}
      storyCount={stories.length}
      onExport={exportData}
      onImport={importData}
    />
  )
}

const rootRoute = createRootRoute({
  component: RootLayout,
})

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
})

const libraryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/library',
  component: LibraryPage,
})

const storyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/story/$storyId',
  component: function StoryRoute() {
    const { storyId } = storyRoute.useParams()
    return <StoryPage storyId={storyId} />
  },
})

const wordsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/words',
  component: WordsPage,
})

const reviewRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/review',
  component: ReviewPage,
})

const hangulRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/hangul',
  component: HangulPrimer,
})

const progressRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/progress',
  component: ProgressPage,
})

// Legacy view names from before routing — send users to the new URLs.
const legacyRoutes = [
  createRoute({
    getParentRoute: () => rootRoute,
    path: '/home',
    beforeLoad: () => {
      throw redirect({ to: '/' })
    },
  }),
]

const routeTree = rootRoute.addChildren([
  indexRoute,
  libraryRoute,
  storyRoute,
  wordsRoute,
  reviewRoute,
  hangulRoute,
  progressRoute,
  ...legacyRoutes,
])

const basepath = import.meta.env.BASE_URL.replace(/\/$/, '')

export const router = createRouter({
  routeTree,
  basepath: basepath || undefined,
  defaultPreload: 'intent',
  scrollRestoration: true,
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
