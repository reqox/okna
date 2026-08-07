<script setup>
defineProps({
  index: Number,
  text: String
})
</script>

<template>
  <div class="step">
    <div class="marker"><span>{{ index }}</span></div>
    <p>{{ text }}</p>
  </div>
</template>

<style scoped>
.step {
  background: var(--c-surface);
  border: 1px solid var(--c-line);
  border-radius: var(--radius-m);
  padding: 26px 18px;
  text-align: center;
  transition: transform var(--dur-s) var(--ease-out), box-shadow var(--dur-s);
  height: 100%;
}
.step:hover { transform: translateY(-5px); box-shadow: var(--shadow-card); }
.marker {
  width: 46px; height: 46px;
  margin: 0 auto 14px;
  border-radius: 50%;
  background: var(--c-primary);
  color: #fff;
  display: flex; align-items: center; justify-content: center;
  font-family: var(--f-mono);
  font-weight: 600;
  font-size: 17px;
  position: relative;
}
.marker::after {
  content: '';
  position: absolute;
  inset: -5px;
  border-radius: 50%;
  border: 1.5px dashed var(--c-accent-soft);
}
p { font-size: 14px; color: var(--c-ink-soft); line-height: 1.55; }
</style>
