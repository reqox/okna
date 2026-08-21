<script setup>
import { contacts } from '../../../shared/config/contacts.js';
import RevealItem from '../../../shared/ui/RevealItem.vue';

defineProps({
  title: String,
  text: String,
});
</script>

<template>
  <section class="cta">
    <div class="container">
      <RevealItem tag="div" class="cta-inner">
        <h2>{{ title }}</h2>
        <p v-if="text">{{ text }}</p>
        <div v-if="$slots.offers" class="offers"><slot name="offers" /></div>
        <div class="cta-contacts">
          <a :href="contacts.phoneHref" class="cta-phone">📞 {{ contacts.phone }}</a>
          <div class="meta">
            <span v-if="$slots.meta"><slot name="meta" /></span>
            <span>📍 {{ contacts.city }}</span>
          </div>
        </div>
      </RevealItem>
    </div>
  </section>
</template>

<style scoped>
.cta {
  background: radial-gradient(120% 140% at 15% 0%, #1e5878 0%, var(--c-primary-dark) 60%);
  color: #fff;
  text-align: center;
  padding: 84px 0;
  position: relative;
  overflow: hidden;
}
.cta::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: radial-gradient(circle at 50% 30%, black, transparent 70%);
  pointer-events: none;
}
.cta-inner {
  position: relative;
}
.cta h2 {
  font-size: clamp(24px, 3vw, 34px);
  color: #fff;
  max-width: 700px;
  margin: 0 auto 14px;
}
.cta p {
  font-size: 17px;
  opacity: 0.85;
  max-width: 560px;
  margin: 0 auto 26px;
  line-height: 1.6;
}

.offers {
  width: max-content;
  max-width: 100%;
  margin: 0 auto 28px;
  text-align: left;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: var(--radius-m);
  padding: 18px 22px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 15px;
}

.cta-contacts {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}
.cta-phone {
  font-family: var(--f-display);
  font-size: clamp(22px, 3vw, 30px);
  font-weight: 700;
  color: var(--c-accent-soft);
  text-decoration: none;
  transition: transform var(--dur-s);
}
.cta-phone:hover {
  transform: scale(1.04);
}
.meta {
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 15px;
  opacity: 0.85;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
