<script setup>
import HeroSection from '../../../widgets/hero/ui/HeroSection.vue';
import CtaBlock from '../../../widgets/cta-block/ui/CtaBlock.vue';
import AppButton from '../../../shared/ui/AppButton.vue';
import SectionTitle from '../../../shared/ui/SectionTitle.vue';
import RevealItem from '../../../shared/ui/RevealItem.vue';
import ServiceCard from '../../../entities/service/ui/ServiceCard.vue';
import AdvantageCard from '../../../entities/advantage/ui/AdvantageCard.vue';
import StepItem from '../../../entities/step/ui/StepItem.vue';
import FaqItem from '../../../entities/faq/ui/FaqItem.vue';
import { contacts } from '../../../shared/config/contacts.js';
import { glassTypes, glassAdvantages, glassBonuses, glassSteps, glassFaq } from '../model/data.js';
import Slider from '../../../widgets/slider/ui/Slider.vue';
import { loadImages } from '../../../shared/lib/loadImages.js';
import alexImage from './img/alexey.jpeg';

const galleryImages = loadImages(
  import.meta.glob('../assets/*.{png,jpg,jpeg,webp,avif}', { eager: true }),
  'Стеклопакеты — примеры выполненных работ',
);
</script>

<template>
  <div class="page">
    <HeroSection
      eyebrow="Замер · Расчёт · Монтаж"
      title="Стеклопакет от производителя — без наценок магазина"
      subtitle="Высокое качество по низкой цене. Присылайте размеры — рассчитаем стоимость за 5 минут."
      variant="window"
      tone="glass"
    >
      <template #actions>
        <AppButton as="a" :href="contacts.phoneHref" variant="primary">📞 Позвонить мастеру</AppButton>
        <AppButton as="a" href="#types" variant="ghost">Виды стеклопакетов</AppButton>
      </template>
      <template #note>Выезд замерщика — бесплатно при заказе</template>
    </HeroSection>

    <section class="about">
      <div class="container about-grid">
        <RevealItem class="about-portrait">
          <img class="portrait" :src="alexImage" alt="Фотография Алексея" width="366" height="366" />
        </RevealItem>
        <RevealItem :delay="100" class="about-copy">
          <div class="dim-eyebrow">О мастере</div>
          <h2>Приветствую! Меня зовут Алексей.</h2>
          <p>
            С 2010 года я профессионально занимаюсь производством и установкой стеклопакетов. Работаю с любым уровнем
            сложности и любой формой окна — от стандартных прямоугольных до арочных и треугольных.
          </p>
          <p>
            <strong>Работаю без посредников</strong> — собственное производство, которое позволяет мне контролировать
            каждый этап: от раскроя стекла до финальной герметизации.
          </p>
          <div class="badge">✅ Гарантия от 12 месяцев</div>
        </RevealItem>
      </div>
    </section>

    <Slider title="Наши работы" eyebrow="Портфолио" text="Можно листать свайпом влево/вправо" :images="galleryImages" />

    <section id="types" class="types">
      <div class="container">
        <SectionTitle
          eyebrow="Каталог"
          title="Виды стеклопакетов"
          text="Изготавливаем под любые задачи — от дачи до панорамного остекления"
        />
        <div class="grid-7">
          <RevealItem tag="ul" v-for="(t, i) in glassTypes" :key="t.name" :delay="i * 60">
            <ServiceCard tag="li" :icon="t.icon" :name="t.name" :desc="t.desc" />
          </RevealItem>
        </div>
      </div>
    </section>

    <section class="advantages">
      <div class="container">
        <SectionTitle eyebrow="Аргументы" title="Почему выбирают нас" />
        <div class="grid-4">
          <RevealItem v-for="(a, i) in glassAdvantages" :key="a" :delay="i * 70">
            <AdvantageCard :text="a" :index="i + 1" />
          </RevealItem>
        </div>
      </div>
    </section>

    <section class="bonuses">
      <div class="container">
        <SectionTitle eyebrow="В подарок" title="Бесплатно для клиентов" />
        <div class="bonus-list">
          <RevealItem v-for="(b, i) in glassBonuses" :key="b" :delay="i * 80" tag="div" class="bonus-item">
            <span>🎁</span>
            <p>{{ b }}</p>
          </RevealItem>
        </div>
      </div>
    </section>

    <section class="steps">
      <div class="container">
        <SectionTitle eyebrow="Процесс" title="Как мы работаем" />
        <div class="grid-6">
          <RevealItem v-for="(s, i) in glassSteps" :key="s" :delay="i * 60">
            <StepItem :index="i + 1" :text="s" />
          </RevealItem>
        </div>
      </div>
    </section>

    <section class="faq">
      <div class="container">
        <SectionTitle eyebrow="Вопрос-ответ" title="Часто задаваемые вопросы" />
        <div class="faq-list">
          <RevealItem v-for="(f, i) in glassFaq" :key="f.q" :delay="i * 60">
            <FaqItem :q="f.q" :a="f.a" />
          </RevealItem>
        </div>
      </div>
    </section>

    <CtaBlock
      title="Не разобрались в характеристиках? Просто позвоните!"
      text="Я, Алексей, лично проконсультирую и подберу лучший вариант под ваш бюджет."
    />
  </div>
</template>

<style scoped>
.about-grid {
  display: grid;
  grid-template-columns: 0.8fr 1.6fr;
  gap: 48px;
  align-items: center;
}
.portrait {
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1;
  border-radius: var(--radius-l);
  background: linear-gradient(135deg, #fbe3ce, #f5a55b);
  box-shadow: var(--shadow-card);
}
.about-copy h2 {
  font-size: clamp(24px, 3vw, 32px);
  margin-bottom: 16px;
}
.about-copy p {
  color: var(--c-ink-soft);
  line-height: 1.75;
  margin-bottom: 12px;
}
.badge {
  display: inline-block;
  margin-top: 6px;
  background: var(--c-success);
  color: #fff;
  padding: 9px 22px;
  border-radius: 100px;
  font-weight: 700;
  font-size: 14.5px;
}

.grid-7,
.grid-4,
.grid-6 {
  display: grid;
  gap: 22px;
}
.grid-7 {
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
.grid-4 {
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}
.grid-6 {
  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
}

.bonus-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 720px;
  margin: 0 auto;
}
.bonus-item {
  background: var(--c-surface);
  border: 1px solid var(--c-line);
  border-radius: var(--radius-m);
  padding: 18px 26px;
  display: flex;
  align-items: center;
  gap: 18px;
}
.bonus-item span {
  font-size: 26px;
}
.bonus-item p {
  font-size: 15.5px;
  color: var(--c-ink);
}

.faq-list {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

@media (max-width: 800px) {
  .about-grid {
    grid-template-columns: 1fr;
  }
  .portrait {
    max-width: 220px;
    margin: 0 auto;
  }
}
</style>
