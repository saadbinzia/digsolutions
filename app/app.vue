<script setup lang="ts">
useHead({
  titleTemplate: (title) => title ? `${title} | DigSolutions` : 'DigSolutions | Web, Mobile, AI & Enterprise Software Development'
})

defineOgImage('Default', {}, { width: 1200, height: 630 })
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
