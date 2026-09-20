// Canonicalizes incoming paths so /about, /ABOUT, and /about/ don't all serve
// 200 as separate URLs (duplicate-content risk) - redirects to the lowercase,
// no-trailing-slash form the sitemap/canonical tags already assume.
// Skips build assets, files with an extension, and API routes, which are
// legitimately case-sensitive or already excluded from indexing.
export default defineEventHandler((event) => {
  if (event.method !== 'GET' && event.method !== 'HEAD') return
  if (event.path.startsWith('/api/') || event.path.startsWith('/_nuxt/') || event.path.startsWith('/__')) return

  const [pathname, query] = event.path.split('?')
  const lastSegment = pathname.split('/').pop() || ''
  if (lastSegment.includes('.')) return // static files (favicon.ico, sitemap.xml, images, ...)

  let normalized = pathname.toLowerCase()
  if (normalized.length > 1 && normalized.endsWith('/')) {
    normalized = normalized.slice(0, -1)
  }

  if (normalized !== pathname) {
    const target = query ? `${normalized}?${query}` : normalized
    return sendRedirect(event, target, 301)
  }
})
