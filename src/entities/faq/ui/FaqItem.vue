<script setup>
import { ref } from 'vue';
defineProps({ q: String, a: String });
const open = ref(false);
</script>

<template>
  <button :aria-expanded="open" class="faq" :class="{ open }" @click="open = !open">
    <div class="faq-q">
      <span>{{ q }}</span>
      <span class="chev" aria-hidden="true">+</span>
    </div>
    <div class="faq-a-wrap">
      <p class="faq-a">{{ a }}</p>
    </div>
  </button>
</template>

<style scoped>
.faq {
  width: 100%;
  background: var(--c-surface);
  border: 1px solid var(--c-line);
  border-radius: var(--radius-m);
  padding: 20px 24px;
  cursor: pointer;
  transition: border-color var(--dur-s);
}
.faq:hover {
  border-color: var(--c-frost);
}
.faq-q {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  font-weight: 700;
  font-size: 16.5px;
  color: var(--c-ink);
}
.chev {
  flex-shrink: 0;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: var(--c-bg);
  color: var(--c-accent);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  transition: transform var(--dur-s) var(--ease-out);
}
.faq.open .chev {
  transform: rotate(45deg);
}

.faq-a-wrap {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows var(--dur-m) var(--ease-out);
}
.faq.open .faq-a-wrap {
  grid-template-rows: 1fr;
}
.faq-a {
  text-align: start;
  overflow: hidden;
  color: var(--c-ink-soft);
  line-height: 1.65;
  font-size: 15px;
  padding-top: 0;
}
.faq.open .faq-a {
  padding-top: 12px;
}
</style>
