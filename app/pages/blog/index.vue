<script setup lang="ts">
import { blogPosts } from '~/data/blog'

useSeoMeta({
  title: 'Blog',
  description: 'Engineering, AI, and software strategy insights from the DigSolutions team — on framework choice, production AI systems, SaaS architecture, and enterprise modernization.',
  ogTitle: 'Blog — DigSolutions',
  ogDescription: 'Engineering and AI insights from the DigSolutions team.'
})
</script>

<template>
  <div>
    <section class="border-b border-navy-100 bg-navy-50/50 py-16 sm:py-20">
      <div class="container-page text-center">
        <span class="text-sm font-semibold uppercase tracking-wider text-brand-600">Blog</span>
        <h1 class="mx-auto mt-3 max-w-2xl text-balance text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl">
          Notes from the engineering team
        </h1>
        <p class="mx-auto mt-5 max-w-2xl text-balance text-navy-500">
          Practical write-ups on framework choices, production AI systems, SaaS architecture, and modernizing enterprise software.
        </p>
      </div>
    </section>

    <section class="container-page py-16 sm:py-20">
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <BlogPostCard v-for="post in blogPosts" :key="post.slug" :post="post" />
      </div>
    </section>
  </div>
</template>
