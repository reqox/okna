<script setup>
defineProps({
  name: String,
  desc: String,
  badge: String,
  featured: { type: Boolean, default: false }
})
</script>

<template>
  <article class="pkg" :class="{ featured }">
    <div v-if="badge" class="badge">{{ badge }}</div>
    <h3>{{ name }}</h3>
    <p>{{ desc }}</p>
  </article>
</template>

<style scoped>
.pkg {
  background: var(--c-surface);
  border: 1px solid var(--c-line);
  border-top: 4px solid var(--c-frost);
  border-radius: var(--radius-m);
  padding: 30px 26px;
  position: relative;
  transition: transform var(--dur-s) var(--ease-out), box-shadow var(--dur-s);
  height: 100%;
}
.pkg:hover { transform: translateY(-6px); box-shadow: var(--shadow-card-hover); }
.pkg.featured { border-top-color: var(--c-accent); box-shadow: var(--shadow-card); }
.badge {
  position: absolute;
  top: -13px; right: 22px;
  background: var(--c-accent);
  color: #fff;
  padding: 5px 16px;
  border-radius: 100px;
  font-size: 12.5px;
  font-weight: 700;
  letter-spacing: 0.03em;
}
h3 { font-family: var(--f-display); font-size: 20px; margin-bottom: 12px; color: var(--c-ink); }
p { color: var(--c-ink-soft); line-height: 1.65; font-size: 15px; }
</style>
