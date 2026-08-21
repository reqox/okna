# План исправлений по аудиту frontend

Интерактивный чеклист. Отмечай задачу `[x]` после завершения. Код приложения не менять, пока задача не взята в работу.

Порядок: **критичные баги → доступность → чистка**. Не делать правки ради правок.

---

## Волна 1. Критичные баги

### 1.1 Имя семейства JetBrains Mono

- [x] Согласовать `font-family` в `@font-face` и токенах.

**Файлы:** [`src/shared/assets/fonts/fonts.css`](../../src/shared/assets/fonts/fonts.css) (сейчас `JetBrainsMono`), [`src/app/styles/tokens.css`](../../src/app/styles/tokens.css) строка 19 (`'JetBrains Mono'`).

**Сделать:** одно имя в обоих местах (предпочтительно `'JetBrains Mono'`), чтобы моноширинный шрифт реально применялся к `.dim-eyebrow`, `.bp-label`, номерам шагов.

### 1.2 Manrope без weight 400

- [x] Добавить regular (400) **или** явно задать `font-weight` у `body` под имеющиеся файлы (600/700).

**Файл:** [`src/shared/assets/fonts/fonts.css`](../../src/shared/assets/fonts/fonts.css) строки 17–32; [`src/app/styles/global.css`](../../src/app/styles/global.css) `body`.

**Сделать:** сейчас основной текст запрашивает 400, файлов нет → синтез или скачок на SemiBold. Не подключать лишние начертания, если файлов нет в репозитории.

### 1.3 `.reveal` скрывает контент до JS (SSG / FOUC)

- [x] Контент должен быть виден в пререндере и без IntersectionObserver.

**Файлы:** [`src/app/styles/global.css`](../../src/app/styles/global.css) строки 96–106; [`src/shared/lib/useReveal.js`](../../src/shared/lib/useReveal.js).

**Сделать:** не держать `opacity: 0` как исходное состояние в SSG HTML. Варианты: стартовать видимым и анимировать только после `is-visible`; или `@media (scripting: none)` / класс на `html` после гидрации. Порог `threshold: 0.15` и `rootMargin: ... -60px` не должны оставлять низкие карточки навсегда невидимыми.

### 1.4 Скролл хедера

- [ ] Passive-слушатель и начальное состояние.

**Файл:** [`src/widgets/header/ui/AppHeader.vue`](../../src/widgets/header/ui/AppHeader.vue) строки 12–16.

**Сделать:** `addEventListener('scroll', onScroll, { passive: true })`. На `onMounted` сразу вызвать `onScroll()` (после reload в середине страницы должен быть класс `.scrolled`).

### 1.5 Smooth scroll и reduced motion в роутере

- [ ] JS-скролл не должен игнорировать `prefers-reduced-motion`.

**Файл:** [`src/app/providers/router.js`](../../src/app/providers/router.js) строка 22 (`behavior: 'smooth'`).

**Сделать:** если `prefers-reduced-motion: reduce` — `behavior: 'auto'` (в CSS для `html` это уже есть в `global.css`).

### 1.6 Title страниц

- [ ] Свой `document.title` (и при необходимости description) на `/`, `/ceiling`, `/windows`.

**Файлы:** [`index.html`](../../index.html) строка 6; страницы в `src/pages/*/ui/` или хук в роутере / vite-ssg head.

**Сделать:** на потолках и окнах title не должен оставаться про стеклопакеты.

### 1.7 `base` и gh-pages

- [ ] Проверить, что `base` совпадает с URL деплоя.

**Файлы:** [`vite.config.js`](../../vite.config.js) строка 7 (`base: '/'`); [`package.json`](../../package.json) скрипт `deploy`.

**Сделать:** если сайт не в корне домена — поправить `base`. Если в корне — ничего не менять.

### 1.8 Якоря под липким хедером

- [ ] Секции `#types` / `#services` не должны уезжать под шапку.

**Файлы:** [`src/app/styles/global.css`](../../src/app/styles/global.css) (`html` / `section`); [`src/pages/glass/ui/GlassPage.vue`](../../src/pages/glass/ui/GlassPage.vue) (`id="types"`); [`src/pages/ceiling/ui/CeilingPage.vue`](../../src/pages/ceiling/ui/CeilingPage.vue) (`id="services"`).

**Сделать:** `scroll-padding-top` на `html` или `scroll-margin-top` на целевых `section` под высоту sticky-хедера.

---

## Волна 2. Доступность (a11y)

### 2.1 FAQ: клавиатура и ARIA

- [ ] Вопрос — кнопка, состояние и панель связаны.

**Файл:** [`src/entities/faq/ui/FaqItem.vue`](../../src/entities/faq/ui/FaqItem.vue) строки 7–16.

**Сделать:** `button` с `aria-expanded`, `aria-controls` → `id` панели ответа. Клик по ответу не обязан закрывать аккордеон. Enter/Space работают за счёт кнопки.

### 2.2 Мобильное меню в дереве доступности

