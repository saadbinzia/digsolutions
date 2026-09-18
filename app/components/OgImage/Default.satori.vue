<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string
    description?: string
  }>(),
  {
    title: 'Web, Mobile, AI & Enterprise Software Development',
    description: 'Full-stack .NET and JavaScript engineering, custom AI integrations, and CRM/ERP systems built to scale.'
  }
)
</script>

<template>
  <div
    class="w-full h-full flex flex-col relative"
    style="background: linear-gradient(135deg, #10192c 0%, #080e1c 100%);"
  >
    <!-- Corner glow accents -->
    <div
      class="absolute"
      style="top: -180px; right: -160px; width: 520px; height: 520px; border-radius: 9999px; background: radial-gradient(circle, rgba(61,107,255,0.45) 0%, rgba(61,107,255,0) 70%);"
    />
    <div
      class="absolute"
      style="bottom: -220px; left: -140px; width: 480px; height: 480px; border-radius: 9999px; background: radial-gradient(circle, rgba(28,55,163,0.4) 0%, rgba(28,55,163,0) 70%);"
    />

    <!-- Dot grid texture -->
    <div
      class="absolute inset-0"
      style="background-image: radial-gradient(circle, rgba(255,255,255,0.08) 2px, transparent 2px); background-size: 32px 32px;"
    />

    <!-- Content -->
    <div class="flex-1 flex flex-col justify-between relative" style="padding: 64px;">
      <div class="flex flex-row items-center" style="gap: 14px;">
        <svg width="56" height="56" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="34" height="34" rx="9" fill="#3D6BFF" />
          <path d="M9 10.5C9 9.67157 9.67157 9 10.5 9H16.8C20.7765 9 24 12.2235 24 16.2V17.8C24 21.7765 20.7765 25 16.8 25H10.5C9.67157 25 9 24.3284 9 23.5V10.5Z" fill="white" fill-opacity="0.95" />
          <path d="M13 13H16.6C18.5882 13 20.2 14.6118 20.2 16.6V17.4C20.2 19.3882 18.5882 21 16.6 21H13V13Z" fill="#3D6BFF" />
        </svg>
        <span class="flex flex-row" style="font-size: 34px; font-weight: 700; letter-spacing: -0.02em;">
          <span style="color: #ffffff;">Dig</span><span style="color: #6690ff;">Solutions</span>
        </span>
      </div>

      <div class="flex flex-col" style="gap: 22px; max-width: 900px;">
        <h1
          class="flex"
          style="font-size: 56px; font-weight: 800; line-height: 1.1; letter-spacing: -0.02em; color: #ffffff;"
        >
          {{ title }}
        </h1>
        <p style="font-size: 26px; line-height: 1.4; color: #9fadc4; font-weight: 400;">
          {{ description }}
        </p>
      </div>

      <div class="flex flex-row items-center justify-between">
        <div class="flex flex-row items-center" style="gap: 12px;">
          <div
            v-for="tag in ['Web', '.NET', 'AI / LLM', 'Enterprise SaaS']"
            :key="tag"
            style="padding: 8px 18px; border-radius: 9999px; background: rgba(255,255,255,0.08); color: #cbd4e1; font-size: 18px; font-weight: 500;"
          >
            {{ tag }}
          </div>
        </div>
        <span style="font-size: 20px; color: #6c7fa1; font-weight: 500;">digsolutions.net</span>
      </div>
    </div>
  </div>
</template>
