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
  sitemap: {
    urls: () => [
      ...services.map(s => ({ loc: `/services/${s.slug}` })),
      ...caseStudies.map(c => ({ loc: `/portfolio/${c.slug}` })),
      ...blogPosts.map(p => ({ loc: `/blog/${p.slug}`, lastmod: p.date }))
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
