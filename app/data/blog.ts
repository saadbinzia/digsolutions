export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  author: string
  image: string
  imageAlt: string
  keyTakeaways: string[]
  content: string[]
  metaDescription: string
  // Optional: which services a service detail page should link to this post
  // from. Populated for English first (see Service.process/faqs for the same
  // rollout note).
  relatedServiceSlugs?: string[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'choosing-between-nextjs-nuxt-and-angular',
    title: 'Choosing between Next.js, Nuxt, and Angular for your next project',
    excerpt: 'Framework choice is one of the most consequential technical decisions a new project makes, and one of the most over-debated. Here\'s how we actually decide.',
    category: 'Engineering',
    date: '2026-07-14',
    author: 'DigSolutions Engineering',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Close-up of colorful syntax-highlighted code on a monitor',
    keyTakeaways: [
      'Framework choice should follow team background, hosting setup, and content-vs-interaction balance, not trends.',
      'Next.js and Nuxt solve the same problem for React and Vue respectively: pick based on which mental model your team already has.',
      'Angular\'s structure pays off most for large, long-lived enterprise teams, not small startup teams.',
      'Optimize for what your team will still be comfortable maintaining in three years.'
    ],
    metaDescription: 'A practical framework for choosing between Next.js, Nuxt, React, Vue, and Angular based on team, timeline, and product requirements, not trends.',
    relatedServiceSlugs: ['web-application-development', 'dotnet-desktop-development'],
    content: [
      'Every framework debate online treats the choice as ideological. In practice, the right framework for a project is determined by a small number of concrete factors: what your team already knows, what your hosting and infrastructure look like, how content-heavy or interaction-heavy the product is, and how long the codebase needs to live.',
      'Next.js and Nuxt earn their popularity because they solve the same underlying problem, server rendering, routing, and data fetching in one coherent framework, for React and Vue respectively. If your team already thinks in React, Next.js removes friction. If your team thinks in Vue\'s simpler, more template-driven mental model, Nuxt does the same job with less ceremony.',
      'Angular remains the right call more often than its reputation suggests, particularly for large enterprise teams that value opinionated structure, built-in dependency injection, and long-term stability over flexibility. A twenty-engineer team maintaining a system for a decade benefits from Angular\'s guardrails in ways a five-person startup team does not.',
      'Rendering strategy is where the framework choice actually bites, not the syntax. A marketing site or blog wants static generation: build once, serve from a CDN, and skip a render on every request. A dashboard behind a login wants client-side rendering, since there\'s nothing to index and the data is per-user anyway. Most real products need a mix, and this is exactly where Next.js and Nuxt earn their complexity: per-route rendering modes (static, server-rendered, incrementally regenerated) instead of an all-or-nothing choice baked in at the project level.',
      'SEO requirements change the calculus more than most teams expect going in. A content-heavy marketing site or a multi-locale storefront needs real server-rendered HTML for crawlers and fast first paint, which pushes toward Next.js or Nuxt over a client-only Angular SPA. An internal admin tool has no SEO requirement at all, which removes that constraint entirely and shifts the decision back to team familiarity and component ecosystem.',
      'Migration cost is the factor teams underweight most. Moving a five-person team from Vue to React (or the reverse) to chase a framework isn\'t free: it\'s weeks of reduced velocity while people relearn idioms they were already fluent in. We\'ve turned down "let\'s modernize to X" requests where the existing stack was working fine and the actual complaint was an unrelated architecture problem that any framework would have inherited.',
      'The mistake we see most often is choosing a framework based on what\'s trending rather than what the team will still be comfortable maintaining in three years. We start every engagement by mapping the actual constraints, team background, integration requirements, SEO needs, timeline, before recommending a stack, and we\'ll tell a prospective client to stay on their current framework when that\'s the right call, even if it means a smaller project for us.'
    ]
  },
  {
    slug: 'production-grade-rag-lessons',
    title: 'What we learned building production RAG systems for enterprise clients',
    excerpt: 'Retrieval-augmented generation looks simple in a demo and gets hard fast in production. Here are the failure modes we\'ve actually hit.',
    category: 'AI & LLMs',
    date: '2026-06-02',
    author: 'DigSolutions AI Practice',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Server rack with illuminated network cabling',
    keyTakeaways: [
      'Chunking and document structure matter more to answer quality than which LLM you use.',
      'Build a labeled evaluation set from real queries before shipping, and re-run it on every prompt or retrieval change.',
      'A system that says "I\'m not sure" beats one that answers confidently and wrong.',
      'Cost, latency, and model routing are product decisions, not infrastructure afterthoughts.'
    ],
    metaDescription: 'Lessons from building production retrieval-augmented generation (RAG) systems for enterprise clients: chunking, evaluation, and guardrails that matter.',
    relatedServiceSlugs: ['ai-llm-integration'],
    content: [
      'A RAG demo is easy: embed some documents, retrieve the top matches, stuff them into a prompt. Production RAG is a different discipline entirely, and most of the hard problems live outside the model.',
      'Chunking strategy matters more than model choice. Poorly chunked documents, cut mid-sentence, missing headers, no metadata, produce confidently wrong answers regardless of which LLM sits downstream. We spend a disproportionate amount of early engagement time on document structure and metadata before touching the retrieval pipeline.',
      'Evaluation has to be built before the feature ships, not after users complain. We build a small labeled evaluation set from real queries early in every project, and re-run it against every prompt or retrieval change so regressions are caught before a customer finds them.',
      'Pure vector similarity search misses queries that hinge on an exact term, a product code, or a name the embedding model doesn\'t weight heavily. Hybrid search, combining vector similarity with keyword/BM25 matching and re-ranking the merged results, consistently outperforms either approach alone once the document set is large or the queries get specific. It costs more to build and tune, and it\'s worth it for anything beyond a small, homogenous knowledge base.',
      'Metadata filtering is what makes retrieval trustworthy at scale, not just accurate. Tagging chunks with source, date, access level, and document type lets you constrain retrieval before similarity search even runs, which matters both for answer quality (don\'t retrieve a superseded policy document) and for access control (don\'t retrieve a document this user isn\'t supposed to see, regardless of how well it matches the query).',
      'Guardrails and confidence signals matter as much as accuracy. A system that says "I\'m not sure, here\'s a human to ask" outperforms a system that answers confidently and wrong, especially in support and compliance-adjacent use cases where a wrong answer costs more than a slow one.',
      'Observability has to be built in from day one, not added when something breaks. We log the retrieved chunks alongside the generated answer for every production query, not just the final output, because when an answer is wrong, the fix is almost always in retrieval, and you can\'t debug what you didn\'t capture.',
      'Cost and latency are product decisions, not infrastructure afterthoughts. Which model handles which query, when to cache, and when a smaller model is good enough are decisions we make explicitly, because they change the unit economics of the feature.'
    ]
  },
  {
    slug: 'signs-your-saas-needs-real-multi-tenancy',
    title: '5 signs your SaaS product needs real multi-tenant architecture',
    excerpt: 'A lot of early SaaS products fake multi-tenancy until it breaks. Here\'s how to tell you\'ve reached that point, before an enterprise customer does.',
    category: 'SaaS',
    date: '2026-04-21',
    author: 'DigSolutions Engineering',
    image: 'https://images.unsplash.com/photo-1553484771-047a44eee27a?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Founder working on a laptop at a cafe table',
    keyTakeaways: [
      'A shared database with a customer_id column is not real multi-tenancy, and it tends to break during procurement review.',
      'Watch for one-off scripts fixing cross-tenant data leaks and unpredictable query performance from your largest customer.',
      'Per-customer configuration needs and compliance requests are late-stage warning signs.',
      'Real multi-tenant migration is usually incremental, done ahead of a deal rather than under pressure during one.'
    ],
    metaDescription: 'How to recognize when a SaaS product has outgrown its early data architecture and needs real multi-tenant isolation, before it becomes a blocker.',
    relatedServiceSlugs: ['web-application-development', 'crm-erp-systems'],
    content: [
      'Most SaaS products start with a data model that technically supports multiple customers but wasn\'t designed for it: a single shared database with a customer_id column bolted on. That works fine until it doesn\'t, and the "doesn\'t" moment tends to arrive at the worst possible time: during an enterprise sales cycle.',
      'The first sign is a prospect asking about data isolation guarantees during procurement review. The second is an engineer needing to write a one-off script to fix data that leaked across tenant boundaries. The third is query performance degrading unpredictably as your largest customer\'s data volume grows and starts affecting everyone else on the same tables.',
      'The fourth sign is needing per-customer configuration, feature flags, custom fields, different retention policies, and realizing the current schema has nowhere clean to put it. The fifth is a customer asking for a dedicated environment or specific compliance guarantees your architecture can\'t cleanly provide.',
      'Row-level security, enforced at the database layer rather than only in application code, is what actually closes the isolation gap. An application-level "always filter by tenant_id" convention works until one query somewhere forgets to, and that one miss is the incident that ends up in a security review. Postgres row-level security policies (or the equivalent in your database) make the isolation boundary something the database enforces even when application code has a bug.',
      'Testing isolation has to be adversarial, not just functional. It\'s not enough to verify that tenant A sees tenant A\'s data; you need tests that actively try to make tenant A see tenant B\'s data through every code path, including background jobs, caching layers, and search indexes, which are the places isolation bugs actually hide.',
      'The migration itself is a sequencing problem more than an engineering one. We typically start with the highest-risk tables (the ones already showing performance or leak symptoms), add tenant-aware indexing and row-level policies behind a feature flag, validate against production traffic in shadow mode, then cut over table by table instead of in one release.',
      'None of this means a full rebuild. Real multi-tenant architecture is usually an incremental migration: row-level security, tenant-aware indexing, and a clear isolation boundary, done in phases behind the product your customers already use. The costly version is the one done under pressure, during a deal, instead of ahead of one.'
    ]
  },
  {
    slug: 'legacy-dotnet-modernization-without-a-rewrite',
    title: 'Modernizing a legacy .NET system without a full rewrite',
    excerpt: 'A full rewrite is rarely the right answer for a legacy system that\'s still running the business. Here\'s the incremental path we actually recommend.',
    category: 'Enterprise',
    date: '2026-02-18',
    author: 'DigSolutions Engineering',
    image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Glasses reflecting lines of code on multiple monitors',
    keyTakeaways: [
      'A full rewrite risks silently dropping business rules that were never fully documented.',
      'The strangler pattern lets new services sit behind the legacy interface while old functionality migrates piece by piece.',
      'Database modernization should target the specific tables and queries causing real problems, not everything uniformly.',
      'An incremental migration keeps the business running throughout, trading speed for concentrated, reversible risk.'
    ],
    metaDescription: 'A practical, incremental approach to modernizing legacy .NET systems, without the risk and cost of a full rewrite.',
    relatedServiceSlugs: ['dotnet-desktop-development'],
    content: [
      'The instinct when a legacy .NET Framework system feels slow and hard to change is to propose a full rewrite. It\'s rarely the right call. A system old enough to feel legacy is usually old enough to encode years of business rules that nobody has fully documented, rules a rewrite will silently drop.',
      'We favor the strangler pattern: new functionality gets built as separate, modern services (typically .NET 8+ or a JS/TS service where appropriate) sitting behind the same interface the legacy system exposes, while old functionality is migrated piece by piece as it needs to change anyway.',
      'Database modernization usually needs to happen in parallel, since legacy schemas often carry the same accumulated debt as the application code. We prioritize the tables and queries actually causing performance or reliability problems rather than modernizing everything uniformly.',
      'Characterization tests come before any refactor, not after. Before touching a module with undocumented business rules, we write tests that capture its current behavior exactly as it is, bugs included, so we have a way to know whether a later change was a deliberate fix or an accidental regression. Without this step, "modernizing" a legacy system quietly changes what it does, which is often worse than not touching it.',
      'Team skill transition is a real cost that project timelines routinely ignore. A team that has maintained .NET Framework and WebForms for a decade doesn\'t become fluent in modern .NET and a new front-end framework by reading documentation over a weekend. We build pairing and knowledge transfer into the engagement itself, not as a separate afterthought, so the client\'s own team can maintain the modernized system, not just us.',
      'The result is a system that keeps running the business throughout the process, with risk concentrated in small, reversible steps instead of a single high-stakes cutover eighteen months in. It\'s slower to reach a fully modern codebase, but it\'s the version that doesn\'t risk the business getting there.'
    ]
  }
]

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find(p => p.slug === slug)
}
