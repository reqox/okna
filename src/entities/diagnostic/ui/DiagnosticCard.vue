<script setup>
defineProps({
  title: String,
  symptoms: String,
  services: String
})
</script>

<template>
  <article class="diag">
    <h3>{{ title }}</h3>
    <p><strong>Симптомы:</strong> {{ symptoms }}</p>
    <p><strong>Услуги:</strong> {{ services }}</p>
  </article>
</template>

<style scoped>
.diag {
  background: var(--c-surface);
  border: 1px solid var(--c-line);
  border-left: 3px solid var(--c-accent);
  border-radius: var(--radius-s) var(--radius-m) var(--radius-m) var(--radius-s);
  padding: 24px 26px;
  transition: transform var(--dur-s) var(--ease-out), box-shadow var(--dur-s);
  height: 100%;
}
.diag:hover { transform: translateY(-4px); box-shadow: var(--shadow-card); }
h3 { font-family: var(--f-display); font-size: 17px; margin-bottom: 12px; color: var(--c-primary); }
p { margin-bottom: 8px; line-height: 1.6; color: var(--c-ink-soft); font-size: 14.5px; }
p:last-child { margin-bottom: 0; }
strong { color: var(--c-ink); }
</style>
