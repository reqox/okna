import { onMounted, onBeforeUnmount, ref } from 'vue';

export function useReveal(options = {}) {
  const target = ref(null);
  let observer;

  onMounted(() => {
    const el = target.value;
    if (!el) return;

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          } else {
            entry.target.classList.add('is-ready');
          }
        });
      },
      { threshold: 0, rootMargin: '0px', ...options },
    );
    observer.observe(el);
  });

  onBeforeUnmount(() => observer && observer.disconnect());

  return target;
}
