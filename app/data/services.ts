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
    tagline: 'Full-stack web platforms and automation tools',
    summary: 'Custom web applications and internal platforms, built end to end with the automation and integrations that make a system actually replace manual work.',
    description: 'We build production web applications and platforms, not just marketing sites: internal tools, content and media pipelines, and systems that connect to the other software a business already runs. Recent work includes an automated pipeline that turns live webinar recordings into short clips and quotes and distributes them across social and email the same day, replacing a manual process that used to take a week or more.',
    capabilities: [
      'Custom web platforms and internal tools',
      'Media and content pipelines (ingest, process, publish, distribute)',
      'API design and integration between internal and third-party systems',
      'Automation of manual, repetitive operational workflows',
      'Dashboards and admin interfaces for non-technical teams',
      'CI/CD pipelines with staging environments and demos'
    ],
    techStack: ['Next.js', 'Nuxt', 'React', 'Node.js', 'TypeScript', 'PostgreSQL'],
    idealFor: ['Teams replacing manual, spreadsheet-driven processes', 'Content and media distribution pipelines', 'Internal dashboards and admin tools', 'Systems that need to talk to several existing tools'],
    metaTitle: 'Web Application Development Services',
    metaDescription: 'Custom web application development: platforms, internal tools, and automated content pipelines built in Next.js, Nuxt, React, and Node.js.'
  },
  {
    slug: 'ai-llm-integration',
    icon: 'lucide:sparkles',
    title: 'AI & Custom LLM Integration',
    tagline: 'AI features that do real work inside an existing system',
    summary: 'AI embedded into a working pipeline, not a standalone chatbot: identifying the important clip in an hour of video, or the product update that actually matters.',
    description: 'We integrate AI where it removes real manual effort inside a system we\'ve already built, rather than as a bolted-on chat widget. In our webinar distribution pipeline, AI identifies the clips and quotes worth publishing from a full recording. In our e-commerce ERP work, AI surfaces which product updates and listings actually need attention across dozens of SKUs. The goal is always a smaller, well-defined task the model can do reliably, wired into a workflow a team already depends on.',
    capabilities: [
      'AI-assisted content extraction (clip and quote identification from long-form video)',
      'AI-assisted product and catalog recommendations',
      'Custom LLM integration into existing products and workflows',
      'Retrieval and summarization over proprietary data',
      'Model evaluation and reliability checks before a feature ships',
      'Cost and latency-aware AI feature design'
    ],
    techStack: ['OpenAI', 'Anthropic Claude', 'Python', 'Node.js', 'TypeScript', 'Vector search'],
    idealFor: ['Media and content teams with too much raw footage to process manually', 'E-commerce teams managing large, fast-moving catalogs', 'Internal tools that need a narrow, reliable AI feature, not a general chatbot'],
    metaTitle: 'Custom AI & LLM Integration Services',
    metaDescription: 'AI features embedded into real workflows: content extraction, product recommendations, and custom LLM integration into existing systems.'
  },
  {
    slug: 'crm-erp-systems',
    icon: 'lucide:building-2',
    title: 'CRM & ERP Systems',
    tagline: 'Multi-channel commerce and operations systems',
    summary: 'ERP and operations systems that bring separate platforms (Amazon, Shopify, WooCommerce, and similar) under one source of truth for products, stock, and sales.',
    description: 'Businesses selling across multiple storefronts often end up managing products, inventory, and orders separately on each platform. We build custom ERP and operations systems that centralize that work: manage a product once, and have it sync automatically to every connected storefront, with stock and sales tracked in one place instead of reconciled by hand across platforms.',
    capabilities: [
      'Multi-storefront integration (Amazon, Shopify, WooCommerce, and similar)',
      'Centralized product, inventory, and stock management',
      'Automatic sales and stock syncing across connected platforms',
      'Custom CRM and pipeline tooling for sales and operations teams',
      'Workflow automation and approval chains',
      'Reporting and dashboards across combined sales channels'
    ],
    techStack: ['Node.js', 'TypeScript', 'PostgreSQL', 'REST / platform APIs', 'React'],
    idealFor: ['Businesses selling across multiple e-commerce platforms', 'Operations teams reconciling data across systems by hand', 'Sales & operations teams outgrowing spreadsheets'],
    metaTitle: 'Custom CRM & ERP Development Services',
    metaDescription: 'Custom ERP systems that unify multi-storefront e-commerce (Amazon, Shopify, WooCommerce) into one source of truth for products and stock.'
  },
  {
    slug: 'dotnet-desktop-development',
    icon: 'lucide:monitor',
    title: '.NET & Desktop Applications',
    tagline: '.NET web platforms, Angular front ends, and native Windows desktop software',
    summary: '.NET backends, Angular front ends, and native desktop applications for businesses that need software running directly on Windows machines, not just in a browser.',
    description: 'Some workflows still belong on the desktop: point-of-sale systems, internal operations tools, and software that needs direct access to local hardware or files without a browser in the way. We build on the .NET stack end to end, C# backends and services, Angular front ends for the web side of a .NET system, and native Windows desktop applications, for teams whose tooling needs to live outside the browser.',
    capabilities: [
      'Native Windows desktop applications (WPF / WinForms)',
      '.NET / C# backend services and APIs',
      'Angular front ends for .NET-based web applications',
      'Desktop-to-cloud sync (local app talking to a hosted backend)',
      'Legacy .NET application maintenance and modernization',
      'Installer packaging and update distribution for desktop software'
    ],
    techStack: ['.NET / C#', 'Angular', 'WPF', 'WinForms', 'SQL Server'],
    idealFor: ['Businesses needing software that runs on local Windows machines', 'Point-of-sale and internal operations tools', 'Teams with an existing .NET codebase to extend or modernize'],
    metaTitle: '.NET & Windows Desktop Application Development',
    metaDescription: '.NET backends, Angular front ends, and native Windows desktop applications (WPF/WinForms) for software that needs to run outside the browser.'
  }
]

export function getServiceBySlug(slug: string) {
  return services.find(s => s.slug === slug)
}
