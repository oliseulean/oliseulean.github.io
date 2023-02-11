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

router.beforeEach((toRoute, fromRoute, next) => {
  const title = 'Olimpiu Seulean - Frontend Engineer';
  const getMetaTitle = toRoute?.meta?.title;
  const constructTitle = `${getMetaTitle} | ${title}`;

  getMetaTitle ? (window.document.title = constructTitle) : (window.document.title = title);

  next();
});

export default router;
