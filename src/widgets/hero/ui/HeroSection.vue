<script setup>
import BlueprintDiagram from '../../../shared/ui/BlueprintDiagram.vue'

defineProps({
  eyebrow: String,
  title: String,
  subtitle: String,
  variant: { type: String, default: 'window' },
  tone: { type: String, default: 'glass' } // glass | amber | mint
})
</script>

<template>
  <section class="hero" :class="tone">
    <div class="container hero-grid">
      <div class="hero-copy">
        <div v-if="eyebrow" class="dim-eyebrow">{{ eyebrow }}</div>
        <h1>{{ title }}</h1>
        <p class="subtitle">{{ subtitle }}</p>
        <div class="hero-actions">
          <slot name="actions" />
        </div>
        <p v-if="$slots.note" class="note"><slot name="note" /></p>
      </div>
      <div class="hero-visual">
        <BlueprintDiagram :variant="variant" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding: 64px 0 40px;
  overflow: hidden;
  position: relative;
}
.hero.glass { background: linear-gradient(160deg, #E9F2F4 0%, var(--c-bg) 62%); }
.hero.amber { background: linear-gradient(160deg, #FBF0E3 0%, var(--c-bg) 62%); }
.hero.mint { background: linear-gradient(160deg, #E7F3EE 0%, var(--c-bg) 62%); }

.hero-grid {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  align-items: center;
  gap: 48px;
}

.hero-copy h1 {
  font-size: clamp(30px, 4.2vw, 48px);
  color: var(--c-ink);
  margin-bottom: 18px;
  animation: rise .7s var(--ease-out) both;
}
.subtitle {
  font-size: 18px;
  line-height: 1.6;
  color: var(--c-ink-soft);
  max-width: 52ch;
  animation: rise .7s var(--ease-out) .1s both;
}
.hero-actions {
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  align-items: center;
  animation: rise .7s var(--ease-out) .2s both;
}
.note {
  margin-top: 14px;
  font-size: 13.5px;
  color: var(--c-ink-soft);
  font-family: var(--f-mono);
  animation: rise .7s var(--ease-out) .28s both;
}

.hero-visual {
  animation: fadeIn .9s ease .15s both;
}

@keyframes rise {
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@media (max-width: 900px) {
  .hero-grid { grid-template-columns: 1fr; }
  .hero-visual { order: -1; max-width: 340px; margin: 0 auto; }
}

@media (prefers-reduced-motion: reduce) {
  .hero-copy h1, .subtitle, .hero-actions, .note, .hero-visual { animation: none; }
}
</style>
