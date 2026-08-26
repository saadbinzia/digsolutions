<script setup lang="ts">
const props = defineProps<{
  error: { statusCode: number; statusMessage?: string }
}>()

function handleClear() {
  clearError({ redirect: '/' })
}
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <SiteHeader />
    <main class="flex flex-1 items-center justify-center py-20">
      <div class="container-page text-center">
        <span class="text-sm font-semibold uppercase tracking-wider text-brand-600">{{ props.error.statusCode }}</span>
        <h1 class="mt-3 text-balance text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
          {{ props.error.statusCode === 404 ? "This page doesn't exist" : "Something went wrong" }}
        </h1>
        <p class="mx-auto mt-4 max-w-md text-navy-500">
          {{ props.error.statusMessage || 'Please check the URL, or head back to the homepage.' }}
        </p>
        <button
          type="button"
          class="mt-8 inline-flex items-center gap-1.5 rounded-lg bg-navy-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-600"
          @click="handleClear"
        >
          Back to homepage
        </button>
      </div>
    </main>
    <SiteFooter />
  </div>
</template>
