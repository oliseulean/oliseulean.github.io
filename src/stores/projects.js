/* Imports */
import { defineStore } from 'pinia';
import LightHouseReportImg from '/images/projectsImages/lightHouseReport.webp';
import SiteromImg from '/images/projectsImages/siterom.webp';
import ReactVsVueImg from '/images/projectsImages/reactVsVue.webp';
import DraculaImg from '/images/projectsImages/dracula.webp';
import RecognitionAppImg from '/images/projectsImages/recognition.webp';
import TranslogImg from '/images/projectsImages/translogCompany.webp';
import JsChallengeImg from '/images/projectsImages/jsChallenges.webp';
import CarausulImg from '/images/projectsImages/carausul.webp';
import HanulDinPadureImg from '/images/projectsImages/hanulDinPadure.webp';

export const useProjectsStore = defineStore('projects', {
  state: () => {
    return {
      projects: [
        {
          imgUrl: ReactVsVueImg,
          name: 'Exploring React as a Vue.js Developer',
          description: 'In this repository, my goal is to delve into React technology, starting from the basics, and thoroughly understand its behavior in comparison to Vue. I intend to learn every intricate detail, progressing step by step in order to gain a comprehensive understanding of React.',
          link: 'https://github.com/oliseulean/learning_react_as_a_vue_developer',
          wordpress: false,
        },
        {
          imgUrl: SiteromImg,
          name: 'Siterom - Security Company Website',
          description: 'A presentation website for Siterom which is a security company from Târnăveni, Transylvania.',
          link: 'https://siterom.ro',
          wordpress: true,
        },
        {
          imgUrl: DraculaImg,
          name: 'Dracula - Hotel/Restaurant/Pension Website',
          description: 'A presentation website for Dracula which is a hotel/restaurant/pension from Daneș, Transylvania.',
          link: 'https://dracul.ro',
          wordpress: true,
        },
        {
          imgUrl: HanulDinPadureImg,
          name: 'Hanul din Pădure - Hotel/Restaurant Website',
          description: 'A presentation website for Hanul din Pădure which is a restaurant/hotel from Daneș, Transylvania.',
          link: 'https://hanuldinpadure.ro',
          wordpress: true,
        },
        {
          imgUrl: CarausulImg,
          name: 'Cărăușul - Estate Company Website',
          description: 'A presentation website for Cărăusul which is a real estate company from Florești, Cluj-Napoca.',
          link: 'https://carausul.ro',
          wordpress: true,
        },
        {
          imgUrl: LightHouseReportImg,
          name: 'Use Python to Automate Google Lighthouse Reports',
          description:
            'Generate Google Lighthouse Reports for your website with multiple runs and keep historical track of it.',
          link: 'https://github.com/oliseulean/Google-Lighthouse-Automation-Script',
          wordpress: false,
        },
        {
          imgUrl: RecognitionAppImg,
          name: 'Detection and Recognition Traffic Signs using Deep Learning',
          description:
            'In this project, I used Anaconda, Python, and TensorFlow to classify and recognize traffic signs.',
          link: 'https://github.com/oliseulean/traffic-signs-recognition',
          wordpress: false,
        },
        {
          imgUrl: TranslogImg,
          name: 'TRANSLOG T&C - Freight Company Website',
          description: 'A presentation website for Translog T&C which is a freight company from Sighișoara, România.',
          link: 'https://translogtc.ro',
          wordpress: true,
        },
        {
          imgUrl: JsChallengeImg,
          name: '100 Days of JS Coding Challenges',
          description: 'A repo for resolving multiple problems in JS programming language.',
          link: 'https://github.com/oliseulean/100-coding-js-challenges',
          wordpress: false,
        },
      ],
    };
  },
  getters: {},
  actions: {},
});
