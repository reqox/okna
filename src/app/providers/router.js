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

export const routerOptions = {
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    if (to.hash) return { el: to.hash, behavior: 'smooth' };
    return { top: 0 };
  },
};
