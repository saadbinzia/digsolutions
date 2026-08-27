export interface Service {
  slug: string
  icon: string
  title: string
  tagline: string
  summary: string
  description: string
  capabilities: string[]
  techStack: string[]
  idealFor: string[]
  metaTitle: string
  metaDescription: string
}

export const services: Service[] = [
  {
    slug: 'web-application-development',
    icon: 'lucide:layout-panel-left',
    title: 'Web Application Development',
    tagline: 'Full-stack web engineering across every major framework',
    summary: 'Fast, scalable, SEO-ready web applications built in Next.js, Nuxt, React, Vue, Angular, or .NET, matched to your team and roadmap, not ours.',
    description: 'We build production-grade web applications end to end, from marketing sites and customer portals to complex internal tools. Our engineers work fluently across the modern JavaScript ecosystem (Next.js, Nuxt, React, Vue, Angular) and the .NET stack, so the technology choice is driven by your requirements, existing systems, and hiring plans rather than by what we happen to know. Every build ships with performance budgets, accessibility standards, and SEO architecture in place from day one.',
    capabilities: [
      'Server-rendered and statically generated apps for SEO and Core Web Vitals',
      'Design system and component library implementation',
      'API design and integration (REST, GraphQL, tRPC)',
      'Progressive Web Apps and offline-capable experiences',
      'Legacy application modernization and framework migration',
      'CI/CD pipelines with automated testing and preview environments'
    ],
    techStack: ['Next.js', 'Nuxt', 'React', 'Vue', 'Angular', '.NET / C#', 'Node.js', 'TypeScript'],
    idealFor: ['Marketing & product websites', 'Customer and partner portals', 'Internal dashboards and admin tools', 'Framework migrations & modernization'],
    metaTitle: 'Web Application Development Services | Next.js, Nuxt, React, .NET',
    metaDescription: 'Full-stack web application development across Next.js, Nuxt, React, Vue, Angular, and .NET. SEO-first, performance-tuned, built to scale.'
  },
  {
    slug: 'mobile-app-development',
    icon: 'lucide:smartphone',
    title: 'Mobile App Development',
    tagline: 'Native-quality iOS and Android apps, built once or built native',
    summary: 'Cross-platform apps with React Native and Flutter, or fully native iOS/Android builds, chosen based on performance needs, not habit.',
    description: 'From consumer apps to internal field tools, we design and ship mobile applications that feel native, perform reliably offline, and integrate cleanly with your backend. We help you choose the right approach: cross-platform for speed and a shared codebase, or fully native when performance, platform APIs, or App Store constraints demand it. Either way, we support the full lifecycle including store submission, push notifications, and analytics instrumentation.',
    capabilities: [
      'Cross-platform apps with React Native and Flutter',
      'Native iOS (Swift) and Android (Kotlin) development',
      'Offline-first architecture and local data sync',
      'Push notifications, deep linking, and in-app payments',
      'App Store / Google Play submission and release management',
      'Mobile backend integration with existing or new APIs'
    ],
    techStack: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'TypeScript', 'GraphQL', 'Firebase'],
    idealFor: ['Consumer mobile apps', 'Field service & logistics apps', 'Companion apps for SaaS products', 'Internal operations tools'],
    metaTitle: 'Mobile App Development | iOS, Android & Cross-Platform',
    metaDescription: 'Mobile app development in React Native, Flutter, Swift, and Kotlin. From MVP to App Store launch, built for performance and reliability.'
  },
  {
    slug: 'ai-llm-integration',
    icon: 'lucide:sparkles',
    title: 'AI & Custom LLM Integration',
    tagline: 'Put the latest AI models to work inside your product',
    summary: 'Custom LLM integrations, AI agents, retrieval-augmented systems, and model extensions built on the latest frontier models, grounded in your data, not generic prompts.',
    description: 'We help companies move beyond chatbot demos into production AI features: retrieval-augmented generation over your own data, custom agents that take real actions, fine-tuned or extended models, and AI features embedded directly into existing products. We work with the latest frontier and open-weight models, build the evaluation and guardrail infrastructure production AI needs, and design for cost and latency from the start, not as an afterthought.',
    capabilities: [
      'Custom LLM integration into existing products and workflows',
      'Retrieval-augmented generation (RAG) over proprietary data',
      'AI agents and tool-calling workflows for real task automation',
      'Model evaluation, guardrails, and prompt/version management',
      'Fine-tuning and extension of open-weight and frontier models',
      'AI feature cost, latency, and reliability engineering'
    ],
    techStack: ['OpenAI', 'Anthropic Claude', 'Open-weight LLMs', 'Vector databases', 'LangChain / custom orchestration', 'Python', 'TypeScript'],
    idealFor: ['AI features inside existing SaaS products', 'Internal copilots and knowledge assistants', 'Customer support & content automation', 'Custom agent workflows'],
    metaTitle: 'Custom AI & LLM Integration Services',
    metaDescription: 'Custom LLM integrations, AI agents, and RAG systems built on the latest AI models, grounded in your data and engineered for production.'
  },
  {
    slug: 'saas-product-development',
    icon: 'lucide:layers',
    title: 'SaaS Product Development',
    tagline: 'From zero to a billable, multi-tenant SaaS product',
    summary: 'End-to-end SaaS engineering: multi-tenancy, billing, auth, and the unglamorous infrastructure that separates a demo from a real product.',
    description: 'Building a SaaS product involves far more than the feature your customers see. Multi-tenant data isolation, subscription billing, role-based access, usage metering, and onboarding all need to be right from the start. We design and build SaaS platforms with that infrastructure in place from day one, so the product is ready to sell and scale rather than needing a rebuild six months after launch.',
    capabilities: [
      'Multi-tenant architecture and data isolation',
      'Subscription billing and metering (Stripe and similar)',
      'Role-based access control and team/organization management',
      'Onboarding flows, usage analytics, and in-app messaging',
      'API and webhook infrastructure for integrations',
      'Scalable infrastructure and deployment pipelines'
    ],
    techStack: ['Next.js', 'Nuxt', 'Node.js', '.NET', 'PostgreSQL', 'Stripe', 'Docker', 'AWS / Azure / GCP'],
    idealFor: ['New SaaS product launches', 'Adding multi-tenancy to an existing app', 'Billing & subscription infrastructure', 'B2B platform products'],
    metaTitle: 'SaaS Product Development Services',
    metaDescription: 'End-to-end SaaS development: multi-tenancy, billing, auth, and infrastructure. Built to go from MVP to a scalable, billable product.'
  },
  {
    slug: 'crm-erp-systems',
    icon: 'lucide:building-2',
    title: 'CRM & ERP Systems',
    tagline: 'Custom CRM, ERP, and business systems built around your process',
    summary: 'Custom-built or deeply customized CRM and ERP systems: sales pipelines, inventory, finance, and operations software that fits how you actually work.',
    description: 'Off-the-shelf CRM and ERP software often forces a company to reshape its process around the tool. We build custom systems, or deeply extend platforms like Dynamics and Salesforce, so the software matches your sales pipeline, inventory logic, financial workflows, and reporting needs, with clean integrations into the other systems your business already depends on.',
    capabilities: [
      'Custom CRM development: pipelines, contacts, activity tracking',
      'Custom ERP modules: inventory, procurement, finance, HR',
      'Integration with existing platforms (Salesforce, Dynamics, NetSuite)',
      'Workflow automation and approval chains',
      'Reporting, dashboards, and business intelligence',
      'Data migration from legacy systems'
    ],
    techStack: ['.NET / C#', 'React', 'Angular', 'SQL Server', 'PostgreSQL', 'Azure', 'REST / SOAP integrations'],
    idealFor: ['Sales & operations teams outgrowing spreadsheets', 'Businesses needing custom ERP workflows', 'Legacy CRM/ERP replacement', 'Multi-system integration projects'],
    metaTitle: 'Custom CRM & ERP Development Services',
    metaDescription: 'Custom CRM and ERP systems built around your actual business process: sales, inventory, finance, and operations software that fits.'
  },
  {
    slug: 'database-engineering',
    icon: 'lucide:database',
    title: 'Database Engineering & Architecture',
    tagline: 'Data foundations that stay fast and correct as you scale',
    summary: 'Schema design, performance tuning, and architecture across SQL and NoSQL systems: the database work most teams find out they need too late.',
    description: 'A lot of application problems are actually data problems: slow queries, inconsistent schemas, or an architecture that made sense at 10,000 rows and breaks at 10 million. We design database architecture up front and fix it under load, covering schema design, indexing and query optimization, replication and backup strategy, and migrations between relational and NoSQL systems.',
    capabilities: [
      'Schema design and data modeling',
      'Query optimization and performance tuning under real load',
      'Relational and NoSQL architecture (PostgreSQL, MySQL, SQL Server, MongoDB, Redis)',
      'Replication, backup, and disaster recovery strategy',
      'Data migration and zero-downtime schema changes',
      'Multi-tenant and sharded database architecture'
    ],
    techStack: ['PostgreSQL', 'MySQL', 'SQL Server', 'MongoDB', 'Redis', 'Elasticsearch', 'Prisma / EF Core'],
    idealFor: ['Applications hitting performance ceilings', 'New systems needing correct data architecture', 'Database migrations', 'High-scale multi-tenant platforms'],
    metaTitle: 'Database Engineering & Architecture Services',
    metaDescription: 'Database schema design, performance tuning, and architecture across PostgreSQL, MySQL, SQL Server, MongoDB, and more.'
  },
  {
    slug: 'media-content-platforms',
    icon: 'lucide:play-circle',
    title: 'Media & Content Platforms',
    tagline: 'High-traffic media, publishing, and streaming experiences',
    summary: 'Content-heavy and media-rich websites engineered for speed at scale: publishing platforms, streaming experiences, and high-traffic content sites.',
    description: 'Media and content platforms have a different engineering profile than typical web apps: large content volumes, heavy traffic spikes, video and image delivery at scale, and SEO as a primary growth channel. We build publishing systems, streaming and media delivery pipelines, and content architectures designed to stay fast under real-world traffic while giving editorial teams a workflow they can actually use.',
    capabilities: [
      'High-traffic content and publishing platform architecture',
      'Video and media delivery pipelines (CDN, adaptive streaming)',
      'Editorial workflows and headless content management',
      'SEO architecture for large content libraries',
      'Image and asset optimization at scale',
      'Caching and CDN strategy for traffic spikes'
    ],
    techStack: ['Next.js', 'Nuxt', 'Headless CMS', 'CDN / edge delivery', 'Node.js', 'Cloud media services'],
    idealFor: ['Publishers & content-driven businesses', 'Streaming and media platforms', 'High-traffic marketing sites', 'Editorial and newsroom tools'],
    metaTitle: 'Media & Content Platform Development',
    metaDescription: 'High-traffic media, publishing, and streaming platform development, engineered for scale, speed, and SEO.'
  },
  {
    slug: 'custom-enterprise-software',
    icon: 'lucide:network',
    title: 'Custom Enterprise Software',
    tagline: 'Bespoke systems for the workflows off-the-shelf software can\'t cover',
    summary: 'Custom internal tools, workflow systems, and enterprise integrations for operations that don\'t fit a standard product.',
    description: 'Some workflows are specific enough that no off-the-shelf product will ever fit cleanly. We build custom enterprise software, including internal tools, workflow and approval systems, and integration layers that connect the platforms you already run, so operational teams get software shaped around how the business actually works, not the other way around.',
    capabilities: [
      'Custom internal tools and operational dashboards',
      'Workflow, approval, and business process automation',
      'System integration and middleware between existing platforms',
      'Legacy system modernization',
      'Role-based, permission-aware enterprise applications',
      'Ongoing support and iteration as processes evolve'
    ],
    techStack: ['.NET / C#', 'Node.js', 'React', 'Angular', 'SQL Server', 'PostgreSQL', 'Azure / AWS'],
    idealFor: ['Operations teams with unique workflows', 'Enterprises integrating multiple systems', 'Legacy modernization projects', 'Process automation initiatives'],
    metaTitle: 'Custom Enterprise Software Development',
    metaDescription: 'Custom enterprise software, internal tools, and system integrations built around your actual operational workflows.'
  }
]

export function getServiceBySlug(slug: string) {
  return services.find(s => s.slug === slug)
}
