<script setup lang="ts">
import { services } from '~/data/services'
import { caseStudies } from '~/data/portfolio'

useSeoMeta({
  title: 'Web, Mobile, AI & Enterprise Software Development',
  description: 'DigSolutions builds web, mobile, AI/LLM-powered, and enterprise SaaS software across Next.js, Nuxt, React, Vue, Angular, and .NET. Full-stack engineering, custom AI integrations, and CRM/ERP systems built to scale.',
  ogTitle: 'DigSolutions — Web, Mobile, AI & Enterprise Software Development',
  ogDescription: 'Full-stack web, mobile, AI/LLM, and enterprise software development. Every major stack. One engineering partner.',
  ogType: 'website'
})

const techStack = [
  'Next.js', 'Nuxt', 'React', 'Vue', 'Angular', '.NET / C#',
  'Node.js', 'TypeScript', 'PostgreSQL', 'SQL Server', 'AWS', 'Azure'
]

const valueProps = [
  {
    icon: 'lucide:git-branch',
    title: 'Stack-agnostic by design',
    description: 'We hire and train across Next.js, Nuxt, React, Vue, Angular, and .NET so the technology fits your team and roadmap — not our comfort zone.'
  },
  {
    icon: 'lucide:sparkles',
    title: 'AI built in, not bolted on',
    description: 'From RAG systems to custom agents, our AI work is engineered for production — evaluated, guarded, and cost-aware from day one.'
  },
  {
    icon: 'lucide:shield-check',
    title: 'Enterprise-grade delivery',
    description: 'Security, testing, and documentation standards suited to CRM, ERP, and regulated systems — not just prototypes.'
  },
  {
    icon: 'lucide:users',
    title: 'Senior engineers, dedicated teams',
    description: 'You work directly with the engineers building your product — no offshore hand-offs, no rotating juniors mid-project.'
  }
]

const stats = [
  { value: '120+', label: 'Projects delivered' },
  { value: '40+', label: 'Enterprise clients' },
  { value: '9', label: 'Years in operation' },
  { value: '98%', label: 'Client retention' }
]

const process = [
  { step: '01', title: 'Discover', description: 'We map your requirements, constraints, and existing systems before writing a line of code.' },
  { step: '02', title: 'Architect', description: 'Stack, data model, and AI/infrastructure decisions get made deliberately — and documented.' },
  { step: '03', title: 'Build', description: 'Agile delivery in short cycles, with staging environments and demos you can actually click through.' },
  { step: '04', title: 'Launch & support', description: 'We stay engaged post-launch — monitoring, iteration, and support built into every engagement.' }
]

const testimonials = [
  {
    quote: 'DigSolutions rebuilt our CRM around how our sales team actually works instead of forcing us into another generic platform. Adoption went from a fight to automatic.',
    name: 'VP of Sales Operations',
    company: 'Financial Services Client'
  },
  {
    quote: 'They shipped a production RAG support system that our team actually trusts — with the evaluation and guardrails to back it up. That\'s rarer than it should be.',
    name: 'Head of Customer Support',
    company: 'B2B SaaS Client'
  },
  {
    quote: 'We came in wanting a rewrite. They talked us into a modernization plan instead, and it was the right call — zero downtime, and the business never noticed the migration.',
    name: 'CTO',
    company: 'Manufacturing Client'
  }
]

