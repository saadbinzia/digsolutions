<script setup lang="ts">
const i18nHead = useLocaleHead({ addSeoAttributes: true })

useHead(() => ({
  titleTemplate: (title) => title ? `${title} | DigSolutions` : 'DigSolutions | Web, Mobile, AI & Enterprise Software Development',
  htmlAttrs: i18nHead.value.htmlAttrs,
  link: i18nHead.value.link,
  meta: i18nHead.value.meta
}))

defineOgImage('Default', {}, { width: 1200, height: 630 })
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
