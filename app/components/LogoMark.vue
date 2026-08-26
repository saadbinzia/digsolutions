<script setup lang="ts">
withDefaults(defineProps<{ dark?: boolean }>(), { dark: false })
</script>

<template>
  <span class="inline-flex items-center gap-2.5">
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" class="shrink-0">
      <rect width="34" height="34" rx="9" fill="url(#logo-gradient)" />
      <path d="M9 10.5C9 9.67157 9.67157 9 10.5 9H16.8C20.7765 9 24 12.2235 24 16.2V17.8C24 21.7765 20.7765 25 16.8 25H10.5C9.67157 25 9 24.3284 9 23.5V10.5Z" fill="white" fill-opacity="0.95" />
      <path d="M13 13H16.6C18.5882 13 20.2 14.6118 20.2 16.6V17.4C20.2 19.3882 18.5882 21 16.6 21H13V13Z" fill="url(#logo-gradient)" />
      <defs>
        <linearGradient id="logo-gradient" x1="0" y1="0" x2="34" y2="34" gradientUnits="userSpaceOnUse">
          <stop stop-color="#3D6BFF" />
          <stop offset="1" stop-color="#1C37A3" />
        </linearGradient>
      </defs>
    </svg>
    <span
      class="font-display text-lg font-bold tracking-tight"
      :class="dark ? 'text-white' : 'text-navy-900'"
    >
      Dig<span class="text-brand-500">Solutions</span>
    </span>
  </span>
</template>
