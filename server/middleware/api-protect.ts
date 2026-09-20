// Runs before any /api/** route handler. Contact-form-specific abuse checks
// (honeypot, timing trap, stricter rate limit) live in contact.post.ts; this
// is a generic floor that applies to every API route, present and future, so
// a flood of requests or oversized payloads gets rejected as cheaply as
// possible instead of reaching route logic.
const MAX_CONTENT_LENGTH_BYTES = 100 * 1024
const GLOBAL_RATE_LIMIT_MAX = 60
const GLOBAL_RATE_LIMIT_WINDOW_MS = 60 * 1000

export default defineEventHandler((event) => {
  if (!event.path.startsWith('/api/')) return

  const contentLength = Number(getRequestHeader(event, 'content-length') || 0)
  if (contentLength > MAX_CONTENT_LENGTH_BYTES) {
    throw createError({ statusCode: 413, statusMessage: 'Payload too large.' })
  }

  const ip = getRequestIP(event, { xForwardedFor: true }) || 'unknown'
  if (isRateLimited(`global:${ip}`, GLOBAL_RATE_LIMIT_MAX, GLOBAL_RATE_LIMIT_WINDOW_MS)) {
    throw createError({ statusCode: 429, statusMessage: 'Too many requests. Please try again shortly.' })
  }
})
