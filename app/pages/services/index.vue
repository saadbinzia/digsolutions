<script setup lang="ts">
import { services } from '~/data/services'

useSeoMeta({
  title: 'Services',
  description: 'Web application development, mobile apps, AI & custom LLM integration, SaaS, CRM/ERP systems, database engineering, media platforms, and custom enterprise software.',
  ogTitle: 'Services | DigSolutions',
  ogDescription: 'Full-stack web, mobile, AI, and enterprise software development services.'
})
</script>

<template>
  <div>
    <section class="relative overflow-hidden border-b border-navy-100 bg-navy-50/50 py-16 sm:py-20">
      <div class="absolute inset-0 bg-dot-grid opacity-50 [mask-image:radial-gradient(ellipse_65%_60%_at_50%_0%,black,transparent)]" />
      <div class="container-page relative text-center" v-reveal>
        <span class="text-sm font-semibold uppercase tracking-wider text-brand-600">Services</span>
        <h1 class="mx-auto mt-3 max-w-2xl text-balance text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl">
          One engineering partner, every discipline your roadmap needs
        </h1>
        <p class="mx-auto mt-5 max-w-2xl text-balance text-navy-500">
          Whether you need a new product built from scratch, AI embedded into an existing one, or an enterprise system rebuilt around how your team actually works, we cover the full stack.
        </p>
      </div>
    </section>

    <section class="container-page py-16 sm:py-20">
      <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="(service, i) in services" :key="service.slug" v-reveal="(i % 3) * 80">
          <ServiceCard :service="service" />
        </div>
      </div>
    </section>

    <CtaBanner
      title="Not sure which service you need?"
      description="Tell us about the problem you're solving. We'll help you figure out the right scope and stack."
    />
  </div>
</template>
