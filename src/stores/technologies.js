import { defineStore } from 'pinia';
import colorsHelper from '../helpers/colorsHelper';
import { v4 as uuidv4 } from 'uuid';

const constructUrl = 'https://cdn-icons-png.flaticon.com/512/';

export const useTechnologies = defineStore({
  id: 'technologies',
  state: () => {
    return {
      colors: colorsHelper?.colors[0],
      technologies: [
        {
          id: uuidv4(),
          title: 'HTML5',
          alt: 'HTML5_icon',
          source: `${constructUrl}/888/888909.png`,
        },
        {
          id: uuidv4(),
          title: 'CSS3',
          alt: 'CSS3_icon',
          source: `${constructUrl}/888/888847.png`,
        },
        {
          id: uuidv4(),
          title: 'Javascript',
          alt: 'JS_icon',
          source: `${constructUrl}/1199/1199124.png`,
        },
        {
          id: uuidv4(),
          title: 'VueJs',
          alt: 'Vue_icon',
          source: 'https://iconape.com/wp-content/png_logo_vector/vue-js.png',
        },
        {
          id: uuidv4(),
          title: 'Vuetify',
          alt: 'Vuetify_icon',
          source: 'https://avatars.githubusercontent.com/u/22138497?s=200&v=4',
        },
        {
          id: uuidv4(),
          title: 'Nuxt',
          alt: 'Nuxt_icon',
          source: 'https://nuxtjs.ir/logos/nuxt-icon-white.png',
        },
        {
          id: uuidv4(),
          title: 'Node',
          alt: 'Node_icon',
          source: `${constructUrl}/919/919825.png`,
        },
        {
          id: uuidv4(),
          title: 'SASS',
          alt: 'Sass_icon',
          source: `${constructUrl}/919/919831.png`,
        },
        {
          id: uuidv4(),
          title: 'MySQL',
          alt: 'MySQL_icon',
          source: `${constructUrl}/919/919836.png`,
        },
        {
          id: uuidv4(),
          title: 'Wordpress',
          alt: 'Wordpress_icon',
          source: `${constructUrl}/1/1177.png`,
        },
        {
          id: uuidv4(),
          title: 'Jira',
          alt: 'Jira_icon',
          source: `${constructUrl}/5968/5968875.png`,
        },
        {
          id: uuidv4(),
          title: 'SQL Server',
          alt: 'SQL_Server_icon',
          source: `${constructUrl}/2772/2772128.png`,
        },
        {
          id: uuidv4(),
          title: 'Elementor',
          alt: 'Elementor_icon',
          source: `${constructUrl}/5968/5968710.png`,
        },
        {
          id: uuidv4(),
          title: 'SEO',
          alt: 'SEO_icon',
          source: 'https://cdn-icons-png.flaticon.com/512/2835/2835542.png',
        },
        {
          id: uuidv4(),
          title: 'Jest',
          alt: 'Jest_icon',
          source:
            'https://ih1.redbubble.net/image.404020083.1876/mp,504x498,matte,f8f8f8,t-pad,600x600,f8f8f8.u7.jpg',
        },
        {
          id: uuidv4(),
          title: 'Cypress',
          alt: 'Cypress_icon',
          source:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSraOeJtNHmgzQMrX2h1WtZz9-1Mdf61zEnqQtYOFY0dWxhb1bOW_l6gu5RGWF4ueeg5AE&usqp=CAU',
        },
      ],
    };
  },
  getters: {},
  actions: {},
});
