const hits = new Map<string, number[]>()

// Without a cap, an attacker who rotates IP/X-Forwarded-For values on every
// request can grow this map without bound and exhaust server memory.
const MAX_TRACKED_KEYS = 5000

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

  // Defensive cap: if too many distinct keys are being tracked, drop the
  // oldest ones rather than let the map grow forever.
  if (hits.size > MAX_TRACKED_KEYS) {
    const oldestKey = hits.keys().next().value
    if (oldestKey !== undefined) hits.delete(oldestKey)
  }

  return false
}
