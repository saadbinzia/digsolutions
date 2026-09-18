<script setup lang="ts">
const { consent, loaded, manageOpen, load, acceptAll, rejectAll, savePreferences } = useCookieConsent()

const analyticsEnabled = ref(false)
const showDetails = ref(false)

onMounted(load)

watch(consent, (value) => {
  analyticsEnabled.value = value?.analytics ?? false
}, { immediate: true })

const isUpdate = computed(() => consent.value !== null)
const visible = computed(() => loaded.value && (consent.value === null || manageOpen.value))

function handleAcceptAll() {
  acceptAll({ reload: isUpdate.value })
  close()
}

function handleRejectAll() {
  rejectAll({ reload: isUpdate.value })
  close()
}

function handleSave() {
  savePreferences({ analytics: analyticsEnabled.value }, { reload: isUpdate.value })
  close()
}

function close() {
  manageOpen.value = false
  showDetails.value = false
}
</script>

<template>
  <Transition name="cookie-banner">
    <div v-if="visible" class="fixed inset-x-0 bottom-0 z-50 p-4 sm:p-6">
      <div class="container-page">
        <div class="mx-auto max-w-3xl rounded-2xl border border-navy-800 bg-navy-950 p-6 text-navy-200 shadow-2xl shadow-navy-950/40 sm:p-7">
          <div class="flex items-start gap-3">
            <Icon name="lucide:cookie" size="20" class="mt-0.5 shrink-0 text-brand-400" />
            <div class="min-w-0 flex-1">
              <h2 class="text-sm font-semibold text-white">We use cookies</h2>
              <p class="mt-1.5 text-sm leading-relaxed text-navy-400">
                We use essential cookies to run this site, and optional analytics cookies (Google Analytics / Tag Manager) to understand how visitors use it. Read our
                <NuxtLink to="/privacy" class="text-brand-400 underline underline-offset-2 hover:text-brand-300">Privacy Policy</NuxtLink> for details.
              </p>

              <div v-if="showDetails" class="mt-4 space-y-3 rounded-xl border border-navy-800 bg-navy-900 p-4">
                <div class="flex items-center justify-between gap-4">
                  <div>
                    <p class="text-sm font-medium text-white">Necessary</p>
                    <p class="text-xs text-navy-400">Required for the site to function. Always on.</p>
                  </div>
                  <span class="shrink-0 text-xs font-medium text-navy-500">Always active</span>
                </div>
                <div class="flex items-center justify-between gap-4 border-t border-navy-800 pt-3">
                  <div>
                    <p class="text-sm font-medium text-white">Analytics</p>
                    <p class="text-xs text-navy-400">Google Analytics / Tag Manager, helps us understand site usage.</p>
                  </div>
                  <button
                    type="button"
                    role="switch"
                    :aria-checked="analyticsEnabled"
                    aria-label="Toggle analytics cookies"
                    class="relative h-6 w-11 shrink-0 rounded-full transition"
                    :class="analyticsEnabled ? 'bg-brand-500' : 'bg-navy-700'"
                    @click="analyticsEnabled = !analyticsEnabled"
                  >
                    <span
                      class="absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white transition-transform"
                      :class="analyticsEnabled ? 'translate-x-5' : 'translate-x-0'"
                    />
                  </button>
                </div>
              </div>

              <div class="mt-5 flex flex-wrap items-center gap-3">
                <button type="button" class="rounded-full bg-brand-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-600" @click="handleAcceptAll">
                  Accept all
                </button>
                <button type="button" class="rounded-full border border-navy-700 px-4 py-2 text-sm font-semibold text-navy-200 transition hover:border-navy-600 hover:text-white" @click="handleRejectAll">
                  Reject non-essential
                </button>
                <button
                  v-if="!showDetails"
                  type="button"
                  class="text-sm font-semibold text-navy-400 underline underline-offset-2 transition hover:text-white"
                  @click="showDetails = true"
                >
                  Manage preferences
                </button>
                <button
                  v-else
                  type="button"
                  class="rounded-full border border-navy-700 px-4 py-2 text-sm font-semibold text-navy-200 transition hover:border-navy-600 hover:text-white"
                  @click="handleSave"
                >
                  Save preferences
                </button>
                <button
                  v-if="isUpdate"
                  type="button"
                  class="ml-auto text-sm text-navy-500 transition hover:text-navy-300"
                  @click="close"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.cookie-banner-enter-active,
.cookie-banner-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.cookie-banner-enter-from,
.cookie-banner-leave-to {
  opacity: 0;
  transform: translateY(12px);
}
</style>
