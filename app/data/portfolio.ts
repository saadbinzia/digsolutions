export interface CaseStudy {
  slug: string
  title: string
  client: string
  industry: string
  serviceSlug: string
  timeline: string
  icon: string
  summary: string
  challenge: string
  approach: string
  solution: string
  results: { label: string; value: string }[]
  tags: string[]
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'healthcare-webinar-clip-distribution',
    title: 'Turning live webinars into same-day social and email content',
    client: 'A healthcare organization in Europe',
    industry: 'Healthcare (Europe)',
    serviceSlug: 'ai-llm-integration',
    timeline: 'Ongoing engagement',
    icon: 'lucide:video',
    summary: 'Built an automated pipeline that extracts the best clips and quotes from live webinars and distributes them across social media and email the same day, instead of a week or two later.',
    challenge: 'The organization ran regular live webinars with valuable moments and quotes from different speakers, but turning that footage into short clips and distributing them across social media and email was a fully manual process. By the time content went out, it was often a week or two after the webinar, well past when the audience still cared.',
    approach: 'We looked at where the delay actually came from: someone had to rewatch the full recording, manually find the best moments, cut clips, and then separately push them out across channels. That entire chain, not just one step of it, needed to be automated for the timing problem to actually go away.',
    solution: 'We built a pipeline that processes each webinar recording as soon as it ends, uses AI to identify the clips and quotes worth publishing from each speaker, and automatically distributes them across the organization\'s social media and email channels. What used to take a week or more of manual editing and scheduling now goes out the same day the webinar happens.',
    results: [
      { label: 'Distribution delay', value: 'Weeks to same-day' },
      { label: 'Manual clipping work', value: 'Automated' },
      { label: 'Distribution channels', value: 'Social + email, automatic' }
    ],
    tags: ['AI/LLM', 'Media Automation', 'Web Platform']
  },
  {
    slug: 'multi-channel-ecommerce-erp',
    title: 'One system to manage products across Amazon, Shopify, and WooCommerce',
    client: 'A multi-channel e-commerce retailer',
    industry: 'E-commerce / Retail',
    serviceSlug: 'crm-erp-systems',
    timeline: 'Ongoing engagement',
    icon: 'lucide:layers',
    summary: 'Built a central ERP that connects to Amazon, Shopify, and WooCommerce storefronts, so products, stock, and sales are managed in one place instead of separately on each platform.',
    challenge: 'The business sold the same products across Amazon, Shopify, and WooCommerce, but managed inventory and listings separately on each platform. Keeping stock counts and product details consistent across three systems meant duplicated manual work and a real risk of overselling when stock wasn\'t updated everywhere in time.',
    approach: 'Rather than trying to make the three storefronts talk to each other directly, we built a central system that owns the product and inventory data, with each storefront treated as a connected channel that syncs to and from it. That meant the integration work happened once per platform instead of needing custom logic between every pair of systems.',
    solution: 'The ERP is now the single place products, stock, and pricing are managed. It connects to each storefront\'s API, automatically syncing sales and stock levels as orders come in on any channel, so the team updates a product once instead of three times. AI-assisted recommendations flag which products and listings need attention, based on sales and stock patterns across all channels.',
    results: [
      { label: 'Storefronts unified', value: 'Amazon, Shopify, WooCommerce' },
      { label: 'Product management', value: 'Single source of truth' },
      { label: 'Stock & sales sync', value: 'Automatic, cross-platform' }
    ],
    tags: ['ERP', 'E-commerce Integration', 'AI']
  }
]

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find(c => c.slug === slug)
}
