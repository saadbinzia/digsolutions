<script setup lang="ts">
import { caseStudies } from '~/data/portfolio'

useSeoMeta({
  title: 'Portfolio & Case Studies',
  description: 'Case studies from DigSolutions client work across CRM/ERP systems, AI integrations, mobile apps, SaaS platforms, media, and database engineering.',
  ogTitle: 'Portfolio | DigSolutions',
  ogDescription: 'Real client engagements across AI, mobile, SaaS, CRM/ERP, and media platform development.'
})
</script>

<template>
  <div>
    <section class="relative overflow-hidden border-b border-navy-100 bg-navy-50/50 py-16 sm:py-20">
      <div class="absolute inset-0 bg-dot-grid opacity-50 [mask-image:radial-gradient(ellipse_65%_60%_at_50%_0%,black,transparent)]" />
      <div class="container-page relative text-center" v-reveal>
        <span class="text-sm font-semibold uppercase tracking-wider text-brand-600">Portfolio</span>
        <h1 class="mx-auto mt-3 max-w-2xl text-balance text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl">
          Work built for real outcomes, not just launches
        </h1>
        <p class="mx-auto mt-5 max-w-2xl text-balance text-navy-500">
          A sample of engagements across CRM/ERP, AI integration, mobile, SaaS, media, and data engineering.
        </p>
      </div>
    </section>

    <section class="container-page py-16 sm:py-20">
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="(caseStudy, i) in caseStudies" :key="caseStudy.slug" v-reveal="(i % 3) * 80">
          <CaseStudyCard :case-study="caseStudy" />
        </div>
      </div>
    </section>

    <CtaBanner />
  </div>
</template>
