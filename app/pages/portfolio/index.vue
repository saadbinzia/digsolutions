<script setup lang="ts">
import { caseStudies } from '~/data/portfolio'

useSeoMeta({
  title: 'Portfolio & Case Studies',
  description: 'Case studies from DigSolutions client work across CRM/ERP systems, AI integrations, mobile apps, SaaS platforms, media, and database engineering.',
  ogTitle: 'Portfolio — DigSolutions',
  ogDescription: 'Real client engagements across AI, mobile, SaaS, CRM/ERP, and media platform development.'
})
</script>

<template>
  <div>
    <section class="border-b border-navy-100 bg-navy-50/50 py-16 sm:py-20">
      <div class="container-page text-center">
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
        <CaseStudyCard v-for="caseStudy in caseStudies" :key="caseStudy.slug" :case-study="caseStudy" />
      </div>
    </section>

    <CtaBanner />
  </div>
</template>