- [ ] Закрытое меню недоступно для Tab и скринридера.

**Файл:** [`src/widgets/header/ui/AppHeader.vue`](../../src/widgets/header/ui/AppHeader.vue) строки 53–97, стили 233–255.

**Сделать:** при закрытом меню `visibility: hidden` / `inert` / `hidden`; `aria-controls` на бургере + `id` у `nav`. Escape и клик снаружи закрывают меню. Не ломать десктопную навигацию.

### 2.3 Landmark `<main>`

- [ ] Контент маршрута внутри `<main>`.

**Файл:** [`src/app/App.vue`](../../src/app/App.vue) строки 6–12.

**Сделать:** обернуть `router-view` в `<main>`.

### 2.4 Декоративные SVG без лишних имён

- [ ] Логотип, футер, blueprint — `aria-hidden="true"`.

**Файлы:** [`src/widgets/header/ui/AppHeader.vue`](../../src/widgets/header/ui/AppHeader.vue) (логотип), [`src/widgets/footer/ui/AppFooter.vue`](../../src/widgets/footer/ui/AppFooter.vue), [`src/shared/ui/BlueprintDiagram.vue`](../../src/shared/ui/BlueprintDiagram.vue).

### 2.5 Соцсети: одно имя на ссылку

- [ ] Убрать двойное объявление WhatsApp / Telegram.

**Файлы:** [`src/widgets/header/ui/AppHeader.vue`](../../src/widgets/header/ui/AppHeader.vue) строки 68–84 (`aria-label` на `<a>`); [`src/widgets/header/ui/Icons/WhatsappIcon.vue`](../../src/widgets/header/ui/Icons/WhatsappIcon.vue) строки 4–5; [`src/widgets/header/ui/Icons/TelegramIcon.vue`](../../src/widgets/header/ui/Icons/TelegramIcon.vue) строки 4–5.

**Сделать:** на SVG внутри подписанной ссылки — `aria-hidden="true"`, без `role="img"` и без своего `aria-label`.

### 2.6 Контраст primary-кнопки

- [ ] Белый текст на `#e07c2e` довести до AA (~4.5:1 для 16px).

**Файл:** [`src/shared/ui/AppButton.vue`](../../src/shared/ui/AppButton.vue) строки 37–40 (`--c-accent`).

**Сделать:** затемнить акцент или цвет текста. Не менять палитру целиком, только этот случай (и связанные CTA, если тот же фон).

### 2.7 Размер цели касания

- [ ] Соцкнопки и бургер ≥ 44×44 на узких экранах.

**Файл:** [`src/widgets/header/ui/AppHeader.vue`](../../src/widgets/header/ui/AppHeader.vue) строки 201–231, 279–281 (иконки 26×26).

**Сделать:** увеличить hit-area (padding), визуальный размер иконки можно оставить компактным.

---

## Волна 3. Чистка и мелкий UX

Только то, что реально мешает. Архитектуру FSD не перестраивать.

### 3.1 Футер: «Политика конфиденциальности»

- [ ] Либо ссылка на реальный документ, либо убрать строку.

**Файлы:** [`src/pages/ceiling/ui/CeilingPage.vue`](../../src/pages/ceiling/ui/CeilingPage.vue) ~81; [`src/pages/windows/ui/WindowsPage.vue`](../../src/pages/windows/ui/WindowsPage.vue) ~128.

### 3.2 Заглушки ИНН / ОГРН

- [ ] Подставить реквизиты или не публиковать фейк.

**Файл:** [`src/pages/glass/ui/GlassPage.vue`](../../src/pages/glass/ui/GlassPage.vue) строка 111 (`ИНН 1234567890 / ОГРН 1234567890123`).

### 3.3 Короткий layout: футер внизу

- [ ] `.page` растягивается в колонке `.app`.

**Файлы:** [`src/app/App.vue`](../../src/app/App.vue) (`.app` уже `flex-direction: column`); стили страниц (`.page`).

**Сделать:** `.page { flex: 1 }` (глобально или на обёртке в `App.vue`), без дублирования на каждой странице, если можно один раз.

### 3.4 Неиспользуемый токен `--dur-l`

- [ ] Удалить из [`src/app/styles/tokens.css`](../../src/app/styles/tokens.css) строка 31, если так и не понадобился.

Не трогать: `prefers-reduced-motion` в hero / blueprint / page-transition — уже сделано. Кнопку `AppButton` как `button` не выкидывать «потому что сейчас везде `as="a"`».

---

## Порядок работ (рекомендуемый)

```text
1.1 → 1.2 → 1.3 → 1.4 → 1.5 → 1.8 → 1.6 → 1.7
     ↓
2.1 → 2.2 → 2.3 → 2.4 → 2.5 → 2.6 → 2.7
     ↓
3.1 → 3.2 → 3.3 → 3.4
```

После каждой волны — визуально: десктоп, мобильное меню, якорь `#types` / `#services`, FAQ с клавиатуры, reload на середине страницы (хедер), `prefers-reduced-motion`.
