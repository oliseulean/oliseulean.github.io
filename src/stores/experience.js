import { defineStore } from 'pinia';
import { v4 as uuidv4 } from 'uuid';

export const useExperienceStore = defineStore({
  id: 'experience',
  state: () => ({
    experience: [
      {
        id: uuidv4(),
        title: 'Front-end Engineer II',
        companyName: 'Garmin',
        companyWebsite: 'https://www.garmin.com',
        duration: 'Jul 2022 - Present',
        work: [
          // TBD
        ],
      },
      {
        id: uuidv4(),
        title: 'Front-end Engineer I',
        companyName: 'Garmin',
        companyWebsite: 'https://www.garmin.com',
        duration: 'Jul 2020 - Jul 2022',
        work: [
          // TBD
        ],
        language: [
          'Vue',
          'Vuetify',
          'Vuex',
          'Pinia',
          'Vite',
          'Vue.cli',
          'Webpack',
          'APIs',
          'DOM',
          'JavaScript',
          'SASS',
          'CSS3',
          'HTML5',
          'Jest',
          'Cypress',
          'Wordpress',
          'SEO',
          'Accessibility',
          'Contentful',
          'Git',
          'Pagely',
          'Jenkins',
          'AppDynamics',
          'Sentry',
          'UpTrends',
          'Nuxt',
          'Express',
          'Node.js',
          'Basic-Workers(Cloudflare)',
        ],
      },
      {
        id: uuidv4(),
        title: 'Web Developer / Designer',
        companyName: 'WEDEV IT',
        companyWebsite: 'https://www.wedev-it.ro/',
        duration: 'Jan 2020 - Jun 2020',
        work: [
          'The main responsibility of this position was to build and convert any design templates into responsive website layouts (presentation sites, online e-commerce).',
        ],
        language: [
          'Elementor',
          'Wordpress',
          'JavaScript',
          'SEO',
          'MySQL',
          'HTML',
          'CSS',
          'PHP',
          'Accessibility',
        ],
      },
      {
        id: uuidv4(),
        title: 'C# Remote Learning',
        companyName: 'iQuest Group / Naggaro',
        companyWebsite: 'https://www.nagarro.com/en',
        duration: 'Nov 2019 - Jan 2020',
        work: [
          'OOP principles and properties',
          'SOLID principles',
          'Objects vs Data Structures',
          'UML',
          'Implemented a VendorMachine (CRUD Operations) within the C# programming language.',
        ],
        language: ['C#', 'MySQL', 'SQL Server'],
      },
      {
        id: uuidv4(),
        title: 'QA Engineer Intern',
        companyName: 'ZYNK Software',
        companyWebsite: 'https://www.zynksoftware.com/',
        duration: 'Jul 2019 - Oct 2019',
        work: [
          'Tested each new feature in many different scenarios to catch bugs',
          'Communicate the errors (JIRA) and the functionality problems in a manner that is easy to follow',
          'Knowledge of Agile software development (ability to plan, design and execute test cases)',
        ],
        language: ['Jira', 'Testing'],
      },
    ],
    university: [
      {
        id: uuidv4(),
        uniName: 'UBB, Babeș-Bolyai University',
        city: 'Cluj-Napoca',
        specialization:
          "Master's degree, Decision Support Systems for Business, Scolarship (2019-2021)",
        thesis: 'Detection and recognition traffic sings using Deep Learning',
        grade: '100%',
        uniWebsite: 'https://www.ubbcluj.ro/ro/',
      },
      {
        id: uuidv4(),
        uniName: 'UBB, Babeș-Bolyai University',
        city: 'Cluj-Napoca',
        specialization:
          "Bachelor's degree, Computer Science and Economics (2016-2019)",
        thesis: '',
        grade: '92.9%',
        uniWebsite: 'https://www.ubbcluj.ro/ro/',
      },
    ],
  }),
  getters: {},
  actions: {},
});
