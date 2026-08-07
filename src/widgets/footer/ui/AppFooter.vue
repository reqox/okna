<script setup>
defineProps({
  title: { type: String, required: true },
  lines: { type: Array, default: () => [] }
})
</script>

<template>
  <footer class="footer">
    <div class="container footer-inner">
      <div class="footer-brand">
        <svg viewBox="0 0 28 28" fill="none" class="mark">
          <rect x="2" y="2" width="24" height="24" rx="3" stroke="currentColor" stroke-width="2"/>
          <line x1="14" y1="2" x2="14" y2="26" stroke="var(--c-accent)" stroke-width="2"/>
          <line x1="2" y1="14" x2="26" y2="14" stroke="var(--c-accent)" stroke-width="2"/>
        </svg>
        <h3>{{ title }}</h3>
      </div>
      <div class="footer-lines">
        <p v-for="(l, i) in lines" :key="i">{{ l }}</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--c-primary-dark);
  color: rgba(255,255,255,0.75);
  padding: 40px 0;
}
.footer-inner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}
.footer-brand { display: flex; align-items: center; gap: 10px; }
.mark { color: var(--c-frost); }
.footer-brand h3 {
  font-family: var(--f-display);
  font-size: 15px;
  color: #fff;
}
.footer-lines { text-align: right; }
.footer-lines p { font-size: 13.5px; line-height: 1.7; }
@media (max-width: 600px) {
  .footer-inner { flex-direction: column; text-align: center; }
  .footer-lines { text-align: center; }
}
</style>
