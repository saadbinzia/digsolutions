<script setup lang="ts">
import type { BlogPost } from '~/data/blog'

defineProps<{ post: BlogPost }>()

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}
</script>

<template>
  <NuxtLink
    :to="`/blog/${post.slug}`"
    class="group flex flex-col rounded-2xl border border-navy-100 bg-white p-6 transition hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-lg hover:shadow-navy-900/5"
  >
    <span class="inline-flex w-fit items-center rounded-full bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700">
      {{ post.category }}
    </span>
    <h3 class="mt-4 text-lg font-semibold leading-snug text-navy-900 group-hover:text-brand-700">
      {{ post.title }}
    </h3>
    <p class="mt-2 flex-1 text-sm leading-relaxed text-navy-500">{{ post.excerpt }}</p>
    <div class="mt-5 flex items-center gap-2 text-xs text-navy-400">
      <time :datetime="post.date">{{ formatDate(post.date) }}</time>
      <span>·</span>
      <span>{{ post.readTime }}</span>
    </div>
  </NuxtLink>
</template>
