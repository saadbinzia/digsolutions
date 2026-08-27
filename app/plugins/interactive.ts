export default defineNuxtPlugin((nuxtApp) => {
  const reduceMotion = () =>
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  // v-spotlight: place on an absolutely-positioned overlay div; tracks the
  // mouse over its parent element and moves a radial-gradient glow with it.
  nuxtApp.vueApp.directive('spotlight', {
    mounted(el: HTMLElement) {
      if (!import.meta.client || reduceMotion()) return
      const target = el.parentElement
      if (!target) return

      el.classList.add('spotlight')

      const onMove = (e: MouseEvent) => {
        const rect = target.getBoundingClientRect()
        const x = ((e.clientX - rect.left) / rect.width) * 100
        const y = ((e.clientY - rect.top) / rect.height) * 100
        el.style.setProperty('--spot-x', `${x}%`)
        el.style.setProperty('--spot-y', `${y}%`)
        el.classList.add('spotlight-active')
      }
      const onLeave = () => el.classList.remove('spotlight-active')

      target.addEventListener('mousemove', onMove)
      target.addEventListener('mouseleave', onLeave)
    }
  })

  // v-tilt: subtle 3D tilt following the cursor, resets on mouse leave.
  nuxtApp.vueApp.directive('tilt', {
    mounted(el: HTMLElement) {
      if (!import.meta.client || reduceMotion()) return

      el.classList.add('tilt-card')
      const maxTilt = 6

      const onMove = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect()
        const px = (e.clientX - rect.left) / rect.width - 0.5
        const py = (e.clientY - rect.top) / rect.height - 0.5
        el.style.setProperty('--tilt-y', `${px * maxTilt * 2}deg`)
        el.style.setProperty('--tilt-x', `${py * -maxTilt * 2}deg`)
      }
      const onLeave = () => {
        el.style.setProperty('--tilt-x', '0deg')
        el.style.setProperty('--tilt-y', '0deg')
      }

      el.addEventListener('mousemove', onMove)
      el.addEventListener('mouseleave', onLeave)
    }
  })
})
