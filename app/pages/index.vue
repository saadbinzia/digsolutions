<script setup lang="ts">
import { services } from '~/data/services'
import { caseStudies } from '~/data/portfolio'

useSeoMeta({
  title: 'Web, .NET, AI & E-commerce ERP Development',
  description: 'DigSolutions builds custom web and .NET platforms, AI-powered content automation, native Windows desktop applications, and multi-channel e-commerce ERP systems for teams that have outgrown manual processes and off-the-shelf tools.',
  ogTitle: 'DigSolutions | Web, .NET, AI & E-commerce ERP Development',
  ogDescription: 'Custom web and .NET platforms, AI-powered automation, desktop applications, and e-commerce ERP systems, built by a distributed team across the US and Pakistan.',
  ogType: 'website'
})

const techStack = [
  'Next.js', 'Nuxt', 'React', 'Angular', '.NET / C#', 'Node.js', 'TypeScript', 'PostgreSQL', 'OpenAI / Anthropic', 'AWS'
]

const valueProps = [
  {
    icon: 'lucide:workflow',
    title: 'Built to replace manual work',
    description: 'Our best engagements start with a process someone is still doing by hand: reconciling stock across storefronts, clipping video by eye. We automate that, not just the easy parts around it.'
  },
  {
    icon: 'lucide:sparkles',
    title: 'AI scoped to a real task',
    description: 'We use AI for specific, well-defined jobs inside a system, like flagging the right video clip or the right product to update, not as a general-purpose chatbot bolted onto the product.'
  },
  {
    icon: 'lucide:git-merge',
    title: 'Built around your existing systems',
    description: 'Most of our work connects to platforms you already run, Amazon, Shopify, WooCommerce, and more, so you get one source of truth instead of a system to migrate to.'
  },
  {
    icon: 'lucide:users',
    title: 'A team you work with directly',
    description: 'We\'re a 20-person team spread across the US and Pakistan. You work with the engineers building your product, not a rotating account-management layer.'
  }
]

const stats = [
  { target: 20, suffix: '', label: 'People on the team' },
  { target: 2, suffix: '', label: 'Countries we work from' },
  { target: 4, suffix: '', label: 'Core disciplines' }
]

const process = [
  { step: '01', title: 'Discover', description: 'We map your requirements, constraints, and existing systems before writing a line of code.' },
  { step: '02', title: 'Architect', description: 'Stack, data model, and AI/infrastructure decisions get made deliberately, and documented.' },
  { step: '03', title: 'Build', description: 'Agile delivery in short cycles, with staging environments and demos you can actually click through.' },
  { step: '04', title: 'Launch & support', description: 'We stay engaged post-launch. Monitoring, iteration, and support are built into every engagement.' }
]

const featuredCaseStudies = caseStudies.slice(0, 3)

