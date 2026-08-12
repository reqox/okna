import { ViteSSG } from 'vite-ssg';
import App from './app/App.vue';
import { routes, routerOptions } from './app/providers/router.js';
import './app/styles/global.css';

export const createApp = ViteSSG(App, {
  routes,
  scrollBehavior: routerOptions.scrollBehavior,
});
