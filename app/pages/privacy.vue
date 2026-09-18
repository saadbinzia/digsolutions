<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({
  title: () => t('privacy.seo.title'),
  description: () => t('privacy.seo.description'),
  ogTitle: () => t('privacy.seo.ogTitle'),
  ogDescription: () => t('privacy.seo.ogDescription'),
  robots: 'noindex, follow'
})
</script>

<template>
  <section class="container-page py-16 sm:py-20">
    <div class="mx-auto max-w-2xl">
      <h1 class="text-3xl font-bold tracking-tight text-navy-900">{{ t('privacy.title') }}</h1>
      <p class="mt-4 text-sm text-navy-500">{{ t('privacy.lastUpdated') }}</p>

      <div class="prose-content mt-10 space-y-6 text-navy-600">
        <p>{{ t('privacy.p1') }}</p>
        <p>{{ t('privacy.p2') }}</p>
        <p>{{ t('privacy.p3') }}</p>
        <p>{{ t('privacy.p4') }}</p>
      </div>
    </div>
  </section>
</template>