const featuredCaseStudies = caseStudies.slice(0, 3)
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative overflow-hidden">
      <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-50 via-white to-white" />
      <div class="container-page relative py-20 sm:py-28">
        <div class="mx-auto max-w-3xl text-center">
          <span class="inline-flex items-center gap-2 rounded-full border border-navy-200 bg-white px-4 py-1.5 text-xs font-semibold text-navy-600 shadow-sm">
            <Icon name="lucide:sparkles" size="14" class="text-brand-500" />
            Full-stack development · Custom AI & LLM integration
          </span>
          <h1 class="mt-6 text-balance text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl lg:text-6xl">
            Software engineering for companies that need AI, mobile, and enterprise systems to actually work together
          </h1>
          <p class="mx-auto mt-6 max-w-2xl text-balance text-lg leading-relaxed text-navy-500">
            DigSolutions designs and builds web applications, mobile apps, custom AI/LLM integrations, and enterprise SaaS, CRM, and ERP systems — across Next.js, Nuxt, React, Vue, Angular, and .NET.
          </p>
          <div class="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <NuxtLink
              to="/contact"
              class="w-full rounded-lg bg-navy-900 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-600 sm:w-auto"
            >
              Start a project
            </NuxtLink>
            <NuxtLink
              to="/portfolio"
              class="w-full rounded-lg border border-navy-200 bg-white px-6 py-3.5 text-sm font-semibold text-navy-800 transition hover:border-navy-300 sm:w-auto"
            >
              See our work
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Tech marquee -->
    <section class="border-y border-navy-100 bg-navy-50/50 py-8">
      <div class="container-page">
        <p class="text-center text-xs font-semibold uppercase tracking-wider text-navy-400">
          Engineering across every major stack
        </p>
        <div class="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          <span
            v-for="tech in techStack"
            :key="tech"
            class="text-sm font-semibold text-navy-400"
          >
            {{ tech }}
          </span>
        </div>
      </div>
    </section>

    <!-- Services -->
    <section class="container-page py-20 sm:py-24">
      <div class="mx-auto max-w-2xl text-center">
        <span class="text-sm font-semibold uppercase tracking-wider text-brand-600">What we build</span>
        <h2 class="mt-3 text-balance text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
          Every discipline your product needs, under one roof
        </h2>
        <p class="mt-4 text-balance text-navy-500">
          From customer-facing apps to the AI and data infrastructure behind them, we cover the full stack — literally.
        </p>
      </div>
      <div class="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <ServiceCard v-for="service in services" :key="service.slug" :service="service" />
      </div>
    </section>

    <!-- AI spotlight -->
    <section class="bg-navy-950 py-20 sm:py-24">
      <div class="container-page">
        <div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <span class="inline-flex items-center gap-2 rounded-full bg-brand-500/10 px-4 py-1.5 text-xs font-semibold text-brand-300">
              <Icon name="lucide:sparkles" size="14" />
              AI & Custom LLM Integration
            </span>
            <h2 class="mt-5 text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
              We build AI features that survive contact with production
            </h2>
            <p class="mt-4 leading-relaxed text-navy-300">
              Custom LLM integrations, retrieval-augmented generation grounded in your own data, agent workflows that take real action, and the evaluation and guardrail infrastructure that separates a demo from a product feature customers can rely on.
            </p>
            <ul class="mt-8 space-y-3">
              <li v-for="item in [
                'Custom LLM integration into existing products and workflows',
                'RAG systems grounded in proprietary data — not generic prompts',
                'AI agents and tool-calling for real task automation',
                'Evaluation, guardrails, and cost/latency engineering'
              ]" :key="item" class="flex items-start gap-3 text-sm text-navy-200">
                <Icon name="lucide:check" size="16" class="mt-0.5 shrink-0 text-brand-400" />
                {{ item }}
              </li>
            </ul>
            <NuxtLink
              to="/services/ai-llm-integration"
              class="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-300 hover:text-brand-200"
            >
              Explore AI & LLM integration
              <Icon name="lucide:arrow-right" size="15" />
            </NuxtLink>
          </div>
          <div class="relative">
            <div class="rounded-2xl border border-navy-800 bg-navy-900 p-6 shadow-2xl">
              <div class="flex items-center gap-2 border-b border-navy-800 pb-4">
                <span class="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                <span class="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                <span class="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                <span class="ml-2 text-xs text-navy-500">ai-copilot.service.ts</span>
              </div>
              <pre class="mt-4 overflow-x-auto text-xs leading-relaxed text-navy-300"><code><span class="text-brand-400">const</span> answer = <span class="text-brand-400">await</span> ragPipeline.query({
  input: userQuestion,
  sources: [tenantDocs, ticketHistory],
  guardrails: [confidenceThreshold, citationCheck],
  fallback: <span class="text-green-400">'escalate_to_human'</span>
})

