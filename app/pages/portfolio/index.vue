<script setup lang="ts">
const { caseStudies } = useContent()
const { t } = useI18n()

useSeoMeta({
  title: () => t('portfolio.seo.title'),
  description: () => t('portfolio.seo.description'),
  ogTitle: () => t('portfolio.seo.ogTitle'),
  ogDescription: () => t('portfolio.seo.ogDescription')
})
</script>

<template>
  <div>
    <section class="relative overflow-hidden border-b border-navy-100 bg-navy-50/50 py-16 sm:py-20">
      <div class="absolute inset-0 bg-dot-grid opacity-50 [mask-image:radial-gradient(ellipse_65%_60%_at_50%_0%,black,transparent)]" />
      <div class="container-page relative text-center" v-reveal>
        <span class="text-sm font-semibold uppercase tracking-wider text-brand-600">{{ t('portfolio.eyebrow') }}</span>
        <h1 class="mx-auto mt-3 max-w-2xl text-balance text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl">
          {{ t('portfolio.title') }}
        </h1>
        <p class="mx-auto mt-5 max-w-2xl text-balance text-navy-500">
          {{ t('portfolio.subtitle') }}
        </p>
        <NuxtLinkLocale
          to="/contact"
          class="mt-8 inline-flex w-full items-center justify-center rounded-lg bg-navy-900 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-600 sm:w-auto lg:hidden"
        >
          {{ t('common.startProject') }}
        </NuxtLinkLocale>
      </div>
    </section>

    <section class="container-page py-16 sm:py-20">
      <h2 class="sr-only">{{ t('portfolio.gridHeading') }}</h2>
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="(caseStudy, i) in caseStudies" :key="caseStudy.slug" v-reveal="(i % 3) * 80">
          <CaseStudyCard :case-study="caseStudy" />
        </div>
      </div>
    </section>

    <CtaBanner />
  </div>
</template>
