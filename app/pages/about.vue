<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({
  title: () => t('about.seo.title'),
  description: () => t('about.seo.description'),
  ogTitle: () => t('about.seo.ogTitle'),
  ogDescription: () => t('about.seo.ogDescription')
})

const valueIcons = ['lucide:target', 'lucide:eye', 'lucide:scale', 'lucide:handshake']
const values = computed(() =>
  valueIcons.map((icon, i) => ({
    icon,
    title: t(`about.values.${i}.title`),
    description: t(`about.values.${i}.description`)
  }))
)

const team = computed(() =>
  [0, 1, 2, 3].map(i => ({
    role: t(`about.team.${i}.role`),
    description: t(`about.team.${i}.description`)
  }))
)

const aboutStats = computed(() => {
  const targets = [20, 2, 3, 2]
  return targets.map((target, i) => ({ target, suffix: '', label: t(`about.stats.${i}`) }))
})
</script>

<template>
  <div>
    <section class="relative overflow-hidden border-b border-navy-100 bg-navy-50/50 py-16 sm:py-20">
      <div class="absolute inset-0 bg-dot-grid opacity-50 [mask-image:radial-gradient(ellipse_65%_60%_at_0%_0%,black,transparent)]" />
      <div class="container-page relative" v-reveal>
        <span class="text-sm font-semibold uppercase tracking-wider text-brand-600">{{ t('about.eyebrow') }}</span>
        <h1 class="mt-3 max-w-2xl text-balance text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl">
          {{ t('about.title') }}
        </h1>
        <p class="mt-5 max-w-2xl text-balance text-lg text-navy-500">
          {{ t('about.subtitle') }}
        </p>
      </div>
    </section>

    <section class="container-page py-16 sm:py-20">
      <div class="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
        <div v-reveal>
          <h2 class="text-2xl font-bold tracking-tight text-navy-900">{{ t('about.distributedTitle') }}</h2>
          <p class="mt-4 leading-relaxed text-navy-600">
            {{ t('about.distributedP1') }}
          </p>
          <p class="mt-4 leading-relaxed text-navy-600">
            {{ t('about.distributedP2') }}
          </p>
        </div>
        <div class="grid grid-cols-2 gap-5" v-reveal="120">
          <div v-for="(stat, i) in aboutStats" :key="i" class="rounded-2xl border border-navy-100 p-6 text-center">
            <div class="text-3xl font-bold text-navy-900"><StatCounter :target="stat.target" :suffix="stat.suffix" /></div>
            <div class="mt-1 text-sm text-navy-500">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <section class="border-t border-navy-100 bg-navy-50/50 py-16 sm:py-20">
      <div class="container-page">
        <div class="mx-auto max-w-2xl text-center" v-reveal>
          <span class="text-sm font-semibold uppercase tracking-wider text-brand-600">{{ t('about.operateEyebrow') }}</span>
          <h2 class="mt-3 text-balance text-3xl font-bold tracking-tight text-navy-900">{{ t('about.operateTitle') }}</h2>
        </div>
        <div class="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div v-for="(value, i) in values" :key="value.title" v-reveal="(i % 2) * 90" class="rounded-2xl border border-navy-100 bg-white p-6">
            <span class="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
              <Icon :name="value.icon" size="20" />
            </span>
            <h3 class="mt-4 text-base font-semibold text-navy-900">{{ value.title }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-navy-500">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="container-page py-16 sm:py-20">
      <div class="mx-auto max-w-2xl text-center" v-reveal>
        <span class="text-sm font-semibold uppercase tracking-wider text-brand-600">{{ t('about.teamEyebrow') }}</span>
        <h2 class="mt-3 text-balance text-3xl font-bold tracking-tight text-navy-900">{{ t('about.teamTitle') }}</h2>
        <p class="mt-4 text-navy-500">{{ t('about.teamSubtitle') }}</p>
      </div>
      <div class="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div v-for="(group, i) in team" :key="group.role" v-reveal="(i % 4) * 70" class="rounded-2xl border border-navy-100 p-6 text-center">
          <div class="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-navy-100 text-navy-500">
            <Icon name="lucide:user" size="22" />
          </div>
          <h3 class="mt-4 text-sm font-semibold text-navy-900">{{ group.role }}</h3>
          <p class="mt-2 text-xs leading-relaxed text-navy-500">{{ group.description }}</p>
        </div>
      </div>
    </section>

    <CtaBanner :title="t('about.ctaTitle')" />
  </div>
</template>
