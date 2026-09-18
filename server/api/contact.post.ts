interface ContactPayload {
  name: string
  email: string
  company?: string
  service?: string
  message: string
  website?: string
  startedAt?: number
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const MIN_SUBMIT_MS = 3000
const RATE_LIMIT_MAX = 5
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000

// Caps how much CPU/bandwidth a single request can burn (and how much gets
// forwarded to Resend) regardless of rate limiting.
const MAX_FIELD_LENGTH = 200
const MAX_MESSAGE_LENGTH = 5000

export default defineEventHandler(async (event) => {
  const body = await readBody<Partial<ContactPayload>>(event)

  for (const field of ['name', 'email', 'company', 'service'] as const) {
    if (typeof body[field] === 'string' && body[field]!.length > MAX_FIELD_LENGTH) {
      throw createError({ statusCode: 400, statusMessage: 'One or more fields are too long.' })
    }
  }
  if (typeof body.message === 'string' && body.message.length > MAX_MESSAGE_LENGTH) {
    throw createError({ statusCode: 400, statusMessage: 'Message is too long.' })
  }

  // Honeypot field: hidden from real users, so a non-empty value means a bot filled it in.
  // Report success anyway so the bot doesn't know to retry.
  if (body.website) {
    return { ok: true, delivered: false }
  }

  // Timing trap: a human needs at least a few seconds to fill out the form.
  if (typeof body.startedAt === 'number' && Date.now() - body.startedAt < MIN_SUBMIT_MS) {
    return { ok: true, delivered: false }
  }

  const ip = getRequestIP(event, { xForwardedFor: true }) || 'unknown'
  if (isRateLimited(`contact:${ip}`, RATE_LIMIT_MAX, RATE_LIMIT_WINDOW_MS)) {
    throw createError({ statusCode: 429, statusMessage: 'Too many requests. Please try again in a few minutes.' })
  }

  const name = body.name?.trim()
  const email = body.email?.trim()
  const message = body.message?.trim()
  const company = body.company?.trim() || 'Not provided'
  const service = body.service?.trim() || 'Not specified'

  if (!name || !email || !message) {
    throw createError({ statusCode: 400, statusMessage: 'Name, email, and message are required.' })
  }

  if (!EMAIL_RE.test(email)) {
    throw createError({ statusCode: 400, statusMessage: 'Please provide a valid email address.' })
  }

  const config = useRuntimeConfig()

  if (!config.resendApiKey) {
    console.warn('[contact] RESEND_API_KEY is not set, logging submission instead of sending email.')
    console.info('[contact submission]', { name, email, company, service, message })
    return { ok: true, delivered: false }
  }

  const response = await $fetch.raw('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${config.resendApiKey}`,
      'Content-Type': 'application/json'
    },
    body: {
      from: config.contactFromEmail,
      to: [config.contactToEmail],
      reply_to: email,
      subject: `New project inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nService interest: ${service}\n\nMessage:\n${message}`
    },
    ignoreResponseError: true
  })

  if (response.status >= 400) {
    console.error('[contact] Resend API error', response.status, response._data)
    throw createError({ statusCode: 502, statusMessage: 'Failed to send your message. Please try again or email us directly.' })
  }

  return { ok: true, delivered: true }
})