<span class="text-navy-500">// grounded, cited, production-evaluated</span></code></pre>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why us -->
    <section class="container-page py-20 sm:py-24">
      <div class="mx-auto max-w-2xl text-center">
        <span class="text-sm font-semibold uppercase tracking-wider text-brand-600">Why DigSolutions</span>
        <h2 class="mt-3 text-balance text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
          Built to fit your stack, not the other way around
        </h2>
      </div>
      <div class="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div v-for="item in valueProps" :key="item.title" class="rounded-2xl border border-navy-100 p-6">
          <span class="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
            <Icon :name="item.icon" size="20" />
          </span>
          <h3 class="mt-4 text-base font-semibold text-navy-900">{{ item.title }}</h3>
          <p class="mt-2 text-sm leading-relaxed text-navy-500">{{ item.description }}</p>
        </div>
      </div>
    </section>

    <!-- Stats -->
    <section class="border-y border-navy-100 bg-navy-50/50 py-16">
      <div class="container-page grid grid-cols-2 gap-8 sm:grid-cols-4">
        <div v-for="stat in stats" :key="stat.label" class="text-center">
          <div class="text-4xl font-bold tracking-tight text-navy-900">{{ stat.value }}</div>
          <div class="mt-1 text-sm text-navy-500">{{ stat.label }}</div>
        </div>
      </div>
    </section>

    <!-- Process -->
    <section class="container-page py-20 sm:py-24">
      <div class="mx-auto max-w-2xl text-center">
        <span class="text-sm font-semibold uppercase tracking-wider text-brand-600">How we work</span>
        <h2 class="mt-3 text-balance text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
          A process built for accountability, not ceremony
        </h2>
      </div>
      <div class="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div v-for="item in process" :key="item.step" class="relative rounded-2xl border border-navy-100 p-6">
          <span class="text-3xl font-bold text-brand-100">{{ item.step }}</span>
          <h3 class="mt-3 text-base font-semibold text-navy-900">{{ item.title }}</h3>
          <p class="mt-2 text-sm leading-relaxed text-navy-500">{{ item.description }}</p>
        </div>
      </div>
    </section>

    <!-- Featured case studies -->
    <section class="bg-navy-50/50 py-20 sm:py-24">
      <div class="container-page">
        <div class="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span class="text-sm font-semibold uppercase tracking-wider text-brand-600">Recent work</span>
            <h2 class="mt-3 text-balance text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              Results, not just deliverables
            </h2>
          </div>
          <NuxtLink to="/portfolio" class="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700">
            View all case studies
            <Icon name="lucide:arrow-right" size="15" />
          </NuxtLink>
        </div>
        <div class="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <CaseStudyCard v-for="caseStudy in featuredCaseStudies" :key="caseStudy.slug" :case-study="caseStudy" />
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="container-page py-20 sm:py-24">
      <div class="mx-auto max-w-2xl text-center">
        <span class="text-sm font-semibold uppercase tracking-wider text-brand-600">Client feedback</span>
        <h2 class="mt-3 text-balance text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
          What it's like to work with us
        </h2>
      </div>
      <div class="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <figure v-for="t in testimonials" :key="t.name" class="flex flex-col rounded-2xl border border-navy-100 p-6">
          <Icon name="lucide:quote" size="24" class="text-brand-200" />
          <blockquote class="mt-4 flex-1 text-sm leading-relaxed text-navy-700">
            "{{ t.quote }}"
          </blockquote>
          <figcaption class="mt-5 border-t border-navy-100 pt-4">
            <div class="text-sm font-semibold text-navy-900">{{ t.name }}</div>
            <div class="text-xs text-navy-500">{{ t.company }}</div>
          </figcaption>
        </figure>
      </div>
    </section>

    <CtaBanner />
  </div>
</template>
