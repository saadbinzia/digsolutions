<script setup lang="ts">
import { getBlogPostBySlug, blogPosts } from '~/data/blog'

const route = useRoute()
const post = getBlogPostBySlug(route.params.slug as string)

if (!post) {
  throw createError({ statusCode: 404, statusMessage: 'Article not found' })
}

const more = blogPosts.filter(p => p.slug !== post.slug).slice(0, 3)

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

useSeoMeta({
  title: post.title,
  description: post.metaDescription,
  ogTitle: post.title,
  ogDescription: post.metaDescription,
  articleModifiedTime: post.date,
  articlePublishedTime: post.date
})

useSchemaOrg([
  defineArticle({
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    dateModified: post.date
  }),
  defineBreadcrumb({
    itemListElement: [
      { name: 'Home', item: '/' },
      { name: 'Blog', item: '/blog' },
      { name: post.title }
    ]
  })
])
</script>

<template>
  <article v-if="post">
    <section class="border-b border-navy-100 bg-navy-50/50 py-16 sm:py-20">
      <div class="container-page mx-auto max-w-3xl">
        <nav class="flex items-center gap-2 text-xs text-navy-500">
          <NuxtLink to="/blog" class="hover:text-navy-700">Blog</NuxtLink>
          <Icon name="lucide:chevron-right" size="12" />
          <span class="text-navy-700">{{ post.category }}</span>
        </nav>
        <span class="mt-6 inline-flex w-fit items-center rounded-full bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700">
          {{ post.category }}
        </span>
        <h1 class="mt-5 text-balance text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
          {{ post.title }}
        </h1>
        <div class="mt-5 flex items-center gap-3 text-sm text-navy-500">
          <span>{{ post.author }}</span>
          <span>·</span>
          <time :datetime="post.date">{{ formatDate(post.date) }}</time>
          <span>·</span>
          <span>{{ post.readTime }}</span>
        </div>
      </div>
    </section>

    <section class="container-page py-16 sm:py-20">
      <div class="mx-auto max-w-3xl">
        <p
          v-for="(paragraph, i) in post.content"
          :key="i"
          class="mb-6 text-lg leading-relaxed text-navy-700"
        >
          {{ paragraph }}
        </p>
      </div>
    </section>

    <section class="border-t border-navy-100 bg-navy-50/50 py-16 sm:py-20">
      <div class="container-page">
        <h2 class="text-2xl font-bold tracking-tight text-navy-900">More from the blog</h2>
        <div class="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <BlogPostCard v-for="p in more" :key="p.slug" :post="p" />
        </div>
      </div>
    </section>

    <CtaBanner />
  </article>
</template>
