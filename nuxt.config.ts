import tailwindcss from '@tailwindcss/vite'
import { services } from './app/data/services'
import { caseStudies } from './app/data/portfolio'
import { blogPosts } from './app/data/blog'

// Date this content batch (service/case-study copy, cross-linking, schema) was
// last edited - used as sitemap lastmod for pages with no per-item date field.
const CONTENT_UPDATED = '2026-09-21'

const SITE_URL = process.env.NUXT_PUBLIC_SITE_URL || 'https://www.digsolutions.net'
const LOCALES = ['en', 'es', 'de', 'nl', 'fr'] as const
type Locale = (typeof LOCALES)[number]

// Mirrors i18n.pages below. Kept as a literal map (not a shared import) so this
// file has no runtime dependency on the app/ directory beyond the data files
// it already imports; the i18n.pages block is the source of truth for routing,
// this one only has to stay in sync for sitemap generation.
const LOCALIZED_BASE: Record<'services' | 'portfolio', Record<Locale, string>> = {
  services: { en: '/services', es: '/servicios', de: '/dienstleistungen', nl: '/diensten', fr: '/services' },
  portfolio: { en: '/portfolio', es: '/portafolio', de: '/portfolio', nl: '/portfolio', fr: '/realisations' }
}

function localizedPath(locale: Locale, path: string) {
  return locale === 'en' ? path : `/${locale}${path}`
}

