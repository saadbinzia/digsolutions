<script setup lang="ts">
const { services } = useContent()
const { t } = useI18n()

const isOpen = ref(false)
const isServicesOpen = ref(false)
const route = useRoute()

watch(() => route.fullPath, () => {
  isOpen.value = false
  isServicesOpen.value = false
})

const navLinks = computed(() => [
  { label: t('nav.services'), to: '/services' },
  { label: t('nav.portfolio'), to: '/portfolio' },
  { label: t('nav.about'), to: '/about' },
  { label: t('nav.blog'), to: '/blog' }
])
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-navy-100 bg-white/85 backdrop-blur">
    <nav class="container-page flex h-18 items-center justify-between py-4">
      <NuxtLinkLocale to="/" class="flex items-center" aria-label="DigSolutions home">
        <LogoMark />
      </NuxtLinkLocale>

      <div class="hidden items-center gap-1 lg:flex">
        <div
          class="relative"
          @mouseenter="isServicesOpen = true"
          @mouseleave="isServicesOpen = false"
        >
          <NuxtLinkLocale
            to="/services"
            class="flex items-center gap-1 rounded-lg px-3.5 py-2 text-sm font-medium text-navy-700 transition hover:bg-navy-50 hover:text-navy-900"
          >
            {{ t('nav.services') }}
            <Icon name="lucide:chevron-down" size="15" />
          </NuxtLinkLocale>

          <Transition
            enter-active-class="transition duration-150 ease-out"
            enter-from-class="opacity-0 -translate-y-1"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition duration-100 ease-in"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 -translate-y-1"
          >
            <div
              v-if="isServicesOpen"
              class="absolute left-1/2 top-full w-[560px] -translate-x-1/2 pt-3"
            >
              <div class="grid grid-cols-2 gap-1 rounded-2xl border border-navy-100 bg-white p-3 shadow-xl shadow-navy-900/5">
                <NuxtLinkLocale
                  v-for="service in services"
                  :key="service.slug"
                  :to="`/services/${service.slug}`"
                  class="flex items-start gap-3 rounded-xl p-3 transition hover:bg-navy-50"
                >
                  <span class="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                    <Icon :name="service.icon" size="18" />
                  </span>
                  <span>
                    <span class="block text-sm font-semibold text-navy-900">{{ service.title }}</span>
                    <span class="mt-0.5 block text-xs leading-snug text-navy-500">{{ service.tagline }}</span>
                  </span>
                </NuxtLinkLocale>
              </div>
            </div>
          </Transition>
        </div>

        <NuxtLinkLocale
          v-for="link in navLinks.slice(1)"
          :key="link.to"
          :to="link.to"
          class="rounded-lg px-3.5 py-2 text-sm font-medium text-navy-700 transition hover:bg-navy-50 hover:text-navy-900"
        >
          {{ link.label }}
        </NuxtLinkLocale>
      </div>

      <div class="hidden items-center gap-3 lg:flex">
        <LanguageSwitcher />
        <a href="tel:+13075003832" class="text-sm font-medium text-navy-600 hover:text-navy-900">+1 (307) 500-3832</a>
        <a
          href="https://calendly.com/digsolutions/consultation"
          target="_blank"
          rel="noopener noreferrer"
          class="rounded-lg border border-navy-200 px-4 py-2.5 text-sm font-semibold text-navy-800 transition hover:border-navy-300"
        >
          {{ t('common.bookACall') }}
        </a>
        <NuxtLinkLocale
          to="/contact"
          class="rounded-lg bg-navy-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-600"
        >
          {{ t('common.startProject') }}
        </NuxtLinkLocale>
      </div>

      <button
        type="button"
        class="flex h-11 w-11 items-center justify-center rounded-lg text-navy-700 lg:hidden"
        :aria-label="t('nav.toggleMenu')"
        @click="isOpen = !isOpen"
      >
        <Icon :name="isOpen ? 'lucide:x' : 'lucide:menu'" size="24" />
      </button>
    </nav>

    <Transition
      enter-active-class="transition duration-150 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-100 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="isOpen" class="border-t border-navy-100 bg-white lg:hidden">
        <div class="container-page flex flex-col gap-1 py-4">
          <NuxtLinkLocale
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="rounded-lg px-3 py-2.5 text-base font-medium text-navy-800 hover:bg-navy-50"
          >
            {{ link.label }}
          </NuxtLinkLocale>
          <div class="mt-2 flex justify-start">
            <LanguageSwitcher />
          </div>
          <a
            href="https://calendly.com/digsolutions/consultation"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-2 rounded-lg border border-navy-200 px-4 py-3 text-center text-sm font-semibold text-navy-800"
          >
            {{ t('common.bookACall') }}
          </a>
          <NuxtLinkLocale
            to="/contact"
            class="rounded-lg bg-navy-900 px-4 py-3 text-center text-sm font-semibold text-white"
          >
            {{ t('common.startProject') }}
          </NuxtLinkLocale>
        </div>
      </div>
    </Transition>
  </header>
</template>
