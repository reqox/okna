import { onMounted, onBeforeUnmount, ref } from 'vue'

/**
 * Attaches an IntersectionObserver to the returned ref's element and
 * adds `is-visible` once it scrolls into view. Pair with the `.reveal`
 * base class in global.css.
 */
export function useReveal(options = {}) {
  const target = ref(null)
  let observer

  onMounted(() => {
    if (!target.value) return
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px', ...options }
    )
    observer.observe(target.value)
  })

  onBeforeUnmount(() => observer && observer.disconnect())

  return target
}
