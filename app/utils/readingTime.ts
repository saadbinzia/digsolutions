/**
 * Computed from actual word count instead of trusting a hand-written label,
 * which drifts out of sync as content is edited (e.g. a post labeled
 * "9 min read" that was actually ~2 minutes of copy).
 */
export function estimateReadingTime(...textBlocks: string[]): number {
  const words = textBlocks.join(' ').trim().split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.round(words / 225))
}
