const hits = new Map<string, number[]>()

/**
 * Fixed-window rate limiter backed by an in-memory map.
 * Fine for a single-instance deployment; not shared across processes.
 */
export function isRateLimited(key: string, max: number, windowMs: number): boolean {
  const now = Date.now()
  const recent = (hits.get(key) ?? []).filter(timestamp => now - timestamp < windowMs)

  if (recent.length >= max) {
    hits.set(key, recent)
    return true
  }

  recent.push(now)
  hits.set(key, recent)
  return false
}
