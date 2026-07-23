import { useRef, useState } from 'react'
import type { ActivityState, ExportedData, ProgressState, SavedWord } from '../types'
import { currentStreak } from '../lib/streak'

type ProgressPanelProps = {
  now: number
  progress: ProgressState
  activity: ActivityState
  words: SavedWord[]
  dueCount: number
  storyCount: number
  onExport: () => ExportedData
  onImport: (data: unknown) => boolean
}

export default function ProgressPanel({
  now,
  progress,
  activity,
  words,
  dueCount,
  storyCount,
  onExport,
  onImport,
}: ProgressPanelProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [importMessage, setImportMessage] = useState<string | null>(null)

  const streak = currentStreak(activity.days, now)

  const handleExport = () => {
    const data = onExport()
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const anchor = document.createElement('a')
    anchor.href = url
    anchor.download = 'madang-progress.json'
    anchor.click()
    URL.revokeObjectURL(url)
  }

  const handleImportFile = async (file: File) => {
    try {
      const parsed: unknown = JSON.parse(await file.text())
      const ok = onImport(parsed)
      setImportMessage(
        ok
          ? 'Progress imported. Welcome back!'
          : 'That file does not look like a Madang backup.',
      )
    } catch {
      setImportMessage('Could not read that file as JSON.')
    }
  }

  const stats = [
    { value: streak, label: streak === 1 ? 'day streak' : 'day streak' },
    { value: activity.days.length, label: 'days practiced' },
    { value: `${progress.completedStoryIds.length}/${storyCount}`, label: 'stories finished' },
    { value: words.length, label: 'words saved' },
    { value: activity.reviewsDone, label: 'reviews done' },
    { value: dueCount, label: 'due for review' },
  ]

  return (
    <section className="panel progress">
      <header className="panel__header">
        <h2>Your progress</h2>
        <p>A little every day beats a lot once a week.</p>
      </header>

      <ul className="stat-grid">
        {stats.map((stat) => (
          <li key={stat.label} className="stat">
            <span className="stat__value">{stat.value}</span>
            <span className="stat__label">{stat.label}</span>
          </li>
        ))}
      </ul>

      <div className="progress__backup">
        <h3>Backup</h3>
        <p>
          Everything is saved in this browser. Export a file to move your progress to another
          device, or import one to restore it.
        </p>
        <div className="progress__backup-actions">
          <button type="button" className="btn btn--primary" onClick={handleExport}>
            Export progress
          </button>
          <button
            type="button"
            className="btn btn--ghost"
            onClick={() => fileInputRef.current?.click()}
          >
            Import progress
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="application/json,.json"
            hidden
            onChange={(event) => {
              const file = event.target.files?.[0]
              if (file) void handleImportFile(file)
              event.target.value = ''
            }}
          />
        </div>
        {importMessage ? <p className="progress__import-message">{importMessage}</p> : null}
      </div>
    </section>
  )
}
