export interface CaseStudy {
  slug: string
  title: string
  client: string
  industry: string
  serviceSlug: string
  timeline: string
  teamSize: string
  image: string
  imageAlt: string
  summary: string
  challenge: string
  approach: string
  solution: string
  results: { label: string; value: string }[]
  testimonial: { quote: string; name: string; role: string }
  tags: string[]
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'northbridge-crm-rebuild',
    title: 'Rebuilding a sales pipeline CRM around a real sales process',
    client: 'Northbridge Capital Partners',
    industry: 'Financial Services',
    serviceSlug: 'crm-erp-systems',
    timeline: '5 months',
    teamSize: '3 engineers, 1 solutions architect',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Two people shaking hands after a business meeting',
    summary: 'Replaced a generic off-the-shelf CRM with a custom-built pipeline system matched to a multi-stage institutional sales process.',
    challenge: 'A mid-market investment firm was forcing a complex, multi-stakeholder sales process into a generic CRM. Deal stages didn\'t map to how the team actually sold, so reps kept the real pipeline in personal spreadsheets and the CRM data was months out of date by the time leadership looked at it.',
    approach: 'We spent the first three weeks sitting in on live deal reviews and mapping the actual stage-gates, sign-off chain, and handoffs between the sales and compliance teams. That map became the schema. We migrated historical deal data in phases, running the old and new systems in parallel for six weeks so nothing was lost mid-transition.',
    solution: 'The result is a CRM built around the firm\'s real deal stages and approval chain, with automatic activity logging pulled from their existing email and calendar systems so reps don\'t have to manually re-enter what they already did. Compliance sign-offs happen inside the same pipeline instead of a separate email thread.',
    results: [
      { label: 'Pipeline data accuracy', value: '+64%' },
      { label: 'Time to log an activity', value: '-70%' },
      { label: 'Spreadsheet shadow-tracking', value: 'Eliminated' }
    ],
    testimonial: {
      quote: 'For the first time, the pipeline in the system actually matches the pipeline in the room during Monday reviews. That sounds small, but it changed how we forecast.',
      name: 'Head of Sales Operations',
      role: 'Northbridge Capital Partners'
    },
    tags: ['.NET', 'React', 'SQL Server', 'CRM']
  },
  {
    slug: 'lumenpath-ai-support-copilot',
    title: 'An AI support copilot grounded in three years of ticket history',
    client: 'LumenPath',
    industry: 'B2B SaaS',
    serviceSlug: 'ai-llm-integration',
    timeline: '4 months',
    teamSize: '2 AI engineers, 1 backend engineer',
    image: 'https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Overhead view of a developer working at a triple-monitor desk setup',
    summary: 'Built a retrieval-augmented support copilot that cut first-response time in half by grounding LLM answers in the company\'s own documentation and ticket history.',
    challenge: 'Support volume was outpacing headcount, and an off-the-shelf AI chatbot tool kept hallucinating answers because it wasn\'t grounded in the product\'s actual documentation or historical resolutions. Support leads had stopped trusting it within two weeks of rollout.',
    approach: 'We started with the data, not the model: cleaning and re-chunking three years of help docs, changelogs, and resolved tickets, then building a small evaluation set from real past tickets so we could measure accuracy before anything shipped to a customer. Only after that pipeline was solid did we wire up the agent behavior.',
    solution: 'The copilot retrieves from the cleaned knowledge base, drafts a response with inline citations back to the source doc or ticket, and escalates to a human whenever its confidence score drops below a threshold instead of guessing. Support leads can see exactly which source an answer came from.',
    results: [
      { label: 'First-response time', value: '-52%' },
      { label: 'Tickets auto-resolved', value: '31%' },
      { label: 'Support CSAT', value: '+18%' }
    ],
    testimonial: {
      quote: 'The difference from the last tool we tried is that this one tells us when it doesn\'t know something instead of making it up. That\'s the whole reason the team actually uses it.',
      name: 'Director of Customer Support',
      role: 'LumenPath'
    },
    tags: ['LLM Integration', 'RAG', 'Python', 'Vector DB']
  },
  {
    slug: 'fieldworks-mobile-app',
    title: 'An offline-first field service app for crews without signal',
    client: 'Fieldworks Utilities',
    industry: 'Utilities & Infrastructure',
    serviceSlug: 'mobile-app-development',
    timeline: '6 months',
    teamSize: '2 mobile engineers, 1 backend engineer',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Utility worker in a hard hat inspecting an electrical panel',
    summary: 'Cross-platform mobile app letting field crews complete inspections and sync data automatically once back in signal range.',
    challenge: 'Field crews worked in substations and rural corridors with no cell coverage and were relying on paper inspection forms that took two to three days to reach the office, which delayed compliance reporting and made it hard to catch issues early.',
    approach: 'We shadowed two crews for a week to see where paper forms actually broke down: which fields got skipped, which photos never made it back, which handwriting nobody could read later. That informed a form structure built for gloved hands and bad lighting, not a port of the paper form.',
    solution: 'The app works fully offline, including photo capture and GPS tagging, and queues everything for background sync the moment a device picks up signal again. Supervisors get a dashboard showing which inspections are still out in the field versus synced, so nothing quietly gets lost.',
    results: [
      { label: 'Reporting delay', value: '-89%' },
      { label: 'Field data completeness', value: '+41%' },
      { label: 'Crews onboarded', value: '140+' }
    ],
    testimonial: {
      quote: 'Our guys don\'t think about the app, it just works whether they have signal or not, and that was the entire point. Adoption wasn\'t a fight like our last attempt at this.',
      name: 'VP of Field Operations',
      role: 'Fieldworks Utilities'
    },
    tags: ['React Native', 'Offline-first', 'Mobile']
  },
  {
    slug: 'orbitgrid-saas-launch',
    title: 'Taking a SaaS product from prototype to billable in 14 weeks',
    client: 'OrbitGrid',
    industry: 'Energy Analytics',
    serviceSlug: 'saas-product-development',
    timeline: '14 weeks',
    teamSize: '3 full-stack engineers',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Laptop displaying an analytics dashboard with charts and graphs',
    summary: 'Turned a founder\'s working prototype into a production multi-tenant SaaS platform with billing, team management, and usage metering.',
    challenge: 'A two-person founding team had a working analytics prototype that impressed prospects in demos, but it ran on a single shared database with no real tenant isolation, no billing, and no way to invite a colleague. Every prospect conversation stalled at "how do we actually buy this?"',
    approach: 'Rather than rebuild everything at once, we split the work into what blocked revenue versus what didn\'t. Multi-tenant data isolation and Stripe billing shipped first since those directly blocked signing customers; team invites and granular permissions followed once paying customers started asking for them.',
    solution: 'The platform now runs on row-level tenant isolation with per-organization usage metering feeding directly into Stripe subscriptions, plus a self-serve onboarding flow that gets a new team from signup to their first dashboard without a sales call.',
    results: [
      { label: 'Time to first paying customer', value: '14 weeks' },
      { label: 'Tenant data isolation', value: '100%' },
      { label: 'Onboarding completion rate', value: '+37%' }
    ],
    testimonial: {
      quote: 'We went from \'let me show you a demo\' to \'here\'s your login, add your card\' in about three months. That\'s the gap that was actually costing us deals.',
      name: 'Co-Founder & CEO',
      role: 'OrbitGrid'
    },
    tags: ['Nuxt', 'Node.js', 'Stripe', 'Multi-tenant']
  },
  {
    slug: 'meridian-media-platform',
    title: 'Rebuilding a publisher\'s site for traffic spikes and Core Web Vitals',
    client: 'Meridian Daily',
    industry: 'Digital Media',
    serviceSlug: 'media-content-platforms',
    timeline: '5 months',
    teamSize: '2 frontend engineers, 1 backend engineer',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Close-up of a stack of folded newspapers',
    summary: 'Re-architected a high-traffic news site on a headless CMS and edge caching, cutting load times and stabilizing performance under traffic spikes.',
    challenge: 'A regional news publisher\'s legacy CMS regularly slowed to a crawl during breaking-news traffic spikes, sometimes going fully unresponsive for several minutes at exactly the moment readership peaked. Poor Core Web Vitals scores were also dragging down search visibility on their highest-value articles.',
    approach: 'We moved the editorial workflow to a headless CMS first, while keeping the existing front end running, so reporters never lost the ability to publish during the transition. The front-end rebuild and caching layer came second, once the content pipeline was stable.',
    solution: 'The new front end runs on Nuxt with edge caching in front of every article page, so a traffic spike hits the cache instead of the origin server. We also rebuilt the ad and image delivery pipeline and restructured internal linking and metadata across the site\'s archive for SEO.',
    results: [
      { label: 'Largest Contentful Paint', value: '-61%' },
      { label: 'Organic search traffic', value: '+29%' },
      { label: 'Uptime during traffic spikes', value: '99.98%' }
    ],
    testimonial: {
      quote: 'The old site used to fall over on our biggest days, which is exactly when we couldn\'t afford it. We haven\'t had a single breaking-news outage since launch.',
      name: 'VP of Digital',
      role: 'Meridian Daily'
    },
    tags: ['Nuxt', 'Headless CMS', 'Performance', 'SEO']
  },
  {
    slug: 'castborn-erp-integration',
    title: 'Connecting inventory, procurement, and finance into one system',
    client: 'Castborn Manufacturing',
    industry: 'Manufacturing',
    serviceSlug: 'database-engineering',
    timeline: '7 months',
    teamSize: '2 backend engineers, 1 database architect',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Engineer working on manufacturing equipment on a factory floor',
    summary: 'Consolidated three disconnected legacy systems into a single data architecture, eliminating manual reconciliation between inventory and finance.',
    challenge: 'Inventory, procurement, and finance ran on three separate legacy systems that only talked to each other through a nightly manual reconciliation process, run by hand by two people in accounting. Stock counts and financial records routinely drifted apart between reconciliations.',
    approach: 'We started by tracing exactly where the three systems disagreed and why, which turned out to be mostly timing issues around when stock movements were recorded versus invoiced. Fixing that meant designing a shared data model before writing any integration code.',
    solution: 'A unified database architecture now sits behind all three systems, syncing inventory, procurement, and financial records in near real time through an integration layer. The migration ran in phases over several months specifically so the manufacturing floor never had to stop for it.',
    results: [
      { label: 'Manual reconciliation hours/month', value: '-120' },
      { label: 'Inventory discrepancy rate', value: '-83%' },
      { label: 'Monthly financial close time', value: '-5 days' }
    ],
    testimonial: {
      quote: 'Our accounting team used to spend the first week of every month just reconciling numbers that should have already matched. That week gave itself back to us.',
      name: 'CFO',
      role: 'Castborn Manufacturing'
    },
    tags: ['SQL Server', 'System Integration', 'ERP']
  }
]

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find(c => c.slug === slug)
}
