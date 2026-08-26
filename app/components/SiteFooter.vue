<script setup lang="ts">
import { services } from '~/data/services'

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
            We design and build web, mobile, AI-powered, and enterprise software for companies that need technology to be a real advantage — not just a checkbox.
          </p>
          <div class="mt-6 flex gap-3">
            <a
              v-for="social in [
                { icon: 'lucide:linkedin', label: 'LinkedIn', href: 'https://linkedin.com' },
                { icon: 'lucide:twitter', label: 'Twitter / X', href: 'https://twitter.com' },
                { icon: 'lucide:github', label: 'GitHub', href: 'https://github.com' }
              ]"
              :key="social.label"
              :href="social.href"
              :aria-label="social.label"
              target="_blank"
              rel="noopener noreferrer"
              class="flex h-9 w-9 items-center justify-center rounded-lg border border-navy-800 text-navy-400 transition hover:border-brand-500 hover:text-white"
            >
              <Icon :name="social.icon" size="16" />
            </a>
          </div>
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
              <a href="mailto:hello@digsolutions.com" class="transition hover:text-white">hello@digsolutions.com</a>
            </li>
            <li class="flex items-center gap-2.5">
              <Icon name="lucide:phone" size="15" class="shrink-0 text-navy-500" />
              <a href="tel:+15555550123" class="transition hover:text-white">+1 (555) 555-0123</a>
            </li>
            <li class="flex items-start gap-2.5">
              <Icon name="lucide:map-pin" size="15" class="mt-0.5 shrink-0 text-navy-500" />
              <span>Remote-first, serving clients worldwide</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-14 flex flex-col items-center justify-between gap-4 border-t border-navy-800 pt-8 text-xs text-navy-500 sm:flex-row">
        <p>© {{ year }} DigSolutions. All rights reserved.</p>
        <div class="flex gap-6">
          <NuxtLink to="/privacy" class="hover:text-navy-300">Privacy Policy</NuxtLink>
          <NuxtLink to="/terms" class="hover:text-navy-300">Terms of Service</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>
