<script setup lang="ts">
const { services } = useContent()
const { t } = useI18n()

useSeoMeta({
  title: () => t('services.seo.title'),
  description: () => t('services.seo.description'),
  ogTitle: () => t('services.seo.ogTitle'),
  ogDescription: () => t('services.seo.ogDescription')
})
</script>

<template>
  <div>
    <section class="relative overflow-hidden border-b border-navy-100 bg-navy-50/50 py-16 sm:py-20">
      <div class="absolute inset-0 bg-dot-grid opacity-50 [mask-image:radial-gradient(ellipse_65%_60%_at_50%_0%,black,transparent)]" />
      <div class="container-page relative text-center" v-reveal>
        <span class="text-sm font-semibold uppercase tracking-wider text-brand-600">{{ t('services.eyebrow') }}</span>
        <h1 class="mx-auto mt-3 max-w-2xl text-balance text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl">
          {{ t('services.title') }}
        </h1>
        <p class="mx-auto mt-5 max-w-2xl text-balance text-navy-500">
          {{ t('services.subtitle') }}
        </p>
      </div>
    </section>

    <section class="container-page py-16 sm:py-20">
      <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="(service, i) in services" :key="service.slug" v-reveal="(i % 3) * 80">
          <ServiceCard :service="service" />
        </div>
      </div>
    </section>

    <CtaBanner
      :title="t('services.ctaTitle')"
      :description="t('services.ctaDescription')"
    />
  </div>
</template>
