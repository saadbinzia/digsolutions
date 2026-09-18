export type CookieConsent = {
  analytics: boolean
}

const STORAGE_KEY = 'digsolutions-cookie-consent'

export function useCookieConsent() {
  const consent = useState<CookieConsent | null>('cookie-consent', () => null)
  const loaded = useState('cookie-consent-loaded', () => false)
  const manageOpen = useState('cookie-consent-manage-open', () => false)

  function load() {
    if (loaded.value || import.meta.server) return
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      consent.value = raw ? JSON.parse(raw) : null
    } catch {
      consent.value = null
    }
    loaded.value = true
  }

  function persist(value: CookieConsent, options: { reload?: boolean } = {}) {
    consent.value = value
    if (import.meta.client) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(value))
      } catch {
        // localStorage unavailable (private browsing, etc.) - consent still applies for this session
      }
      if (options.reload) {
        window.location.reload()
      }
    }
  }

  function acceptAll(options: { reload?: boolean } = {}) {
    persist({ analytics: true }, options)
  }

  function rejectAll(options: { reload?: boolean } = {}) {
    persist({ analytics: false }, options)
  }

  function savePreferences(value: CookieConsent, options: { reload?: boolean } = {}) {
    persist(value, options)
  }

  function openPreferences() {
    manageOpen.value = true
  }

  return { consent, loaded, manageOpen, load, acceptAll, rejectAll, savePreferences, openPreferences }
}
