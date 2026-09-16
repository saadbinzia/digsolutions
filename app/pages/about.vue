<script setup lang="ts">
useSeoMeta({
  title: 'About',
  description: 'DigSolutions is a full-stack software development company building web, mobile, AI, and enterprise systems for clients worldwide. Learn about our approach and team.',
  ogTitle: 'About | DigSolutions',
  ogDescription: 'A full-stack engineering team building web, mobile, AI, and enterprise software.'
})

const values = [
  {
    icon: 'lucide:target',
    title: 'We build what we can prove',
    description: 'We stay to four disciplines, web & .NET platforms, AI automation, ERP/e-commerce integration, and Windows desktop applications, because those are the ones we\'ve actually shipped, not a list of every technology we\'d like to be hired for.'
  },
  {
    icon: 'lucide:eye',
    title: 'No black boxes',
    description: 'You get access to the same repos, boards, and environments we use internally. Nothing about how your product works should be a mystery to you.'
  },
  {
    icon: 'lucide:scale',
    title: 'Right-sized engineering',
    description: 'We build for the scale you actually have, with a clear path to the scale you\'re growing into, not speculative architecture for traffic you may never see.'
  },
  {
    icon: 'lucide:handshake',
    title: 'Long-term relationships over one-off builds',
    description: 'Most of our engagements start as a single project and turn into ongoing partnerships, because the software keeps needing to evolve after launch.'
  }
]

const team = [
  { role: 'Web & Platform Engineering', description: 'Engineers building the web platforms, automation pipelines, and integrations clients run on day to day.' },
  { role: 'AI Engineering', description: 'Engineers scoping and shipping the AI features embedded inside those systems, from clip extraction to catalog review.' },
  { role: '.NET & Desktop Engineering', description: 'Engineers building .NET backends, Angular front ends, and native Windows desktop applications.' },
  { role: 'Delivery', description: 'The people keeping engagements accountable to scope, timeline, and outcomes.' }
]
</script>

<template>
  <div>
    <section class="relative overflow-hidden border-b border-navy-100 bg-navy-50/50 py-16 sm:py-20">
      <div class="absolute inset-0 bg-dot-grid opacity-50 [mask-image:radial-gradient(ellipse_65%_60%_at_0%_0%,black,transparent)]" />
      <div class="container-page relative" v-reveal>
        <span class="text-sm font-semibold uppercase tracking-wider text-brand-600">About DigSolutions</span>
        <h1 class="mt-3 max-w-2xl text-balance text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl">
          A distributed team that builds the automation behind content and multi-channel commerce
        </h1>
        <p class="mt-5 max-w-2xl text-balance text-lg text-navy-500">
          We're a 20-person team working across the US and Pakistan. We take on problems where AI and integration work can replace a genuinely manual process, not wherever AI happens to be trendy.
        </p>
      </div>
    </section>

    <section class="container-page py-16 sm:py-20">
      <div class="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
        <div v-reveal>
          <h2 class="text-2xl font-bold tracking-tight text-navy-900">Distributed by design, not by cost-cutting</h2>
          <p class="mt-4 leading-relaxed text-navy-600">
            We're a 20-person team split across the US and Pakistan. We built it that way on purpose: it means clients get overlap with US business hours and a larger, senior engineering bench than a US-only shop the same size could staff.
          </p>
          <p class="mt-4 leading-relaxed text-navy-600">
            We focus on three disciplines: web platforms, AI features scoped to a specific task, and ERP/e-commerce integration, because those are the areas where we've actually shipped production systems, not a long list of technologies we'd like to be hired for.
          </p>
        </div>
        <div class="grid grid-cols-2 gap-5" v-reveal="120">
          <div v-for="stat in [
            { target: 20, suffix: '', label: 'People on the team' },
            { target: 2, suffix: '', label: 'Countries: US & Pakistan' },
            { target: 3, suffix: '', label: 'Core disciplines' },
            { target: 2, suffix: '', label: 'Production systems shipped' }
          ]" :key="stat.label" class="rounded-2xl border border-navy-100 p-6 text-center">
            <div class="text-3xl font-bold text-navy-900"><StatCounter :target="stat.target" :suffix="stat.suffix" /></div>
            <div class="mt-1 text-sm text-navy-500">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <section class="border-t border-navy-100 bg-navy-50/50 py-16 sm:py-20">
      <div class="container-page">
        <div class="mx-auto max-w-2xl text-center" v-reveal>
          <span class="text-sm font-semibold uppercase tracking-wider text-brand-600">How we operate</span>
          <h2 class="mt-3 text-balance text-3xl font-bold tracking-tight text-navy-900">Principles we don't compromise on</h2>
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
        <span class="text-sm font-semibold uppercase tracking-wider text-brand-600">Our team</span>
        <h2 class="mt-3 text-balance text-3xl font-bold tracking-tight text-navy-900">Senior engineers across every discipline</h2>
        <p class="mt-4 text-navy-500">You work directly with the people building your product, not a rotating cast of account managers.</p>
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

    <CtaBanner title="Want to work together?" />
  </div>
</template>
