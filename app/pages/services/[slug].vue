<script setup lang="ts">
const { services, getServiceBySlug } = useContent()
const { t } = useI18n()

const route = useRoute()
const service = getServiceBySlug(route.params.slug as string)

if (!service) {
  throw createError({ statusCode: 404, statusMessage: 'Service not found' })
}

const related = computed(() => services.value.filter(s => s.slug !== service.slug).slice(0, 3))

useSeoMeta({
  title: service.metaTitle,
  description: service.metaDescription,
  ogTitle: service.metaTitle,
  ogDescription: service.metaDescription
})

useSchemaOrg([
  defineService({
    name: service.title,
    description: service.description,
    serviceType: service.title
  }),
  defineBreadcrumb({
    itemListElement: [
      { name: 'Home', item: '/' },
      { name: 'Services', item: '/services' },
      { name: service.title }
    ]
  })
])
</script>

<template>
  <div v-if="service">
    <section class="relative overflow-hidden border-b border-navy-100 bg-navy-50/50 py-16 sm:py-20">
      <div class="absolute inset-0 bg-dot-grid opacity-50 [mask-image:radial-gradient(ellipse_65%_60%_at_0%_0%,black,transparent)]" />
      <div class="container-page relative">
        <nav class="flex items-center gap-2 text-xs text-navy-500">
          <NuxtLinkLocale to="/services" class="hover:text-navy-700">{{ t('nav.services') }}</NuxtLinkLocale>
          <Icon name="lucide:chevron-right" size="12" />
          <span class="text-navy-700">{{ service.title }}</span>
        </nav>
        <div class="mt-6 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between" v-reveal>
          <div class="max-w-2xl">
            <span class="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600 text-white">
              <Icon :name="service.icon" size="24" />
            </span>
            <h1 class="mt-5 text-balance text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl">
              {{ service.title }}
            </h1>
            <p class="mt-4 text-lg text-navy-500">{{ service.tagline }}</p>
          </div>
          <NuxtLinkLocale
            to="/contact"
            class="inline-flex w-fit shrink-0 items-center gap-1.5 rounded-lg bg-navy-900 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-600"
          >
            {{ t('common.discussProject') }}
            <Icon name="lucide:arrow-right" size="15" />
          </NuxtLinkLocale>
        </div>
      </div>
    </section>

    <section class="container-page py-16 sm:py-20">
      <div class="grid grid-cols-1 gap-12 lg:grid-cols-3">
        <div class="lg:col-span-2">
          <p class="text-lg leading-relaxed text-navy-600">{{ service.description }}</p>

          <h2 class="mt-12 text-xl font-semibold text-navy-900">{{ t('serviceDetail.whatsIncluded') }}</h2>
          <ul class="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <li
              v-for="capability in service.capabilities"
              :key="capability"
              class="flex items-start gap-3 rounded-xl border border-navy-100 p-4 text-sm text-navy-700"
            >
              <Icon name="lucide:check-circle-2" size="18" class="mt-0.5 shrink-0 text-brand-500" />
              {{ capability }}
            </li>
          </ul>
        </div>

        <aside class="space-y-6">
          <div class="rounded-2xl border border-navy-100 p-6">
            <h3 class="text-sm font-semibold uppercase tracking-wider text-navy-500">{{ t('serviceDetail.technologies') }}</h3>
            <div class="mt-4 flex flex-wrap gap-2">
              <span
                v-for="tech in service.techStack"
                :key="tech"
                class="rounded-full bg-navy-50 px-3 py-1 text-xs font-medium text-navy-700"
              >
                {{ tech }}
              </span>
            </div>
          </div>

          <div class="rounded-2xl border border-navy-100 p-6">
            <h3 class="text-sm font-semibold uppercase tracking-wider text-navy-500">{{ t('serviceDetail.idealFor') }}</h3>
            <ul class="mt-4 space-y-2.5">
              <li v-for="item in service.idealFor" :key="item" class="flex items-start gap-2.5 text-sm text-navy-700">
                <Icon name="lucide:arrow-right" size="14" class="mt-1 shrink-0 text-brand-500" />
                {{ item }}
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </section>

    <section class="border-t border-navy-100 bg-navy-50/50 py-16 sm:py-20">
      <div class="container-page">
        <h2 class="text-2xl font-bold tracking-tight text-navy-900">{{ t('serviceDetail.relatedServices') }}</h2>
        <div class="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
          <ServiceCard v-for="s in related" :key="s.slug" :service="s" />
        </div>
      </div>
    </section>

    <CtaBanner
      :title="t('serviceDetail.ctaTitle', { service: service.title })"
    />
  </div>
</template>
