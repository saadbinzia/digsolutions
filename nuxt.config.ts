import tailwindcss from '@tailwindcss/vite'
import { services } from './app/data/services'
import { caseStudies } from './app/data/portfolio'
import { blogPosts } from './app/data/blog'

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
        'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload'
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
      ...services.map(s => ({ loc: `/services/${s.slug}`, _i18nTransform: true })),
      ...caseStudies.map(c => ({ loc: `/portfolio/${c.slug}`, _i18nTransform: true })),
      ...blogPosts.map(p => ({ loc: `/blog/${p.slug}`, lastmod: p.date, _i18nTransform: true }))
    ]
  },

  // https://nuxtseo.com/schema-org
  schemaOrg: {
    identity: {
      type: 'Organization',
      name: 'DigSolutions',
      logo: '/logo.svg'
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
