<script setup>
import { ref, reactive } from 'vue';

const props = defineProps({
  eyebrow: { type: String, default: 'Портфолио' },
  title: { type: String, default: '' },
  text: { type: String, default: '' },
  images: {
    type: Array,
    default: () => [],
  },
});

const listRef = ref(null);
const itemRefs = reactive([]);
const currentIndex = ref(0);

function setItemRef(el, index) {
  if (el) itemRefs[index] = el;
}

function prefersReducedMotion() {
  return window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
}

function scrollToIndex(index) {
  const clamped = Math.max(0, Math.min(index, props.images.length - 1));
  currentIndex.value = clamped;
  itemRefs[clamped]?.scrollIntoView({
    behavior: prefersReducedMotion() ? 'auto' : 'smooth',
    inline: 'start',
    block: 'nearest',
  });
}

function onKeydown(e) {
  if (e.key === 'ArrowRight') {
    e.preventDefault();
    scrollToIndex(currentIndex.value + 1);
  } else if (e.key === 'ArrowLeft') {
    e.preventDefault();
    scrollToIndex(currentIndex.value - 1);
  } else if (e.key === 'Home') {
    e.preventDefault();
    scrollToIndex(0);
  } else if (e.key === 'End') {
    e.preventDefault();
    scrollToIndex(props.images.length - 1);
  }
}
</script>

<template>
  <section class="slider">
    <div class="slider-wrapper">
      <div v-if="eyebrow || title || text" class="slider-head">
        <div v-if="eyebrow" class="slider-head__eyebrow">{{ eyebrow }}</div>
        <h2 v-if="title" class="slider-head__title">{{ title }}</h2>
        <p v-if="text" class="slider-head__text">{{ text }}</p>
      </div>

      <p :id="`slider-hint-${$.uid}`" class="sr-only">
        Карусель изображений. Используйте стрелки влево и вправо для переключения.
      </p>

      <ul
        ref="listRef"
        class="slider-list"
        tabindex="0"
        role="group"
        aria-roledescription="carousel"
        :aria-label="title || 'Галерея изображений'"
        :aria-describedby="`slider-hint-${$.uid}`"
        @keydown="onKeydown"
      >
        <li
          v-for="(image, index) in images"
          :key="image.src ?? index"
          :ref="(el) => setItemRef(el, index)"
          class="slider-item"
          role="group"
          aria-roledescription="slide"
          :aria-label="`${index + 1} из ${images.length}`"
        >
          <img
            class="slider-image"
            :src="image.src"
            :alt="image.alt ?? ''"
            :loading="index === 0 ? 'eager' : 'lazy'"
            :decoding="index === 0 ? 'sync' : 'async'"
            draggable="false"
          />
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.slider {
  background:
    radial-gradient(120% 160% at 0% 0%, #1c5570 0%, transparent 55%),
    linear-gradient(135deg, #0c2431 0%, #123245 45%, #17415a 100%);
}

.slider-wrapper {
  display: flex;
  justify-content: space-between;
  gap: 32px;

  max-width: 1920px;
  padding-inline: 32px;
  margin-inline: auto;
}

.slider-head__eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: var(--f-mono);
  font-size: 16px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #fff;
  margin-bottom: 14px;
}
.slider-head__eyebrow::before,
.slider-head__eyebrow::after {
  content: '';
  width: 22px;
  height: 2px;
  background: #fff;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.slider-head {
  flex: 0 0 auto;
  max-width: 25%;
}

.slider-head__title {
  font-size: clamp(26px, 3.4vw, 38px);
  color: #fff;
}

.slider-head__text {
  margin-top: 12px;
  color: var(--c-accent-soft);
  font-size: 16px;
  line-height: 1.6;
}

.slider-list {
  --slide-h: clamp(260px, 32vw, 460px);

  display: flex;
  align-items: flex-start;
  gap: 24px;
  min-width: 0;
  overflow-x: auto;
  overscroll-behavior-x: contain;
  scroll-snap-type: x proximity;
  scroll-behavior: smooth;
  padding: 8px 8px 20px;
  border-radius: var(--radius-l);

  scrollbar-width: none;
  -ms-overflow-style: none;
}

.slider-list:focus-visible {
  outline: 2px solid var(--c-accent-soft);
  outline-offset: 4px;
}

.slider-list::-webkit-scrollbar {
  height: 0;
}

.slider-list:hover,
.slider-list:focus-within {
  scrollbar-width: thin;
  scrollbar-color: var(--c-accent-soft) transparent;
}

.slider-list:hover::-webkit-scrollbar,
.slider-list:focus-within::-webkit-scrollbar {
  height: 8px;
}

.slider-list::-webkit-scrollbar-track {
  background: transparent;
}

.slider-list::-webkit-scrollbar-thumb {
  background: var(--c-accent-soft);
  border-radius: 8px;
}

.slider-list::-webkit-scrollbar-thumb:hover {
  background: var(--c-accent);
}

.slider-item {
  flex: 0 0 auto;
  height: var(--slide-h);
  scroll-snap-align: start;
  border-radius: var(--radius-m);
  overflow: hidden;
  background: rgba(255, 255, 255, 0.04);
  box-shadow: var(--shadow-card);
}

.slider-image {
  display: block;
  height: 100%;
  width: auto;
  object-fit: cover;
}

@media (prefers-reduced-motion: reduce) {
  .slider-list {
    scroll-behavior: auto;
  }
}

@media (max-width: 900px) {
  .slider-wrapper {
    flex-direction: column;
    gap: 24px;
  }

  .slider-head {
    max-width: 100%;
  }
}
</style>
