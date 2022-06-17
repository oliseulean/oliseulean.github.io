import { defineStore } from 'pinia';
import colorsHelper from '../helpers/colorsHelper';
import { v4 as uuidv4 } from 'uuid';

const constructUrl = 'https://cdn-icons-png.flaticon.com/512/';

export const useTechnologies = defineStore({
  id: 'technologies',
  state: () => {
    return {
      colors: colorsHelper.colors[0],
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
          source: 'https://cdn.worldvectorlogo.com/logos/vue-js-1.svg',
        },
        {
          id: uuidv4(),
          title: 'Vuetify',
          alt: 'Vuetify_icon',
          source: 'https://logowiki.net/uploads/logo/v/vuetify.svg',
        },
        {
          id: uuidv4(),
          title: 'Nuxt',
          alt: 'Nuxt_icon',
          source:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Nuxt_logo.svg/1200px-Nuxt_logo.svg.png',
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
          source:
            'data:image/png;base64,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',
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
