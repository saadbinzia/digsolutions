<script setup lang="ts">
import type { Service } from '~/data/services'

defineProps<{ service: Service }>()
</script>

<template>
  <NuxtLink
    :to="`/services/${service.slug}`"
    class="group flex flex-col rounded-2xl border border-navy-100 bg-white p-6 transition hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-lg hover:shadow-navy-900/5"
  >
    <span class="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition group-hover:bg-brand-600 group-hover:text-white">
      <Icon :name="service.icon" size="22" />
    </span>
    <h3 class="mt-5 text-lg font-semibold text-navy-900">{{ service.title }}</h3>
    <p class="mt-2 flex-1 text-sm leading-relaxed text-navy-500">{{ service.summary }}</p>
    <span class="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
      Learn more
      <Icon name="lucide:arrow-right" size="15" class="transition group-hover:translate-x-0.5" />
    </span>
  </NuxtLink>
</template>
