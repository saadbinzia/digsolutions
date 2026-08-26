export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  author: string
  content: string[]
  metaDescription: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'choosing-between-nextjs-nuxt-and-angular',
    title: 'Choosing between Next.js, Nuxt, and Angular for your next project',
    excerpt: 'Framework choice is one of the most consequential technical decisions a new project makes — and one of the most over-debated. Here\'s how we actually decide.',
    category: 'Engineering',
    date: '2026-07-14',
    readTime: '7 min read',
    author: 'DigSolutions Engineering',
    metaDescription: 'A practical framework for choosing between Next.js, Nuxt, React, Vue, and Angular based on team, timeline, and product requirements — not trends.',
    content: [
      'Every framework debate online treats the choice as ideological. In practice, the right framework for a project is determined by a small number of concrete factors: what your team already knows, what your hosting and infrastructure look like, how content-heavy or interaction-heavy the product is, and how long the codebase needs to live.',
      'Next.js and Nuxt earn their popularity because they solve the same underlying problem — server rendering, routing, and data fetching in one coherent framework — for React and Vue respectively. If your team already thinks in React, Next.js removes friction. If your team thinks in Vue\'s simpler, more template-driven mental model, Nuxt does the same job with less ceremony.',
      'Angular remains the right call more often than its reputation suggests, particularly for large enterprise teams that value opinionated structure, built-in dependency injection, and long-term stability over flexibility. A twenty-engineer team maintaining a system for a decade benefits from Angular\'s guardrails in ways a five-person startup team does not.',
      'The mistake we see most often is choosing a framework based on what\'s trending rather than what the team will still be comfortable maintaining in three years. We start every engagement by mapping the actual constraints — team background, integration requirements, SEO needs, timeline — before recommending a stack.'
    ]
  },
  {
    slug: 'production-grade-rag-lessons',
    title: 'What we learned building production RAG systems for enterprise clients',
    excerpt: 'Retrieval-augmented generation looks simple in a demo and gets hard fast in production. Here are the failure modes we\'ve actually hit.',
    category: 'AI & LLMs',
    date: '2026-06-02',
    readTime: '9 min read',
    author: 'DigSolutions AI Practice',
    metaDescription: 'Lessons from building production retrieval-augmented generation (RAG) systems for enterprise clients — chunking, evaluation, and guardrails that matter.',
    content: [
      'A RAG demo is easy: embed some documents, retrieve the top matches, stuff them into a prompt. Production RAG is a different discipline entirely, and most of the hard problems live outside the model.',
      'Chunking strategy matters more than model choice. Poorly chunked documents — cut mid-sentence, missing headers, no metadata — produce confidently wrong answers regardless of which LLM sits downstream. We spend a disproportionate amount of early engagement time on document structure and metadata before touching the retrieval pipeline.',
      'Evaluation has to be built before the feature ships, not after users complain. We build a small labeled evaluation set from real queries early in every project, and re-run it against every prompt or retrieval change so regressions are caught before a customer finds them.',
      'Guardrails and confidence signals matter as much as accuracy. A system that says "I\'m not sure, here\'s a human to ask" outperforms a system that answers confidently and wrong — especially in support and compliance-adjacent use cases where a wrong answer costs more than a slow one.',
      'Cost and latency are product decisions, not infrastructure afterthoughts. Which model handles which query, when to cache, and when a smaller model is good enough are decisions we make explicitly, because they change the unit economics of the feature.'
    ]
  },
  {
    slug: 'signs-your-saas-needs-real-multi-tenancy',
    title: '5 signs your SaaS product needs real multi-tenant architecture',
    excerpt: 'A lot of early SaaS products fake multi-tenancy until it breaks. Here\'s how to tell you\'ve reached that point — before an enterprise customer does.',
    category: 'SaaS',
    date: '2026-04-21',
    readTime: '6 min read',
    author: 'DigSolutions Engineering',
    metaDescription: 'How to recognize when a SaaS product has outgrown its early data architecture and needs real multi-tenant isolation, before it becomes a blocker.',
    content: [
      'Most SaaS products start with a data model that technically supports multiple customers but wasn\'t designed for it — a single shared database with a customer_id column bolted on. That works fine until it doesn\'t, and the "doesn\'t" moment tends to arrive at the worst possible time: during an enterprise sales cycle.',
      'The first sign is a prospect asking about data isolation guarantees during procurement review. The second is an engineer needing to write a one-off script to fix data that leaked across tenant boundaries. The third is query performance degrading unpredictably as your largest customer\'s data volume grows and starts affecting everyone else on the same tables.',
      'The fourth sign is needing per-customer configuration — feature flags, custom fields, different retention policies — and realizing the current schema has nowhere clean to put it. The fifth is a customer asking for a dedicated environment or specific compliance guarantees your architecture can\'t cleanly provide.',
      'None of these mean a full rebuild. Real multi-tenant architecture is usually an incremental migration — row-level security, tenant-aware indexing, and a clear isolation boundary — done in phases behind the product your customers already use. The costly version is the one done under pressure, during a deal, instead of ahead of one.'
    ]
  },
  {
    slug: 'legacy-dotnet-modernization-without-a-rewrite',
    title: 'Modernizing a legacy .NET system without a full rewrite',
    excerpt: 'A full rewrite is rarely the right answer for a legacy system that\'s still running the business. Here\'s the incremental path we actually recommend.',
    category: 'Enterprise',
    date: '2026-02-18',
    readTime: '8 min read',
    author: 'DigSolutions Engineering',
    metaDescription: 'A practical, incremental approach to modernizing legacy .NET systems — without the risk and cost of a full rewrite.',
    content: [
      'The instinct when a legacy .NET Framework system feels slow and hard to change is to propose a full rewrite. It\'s rarely the right call. A system old enough to feel legacy is usually old enough to encode years of business rules that nobody has fully documented — rules a rewrite will silently drop.',
      'We favor the strangler pattern: new functionality gets built as separate, modern services (typically .NET 8+ or a JS/TS service where appropriate) sitting behind the same interface the legacy system exposes, while old functionality is migrated piece by piece as it needs to change anyway.',
      'Database modernization usually needs to happen in parallel, since legacy schemas often carry the same accumulated debt as the application code. We prioritize the tables and queries actually causing performance or reliability problems rather than modernizing everything uniformly.',
      'The result is a system that keeps running the business throughout the process, with risk concentrated in small, reversible steps instead of a single high-stakes cutover eighteen months in. It\'s slower to reach a fully modern codebase — but it\'s the version that doesn\'t risk the business getting there.'
    ]
  }
]

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find(p => p.slug === slug)
}
