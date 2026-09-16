# Launch backlog

Items intentionally left as placeholders during the content rewrite. Nothing below should stay
unresolved past launch — each one is either a trust red flag (fake contact info) or a legal
requirement (entity name, privacy/terms review).

## Business identity (marked placeholder for now)
- [x] Company name finalized: "DigSolutions"
- [ ] Form the US LLC / register the entity, then add the legal name + entity suffix to the footer
- [ ] Get a real, monitored business email at the real domain (site currently shows `hello@digsolutions.net`, but confirm that inbox is actually set up and monitored)
- [x] Real US phone number added: +1 (307) 500-3832 (header, footer, contact page)
- [ ] Get a US virtual/registered address (e.g. Stripe Atlas, Northwest Registered Agent, or similar) and add it to the footer + contact page
- [x] Calendly booking link added to the contact page (`https://calendly.com/digsolutions/consultation`)

## Proof & trust
- [ ] The two case studies on the site (healthcare webinar clipping, multi-channel e-commerce ERP) are real but anonymized. If/when client permission is available, add real names/logos.
- [ ] Get real testimonials/references from those two actual clients. We deliberately did not fabricate testimonials — invented quotes attributed to fake people is exactly the kind of thing that gets a B2B buyer to walk away if they check, and there are real clients here who could plausibly provide one.
- [ ] Real team/founder photos, once available, to replace the icon-based placeholders on the About page (chosen over stock photos)

## Company presence
- [ ] Create the company LinkedIn page, then add the link back into the footer
- [x] Real domain confirmed: `digsolutions.net`. Updated in `nuxt.config.ts`, SEO metadata, footer, and contact page.

## Technical / infra
- [ ] Set real `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` env vars before launch (contact form currently just logs submissions if unset)
- [ ] Set real `NUXT_PUBLIC_GA_ID` / `NUXT_PUBLIC_GTM_ID` env vars so analytics actually fires
- [ ] Have a lawyer review the Privacy Policy and Terms of Service pages (both currently contain explicit placeholder text)
- [x] Local dev server: use `pnpm dev` (not a bare `nuxt dev`) — the project already sets `NODE_OPTIONS=--experimental-require-module` via `cross-env` in `package.json`, which is required for a Windows-specific `oxc-parser`/Vite incompatibility. Confirmed working.
