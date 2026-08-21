export const routes = [
  {
    path: '/',
    name: 'glass',
    component: () => import('../../pages/glass/ui/GlassPage.vue'),
    meta: {
      title: 'Стеклопакеты на заказ в Краснодаре - от производителя',
      description:
        'Стеклопакеты в Краснодаре любых размеров: 1–3 камеры, энергосбережение, триплекс, шум до 42 дБ. Бесплатный замер, расчёт за 5 минут, гарантия 12 месяцев.',
    },
  },
  {
    path: '/ceiling',
    name: 'ceiling',
    component: () => import('../../pages/ceiling/ui/CeilingPage.vue'),
    meta: {
      title: 'Натяжные потолки в Краснодаре — монтаж за 1 день',
      description:
        'Натяжные потолки в Краснодаре: 200 фактур, парящие и теневые, световые линии. Бесплатный замер и 3D, монтаж за 1 день, гарантия до 10 лет. С 2012 года.',
    },
  },
  {
    path: '/windows',
    name: 'windows',
    component: () => import('../../pages/windows/ui/WindowsPage.vue'),
    meta: {
      title: 'Окна ПВХ в Краснодаре: установка, ремонт, регулировка',
      description:
        'Установка окон ПВХ по ГОСТу и ремонт в Краснодаре: регулировка, уплотнители, замена стеклопакета за 40–60 мин. Сквозняк, конденсат — выезд в день звонка.',
    },
  },
];

export const SCROLL_KEY = 'okna:scrollY';

function saveScrollY() {
  const scrollY = window.scrollY;
  sessionStorage.setItem(SCROLL_KEY, String(scrollY));
}

function restoreScrollY() {
  const scrollY = Number(sessionStorage.getItem(SCROLL_KEY));
  return Number.isFinite(scrollY) ? scrollY : 0;
}

function isReload() {
  return performance.getEntriesByType('navigation')[0]?.type === 'reload';
}

if (typeof window !== 'undefined') {
  window.addEventListener('beforeunload', saveScrollY);
}

let hasBeenRestored = false;
export const routerOptions = {
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    if (to.hash)
      return {
        el: to.hash,
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
      };
    if (typeof window !== 'undefined' && isReload() && !hasBeenRestored) {
      hasBeenRestored = true;
      return { left: 0, top: restoreScrollY() };
    }

    return { left: 0, top: 0 };
  },
};
