<script setup lang="ts">
import { getCaseStudyBySlug, caseStudies } from '~/data/portfolio'
import { getServiceBySlug } from '~/data/services'

const route = useRoute()
const caseStudy = getCaseStudyBySlug(route.params.slug as string)

if (!caseStudy) {
  throw createError({ statusCode: 404, statusMessage: 'Case study not found' })
}

const relatedService = getServiceBySlug(caseStudy.serviceSlug)
const more = caseStudies.filter(c => c.slug !== caseStudy.slug).slice(0, 3)

useSeoMeta({
  title: caseStudy.title,
  description: caseStudy.summary,
  ogTitle: caseStudy.title,
  ogDescription: caseStudy.summary
})

useSchemaOrg([
  defineBreadcrumb({
    itemListElement: [
      { name: 'Home', item: '/' },
      { name: 'Portfolio', item: '/portfolio' },
      { name: caseStudy.title }
    ]
  })
])
</script>

<template>
  <div v-if="caseStudy">
    <section class="relative overflow-hidden bg-navy-950">
      <div class="bg-mesh">
        <div class="bg-mesh-blob bg-brand-600" style="width: 420px; height: 420px; top: -120px; right: -100px; opacity: 0.25;" />
      </div>
      <div class="absolute inset-0 flex items-center justify-end pr-16 opacity-10">
        <Icon :name="caseStudy.icon" size="240" class="text-white" />
      </div>
      <div class="container-page relative py-20 sm:py-24">
        <nav class="flex items-center gap-2 text-xs text-white/70">
          <NuxtLink to="/portfolio" class="hover:text-white">Portfolio</NuxtLink>
          <Icon name="lucide:chevron-right" size="12" />
          <span class="text-white">{{ caseStudy.client }}</span>
        </nav>
        <span class="mt-6 inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur">
          {{ caseStudy.industry }}
        </span>
        <h1 class="mt-5 max-w-3xl text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl">
          {{ caseStudy.title }}
        </h1>
        <p class="mt-4 max-w-2xl text-balance text-white/80">{{ caseStudy.summary }}</p>
        <div class="mt-8 flex flex-wrap gap-8 text-sm text-white/70">
          <div>
            <div class="text-xs uppercase tracking-wider text-white/50">Client</div>
            <div class="mt-1 font-medium text-white">{{ caseStudy.client }}</div>
          </div>
          <div>
            <div class="text-xs uppercase tracking-wider text-white/50">Timeline</div>
            <div class="mt-1 font-medium text-white">{{ caseStudy.timeline }}</div>
          </div>
        </div>
      </div>
    </section>

    <section class="container-page py-16 sm:py-20">
      <div class="grid grid-cols-1 gap-12 lg:grid-cols-3">
        <div class="space-y-10 lg:col-span-2" v-reveal>
          <div>
            <h2 class="text-xl font-semibold text-navy-900">The challenge</h2>
            <p class="mt-3 leading-relaxed text-navy-600">{{ caseStudy.challenge }}</p>
          </div>
          <div>
            <h2 class="text-xl font-semibold text-navy-900">Our approach</h2>
            <p class="mt-3 leading-relaxed text-navy-600">{{ caseStudy.approach }}</p>
          </div>
          <div>
            <h2 class="text-xl font-semibold text-navy-900">The solution</h2>
            <p class="mt-3 leading-relaxed text-navy-600">{{ caseStudy.solution }}</p>
          </div>
        </div>

        <aside class="space-y-6" v-reveal="120">
          <div class="rounded-2xl border border-navy-100 p-6">
            <h3 class="text-sm font-semibold uppercase tracking-wider text-navy-500">Results</h3>
            <dl class="mt-4 space-y-4">
              <div v-for="result in caseStudy.results" :key="result.label">
                <dt class="text-xs text-navy-500">{{ result.label }}</dt>
                <dd class="text-2xl font-bold text-navy-900">{{ result.value }}</dd>
              </div>
            </dl>
          </div>

          <div class="rounded-2xl border border-navy-100 p-6">
            <h3 class="text-sm font-semibold uppercase tracking-wider text-navy-500">Technologies</h3>
            <div class="mt-4 flex flex-wrap gap-2">
              <span
                v-for="tag in caseStudy.tags"
                :key="tag"
                class="rounded-full bg-navy-50 px-3 py-1 text-xs font-medium text-navy-700"
              >
                {{ tag }}
              </span>
            </div>
          </div>

          <NuxtLink
            v-if="relatedService"
            :to="`/services/${relatedService.slug}`"
            class="flex items-center justify-between rounded-2xl border border-navy-100 p-6 transition hover:border-brand-200"
          >
            <span>
              <span class="block text-xs text-navy-500">Related service</span>
              <span class="block text-sm font-semibold text-navy-900">{{ relatedService.title }}</span>
            </span>
            <Icon name="lucide:arrow-right" size="16" class="text-brand-600" />
          </NuxtLink>
        </aside>
      </div>
    </section>

    <section class="border-t border-navy-100 bg-navy-50/50 py-16 sm:py-20">
      <div class="container-page">
        <h2 class="text-2xl font-bold tracking-tight text-navy-900">More case studies</h2>
        <div class="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <CaseStudyCard v-for="c in more" :key="c.slug" :case-study="c" />
        </div>
      </div>
    </section>

    <CtaBanner title="Want results like this for your product?" />
  </div>
</template>
