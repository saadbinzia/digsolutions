<script setup lang="ts">
const { t } = useI18n()

const props = defineProps<{
  title?: string
  description?: string
}>()

const resolvedTitle = computed(() => props.title ?? t('ctaBanner.defaultTitle'))
const resolvedDescription = computed(() => props.description ?? t('ctaBanner.defaultDescription'))
</script>

<template>
  <section class="container-page py-16 sm:py-20">
    <div class="relative overflow-hidden rounded-3xl bg-navy-950 px-8 py-14 text-center sm:px-16 sm:py-16" v-reveal>
      <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-700/30 via-navy-950 to-navy-950" />
      <div class="pointer-events-none absolute inset-0 bg-dot-grid opacity-40 [--dot-color:rgb(255_255_255_/_0.08)] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_40%,black,transparent)]" />
      <div class="relative">
        <h2 class="mx-auto max-w-2xl text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {{ resolvedTitle }}
        </h2>
        <p class="mx-auto mt-4 max-w-xl text-balance text-navy-300">
          {{ resolvedDescription }}
        </p>
        <div class="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <NuxtLinkLocale
            to="/contact"
            class="w-full rounded-lg bg-white px-6 py-3 text-sm font-semibold text-navy-900 shadow-sm transition hover:bg-brand-50 sm:w-auto"
          >
            {{ t('common.startProject') }}
          </NuxtLinkLocale>
          <NuxtLinkLocale
            to="/portfolio"
            class="w-full rounded-lg border border-navy-700 px-6 py-3 text-sm font-semibold text-white transition hover:border-navy-500 sm:w-auto"
          >
            {{ t('common.seeOurWork') }}
          </NuxtLinkLocale>
        </div>
      </div>
    </div>
  </section>
</template>
