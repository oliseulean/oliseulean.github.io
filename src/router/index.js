import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'App',
      meta: {
        title: 'Home',
      },
      component: () => import('../layouts/Main.vue'),
    },
    {
      path: '/cookies-policy',
      name: 'CookiesPolicy',
      meta: {
        title: 'Cookies Policy',
      },
      component: () => import('../views/CookiesPolicy.vue'),
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

const title = 'Olimpiu Seulean - Frontend Engineer';
router.beforeEach((toRoute, fromRoute, next) => {
  const getMetaTitle = toRoute?.meta?.title;
  window.document.title = getMetaTitle ? `${getMetaTitle} | ${title}` : title;

  next();
});

export default router;
