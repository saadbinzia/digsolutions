interface ContactPayload {
  name: string
  email: string
  company?: string
  service?: string
  message: string
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default defineEventHandler(async (event) => {
  const body = await readBody<Partial<ContactPayload>>(event)

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
    console.warn('[contact] RESEND_API_KEY is not set — logging submission instead of sending email.')
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
