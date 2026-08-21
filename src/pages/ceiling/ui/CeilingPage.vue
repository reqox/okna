<script setup>
import HeroSection from '../../../widgets/hero/ui/HeroSection.vue'
import CtaBlock from '../../../widgets/cta-block/ui/CtaBlock.vue'
import AppButton from '../../../shared/ui/AppButton.vue'
import SectionTitle from '../../../shared/ui/SectionTitle.vue'
import RevealItem from '../../../shared/ui/RevealItem.vue'
import ServiceCard from '../../../entities/service/ui/ServiceCard.vue'
import StepItem from '../../../entities/step/ui/StepItem.vue'
import { contacts } from '../../../shared/config/contacts.js'
import { ceilingServices, ceilingAdvantages, ceilingSteps, ceilingWhyUs } from '../model/data.js'
</script>

<template>
  <div class="page">
    <HeroSection
      eyebrow="Замер · 3D-визуализация · Монтаж за 1 день"
      title="Идеальные натяжные потолки с подсветкой и дизайнерскими решениями"
      subtitle="Профессиональный монтаж, врезка светильников, скрытые карнизы, светодиодные линии, парящие и теневые конструкции."
      variant="ceiling"
      tone="amber"
    >
      <template #actions>
        <AppButton as="a" :href="contacts.phoneHref" variant="primary">Рассчитать стоимость</AppButton>
        <AppButton as="a" href="#services" variant="ghost">Наши услуги</AppButton>
      </template>
      <template #note>Выезд на замер бесплатно</template>
    </HeroSection>

    <section id="services" class="services">
      <div class="container">
        <SectionTitle eyebrow="Каталог" title="Наши услуги" />
        <div class="grid-6">
          <RevealItem v-for="(s, i) in ceilingServices" :key="s.name" :delay="i * 60">
            <ServiceCard :icon="s.icon" :name="s.name" :desc="s.desc" />
          </RevealItem>
        </div>
      </div>
    </section>

    <section class="advantages">
      <div class="container">
        <SectionTitle eyebrow="Гарантии" title="Преимущества" />
        <div class="chip-grid">
          <RevealItem v-for="(a, i) in ceilingAdvantages" :key="a" :delay="i * 70" tag="div" class="chip">
            {{ a }}
          </RevealItem>
        </div>
      </div>
    </section>

    <section class="steps">
      <div class="container">
        <SectionTitle eyebrow="Процесс" title="Как мы работаем" />
        <div class="grid-4">
          <RevealItem v-for="(s, i) in ceilingSteps" :key="s" :delay="i * 80">
            <StepItem :index="i + 1" :text="s" />
          </RevealItem>
        </div>
      </div>
    </section>

    <section class="why">
      <div class="container">
        <SectionTitle eyebrow="Опыт" title="Почему выбирают нас" />
        <div class="chip-grid why-grid">
          <RevealItem v-for="(w, i) in ceilingWhyUs" :key="w" :delay="i * 70" tag="div" class="chip why-chip">
            <span class="mark">•</span>{{ w }}
          </RevealItem>
        </div>
      </div>
    </section>

    <CtaBlock
      title="Ещё не определились в выборе? Просто позвоните!"
      text="Я, Алексей, лично проконсультирую и подберу лучший вариант под ваш бюджет."
    />
  </div>
</template>

<style scoped>
.grid-6 { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 22px; }
.grid-4 { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 22px; }

.chip-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 18px; }
.chip {
  background: var(--c-surface);
  border: 1px solid var(--c-line);
  border-radius: var(--radius-m);
  padding: 20px 22px;
  font-size: 15px;
  color: var(--c-ink);
  transition: transform var(--dur-s) var(--ease-out), box-shadow var(--dur-s);
}
.chip:hover { transform: translateY(-4px); box-shadow: var(--shadow-card); }
.why-chip { display: flex; align-items: flex-start; gap: 10px; }
.mark { color: var(--c-accent); font-weight: 700; }
</style>
