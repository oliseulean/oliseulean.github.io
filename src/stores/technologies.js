/*
 * Imports
 */
import { defineStore } from 'pinia';

/*
 * Helper for constructing the url path
 */
const constructUrl = 'https://cdn-icons-png.flaticon.com/512/';

export const useTechnologies = defineStore({
  id: 'technologies',
  state: () => {
    return {
      technologies: [
        {
          title: 'HTML5',
          alt: 'HTML5_icon',
          source: 'https://cdn2.iconfinder.com/data/icons/metro-uinvert-dock/256/HTML5.png',
        },
        {
          title: 'CSS3',
          alt: 'CSS3_icon',
          source: 'https://cdn-icons-png.flaticon.com/512/5968/5968242.png',
        },
        {
          title: 'Javascript',
          alt: 'JS_icon',
          source: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png',
        },
        {
          title: 'VueJs',
          alt: 'Vue_icon',
          source: 'https://iconape.com/wp-content/png_logo_vector/vue-js.png',
        },
        {
          title: 'Vuetify',
          alt: 'Vuetify_icon',
          source: 'https://avatars.githubusercontent.com/u/22138497?s=200&v=4',
        },
        {
          title: 'Nuxt',
          alt: 'Nuxt_icon',
          source: 'https://nuxtjs.ir/logos/nuxt-icon-white.png',
        },
        {
          title: 'Node',
          alt: 'Node_icon',
          source: 'https://iconape.com/wp-content/png_logo_vector/node-js-2.png',
        },
        {
          title: 'SASS',
          alt: 'Sass_icon',
          source: 'https://seeklogo.com/images/N/node-sass-logo-9CA9095D1A-seeklogo.com.png',
        },
        {
          title: 'MySQL',
          alt: 'MySQL_icon',
          source: 'https://icon-library.com/images/mysql-icon/mysql-icon-23.jpg',
        },
        {
          title: 'Wordpress',
          alt: 'Wordpress_icon',
          source: `${constructUrl}/1/1177.png`,
        },
        {
          title: 'Elementor',
          alt: 'Elementor_icon',
          source: `${constructUrl}/5968/5968710.png`,
        },
        {
          title: 'SEO',
          alt: 'SEO_icon',
          source: 'https://cdn-icons-png.flaticon.com/512/2835/2835542.png',
        },
        {
          title: 'Jest',
          alt: 'Jest_icon',
          source: 'https://ih1.redbubble.net/image.404020083.1876/mp,504x498,matte,f8f8f8,t-pad,600x600,f8f8f8.u7.jpg',
        },
        {
          title: 'Cypress',
          alt: 'Cypress_icon',
          source: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSraOeJtNHmgzQMrX2h1WtZz9-1Mdf61zEnqQtYOFY0dWxhb1bOW_l6gu5RGWF4ueeg5AE&usqp=CAU',
        },
        {
          title: 'Pinia',
          alt: 'Pinia_icon',
          source: 'https://pinia.vuejs.org/logo.svg',
        },
      ],
      tools: [
        {
          title: 'Webpack',
          alt: 'Webpack_icon',
          source: 'https://raw.githubusercontent.com/webpack/media/master/logo/icon-square-big.png',
        },
        {
          title: 'Vite',
          alt: 'Vite_icon',
          source: 'https://seeklogo.com/images/V/vite-logo-BFD4283991-seeklogo.com.png',
        },
        {
          title: 'Vue Cli',
          alt: 'VueCli_icon',
          source:
            'https://camo.githubusercontent.com/9923c06abf0bafa26439e1aa4d1b1c713e28160180817b426e006aae46ea1a4b/68747470733a2f2f73332e65752d776573742d322e616d617a6f6e6177732e636f6d2f79616261622f757675652d3531322e706e67',
        },
        {
          title: 'Github',
          alt: 'Github_icon',
          source: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
        },
        {
          title: 'Npm',
          alt: 'Npm_icon',
          source: 'https://authy.com/wp-content/uploads/npm-logo.png',
        },
        {
          title: 'Yarn',
          alt: 'Yarn_icon',
          source: 'https://iconape.com/wp-content/png_logo_vector/yarn-logo.png',
        },
        {
          title: 'Command Line',
          alt: 'CommandLine_icon',
          source: 'https://miro.medium.com/max/448/1*jMgJtomjZadGljJDLkUzRA.png',
        },
        {
          title: 'Cloudflare',
          alt: 'Cloudflare_icon',
          source: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Cloudflare_Logo.png/480px-Cloudflare_Logo.png',
        },
        {
          title: 'Sentry',
          alt: 'Sentry_icon',
          source: 'https://play-lh.googleusercontent.com/HZiu-98L4MUZ5NtQLakI6-Hb1cpCKP3o3Zb0l2p3GkAiyy4YJvFcCKKj2bLf7-ANbw=w240-h480-rw',
        },
        {
          title: 'Pager Duty',
          alt: 'PagerDuty_icon',
          source: 'https://i1.wp.com/www.effect-tech.com/wp-content/uploads/2017/04/PagerDuty-logo-2.png?ssl=1',
        },
        {
          title: 'Pagely',
          alt: 'Pagely_icon',
          source: 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/wusph8vxieietldcr0hv',
        },
        {
          title: 'SQL Server',
          alt: 'SQL_Server_icon',
          source: `${constructUrl}/2772/2772128.png`,
        },
        {
          title: 'Contentful',
          alt: 'Contentful_icon',
          source: 'https://janit.files.wordpress.com/2016/03/127348-b170e132-3b7a-4cd0-8b1c-cb7f9f42103a-centered-medium-1397122761.png',
        },
        {
          title: 'Jenkins',
          alt: 'Jenkins_icon',
          source: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS9e_0Vsl2TU5mwQBkLoTECF_DpzTAX5h_pEuu9pwvto7KTwEiwFGhv9icnUX-R150xhk&usqp=CAU',
        },
        {
          title: 'Uptrends',
          alt: 'Uptrends_icon',
          source: 'https://cdn.techjockey.com/web/assets/images/techjockey/products/13252_Uptrends-logo.jpg?d=300',
        },
        {
          title: 'Jira',
          alt: 'Jira_icon',
          source: 'https://cdn.icon-icons.com/icons2/2699/PNG/512/atlassian_jira_logo_icon_170511.png',
        },
      ],
    };
  },
  getters: {},
  actions: {},
});
