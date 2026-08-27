export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('reveal', {
    mounted(el: HTMLElement, binding) {
      if (!import.meta.client) return
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      el.classList.add('reveal')

      const delay = typeof binding.value === 'number' ? binding.value : 0
      if (delay) el.style.transitionDelay = `${delay}ms`

      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              el.classList.add('reveal-visible')
              observer.unobserve(el)
            }
          }
        },
        { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
      )
      observer.observe(el)
    }
  })
})
