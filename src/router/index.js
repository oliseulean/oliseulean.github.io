import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'App',
      component: () => import('../layouts/Main.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'FourOhFour',
      component: () => import('../components/FourOhFour.vue'),
    },
  ],
});

export default router;
