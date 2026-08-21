export const routes = [
  {
    path: '/',
    name: 'glass',
    component: () => import('../../pages/glass/ui/GlassPage.vue'),
  },
  {
    path: '/ceiling',
    name: 'ceiling',
    component: () => import('../../pages/ceiling/ui/CeilingPage.vue'),
  },
  {
    path: '/windows',
    name: 'windows',
    component: () => import('../../pages/windows/ui/WindowsPage.vue'),
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
