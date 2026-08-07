<script setup>
defineProps({
  text: String,
  index: { type: Number, default: null }
})
</script>

<template>
  <div class="adv">
    <span v-if="index !== null" class="num">{{ String(index).padStart(2, '0') }}</span>
    <p>{{ text }}</p>
  </div>
</template>

<style scoped>
.adv {
  background: var(--c-surface);
  border: 1px solid var(--c-line);
  border-radius: var(--radius-m);
  padding: 22px 24px;
  transition: transform var(--dur-s) var(--ease-out), box-shadow var(--dur-s) var(--ease-out);
  height: 100%;
}
.adv:hover { transform: translateY(-4px); box-shadow: var(--shadow-card); }
.num {
  display: block;
  font-family: var(--f-mono);
  color: var(--c-accent);
  font-size: 13px;
  margin-bottom: 10px;
  letter-spacing: 0.05em;
}
p { color: var(--c-ink); line-height: 1.55; font-size: 15px; }
</style>
