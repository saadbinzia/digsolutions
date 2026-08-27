<script setup lang="ts">
import { services } from '~/data/services'

useSeoMeta({
  title: 'Contact',
  description: 'Tell DigSolutions about your web, mobile, AI, or enterprise software project. We respond within one business day.',
  ogTitle: 'Contact | DigSolutions',
  ogDescription: 'Start a conversation about your next software project.'
})

const form = reactive({
  name: '',
  email: '',
  company: '',
  service: '',
  message: ''
})

const status = ref<'idle' | 'submitting' | 'success' | 'error'>('idle')
const errorMessage = ref('')

async function onSubmit() {
  status.value = 'submitting'
  errorMessage.value = ''

  try {
    await $fetch('/api/contact', { method: 'POST', body: form })
    status.value = 'success'
    form.name = ''
    form.email = ''
    form.company = ''
    form.service = ''
    form.message = ''
  } catch (err: any) {
    status.value = 'error'
    errorMessage.value = err?.data?.statusMessage || 'Something went wrong. Please try again.'
  }
}

const contactPoints = [
  { icon: 'lucide:mail', label: 'Email', value: 'hello@digsolutions.com', href: 'mailto:hello@digsolutions.com' },
  { icon: 'lucide:phone', label: 'Phone', value: '+1 (555) 555-0123', href: 'tel:+15555550123' },
  { icon: 'lucide:map-pin', label: 'Location', value: 'Remote-first, serving clients worldwide', href: null }
]
</script>

<template>
  <div>
    <section class="relative overflow-hidden border-b border-navy-100 bg-navy-50/50 py-16 sm:py-20">
      <div class="absolute inset-0 bg-dot-grid opacity-50 [mask-image:radial-gradient(ellipse_65%_60%_at_50%_0%,black,transparent)]" />
      <div class="container-page relative text-center" v-reveal>
        <span class="text-sm font-semibold uppercase tracking-wider text-brand-600">Contact</span>
        <h1 class="mx-auto mt-3 max-w-2xl text-balance text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl">
          Let's talk about what you're building
        </h1>
        <p class="mx-auto mt-5 max-w-xl text-balance text-navy-500">
          Tell us about your project and we'll respond within one business day with next steps.
        </p>
      </div>
    </section>

    <section class="container-page py-16 sm:py-20">
      <div class="grid grid-cols-1 gap-12 lg:grid-cols-3">
        <div class="space-y-6 lg:col-span-1">
          <div v-for="point in contactPoints" :key="point.label" class="flex items-start gap-4 rounded-2xl border border-navy-100 p-5">
            <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
              <Icon :name="point.icon" size="18" />
            </span>
            <div>
              <div class="text-xs font-semibold uppercase tracking-wider text-navy-400">{{ point.label }}</div>
              <a v-if="point.href" :href="point.href" class="mt-1 block text-sm font-medium text-navy-800 hover:text-brand-600">
                {{ point.value }}
              </a>
              <p v-else class="mt-1 text-sm font-medium text-navy-800">{{ point.value }}</p>
            </div>
          </div>
        </div>

        <div class="lg:col-span-2">
          <form v-if="status !== 'success'" class="rounded-2xl border border-navy-100 p-6 sm:p-8" @submit.prevent="onSubmit">
            <div class="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label for="name" class="text-sm font-medium text-navy-700">Full name</label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  required
                  class="mt-1.5 w-full rounded-lg border border-navy-200 px-3.5 py-2.5 text-sm text-navy-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                  placeholder="Jane Doe"
                >
              </div>
              <div>
                <label for="email" class="text-sm font-medium text-navy-700">Work email</label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  required
                  class="mt-1.5 w-full rounded-lg border border-navy-200 px-3.5 py-2.5 text-sm text-navy-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                  placeholder="jane@company.com"
                >
              </div>
              <div>
                <label for="company" class="text-sm font-medium text-navy-700">Company</label>
                <input
                  id="company"
                  v-model="form.company"
                  type="text"
                  class="mt-1.5 w-full rounded-lg border border-navy-200 px-3.5 py-2.5 text-sm text-navy-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                  placeholder="Company, Inc."
                >
              </div>
              <div>
                <label for="service" class="text-sm font-medium text-navy-700">Service of interest</label>
                <select
                  id="service"
                  v-model="form.service"
                  class="mt-1.5 w-full rounded-lg border border-navy-200 bg-white px-3.5 py-2.5 text-sm text-navy-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                >
                  <option value="">Not sure yet</option>
                  <option v-for="service in services" :key="service.slug" :value="service.title">
                    {{ service.title }}
                  </option>
                </select>
              </div>
            </div>

            <div class="mt-5">
              <label for="message" class="text-sm font-medium text-navy-700">Project details</label>
              <textarea
                id="message"
                v-model="form.message"
                required
                rows="5"
                class="mt-1.5 w-full rounded-lg border border-navy-200 px-3.5 py-2.5 text-sm text-navy-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                placeholder="What are you building, and what's your timeline?"
              />
            </div>

            <p v-if="status === 'error'" class="mt-4 text-sm text-red-600">{{ errorMessage }}</p>

            <button
              type="submit"
              :disabled="status === 'submitting'"
              class="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-navy-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              <Icon v-if="status === 'submitting'" name="lucide:loader-2" size="16" class="animate-spin" />
              {{ status === 'submitting' ? 'Sending…' : 'Send message' }}
            </button>
          </form>

          <div v-else class="flex flex-col items-center justify-center rounded-2xl border border-navy-100 p-12 text-center">
            <span class="flex h-14 w-14 items-center justify-center rounded-full bg-green-50 text-green-600">
              <Icon name="lucide:check" size="26" />
            </span>
            <h2 class="mt-5 text-xl font-semibold text-navy-900">Message sent</h2>
            <p class="mt-2 max-w-sm text-sm text-navy-500">
              Thanks for reaching out, we'll get back to you within one business day.
            </p>
            <button
              type="button"
              class="mt-6 text-sm font-semibold text-brand-600 hover:text-brand-700"
              @click="status = 'idle'"
            >
              Send another message
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
