<script setup lang="ts">
const props = defineProps<{
  error: { statusCode: number; statusMessage?: string }
}>()

const { t } = useI18n()

const isNotFound = computed(() => props.error.statusCode === 404)

useSeoMeta({
  title: () => (isNotFound.value ? t('error.notFoundTitle') : t('error.genericTitle')),
  robots: 'noindex, follow'
})

const quickLinks = computed(() => [
  { label: t('nav.services'), to: '/services', icon: 'lucide:layers' },
  { label: t('nav.portfolio'), to: '/portfolio', icon: 'lucide:briefcase' },
  { label: t('nav.about'), to: '/about', icon: 'lucide:users' },
  { label: t('nav.blog'), to: '/blog', icon: 'lucide:newspaper' },
  { label: t('footer.contact'), to: '/contact', icon: 'lucide:mail' }
])

function handleClear() {
  clearError({ redirect: '/' })
}
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <SiteHeader />
    <main class="flex flex-1 items-center py-20">
      <div class="container-page text-center" v-reveal>
        <span class="text-sm font-semibold uppercase tracking-wider text-brand-600">{{ props.error.statusCode }}</span>
        <h1 class="mt-3 text-balance text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
          {{ isNotFound ? t('error.notFoundTitle') : t('error.genericTitle') }}
        </h1>
        <p class="mx-auto mt-4 max-w-md text-balance text-navy-500">
          {{ props.error.statusMessage || t('error.defaultMessage') }}
        </p>
        <button
          type="button"
          class="mt-8 inline-flex items-center gap-1.5 rounded-lg bg-navy-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-600"
          @click="handleClear"
        >
          {{ t('common.backToHome') }}
        </button>

        <div v-if="isNotFound" class="mx-auto mt-16 max-w-2xl">
          <p class="text-xs font-semibold uppercase tracking-wider text-navy-400">{{ t('error.helpHeading') }}</p>
          <div class="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-5">
            <NuxtLinkLocale
              v-for="link in quickLinks"
              :key="link.to"
              :to="link.to"
              class="flex flex-col items-center gap-2 rounded-xl border border-navy-100 px-3 py-4 text-sm font-medium text-navy-700 transition hover:border-brand-200 hover:bg-brand-50 hover:text-brand-600"
            >
              <Icon :name="link.icon" size="18" />
              {{ link.label }}
            </NuxtLinkLocale>
          </div>
        </div>
      </div>
    </main>
    <SiteFooter />
  </div>
</template>
