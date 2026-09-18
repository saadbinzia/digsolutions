<script setup lang="ts">
import { services } from '~/data/services'

const { openPreferences } = useCookieConsent()

const year = new Date().getFullYear()

const company = [
  { label: 'About', to: '/about' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' }
]
</script>

<template>
  <footer class="border-t border-navy-800 bg-navy-950 text-navy-300">
    <div class="container-page py-16">
      <div class="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div class="lg:col-span-4">
          <NuxtLink to="/" aria-label="DigSolutions home">
            <LogoMark dark />
          </NuxtLink>
          <p class="mt-4 max-w-sm text-sm leading-relaxed text-navy-400">
            A 20-person team across the US and Pakistan, building web platforms, AI automation, and e-commerce ERP systems.
          </p>
        </div>

        <div class="lg:col-span-3">
          <h3 class="text-sm font-semibold text-white">Services</h3>
          <ul class="mt-4 space-y-2.5">
            <li v-for="service in services.slice(0, 6)" :key="service.slug">
              <NuxtLink :to="`/services/${service.slug}`" class="text-sm text-navy-400 transition hover:text-white">
                {{ service.title }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/services" class="text-sm font-medium text-brand-400 transition hover:text-brand-300">
                View all services →
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div class="lg:col-span-2">
          <h3 class="text-sm font-semibold text-white">Company</h3>
          <ul class="mt-4 space-y-2.5">
            <li v-for="link in company" :key="link.to">
              <NuxtLink :to="link.to" class="text-sm text-navy-400 transition hover:text-white">
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div class="lg:col-span-3">
          <h3 class="text-sm font-semibold text-white">Get in touch</h3>
          <ul class="mt-4 space-y-3 text-sm text-navy-400">
            <li class="flex items-center gap-2.5">
              <Icon name="lucide:mail" size="15" class="shrink-0 text-navy-500" />
              <a href="mailto:hello@digsolutions.net" class="transition hover:text-white">hello@digsolutions.net</a>
            </li>
            <li class="flex items-center gap-2.5">
              <Icon name="lucide:phone" size="15" class="shrink-0 text-navy-500" />
              <a href="tel:+13075003832" class="transition hover:text-white">+1 (307) 500-3832</a>
            </li>
            <li class="flex items-start gap-2.5">
              <Icon name="lucide:globe" size="15" class="mt-0.5 shrink-0 text-navy-500" />
              <span>Distributed team, US & Pakistan</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-14 flex flex-col items-center justify-between gap-4 border-t border-navy-800 pt-8 text-xs text-navy-500 sm:flex-row">
        <p>© {{ year }} DigSolutions. All rights reserved.</p>
        <div class="flex gap-6">
          <NuxtLink to="/privacy" class="hover:text-navy-300">Privacy Policy</NuxtLink>
          <NuxtLink to="/terms" class="hover:text-navy-300">Terms of Service</NuxtLink>
          <button type="button" class="hover:text-navy-300" @click="openPreferences">Cookie Preferences</button>
        </div>
      </div>
    </div>
  </footer>
</template>
