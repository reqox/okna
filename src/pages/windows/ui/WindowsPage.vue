<script setup>
import HeroSection from '../../../widgets/hero/ui/HeroSection.vue'
import CtaBlock from '../../../widgets/cta-block/ui/CtaBlock.vue'
import AppFooter from '../../../widgets/footer/ui/AppFooter.vue'
import AppButton from '../../../shared/ui/AppButton.vue'
import SectionTitle from '../../../shared/ui/SectionTitle.vue'
import RevealItem from '../../../shared/ui/RevealItem.vue'
import ServiceCard from '../../../entities/service/ui/ServiceCard.vue'
import PackageCard from '../../../entities/package/ui/PackageCard.vue'
import DiagnosticCard from '../../../entities/diagnostic/ui/DiagnosticCard.vue'
import FaqItem from '../../../entities/faq/ui/FaqItem.vue'
import { contacts } from '../../../shared/config/contacts.js'
import {
  windowServices, windowPackages, windowDiagnostics,
  windowPrevention, windowAdvantages, windowFaq, checklist
} from '../model/data.js'
</script>

<template>
  <div class="page">
    <HeroSection
      eyebrow="Rehau · KBE · Veka · Proplex"
      title="Установка и профессиональный сервис окон ПВХ в Краснодаре"
      subtitle="Диагностика узлов, сезонная профилактика и монтаж по ГОСТу с тепловизионным контролем."
      variant="service"
      tone="mint"
    >
      <template #actions>
        <AppButton as="a" :href="contacts.phoneHref" variant="primary">Вызвать инженера-замерщика</AppButton>
      </template>
      <template #note>Если мы не заключим договор — диагностика платная. Честность в деталях.</template>
    </HeroSection>

    <section class="services">
      <div class="container">
        <SectionTitle eyebrow="Главное меню" title="Наши услуги" />
        <div class="grid-4">
          <RevealItem v-for="(s, i) in windowServices" :key="s.name" :delay="i * 70">
            <ServiceCard :icon="s.icon" :name="s.name" :desc="s.desc" />
          </RevealItem>
        </div>
      </div>
    </section>

    <section class="packages">
      <div class="container">
        <SectionTitle eyebrow="Тарифы" title="Установка окон и дверей — 3 пакета на выбор" text="Мы не навязываем дорогое. Выбирайте под задачу." />
        <div class="grid-3">
          <RevealItem v-for="(p, i) in windowPackages" :key="p.name" :delay="i * 90">
            <PackageCard :name="p.name" :desc="p.desc" :badge="p.badge" :featured="p.featured" />
          </RevealItem>
        </div>
        <RevealItem tag="div" class="warning">
          <strong>Важно:</strong> После монтажа мы проводим контрольный замер влажности в помещении. Если окно «плачет» по нашей вине — переделываем за свой счёт. Это закреплено в договоре.
        </RevealItem>
      </div>
    </section>

    <section class="diagnostics">
      <div class="container">
        <SectionTitle eyebrow="90% проблем решаем без замены" title="Диагностика узлов и ремонт" text="Мы не чиним «вслепую». Проводим поузловую диагностику, чтобы найти корень зла." />
        <div class="grid-2">
          <RevealItem v-for="(d, i) in windowDiagnostics" :key="d.title" :delay="i * 70">
            <DiagnosticCard :title="d.title" :symptoms="d.symptoms" :services="d.services" />
          </RevealItem>
        </div>
      </div>
    </section>

    <section class="prevention">
      <div class="container">
        <SectionTitle eyebrow="Продлеваем жизнь окнам в 2 раза" title="Профилактика" text="90% поломок происходят из-за отсутствия ТО. Предлагаем годовой абонемент." />
        <div class="prevention-list">
          <RevealItem v-for="(p, i) in windowPrevention" :key="p" :delay="i * 70" tag="div" class="prevention-item">
            <span class="dim-num">{{ i + 1 }}</span><p>{{ p }}</p>
          </RevealItem>
        </div>
        <RevealItem tag="p" class="result">Результат: окно будет открываться плавно, как у европейцев, 10+ лет без серьёзных ремонтов.</RevealItem>
      </div>
    </section>

    <section class="advantages">
      <div class="container">
        <SectionTitle eyebrow="Инженерный подход" title="Почему выбирают нас" />
        <div class="grid-list">
          <RevealItem v-for="(a, i) in windowAdvantages" :key="a" :delay="i * 60" tag="div" class="adv-line">
            <span class="mark">•</span><p>{{ a }}</p>
          </RevealItem>
        </div>
      </div>
    </section>

    <section class="faq">
      <div class="container">
        <SectionTitle eyebrow="Снимаем страхи" title="Вопрос-ответ" />
        <div class="faq-list">
          <RevealItem v-for="(f, i) in windowFaq" :key="f.q" :delay="i * 70">
            <FaqItem :q="f.q" :a="f.a" />
          </RevealItem>
        </div>
      </div>
    </section>

    <CtaBlock
      title="Закажите выезд мастера-диагноста уже сегодня"
    >
      <template #offers>
        <span>🎁 Бесплатную проверку тепловизором — увидите все мостики холода на экране.</span>
        <span>🎁 Скидку 10% на комплексную профилактику при подписании абонемента на год.</span>
      </template>
      <template #meta>Режим работы: ежедневно 8:00–21:00 (выезд в выходные)</template>
    </CtaBlock>

    <section class="checklist">
      <div class="container">
        <SectionTitle eyebrow="Доверие" title="Чек-лист для самостоятельной проверки окна" text="Не уверены, пора ли вызывать мастера? Пришлите нам в WhatsApp фото этих мест:" />
        <div class="check-grid">
          <RevealItem v-for="(c, i) in checklist" :key="c" :delay="i * 90" tag="div" class="check-item">
            <span class="dim-num">{{ i + 1 }}</span><p>{{ c }}</p>
          </RevealItem>
        </div>
        <p class="check-note">Мы бесплатно оценим снимки и скажем, срочная ли это поломка или плановое ТО.</p>
      </div>
    </section>

    <AppFooter
      title="Оконный сервис Краснодар"
      :lines="['© 2026 Все права защищены.', 'Политика конфиденциальности']"
    />
  </div>
