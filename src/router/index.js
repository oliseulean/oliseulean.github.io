import {
  createRouter,
  createWebHistory,
} from 'vue-router';
import { HEADER_OFFSET } from '../constants/layout.js';

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(toRoute, fromRoute, savedPosition) {
    if (savedPosition) return savedPosition;

    if (toRoute.hash) {
      return {
        el: toRoute.hash,
        top: HEADER_OFFSET,
      };
    }

    return {
      top: 0,
    };
  },
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

const title = 'Olimpiu Seulean - Frontend Developer';

router.beforeEach((toRoute) => {
  const getMetaTitle = toRoute?.meta?.title;
  window.document.title = getMetaTitle ? `${getMetaTitle} | ${title}` : title;
});

export default router;
