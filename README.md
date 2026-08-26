# DigSolutions

Marketing website for DigSolutions — a full-stack software development company (web, mobile, AI/LLM integration, SaaS, CRM/ERP, and enterprise systems). Built with Nuxt 4, TypeScript, and Tailwind CSS v4.

## Stack

- **Framework:** Nuxt 4 (Vue 3, TypeScript)
- **Styling:** Tailwind CSS v4
- **SEO:** `@nuxtjs/seo` (sitemap, robots.txt, OG images, Schema.org JSON-LD, canonical URLs)
- **Icons:** `@nuxt/icon` (Lucide set)
- **Images:** `@nuxt/image`
- **Analytics:** Google Tag Manager + GA4, wired via env vars (no-op until configured)
- **Contact form:** Server API route (`server/api/contact.post.ts`) that sends via [Resend](https://resend.com)

Content (services, portfolio case studies, blog posts) lives in `app/data/*.ts` as typed arrays — no CMS or database. Edit those files directly to update copy.

## Getting started

```bash
pnpm install
pnpm dev
```

Site runs at `http://localhost:3000`.

> **Windows/Node note:** This project's SEO tooling (`@unhead/bundler`) requires Node's `require(esm)` support. The `dev`/`build`/`generate` scripts already set `NODE_OPTIONS=--experimental-require-module` via `cross-env` for compatibility with Node 22.6–22.11. On Node 22.12+ this flag is a no-op (the feature is already default-on).

## Environment variables

Copy `.env.example` to `.env` and fill in as needed:

| Variable | Purpose | Required? |
|---|---|---|
| `NUXT_PUBLIC_SITE_URL` | Canonical site URL used for SEO tags, sitemap, OG images | Recommended before launch |
| `NUXT_PUBLIC_GTM_ID` | Google Tag Manager container ID | Optional — analytics disabled if blank |
| `NUXT_PUBLIC_GA_ID` | GA4 Measurement ID | Optional — analytics disabled if blank |
| `RESEND_API_KEY` | API key from [resend.com](https://resend.com) for the contact form | Without it, submissions are logged server-side instead of emailed |
| `CONTACT_TO_EMAIL` | Where contact form submissions are delivered | Defaults to `hello@digsolutions.com` |
| `CONTACT_FROM_EMAIL` | Verified sender in your Resend account | Defaults to Resend's sandbox sender |

## Deployment (Vercel)

1. Push this repo to GitHub/GitLab/Bitbucket.
2. Import it in Vercel — the Nuxt preset is auto-detected, no config needed.
3. Add the environment variables above in Vercel's project settings.
4. Deploy.

## What still needs real content before launch

- **Branding:** logo/colors in `app/assets/css/main.css` (`--color-brand-*`) and `app/components/LogoMark.vue` are placeholders — swap in final brand assets.
- **Copy:** all service, portfolio, and blog content in `app/data/*.ts` is placeholder marketing copy — replace with real case studies, results, and client details.
- **Legal:** `app/pages/privacy.vue` and `app/pages/terms.vue` are placeholders and should be reviewed by counsel.
- **Contact details:** phone/email/social links in `app/components/SiteHeader.vue` and `SiteFooter.vue`.
- **OG image secret:** for production, set `NUXT_OG_IMAGE_SECRET` (see the warning printed on build) if deploying to multiple instances.

## Project structure

```
app/
  assets/css/main.css   Tailwind theme tokens (colors, fonts)
  components/           Shared UI (header, footer, cards, CTA banner)
  data/                 Services, portfolio, and blog content
  layouts/default.vue   Header + footer shell
  pages/                Routes (services, portfolio, blog are dynamic + index)
  plugins/analytics.client.ts   GTM/GA4 injection
server/
  api/contact.post.ts   Contact form handler (Resend)
```