const codeTabs = [
  {
    label: 'Clip extraction',
    file: 'webinar-pipeline.ts',
    code: `<span class="text-brand-400">const</span> clips = <span class="text-brand-400">await</span> extractClips({
  recording: webinar.videoUrl,
  speakers: webinar.speakers,
  criteria: [<span class="text-green-400">'quotable'</span>, <span class="text-green-400">'high-engagement'</span>]
})

<span class="text-brand-400">await</span> distribute(clips, [social, email])
<span class="text-navy-500">// same-day, not next-week</span>`
  },
  {
    label: 'Storefront sync',
    file: 'inventory-sync.ts',
    code: `<span class="text-brand-400">const</span> product = <span class="text-brand-400">await</span> erp.updateProduct(sku, changes)

<span class="text-brand-400">await</span> Promise.all([
  amazon.sync(product),
  shopify.sync(product),
  woocommerce.sync(product)
])
<span class="text-navy-500">// one update, every storefront</span>`
  },
  {
    label: 'Product flagging',
    file: 'catalog-review.ts',
    code: `<span class="text-brand-400">const</span> flagged = <span class="text-brand-400">await</span> ai.reviewCatalog({
  products: erp.activeListings,
  signals: [<span class="text-green-400">'stock'</span>, <span class="text-green-400">'sales trend'</span>, <span class="text-green-400">'listing age'</span>]
})

<span class="text-navy-500">// surfaces what actually needs attention</span>`
  }
]
const activeTab = ref(0)
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative overflow-hidden">
      <div class="bg-mesh">
        <div class="bg-mesh-blob bg-brand-300" style="width: 480px; height: 480px; top: -140px; left: -120px;" />
        <div class="bg-mesh-blob bg-brand-200" style="width: 420px; height: 420px; bottom: -160px; right: -100px; animation-delay: -6s;" />
      </div>
      <div class="absolute inset-0 bg-dot-grid opacity-60 [mask-image:radial-gradient(ellipse_65%_60%_at_50%_0%,black,transparent)]" />
      <div v-spotlight />
      <div class="container-page relative py-20 sm:py-28">
        <div class="mx-auto max-w-2xl text-center">
          <span v-reveal class="inline-flex items-center gap-2 rounded-full border border-navy-200 bg-white px-4 py-1.5 text-xs font-semibold text-navy-600 shadow-sm">
            <Icon name="lucide:sparkles" size="14" class="text-brand-500" />
            Web & .NET · AI automation · E-commerce ERP · Desktop apps
          </span>
          <h1 v-reveal="80" class="mt-6 text-balance text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl lg:text-6xl">
            One engineering partner, four disciplines you can verify
          </h1>
          <p v-reveal="140" class="mx-auto mt-6 max-w-xl text-balance text-lg leading-relaxed text-navy-500">
            Web & .NET development, AI automation, e-commerce ERP, and desktop applications, each backed by work we've actually shipped, built by a distributed team across the US and Pakistan.
          </p>
          <div v-reveal="200" class="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <!-- <a
              href="https://calendly.com/digsolutions/consultation"
              target="_blank"
              rel="noopener noreferrer"
              class="w-full rounded-lg bg-navy-900 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-600 sm:w-auto"
            >
              Book a call
            </a> -->
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
          Tools we build with
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
    <section class="relative overflow-hidden py-20 sm:py-24">
      <div class="absolute inset-0 bg-dot-grid opacity-30 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black,transparent)]" />
      <div class="container-page relative">
        <div class="mx-auto max-w-2xl text-center" v-reveal>
          <span class="text-sm font-semibold uppercase tracking-wider text-brand-600">What we build</span>
          <h2 class="mt-3 text-balance text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            Four disciplines, chosen because we can actually prove them
          </h2>
          <p class="mt-4 text-balance text-navy-500">
            We'd rather be specific about four things than vague about ten.
          </p>
        </div>
        <div class="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div v-for="(service, i) in services" :key="service.slug" v-reveal="(i % 4) * 70">
            <ServiceCard v-tilt :service="service" />
          </div>
        </div>
      </div>
    </section>

    <!-- AI spotlight -->
    <section class="relative overflow-hidden bg-navy-950 py-20 sm:py-24">
      <div class="bg-mesh">
        <div class="bg-mesh-blob bg-brand-600" style="width: 420px; height: 420px; top: 10%; right: -140px; opacity: 0.25;" />
      </div>
      <div class="container-page relative">
        <div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div v-reveal>
            <span class="inline-flex items-center gap-2 rounded-full bg-brand-500/10 px-4 py-1.5 text-xs font-semibold text-brand-300">
              <Icon name="lucide:sparkles" size="14" />
              AI & Custom LLM Integration
            </span>
            <h2 class="mt-5 text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
              AI scoped to one job, wired into a system you already run
            </h2>
            <p class="mt-4 leading-relaxed text-navy-300">
              We don't sell a general-purpose chatbot. We use AI for a specific task inside a pipeline: finding the clip worth publishing out of an hour of footage, or the product listing that actually needs attention out of hundreds.
            </p>
            <ul class="mt-8 space-y-3">
              <li v-for="item in [
                'Custom LLM integration into an existing product or workflow',
                'AI scoped to one narrow, verifiable task, not an open-ended assistant',
                'Built to sync with the storefronts and tools you already use',
                'Evaluated against real examples before it ships'
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
          <div class="relative" v-reveal="120">
            <div v-tilt class="rounded-2xl border border-navy-800 bg-navy-900 p-6 shadow-2xl">
              <div class="flex items-center justify-between border-b border-navy-800 pb-4">
                <div class="flex items-center gap-2">
                  <span class="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                  <span class="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                  <span class="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                  <span class="ml-2 text-xs text-navy-500">{{ codeTabs[activeTab].file }}</span>
                </div>
              </div>
              <div class="mt-4 flex gap-1.5">
                <button
                  v-for="(tab, i) in codeTabs"
                  :key="tab.label"
                  type="button"
                  class="rounded-md px-2.5 py-1 text-xs font-medium transition"
                  :class="i === activeTab ? 'bg-brand-500/15 text-brand-300' : 'text-navy-500 hover:text-navy-300'"
                  @click="activeTab = i"
                >
                  {{ tab.label }}
                </button>
              </div>
              <Transition name="code-fade" mode="out-in">
                <pre :key="activeTab" class="mt-4 min-h-[132px] overflow-x-auto text-xs leading-relaxed text-navy-300"><code v-html="codeTabs[activeTab].code" /></pre>
              </Transition>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why us -->
    <section class="container-page py-20 sm:py-24">
      <div class="mx-auto max-w-2xl text-center" v-reveal>
        <span class="text-sm font-semibold uppercase tracking-wider text-brand-600">Why DigSolutions</span>
        <h2 class="mt-3 text-balance text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
          Built to fit your stack, not the other way around
        </h2>
      </div>
      <div class="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div v-for="(item, i) in valueProps" :key="item.title" v-reveal="(i % 4) * 70" class="rounded-2xl border border-navy-100 p-6">
          <span class="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
            <Icon :name="item.icon" size="20" />
          </span>
          <h3 class="mt-4 text-base font-semibold text-navy-900">{{ item.title }}</h3>
          <p class="mt-2 text-sm leading-relaxed text-navy-500">{{ item.description }}</p>
        </div>
      </div>
    </section>

    <!-- Stats -->
    <section class="relative overflow-hidden border-y border-navy-100 bg-navy-950 py-16">
      <div class="bg-mesh">
        <div class="bg-mesh-blob bg-brand-700" style="width: 360px; height: 360px; top: -140px; left: 20%; opacity: 0.3;" />
      </div>
      <div class="container-page relative grid grid-cols-3 gap-8">
        <div v-for="(stat, i) in stats" :key="stat.label" v-reveal="(i % 3) * 70" class="text-center">
          <div class="text-4xl font-bold tracking-tight text-white">
            <StatCounter :target="stat.target" :suffix="stat.suffix" />
          </div>
          <div class="mt-1 text-sm text-navy-400">{{ stat.label }}</div>
        </div>
      </div>
    </section>

    <!-- Process -->
    <section class="container-page py-20 sm:py-24">
      <div class="mx-auto max-w-2xl text-center" v-reveal>
        <span class="text-sm font-semibold uppercase tracking-wider text-brand-600">How we work</span>
        <h2 class="mt-3 text-balance text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
          A process built for accountability, not ceremony
        </h2>
      </div>
      <div class="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div v-for="(item, i) in process" :key="item.step" v-reveal="(i % 4) * 70" class="relative rounded-2xl border border-navy-100 p-6">
          <span class="text-3xl font-bold text-brand-100">{{ item.step }}</span>
          <h3 class="mt-3 text-base font-semibold text-navy-900">{{ item.title }}</h3>
          <p class="mt-2 text-sm leading-relaxed text-navy-500">{{ item.description }}</p>
        </div>
      </div>
    </section>

    <!-- Featured case studies -->
    <section class="bg-navy-50/50 py-20 sm:py-24">
      <div class="container-page">
        <div class="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end" v-reveal>
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
          <div v-for="(caseStudy, i) in featuredCaseStudies" :key="caseStudy.slug" v-reveal="(i % 3) * 80">
            <CaseStudyCard :case-study="caseStudy" />
          </div>
        </div>
      </div>
    </section>

    <!-- References -->
    <section class="container-page py-20 sm:py-24">
      <div class="mx-auto max-w-2xl rounded-2xl border border-navy-100 bg-navy-50/50 p-8 text-center sm:p-10" v-reveal>
        <Icon name="lucide:message-circle" size="24" class="mx-auto text-brand-500" />
        <h2 class="mt-4 text-balance text-xl font-semibold text-navy-900">
          We'd rather connect you with a real client than post a quote you can't verify
        </h2>
        <p class="mt-3 text-sm leading-relaxed text-navy-500">
          We haven't published client names or testimonials here out of respect for confidentiality, not because the work isn't real. Ask us during a call and we'll arrange a reference from either engagement above.
        </p>
      </div>
    </section>

    <CtaBanner />
  </div>
</template>

<style scoped>
.code-fade-enter-active,
.code-fade-leave-active {
  transition: opacity 0.2s ease;
}
.code-fade-enter-from,
.code-fade-leave-to {
  opacity: 0;
}
</style>
