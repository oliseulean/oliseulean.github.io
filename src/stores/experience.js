/* Imports */
import { defineStore } from 'pinia';

export const useExperienceStore = defineStore({
  id: 'experience',
  state: () => ({
    experience: [
      {
        title: 'Teaching Assistant',
        companyName: 'Babes-Bolyai University',
        companyWebsite: 'https://econ.ubbcluj.ro/cv.php?id=958',
        duration: 'Oct 2022 - Mar 2023',
        work: [
          'The main responsibility of this position was to teach the students the basics of programming in Python and introduce them to Machine Learning.',
          'How to create a Neural Network from scratch using Numpy and how to use the Keras library.',
          'How to create a Decision Tree using the Scikit-learn library.',
          'How to use the Pandas library to manipulate data and how to use the Matplotlib and Seaborn libraries to visualize data.',
          'How to use the Scikit-learn library to create machine learning models.',
          'How to use the Google Colab || Jupyter Notebook platform to run Python code on the cloud.',
          'How to use the Google Drive platform to store and share data.',
          'How to create a GitHub account and how to use the GitHub platform to store and share code.',
          'How to use the Google Search Engine, Stack Overflow, to find solutions to problems.',
        ],
        language: [
          'Python', 'Google Colab', 'Jupyter Notebook', 'Pandas', 'Numpy', 'Matplotlib', 'Scikit-learn', 'Machine Learning',
          'Neural Network', 'Decision Tree', 'GitHub', 'Google Drive', 'Google Search Engine', 'Stack Overflow', 'Teamwork',
          'Communication', 'Problem Solving', 'Time Management', 'Leadership', 'Creativity', 'Critical Thinking', 'Self-Management',
        ],
        shouldAddExtraStyling: true,
        isTheSameCompany: false,
      },
      {
        companyName: 'Garmin',
        companyWebsite: 'https://www.garmin.com/en-US/',
        title: 'Front-end Engineer II',
        duration: 'Jul 2022 - Present',
        work: [
          'Implementing Vue3 front-end framework on the new applications.',
          'Mentoring and supporting the intern engineer of this year.'
        ],
        shouldAddExtraStyling: false,
        isTheSameCompany: true,
      },
      {
        title: 'Front-end Engineer I',
        duration: 'Jul 2020 - Jun 2022',
        work: [
          'Use of Vue2 framework to create modular, reusable components.',
          'Use of Vue2, CSS3/SASS, HTML5, and ES6 Javascript in day to day work.',
          'Proficiency Test-driven Development including Jest, and Cypress.',
          'Use of Git, Terminal, SourceTree and Jenkins for deployment and version control.',
          'Deploying code changes to production through Jenkins builder.',
          'Front-End development with cross-browser compatibility and responsive design.',
          'Providing peer code reviews and contributing to team sprint planning/grooming.',
          'Utilizing AppDynamics, Sentry, Kibana, PagerDuty, Pagely, UpTrends, Google Optimize, Browserstack to monitor and test our apps.',
          'Providing the Design team feedback and solutions from a technical standpoint.',
          'Crafting beautiful and well engineered customer user experiences.',
          'Assisting in back-end development (Java) to implement the best solutions.',
          'Owner and the only developer of an application.',
          'Collaborating with a team in a fast-paced environment to solve problems under tight deadlines.',
          'Proxy in Node.js.',
        ],
        language: [
          'Vue', 'Vuetify', 'Vuex', 'Pinia', 'Vite', 'Vue.cli', 'Webpack', 'APIs', 'DOM', 'JavaScript', 'SASS', 'CSS3',
          'HTML5', 'Jest', 'Cypress', 'Wordpress', 'SEO', 'Accessibility', 'Contentful', 'Git', 'Pagely',
          'Jenkins', 'AppDynamics', 'Sentry', 'UpTrends', 'Nuxt', 'Express', 'Node.js', 'Basic-Workers(Cloudflare)',
        ],
        shouldAddExtraStyling: true,
        isTheSameCompany: true,
      },
      {
        title: 'Web Developer / Designer',
        companyName: 'WEDEV IT',
        companyWebsite: 'https://www.wedev-it.ro/',
        duration: 'Jan 2020 - Jun 2020',
        work: [
          'The main responsibility of this position was to build and convert any design templates ' +
          'into responsive website layouts (presentation sites, online e-commerce).',
        ],
        language: [
          'Elementor', 'Wordpress', 'JavaScript', 'SEO', 'MySQL', 'HTML', 'CSS', 'PHP', 'Accessibility',
        ],
        shouldAddExtraStyling: true,
        isTheSameCompany: false,
      },
      {
        title: 'C# Remote Learning',
        companyName: 'iQuest Group / Naggaro',
        companyWebsite: 'https://www.nagarro.com/en',
        duration: 'Nov 2019 - Jan 2020',
        work: [
          'OOP principles and properties.',
          'SOLID principles.',
          'Objects vs Data Structures.',
          'UML.',
          'Implemented a VendorMachine (CRUD Operations) within the C# programming language.',
        ],
        language: ['C#', 'MySQL', 'SQL Server'],
        shouldAddExtraStyling: true,
        isTheSameCompany: false,
      },
      {
        title: 'QA Engineer Intern',
        companyName: 'ZYNK Software',
        companyWebsite: 'https://www.zynksoftware.com/',
        duration: 'Jul 2019 - Oct 2019',
        work: [
          'Tested each new feature in many different scenarios to catch bugs.',
          'Communicate the errors (JIRA) and the functionality problems in a manner that is easy to follow.',
          'Knowledge of Agile software development (ability to plan, design and execute test cases).',
        ],
        language: ['Jira', 'Testing'],
        shouldAddExtraStyling: true,
        isTheSameCompany: false,
      },
    ],
    university: [
      {
        uniName: 'UBB, Babeș-Bolyai University',
        city: 'Cluj-Napoca',
        specialization: 'Master\'s degree, Decision Support Systems for Business, Scolarship (2019-2021)',
        thesis: '"Detection and recognition traffic sings using Deep Learning"',
        grade: '100%',
        uniWebsite: 'https://www.ubbcluj.ro/ro/',
      },
      {
        uniName: 'UBB, Babeș-Bolyai University',
        city: 'Cluj-Napoca',
        specialization: 'Bachelor\'s degree, Computer Science and Economics (2016-2019)',
        thesis: '',
        grade: '92.9%',
        uniWebsite: 'https://www.ubbcluj.ro/ro/',
      },
    ],
  }),
  getters: {},
  actions: {},
});
