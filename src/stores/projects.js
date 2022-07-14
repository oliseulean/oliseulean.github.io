import { defineStore } from 'pinia';
import { v4 as uuidv4 } from 'uuid';

// images
import CalendarAppImg from '/images/projectsImages/calendarApp.webp';
import GuessNumberImg from '/images/projectsImages/guessNumber.webp';
import LightHouseReportImg from '/images/projectsImages/lightHouseReport.webp';
import QuizAppImg from '/images/projectsImages/quizApp.webp';
import RecognitionAppImg from '/images/projectsImages/recognition.webp';
import TranslogImg from '/images/projectsImages/translogCompany.webp';
import JsChallengeImg from '/images/projectsImages/jsChallenges.webp';

export const useProjectsStore = defineStore({
  id: 'projects',
  state: () => {
    return {
      projects: [
        {
          id: uuidv4(),
          imgUrl: LightHouseReportImg,
          name: 'Use Python to Automate Google Lighthouse Reports',
          description:
            'Generate Google Lighthouse Reports for your website with multiple runs and keep historical track of it.',
          link: 'https://github.com/oliseulean/Google-Lighthouse-Automation-Script',
          wordpress: false,
        },
        {
          id: uuidv4(),
          imgUrl: RecognitionAppImg,
          name: 'Detection and Recognition Traffic Signs using Deep Learning',
          description:
            'In this project, I used Anaconda, Python, and TensorFlow to classify and recognize traffic signs.',
          link: 'https://github.com/oliseulean/traffic-signs-recognition/',
          wordpress: false,
        },
        {
          id: uuidv4(),
          imgUrl: TranslogImg,
          name: 'TRANSLOG T&C - company website',
          description:
            'A personal presentation website for Translog T&C company using Wordpress.',
          link: 'https://translogtc.ro/',
          wordpress: true,
        },
        {
          id: uuidv4(),
          imgUrl: JsChallengeImg,
          name: '100 Days of JS Coding Challenges',
          description:
            'A repo for resolving multiple problems in JS programming language',
          link: 'https://github.com/oliseulean/100-coding-js-challenges',
          wordpress: false,
        },
        {
          id: uuidv4(),
          imgUrl: CalendarAppImg,
          name: 'Calendar-App-Vue',
          description: 'A Calendar App in VueJS with Vuex & NodeJS.',
          link: 'https://github.com/oliseulean/Calendar-App-Vue-Node/',
          wordpress: false,
        },
        {
          id: uuidv4(),
          imgUrl: GuessNumberImg,
          name: 'Guess the number based on voice recognition',
          description:
            'A basic VanillaJs application which is using an API for guessing a number between 1 - 100 based on voice recognition.',
          link: 'https://github.com/oliseulean/guess-the-number-based-on-voice-recognition',
          wordpress: false,
        },
        {
          id: uuidv4(),
          imgUrl: QuizAppImg,
          name: 'Dog Quiz App',
          description:
            'I created a Dog Quiz App. There are 10 questions with only one correct answer. I fetch a breed API call to generate random pictures foreach dog breed.',
          link: 'https://github.com/oliseulean/dog-quiz-app/',
          wordpress: false,
        },
      ],
    };
  },
  getters: {},
  actions: {},
});