</template>

<style scoped>
.grid-4 { display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 22px; }
.grid-3 { display: grid; grid-template-columns: repeat(auto-fit, minmax(270px, 1fr)); gap: 22px; margin-bottom: 26px; }
.grid-2 { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; }

.warning {
  background: #FDF1DE;
  border-left: 4px solid var(--c-accent);
  padding: 18px 24px;
  border-radius: var(--radius-s);
  color: #7A4B0F;
  line-height: 1.6;
  max-width: 900px;
  margin: 0 auto;
}

.prevention-list {
  display: flex; flex-direction: column; gap: 10px;
  max-width: 720px; margin: 0 auto 22px;
}
.prevention-item, .check-item {
  display: flex; align-items: center; gap: 14px;
  background: var(--c-surface);
  border: 1px solid var(--c-line);
  border-radius: var(--radius-s);
  padding: 14px 20px;
}
.dim-num {
  font-family: var(--f-mono);
  color: var(--c-accent);
  font-weight: 700;
  flex-shrink: 0;
}
.result {
  text-align: center;
  max-width: 640px;
  margin: 0 auto;
  color: var(--c-ink);
  font-size: 17px;
  font-weight: 600;
}

.grid-list { display: flex; flex-direction: column; gap: 12px; max-width: 800px; margin: 0 auto; }
.adv-line {
  display: flex; gap: 12px;
  background: var(--c-surface);
  border: 1px solid var(--c-line);
  border-radius: var(--radius-s);
  padding: 16px 20px;
  color: var(--c-ink-soft);
  line-height: 1.6;
}
.adv-line .mark { color: var(--c-accent); font-weight: 700; }

.faq-list { max-width: 800px; margin: 0 auto; display: flex; flex-direction: column; gap: 14px; }

.check-grid { display: flex; flex-direction: column; gap: 10px; max-width: 640px; margin: 0 auto; }
.check-note { text-align: center; margin-top: 18px; color: var(--c-accent); font-weight: 600; }
</style>
