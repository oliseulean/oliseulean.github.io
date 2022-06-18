import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'App',
      meta: {
        title: 'Olimpiu Seulean - Frontend Engineer',
      },
      component: () => import('../layouts/Main.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'FourOhFour',
      meta: {
        title: 'Error',
      },
      component: () => import('../components/FourOhFour.vue'),
    },
  ],
});

router.beforeEach((toRoute, fromRoute, next) => {
  const title = 'Olimpiu Seulean - Frontend Engineer';

  toRoute?.meta?.title === 'Error'
    ? (window.document.title = `${toRoute?.meta?.title} | ${title}`)
    : (window.document.title = title);

  next();
});

export default router;
