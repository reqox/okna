## Волна 2. Доступность (a11y)

### 2.2 Мобильное меню в дереве доступности

- [x] Закрытое меню недоступно для Tab и скринридера.

**Файл:** [`src/widgets/header/ui/AppHeader.vue`](../../src/widgets/header/ui/AppHeader.vue) строки 53–97, стили 233–255.

**Сделать:** при закрытом меню `visibility: hidden` / `inert` / `hidden`; `aria-controls` на бургере + `id` у `nav`. Escape и клик снаружи закрывают меню. Не ломать десктопную навигацию.

## Волна 3. Чистка и мелкий UX

### 3.1 Футер: «Политика конфиденциальности»

- [ ] Либо ссылка на реальный документ, либо убрать строку.

**Файлы:** [`src/pages/ceiling/ui/CeilingPage.vue`](../../src/pages/ceiling/ui/CeilingPage.vue) ~81; [`src/pages/windows/ui/WindowsPage.vue`](../../src/pages/windows/ui/WindowsPage.vue) ~128.

### 3.2 Заглушки ИНН / ОГРН

- [x] Подставить реквизиты или не публиковать фейк.

**Файл:** [`src/pages/glass/ui/GlassPage.vue`](../../src/pages/glass/ui/GlassPage.vue) строка 111 (`ИНН 1234567890 / ОГРН 1234567890123`).
