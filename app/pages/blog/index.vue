<script setup lang="ts">
const { blogPosts } = useContent()
const { t, locale } = useI18n()

useSeoMeta({
  title: () => t('blog.seo.title'),
  description: () => t('blog.seo.description'),
  ogTitle: () => t('blog.seo.ogTitle'),
  ogDescription: () => t('blog.seo.ogDescription')
})

const activeCategory = ref('All')
const categories = computed(() => ['All', ...new Set(blogPosts.value.map(p => p.category))])

const filteredPosts = computed(() =>
  activeCategory.value === 'All' ? blogPosts.value : blogPosts.value.filter(p => p.category === activeCategory.value)
)

const featuredPost = computed(() => filteredPosts.value[0])
const restPosts = computed(() => filteredPosts.value.slice(1))

function formatDate(date: string) {
  return new Date(date).toLocaleDateString(locale.value, { year: 'numeric', month: 'long', day: 'numeric' })
}

const featuredReadingMinutes = computed(() => featuredPost.value ? estimateReadingTime(...featuredPost.value.keyTakeaways, ...featuredPost.value.content) : 0)
</script>

<template>
  <div>
    <section class="relative overflow-hidden border-b border-navy-100 bg-navy-50/50 py-16 sm:py-20">
      <div class="absolute inset-0 bg-dot-grid opacity-50 [mask-image:radial-gradient(ellipse_65%_60%_at_50%_0%,black,transparent)]" />
      <div class="container-page relative text-center" v-reveal>
        <span class="text-sm font-semibold uppercase tracking-wider text-brand-600">{{ t('blog.eyebrow') }}</span>
        <h1 class="mx-auto mt-3 max-w-2xl text-balance text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl">
          {{ t('blog.title') }}
        </h1>
        <p class="mx-auto mt-5 max-w-2xl text-balance text-navy-500">
          {{ t('blog.subtitle') }}
        </p>
        <NuxtLinkLocale
          to="/contact"
          class="mt-8 inline-flex w-full items-center justify-center rounded-lg bg-navy-900 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-600 sm:w-auto lg:hidden"
        >
          {{ t('common.startProject') }}
        </NuxtLinkLocale>
      </div>
    </section>

    <section class="container-page py-16 sm:py-20">
      <h2 class="sr-only">{{ t('blog.gridHeading') }}</h2>
      <div class="flex flex-wrap justify-center gap-2" v-reveal>
        <button
          v-for="category in categories"
          :key="category"
          type="button"
          class="rounded-full border px-4 py-1.5 text-sm font-medium transition"
          :class="activeCategory === category
            ? 'border-brand-600 bg-brand-600 text-white'
            : 'border-navy-200 text-navy-600 hover:border-navy-300 hover:bg-navy-50'"
          @click="activeCategory = category"
        >
          {{ category === 'All' ? t('blog.allCategory') : category }}
        </button>
      </div>

      <TransitionGroup name="blog-fade" tag="div">
        <NuxtLinkLocale
          v-if="featuredPost"
          :key="featuredPost.slug"
          :to="`/blog/${featuredPost.slug}`"
          class="group mt-10 grid grid-cols-1 overflow-hidden rounded-2xl border border-navy-100 bg-white transition hover:shadow-lg hover:shadow-navy-900/5 lg:grid-cols-2"
        >
          <div class="relative h-64 overflow-hidden lg:h-full">
            <img
              :src="unsplashSize(featuredPost.image, 700)"
              :srcset="`${unsplashSize(featuredPost.image, 700)} 1x, ${unsplashSize(featuredPost.image, 1200)} 2x`"
              :alt="featuredPost.imageAlt"
              width="700"
              height="256"
              fetchpriority="high"
              decoding="async"
              class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            >
            <span class="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-navy-700 backdrop-blur">
              {{ t('blog.latestBadge') }}
            </span>
          </div>
          <div class="flex flex-col justify-center p-8 sm:p-10">
            <span class="inline-flex w-fit items-center rounded-full bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700">
              {{ featuredPost.category }}
            </span>
            <h2 class="mt-4 text-2xl font-bold leading-tight text-navy-900 group-hover:text-brand-700 sm:text-3xl">
              {{ featuredPost.title }}
            </h2>
            <p class="mt-3 leading-relaxed text-navy-500">{{ featuredPost.excerpt }}</p>
            <div class="mt-6 flex items-center gap-2 text-sm text-navy-400">
              <span class="font-medium text-navy-600">{{ featuredPost.author }}</span>
              <span>·</span>
              <time :datetime="featuredPost.date">{{ formatDate(featuredPost.date) }}</time>
              <span>·</span>
              <span>{{ t('common.minRead', { n: featuredReadingMinutes }) }}</span>
            </div>
            <span class="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
              {{ t('common.readArticle') }}
              <Icon name="lucide:arrow-right" size="15" class="transition group-hover:translate-x-0.5" />
            </span>
          </div>
        </NuxtLinkLocale>
      </TransitionGroup>

      <div v-if="restPosts.length" class="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="(post, i) in restPosts" :key="post.slug" v-reveal="(i % 3) * 80">
          <BlogPostCard :post="post" />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.blog-fade-enter-active,
.blog-fade-leave-active {
  transition: opacity 0.2s ease;
}
.blog-fade-enter-from,
.blog-fade-leave-to {
  opacity: 0;
}
</style>
