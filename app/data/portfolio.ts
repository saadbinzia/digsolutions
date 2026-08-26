export interface CaseStudy {
  slug: string
  title: string
  client: string
  industry: string
  serviceSlug: string
  summary: string
  challenge: string
  solution: string
  results: { label: string; value: string }[]
  tags: string[]
  gradient: string
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'northbridge-crm-rebuild',
    title: 'Rebuilding a sales pipeline CRM around a real sales process',
    client: 'Northbridge Capital Partners',
    industry: 'Financial Services',
    serviceSlug: 'crm-erp-systems',
    summary: 'Replaced a generic off-the-shelf CRM with a custom-built pipeline system matched to a multi-stage institutional sales process.',
    challenge: 'A mid-market investment firm was forcing a complex, multi-stakeholder sales process into a generic CRM, resulting in inconsistent data and a sales team that kept its real pipeline in spreadsheets.',
    solution: 'We designed a custom CRM around the firm\'s actual deal stages, approval chains, and reporting needs, with clean integration into their existing email and calendar systems and a phased migration off the legacy platform.',
    results: [
      { label: 'Pipeline data accuracy', value: '+64%' },
      { label: 'Time to log an activity', value: '-70%' },
      { label: 'Spreadsheet shadow-tracking', value: 'Eliminated' }
    ],
    tags: ['.NET', 'React', 'SQL Server', 'CRM'],
    gradient: 'from-brand-600 to-navy-800'
  },
  {
    slug: 'lumenpath-ai-support-copilot',
    title: 'An AI support copilot grounded in three years of ticket history',
    client: 'LumenPath',
    industry: 'B2B SaaS',
    serviceSlug: 'ai-llm-integration',
    summary: 'Built a retrieval-augmented support copilot that cut first-response time in half by grounding LLM answers in the company\'s own documentation and ticket history.',
    challenge: 'Support volume was outpacing headcount, and generic AI chatbot tools kept hallucinating answers because they weren\'t grounded in the product\'s actual documentation or historical resolutions.',
    solution: 'We built a RAG pipeline over the company\'s help docs, changelog, and resolved ticket history, with a custom agent that could draft responses, cite sources, and escalate when confidence was low.',
    results: [
      { label: 'First-response time', value: '-52%' },
      { label: 'Tickets auto-resolved', value: '31%' },
      { label: 'Support CSAT', value: '+18%' }
    ],
    tags: ['LLM Integration', 'RAG', 'Python', 'Vector DB'],
    gradient: 'from-brand-500 to-brand-900'
  },
  {
    slug: 'fieldworks-mobile-app',
    title: 'An offline-first field service app for crews without signal',
    client: 'Fieldworks Utilities',
    industry: 'Utilities & Infrastructure',
    serviceSlug: 'mobile-app-development',
    summary: 'Cross-platform mobile app letting field crews complete inspections and sync data automatically once back in signal range.',
    challenge: 'Field crews worked in areas with no cell coverage and were relying on paper forms that took days to reach the office, delaying compliance reporting.',
    solution: 'We built a React Native app with a fully offline-first architecture and background sync, letting crews complete structured inspections in the field with photos and GPS tagging that upload automatically once connectivity returns.',
    results: [
      { label: 'Reporting delay', value: '-89%' },
      { label: 'Field data completeness', value: '+41%' },
      { label: 'Crews onboarded', value: '140+' }
    ],
    tags: ['React Native', 'Offline-first', 'Mobile'],
    gradient: 'from-navy-700 to-brand-700'
  },
  {
    slug: 'orbitgrid-saas-launch',
    title: 'Taking a SaaS product from prototype to billable in 14 weeks',
    client: 'OrbitGrid',
    industry: 'Energy Analytics',
    serviceSlug: 'saas-product-development',
    summary: 'Turned a founder\'s working prototype into a production multi-tenant SaaS platform with billing, team management, and usage metering.',
    challenge: 'A founding team had a working analytics prototype but no multi-tenancy, billing, or access control — the gap between demo and sellable product.',
    solution: 'We rebuilt the data layer for multi-tenant isolation, added Stripe-based subscription billing and usage metering, and built organization/role management so the product could be sold to teams, not just individuals.',
    results: [
      { label: 'Time to first paying customer', value: '14 weeks' },
      { label: 'Tenant data isolation', value: '100%' },
      { label: 'Onboarding completion rate', value: '+37%' }
    ],
    tags: ['Nuxt', 'Node.js', 'Stripe', 'Multi-tenant'],
    gradient: 'from-brand-600 to-navy-900'
  },
  {
    slug: 'meridian-media-platform',
    title: 'Rebuilding a publisher\'s site for traffic spikes and Core Web Vitals',
    client: 'Meridian Daily',
    industry: 'Digital Media',
    serviceSlug: 'media-content-platforms',
    summary: 'Re-architected a high-traffic news site on a headless CMS and edge caching, cutting load times and stabilizing performance under traffic spikes.',
    challenge: 'A regional news publisher\'s legacy CMS regularly slowed to a crawl during breaking-news traffic spikes, and poor Core Web Vitals were hurting search visibility.',
    solution: 'We moved the front end to Nuxt with a headless CMS and edge caching strategy, rebuilt the ad and media delivery pipeline, and restructured SEO architecture across the site\'s content archive.',
    results: [
      { label: 'Largest Contentful Paint', value: '-61%' },
      { label: 'Organic search traffic', value: '+29%' },
      { label: 'Uptime during traffic spikes', value: '99.98%' }
    ],
    tags: ['Nuxt', 'Headless CMS', 'Performance', 'SEO'],
    gradient: 'from-navy-800 to-brand-600'
  },
  {
    slug: 'castborn-erp-integration',
    title: 'Connecting inventory, procurement, and finance into one system',
    client: 'Castborn Manufacturing',
    industry: 'Manufacturing',
    serviceSlug: 'database-engineering',
    summary: 'Consolidated three disconnected legacy systems into a single data architecture, eliminating manual reconciliation between inventory and finance.',
    challenge: 'Inventory, procurement, and finance ran on three separate legacy systems with nightly manual reconciliation, causing stock discrepancies and delayed financial close.',
    solution: 'We designed a unified database architecture and integration layer connecting all three systems in near real time, with a phased migration that avoided downtime on the manufacturing floor.',
    results: [
      { label: 'Manual reconciliation hours/month', value: '-120' },
      { label: 'Inventory discrepancy rate', value: '-83%' },
      { label: 'Monthly financial close time', value: '-5 days' }
    ],
    tags: ['SQL Server', 'System Integration', 'ERP'],
    gradient: 'from-brand-700 to-navy-800'
  }
]

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find(c => c.slug === slug)
}
