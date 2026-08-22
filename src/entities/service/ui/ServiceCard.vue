<script setup>
defineProps({
  icon: String,
  name: String,
  desc: String,
  tag: { type: String, default: 'article' },
});
</script>

<template>
  <component :is="tag" class="card">
    <div class="icon">{{ icon }}</div>
    <h3>{{ name }}</h3>
    <p>{{ desc }}</p>
  </component>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--c-surface);
  border: 1px solid var(--c-line);
  border-radius: var(--radius-m);
  padding: 30px 26px;
  height: 100%;
  transition:
    transform var(--dur-s) var(--ease-out),
    box-shadow var(--dur-s) var(--ease-out),
    border-color var(--dur-s);
}
.card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-card-hover);
  border-color: var(--c-frost);
}
.icon {
  font-size: 34px;
  margin-bottom: 16px;
}
h3 {
  font-size: 18px;
  margin-bottom: 10px;
  color: var(--c-ink);
  font-family: var(--f-display);
  font-weight: 600;
}
p {
  color: var(--c-ink-soft);
  line-height: 1.6;
  font-size: 15px;
}
</style>
