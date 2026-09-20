<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({
  title: () => t('terms.seo.title'),
  description: () => t('terms.seo.description'),
  ogTitle: () => t('terms.seo.ogTitle'),
  ogDescription: () => t('terms.seo.ogDescription'),
  robots: 'noindex, follow'
})
</script>

<template>
  <section class="container-page py-16 sm:py-20">
    <div class="mx-auto max-w-2xl">
      <h1 class="text-3xl font-bold tracking-tight text-navy-900">{{ t('terms.title') }}</h1>
      <p class="mt-4 text-sm text-navy-500">{{ t('terms.lastUpdated') }}</p>

      <div class="prose-content mt-10 space-y-6 text-navy-600">
        <p>{{ t('terms.p1') }}</p>
        <p>{{ t('terms.p2') }}</p>
        <p>{{ t('terms.p3') }}</p>
        <p>{{ t('terms.p4') }}</p>
      </div>
    </div>
  </section>
</template>
