const DAY_MS = 24 * 60 * 60 * 1000

/** Format a timestamp as a local-timezone YYYY-MM-DD string. */
export function isoDay(timestamp: number): string {
  const date = new Date(timestamp)
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${date.getFullYear()}-${month}-${day}`
}

/**
 * Number of consecutive active days ending today (or yesterday, so a streak
 * isn't shown as broken before today's practice).
 */
export function currentStreak(days: string[], now: number): number {
  const active = new Set(days)
  let cursor = now
  if (!active.has(isoDay(cursor))) {
    cursor -= DAY_MS
    if (!active.has(isoDay(cursor))) return 0
  }
  let streak = 0
  while (active.has(isoDay(cursor))) {
    streak += 1
    cursor -= DAY_MS
  }
  return streak
}
