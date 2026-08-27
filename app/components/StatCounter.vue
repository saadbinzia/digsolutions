<script setup lang="ts">
const props = withDefaults(defineProps<{
  target: number
  suffix?: string
  prefix?: string
  duration?: number
}>(), {
  suffix: '',
  prefix: '',
  duration: 1400
})

const displayValue = ref(0)
const el = ref<HTMLElement | null>(null)

function easeOutExpo(t: number) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
}

function animate() {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduceMotion) {
    displayValue.value = props.target
    return
  }

  const start = performance.now()
  function tick(now: number) {
    const elapsed = Math.min((now - start) / props.duration, 1)
    displayValue.value = Math.round(easeOutExpo(elapsed) * props.target)
    if (elapsed < 1) requestAnimationFrame(tick)
  }
  requestAnimationFrame(tick)
}

onMounted(() => {
  if (!el.value) return
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        animate()
        observer.unobserve(entry.target)
      }
    }
  }, { threshold: 0.4 })
  observer.observe(el.value)
})
</script>

<template>
  <span ref="el">{{ prefix }}{{ displayValue }}{{ suffix }}</span>
</template>
