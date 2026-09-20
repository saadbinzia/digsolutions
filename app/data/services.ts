export interface ServiceProcessStep {
  title: string
  description: string
}

export interface ServiceFaq {
  question: string
  answer: string
}

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
  // Optional: populated for English first. Other locales fall back to not
  // rendering this section rather than a machine-translated placeholder.
  process?: ServiceProcessStep[]
  faqs?: ServiceFaq[]
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
    metaDescription: 'Custom web application development: platforms, internal tools, and automated content pipelines built in Next.js, Nuxt, React, and Node.js.',
    process: [
      { title: 'Scope the workflow, not just the feature', description: 'We start by mapping the actual manual process, tools, and handoffs involved, not just the feature request, so the system we build replaces the real bottleneck instead of a symptom of it.' },
      { title: 'Design the data model and integrations first', description: 'Before UI work starts, we settle how data flows between your existing tools and the new system. Retrofitting integrations after the fact is where most projects blow their timeline.' },
      { title: 'Build in a staging environment you can see', description: 'You get access to a staging deployment from week one, with regular demos, not a black box that appears at the end of the engagement.' },
      { title: 'Ship, then keep iterating', description: 'Most engagements continue past launch, because the process the software replaces keeps evolving and the system needs to evolve with it.' }
    ],
    faqs: [
      { question: 'How long does a typical web application project take?', answer: 'It depends on scope, but most initial versions ship in 6-12 weeks, with ongoing iteration after that. We scope timeline against the specific workflow being replaced, not a generic estimate.' },
      { question: 'Do you work with an existing codebase, or only greenfield projects?', answer: 'Both. Some engagements start from scratch; others involve extending or integrating with a system you already run.' },
      { question: 'What if our requirements change halfway through?', answer: 'They usually do. We work in staged milestones specifically so scope changes get absorbed at each stage instead of unraveling the whole build.' },
      { question: 'Who owns the code and infrastructure after launch?', answer: 'You do. You get access to the same repos, environments, and accounts we use to build it, not a system that only we can maintain.' }
    ]
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
    metaDescription: 'AI features embedded into real workflows: content extraction, product recommendations, and custom LLM integration into existing systems.',
    process: [
      { title: 'Find the narrow job, not the broad vision', description: 'We look for one specific, well-defined task inside an existing workflow, not a general-purpose AI feature bolted onto the side of a product.' },
      { title: 'Prototype against real data early', description: 'We test the model against actual production-like inputs from week one, since demo data hides the failure modes that matter in practice.' },
      { title: 'Build an evaluation set before shipping', description: 'We create a labeled set of real examples that has to keep passing as we change prompts or retrieval, so regressions get caught before a customer finds them.' },
      { title: 'Design for cost, latency, and graceful failure', description: 'Which model handles which query, when to fall back to a human, and what happens when the model isn’t confident are explicit product decisions, not afterthoughts.' }
    ],
    faqs: [
      { question: 'Do you build custom chatbots?', answer: 'Not as a default. We’ve found narrow, embedded AI features (like clip extraction or catalog flagging) deliver more reliable value than a general-purpose chat widget. If a chatbot is genuinely the right tool for your workflow, we’ll say so.' },
      { question: 'Which AI providers do you use?', answer: 'Primarily OpenAI and Anthropic, chosen per task based on accuracy, cost, and latency requirements, not a single default vendor.' },
      { question: 'How do you handle AI mistakes or hallucinations?', answer: 'Evaluation sets, confidence thresholds, and human-in-the-loop fallbacks for anything customer-facing. A system that says “I’m not sure” beats one that answers confidently and wrong.' },
      { question: 'Can you add AI to a system you didn’t build?', answer: 'Yes, as long as we can get access to the data and workflow it needs to plug into.' }
    ]
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
    metaDescription: 'Custom ERP systems that unify multi-storefront e-commerce (Amazon, Shopify, WooCommerce) into one source of truth for products and stock.',
    process: [
      { title: 'Map every storefront and system you currently reconcile by hand', description: 'Before writing code, we document exactly which platforms, spreadsheets, and manual steps currently keep your product and stock data in sync.' },
      { title: 'Design the system as the source of truth', description: 'Your new ERP owns product, inventory, and pricing data; each storefront becomes a synced channel instead of a separate system to update manually.' },
      { title: 'Migrate one storefront at a time', description: 'We connect and validate one platform before moving to the next, so a mistake in one integration can’t corrupt data across all of them.' },
      { title: 'Layer in reporting and automation last', description: 'Dashboards, approval workflows, and AI-assisted flags get added once the core sync is solid, not before.' }
    ],
    faqs: [
      { question: 'Which platforms do you integrate with?', answer: 'Amazon, Shopify, and WooCommerce most often; we’ve also built custom integrations with other storefront and marketplace APIs on request.' },
      { question: 'Will this replace our existing CRM/ERP entirely?', answer: 'Depends on your setup. Some engagements replace a patchwork of spreadsheets and manual reconciliation entirely; others extend an existing system with the integrations it’s missing.' },
      { question: 'What happens to our data during migration?', answer: 'We migrate and validate data storefront by storefront, with your existing systems still running in parallel until each connection is verified.' },
      { question: 'Can the system grow with more sales channels later?', answer: 'Yes. Adding a new storefront becomes one new integration against an existing source of truth, not a redesign.' }
    ]
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
    metaDescription: '.NET backends, Angular front ends, and native Windows desktop applications (WPF/WinForms) for software that needs to run outside the browser.',
    process: [
      { title: 'Understand what actually needs to live outside the browser', description: 'Local hardware access, offline use, or a legacy dependency are common reasons; we confirm the desktop requirement before defaulting to it.' },
      { title: 'Assess the existing .NET codebase, if any', description: 'For modernization work, we identify which parts of a legacy system are load-bearing before touching them, so business rules encoded years ago don’t get silently dropped.' },
      { title: 'Build the backend and UI in parallel, integrated early', description: 'C# services and the Angular or desktop UI get connected from early in the build, not bolted together at the end.' },
      { title: 'Package and ship with a real update path', description: 'Installer packaging and update distribution are part of the deliverable, not an afterthought for someone else to figure out.' }
    ],
    faqs: [
      { question: 'Do you only build new desktop applications, or also maintain legacy ones?', answer: 'Both. A lot of our .NET work is modernizing or extending an existing legacy system rather than building from scratch.' },
      { question: 'Why would we need a desktop app instead of a web app?', answer: 'Typically: direct hardware or file access, offline requirements, or an existing point-of-sale/operations tool that already lives on Windows machines. We’ll tell you honestly if a web app would serve you better.' },
      { question: 'Do you use WPF or WinForms?', answer: 'Depends on the project. We work in both, and recommend based on what fits your existing codebase and requirements, not a default preference.' },
      { question: 'Can the desktop app talk to cloud services?', answer: 'Yes, desktop-to-cloud sync (a local app talking to a hosted backend) is a capability we build regularly.' }
    ]
  }
]

export function getServiceBySlug(slug: string) {
  return services.find(s => s.slug === slug)
}
