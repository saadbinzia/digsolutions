<script setup lang="ts">
import type { BlogPost } from '~/data/blog'

const props = defineProps<{ post: BlogPost }>()

const { t, locale } = useI18n()

function formatDate(date: string) {
  return new Date(date).toLocaleDateString(locale.value, { year: 'numeric', month: 'long', day: 'numeric' })
}

const readingMinutes = computed(() => estimateReadingTime(...props.post.keyTakeaways, ...props.post.content))
</script>

<template>
  <NuxtLinkLocale
    :to="`/blog/${post.slug}`"
    class="group flex flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white transition duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-navy-900/5"
  >
    <div class="relative h-44 overflow-hidden">
      <img
        :src="unsplashSize(post.image, 400)"
        :srcset="`${unsplashSize(post.image, 400)} 1x, ${unsplashSize(post.image, 800)} 2x`"
        :alt="post.imageAlt"
        width="400"
        height="176"
        loading="lazy"
        decoding="async"
        class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
      >
      <div class="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
      <span class="absolute bottom-4 left-5 rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur">
        {{ post.category }}
      </span>
    </div>
    <div class="flex flex-1 flex-col p-6">
      <h3 class="text-lg font-semibold leading-snug text-navy-900 group-hover:text-brand-700">
        {{ post.title }}
      </h3>
      <p class="mt-2 flex-1 text-sm leading-relaxed text-navy-500">{{ post.excerpt }}</p>
      <div class="mt-5 flex items-center gap-2 text-xs text-navy-400">
        <span class="font-medium text-navy-600">{{ post.author }}</span>
        <span>·</span>
        <time :datetime="post.date">{{ formatDate(post.date) }}</time>
        <span>·</span>
        <span>{{ t('common.minRead', { n: readingMinutes }) }}</span>
      </div>
    </div>
  </NuxtLinkLocale>
</template>