// @nuxtjs/sitemap's `_i18nTransform` only prefixes the locale code onto the
// same path for every locale - it doesn't know these sections have translated
// slugs (see i18n.pages), so it was generating dead /es/services/... URLs
// instead of /es/servicios/.... Building each locale's entry (and its
// hreflang alternatives) explicitly here is the fix.
function buildLocalizedSitemapEntries(section: 'services' | 'portfolio', slug: string, lastmod: string) {
  const hrefs = LOCALES.map(locale => ({
    locale,
    href: `${SITE_URL}${localizedPath(locale, `${LOCALIZED_BASE[section][locale]}/${slug}`)}`
  }))
  const alternatives = [
    { hreflang: 'x-default', href: hrefs.find(h => h.locale === 'en')!.href },
    ...hrefs.map(h => ({ hreflang: h.locale, href: h.href }))
  ]
  return hrefs.map(h => ({ loc: h.href, lastmod, alternatives }))
}

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/seo',
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxtjs/i18n'
  ],

  css: ['~/assets/css/main.css'],

  // The whole site is built from static data (no per-request/per-user content)
  // except the contact form. Prerendering everything else means page requests
  // are served from Vercel's edge cache instead of invoking the server on every
  // hit — faster loads, and a traffic spike can't overwhelm serverless compute.
  routeRules: {
    '/**': {
      prerender: true,
      // Applied by Nitro at the edge (no function invocation needed for
      // prerendered routes), so this holds even under request flooding.
      headers: {
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'DENY',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
        'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
        'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
        // Baseline matches the CSP h3/Nitro already applies to /api/* and error
        // responses by default, extended for the analytics scripts and Unsplash
        // images the site actually loads. No nonce/hash because the HTML is
        // fully prerendered and static (a nonce baked into a static file would
        // be identical for every visitor, which defeats the point).
        'Content-Security-Policy': [
          "default-src 'self'",
          "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com",
          "style-src 'self' 'unsafe-inline'",
          "img-src 'self' data: https://images.unsplash.com",
          "font-src 'self' data:",
          "connect-src 'self' https://www.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com",
          "frame-src https://www.googletagmanager.com",
          "object-src 'none'",
          "base-uri 'self'",
          "form-action 'self'",
          "frame-ancestors 'none'"
        ].join('; ')
      }
    },
    '/api/**': { prerender: false, isr: false }
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/']
    }
  },

  hooks: {
    // The sitemap module force-redirects /sitemap.xml -> /sitemap_index.xml via
    // a plain `redirect` route rule (defaults to 307). It sets this up itself
    // during module setup, after nuxt.config's own routeRules are read, so it
    // has to be corrected here once module setup has finished instead.
    'nitro:config': (nitroConfig) => {
      const rule = nitroConfig.routeRules?.['/sitemap.xml']
      if (rule && 'redirect' in rule) {
        const to = typeof rule.redirect === 'string' ? rule.redirect : rule.redirect?.to
        if (to) nitroConfig.routeRules!['/sitemap.xml'] = { redirect: { to, statusCode: 308 } }
      }
    }
  },

  vite: {
    plugins: [tailwindcss()]
  },

  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
      ]
    }
  },

  i18n: {
    baseUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://www.digsolutions.net',
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    locales: [
      { code: 'en', language: 'en-US', name: 'English', file: 'en.json' },
      { code: 'es', language: 'es-ES', name: 'Español', file: 'es.json' },
      { code: 'de', language: 'de-DE', name: 'Deutsch', file: 'de.json' },
      { code: 'nl', language: 'nl-NL', name: 'Nederlands', file: 'nl.json' },
      { code: 'fr', language: 'fr-FR', name: 'Français', file: 'fr.json' }
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'digsolutions_i18n_redirected',
      redirectOn: 'root'
    },
    // Localized slugs for regional SEO/GEO - each locale's own visitors and
    // search engines see a path in their language instead of the English one.
    // (customRoutes: 'config' makes the module read `pages` below instead of
    // looking for per-page `definePageMeta({ i18n: ... })` blocks.)
    customRoutes: 'config',
    pages: {
      about: { es: '/nosotros', de: '/ueber-uns', nl: '/over-ons', fr: '/a-propos' },
      contact: { es: '/contacto', de: '/kontakt', nl: '/contact', fr: '/contact' },
      services: { es: '/servicios', de: '/dienstleistungen', nl: '/diensten', fr: '/services' },
      'services-slug': { es: '/servicios/[slug]', de: '/dienstleistungen/[slug]', nl: '/diensten/[slug]', fr: '/services/[slug]' },
      portfolio: { es: '/portafolio', de: '/portfolio', nl: '/portfolio', fr: '/realisations' },
      'portfolio-slug': { es: '/portafolio/[slug]', de: '/portfolio/[slug]', nl: '/portfolio/[slug]', fr: '/realisations/[slug]' },
      privacy: { es: '/privacidad', de: '/datenschutz', nl: '/privacybeleid', fr: '/confidentialite' },
      terms: { es: '/terminos', de: '/nutzungsbedingungen', nl: '/voorwaarden', fr: '/conditions-utilisation' }
    }
  },

  // https://nuxtseo.com/site-config
  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || 'https://www.digsolutions.net',
    name: 'DigSolutions',
    description: 'DigSolutions builds web, mobile, AI/LLM-powered, and enterprise SaaS software for ambitious companies: full-stack .NET and JavaScript engineering, custom AI integrations, and CRM/ERP systems built to scale.',
    defaultLocale: 'en',
    identity: {
      type: 'Organization'
    },
    twitter: '@digsolutions',
    trailingSlash: false
  },

  // https://nuxtseo.com/sitemap (dynamic routes aren't file-based, so register them explicitly)
  // _i18nTransform expands each entry into one URL per locale with hreflang alternates,
  // matching the auto-generated entries for file-based pages.
  sitemap: {
    urls: () => [
      // Services and case studies have no genuine per-item revision date in the
      // data model (unlike blog posts, which carry a real publish date) - dated
      // CONTENT_UPDATED below instead of a fabricated per-page date, so lastmod
      // stays honest: it's the date this batch of pages was actually last edited.
      ...services.flatMap(s => buildLocalizedSitemapEntries('services', s.slug, CONTENT_UPDATED)),
      ...caseStudies.flatMap(c => buildLocalizedSitemapEntries('portfolio', c.slug, CONTENT_UPDATED)),
      // Blog has no translated slug per locale, so straight locale-prefixing is correct here.
      ...blogPosts.map(p => ({ loc: `/blog/${p.slug}`, lastmod: p.date, _i18nTransform: true }))
    ]
  },

  // https://nuxtseo.com/schema-org
  schemaOrg: {
    identity: {
      type: 'Organization',
      name: 'DigSolutions',
      logo: { url: '/logo.svg', width: 34, height: 34 },
      email: 'hello@digsolutions.net',
      telephone: '+13075003832',
      contactPoint: [{
        contactType: 'customer service',
        email: 'hello@digsolutions.net',
        telephone: '+13075003832',
        areaServed: 'Worldwide',
        availableLanguage: ['English', 'Spanish', 'German', 'Dutch', 'French']
      }],
      // Real, already-published fact (see about/footer copy), not a placeholder number.
      numberOfEmployees: { '@type': 'QuantitativeValue', value: 20 }
    }
  },

  runtimeConfig: {
    // server-only
    resendApiKey: process.env.RESEND_API_KEY || '',
    contactToEmail: process.env.CONTACT_TO_EMAIL || 'hello@digsolutions.net',
    contactFromEmail: process.env.CONTACT_FROM_EMAIL || 'DigSolutions Website <onboarding@resend.dev>',
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://www.digsolutions.net',
      gtmId: process.env.NUXT_PUBLIC_GTM_ID || '',
      gaId: process.env.NUXT_PUBLIC_GA_ID || ''
    }
  },

  image: {
    quality: 85,
    format: ['webp', 'avif']
  },

  icon: {
    mode: 'svg'
  },

  typescript: {
    strict: true
  }
})
