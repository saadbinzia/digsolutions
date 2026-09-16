<script setup lang="ts">
import type { CaseStudy } from '~/data/portfolio'

defineProps<{ caseStudy: CaseStudy }>()
</script>

<template>
  <NuxtLink
    :to="`/portfolio/${caseStudy.slug}`"
    class="group flex flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white transition duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-navy-900/5"
  >
    <div class="relative flex h-44 items-center justify-center overflow-hidden bg-navy-950">
      <div class="bg-mesh">
        <div class="bg-mesh-blob bg-brand-600" style="width: 220px; height: 220px; top: -60px; left: -40px; opacity: 0.35;" />
      </div>
      <Icon :name="caseStudy.icon" size="40" class="relative text-brand-300 transition duration-500 group-hover:scale-110" />
      <span class="absolute bottom-4 left-5 rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur">
        {{ caseStudy.industry }}
      </span>
    </div>
    <div class="flex flex-1 flex-col p-6">
      <h3 class="text-base font-semibold leading-snug text-navy-900">{{ caseStudy.title }}</h3>
      <p class="mt-2 flex-1 text-sm leading-relaxed text-navy-500">{{ caseStudy.summary }}</p>
      <div class="mt-5 flex flex-wrap gap-2">
        <span
          v-for="tag in caseStudy.tags"
          :key="tag"
          class="rounded-full bg-navy-50 px-2.5 py-1 text-xs font-medium text-navy-600"
        >
          {{ tag }}
        </span>
      </div>
      <span class="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
        Read case study
        <Icon name="lucide:arrow-right" size="15" class="transition group-hover:translate-x-0.5" />
      </span>
    </div>
  </NuxtLink>
</template>
