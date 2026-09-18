<script setup lang="ts">
const { locale, locales, t } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const isOpen = ref(false)

const availableLocales = computed(() => locales.value as Array<{ code: string, name?: string }>)
const currentLocale = computed(() => availableLocales.value.find(l => l.code === locale.value))
</script>

<template>
  <div
    class="relative"
    @mouseenter="isOpen = true"
    @mouseleave="isOpen = false"
  >
    <button
      type="button"
      class="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-navy-700 transition hover:bg-navy-50 hover:text-navy-900"
      :aria-label="t('common.language')"
      @click="isOpen = !isOpen"
    >
      <Icon name="lucide:globe" size="15" />
      {{ currentLocale?.code.toUpperCase() }}
      <Icon name="lucide:chevron-down" size="13" />
    </button>

    <Transition
      enter-active-class="transition duration-150 ease-out"
      enter-from-class="opacity-0 -translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-100 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-1"
    >
      <div
        v-if="isOpen"
        class="absolute right-0 top-full w-40 pt-2"
      >
        <div class="overflow-hidden rounded-xl border border-navy-100 bg-white p-1.5 shadow-xl shadow-navy-900/5">
          <NuxtLink
            v-for="loc in availableLocales"
            :key="loc.code"
            :to="switchLocalePath(loc.code)"
            class="block rounded-lg px-3 py-2 text-sm transition"
            :class="loc.code === locale ? 'bg-brand-50 font-semibold text-brand-700' : 'text-navy-700 hover:bg-navy-50'"
            @click="isOpen = false"
          >
            {{ loc.name }}
          </NuxtLink>
        </div>
      </div>
    </Transition>
  </div>
</template>
