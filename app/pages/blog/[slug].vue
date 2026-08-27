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
  ogImage: post.image,
  articleModifiedTime: post.date,
  articlePublishedTime: post.date
})

useSchemaOrg([
  defineArticle({
    headline: post.title,
    description: post.metaDescription,
    image: post.image,
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
      <div class="container-page mx-auto max-w-3xl" v-reveal>
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
          <span class="font-medium text-navy-700">{{ post.author }}</span>
          <span>·</span>
          <time :datetime="post.date">{{ formatDate(post.date) }}</time>
          <span>·</span>
          <span>{{ post.readTime }}</span>
        </div>
      </div>
    </section>

    <div class="container-page -mt-10 mx-auto max-w-4xl sm:-mt-14" v-reveal>
      <img
        :src="post.image"
        :alt="post.imageAlt"
        class="aspect-[16/8] w-full rounded-2xl object-cover shadow-lg shadow-navy-900/10"
      >
    </div>

    <section class="container-page py-16 sm:py-20">
      <div class="mx-auto max-w-3xl">
        <div class="rounded-2xl border border-brand-100 bg-brand-50/60 p-6" v-reveal>
          <h2 class="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-brand-700">
            <Icon name="lucide:list-checks" size="16" />
            Key takeaways
          </h2>
          <ul class="mt-4 space-y-2.5">
            <li v-for="point in post.keyTakeaways" :key="point" class="flex items-start gap-2.5 text-sm leading-relaxed text-navy-700">
              <Icon name="lucide:check" size="15" class="mt-0.5 shrink-0 text-brand-500" />
              {{ point }}
            </li>
          </ul>
        </div>

        <div class="mt-10">
          <p
            v-for="(paragraph, i) in post.content"
            :key="i"
            class="mb-6 text-lg leading-relaxed text-navy-700"
          >
            {{ paragraph }}
          </p>
        </div>
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
