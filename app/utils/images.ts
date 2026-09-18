/**
 * Rewrites an Unsplash image URL's `w`/`q` params so each usage requests only
 * the pixels it actually displays, instead of every card/hero downloading the
 * same flat 1200px-wide source image.
 */
export function unsplashSize(url: string, width: number, quality = 75): string {
  try {
    const parsed = new URL(url)
    if (!parsed.hostname.endsWith('unsplash.com')) return url
    parsed.searchParams.set('w', String(width))
    parsed.searchParams.set('q', String(quality))
    return parsed.toString()
  } catch {
    return url
  }
}
