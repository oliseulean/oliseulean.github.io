import { defineStore } from 'pinia';
import colorsHelper from '../helpers/colorsHelper';
import { v4 as uuidv4 } from 'uuid';

// icons
import githubIcon from '/icons/github.webp';
import internetIcon from '/icons/internet.webp';
import mediumIcon from '/icons/medium.webp';

// images
import CalendarAppImg from '/images/projectsImages/calendarApp.webp';
import GuessNumberImg from '/images/projectsImages/guessNumber.webp';
import LightHouseReportImg from '/images/projectsImages/lightHouseReport.webp';
import QuizAppImg from '/images/projectsImages/quizApp.webp';
import RecognitionAppImg from '/images/projectsImages/recognition.webp';
import TranslogImg from '/images/projectsImages/translog_company.webp';

const colors = colorsHelper?.colors[0];

export const useProjectsStore = defineStore({
  id: 'projects',
  state: () => {
    return {
      projects: [
        {
          id: uuidv4(),
          imgUrl: LightHouseReportImg,
          name: 'Use Python to automate Google Lighthouse Reports',
          tags: [
            {
              name: '#pyhton',
              color: `background-color: ${colors.colorRed};`,
            },
            {
              name: '#lighthouse',
              color: `background-color: ${colors.colorOrangePrimary};`,
            },
            {
              name: '#seo',
              color: `background-color: ${colors.colorDarkBlue};`,
            },
          ],
          description:
            'Generate Google Lighthouse Reports for your website with multiple runs and keep historical track of it.',
          socialLinks: [
            {
              link: 'https://github.com/oliseulean/Google-Lighthouse-Automation-Script',
              icon: githubIcon,
            },
            {
              link: 'https://medium.com/@olimpiuseulean/use-python-to-automate-google-lighthouse-reports-and-keep-a-historical-record-of-these-65f378325d64',
              icon: mediumIcon,
            },
          ],
        },
        {
          id: uuidv4(),
          imgUrl: RecognitionAppImg,
          name: 'Detection and Recognition Traffic Signs using Deep Learning',
          tags: [
            {
              name: '#python',
              color: `background-color: ${colors.colorRed};`,
            },
            {
              name: '#keras',
              color: `background-color: ${colors.colorWhiteGray};`,
            },
            {
              name: '#cnn',
              color: `background-color: ${colors.colorBluePrimary};`,
            },
          ],
          description:
            'In this project, I used Anaconda, Python, and TensorFlow to classify and recognize traffic signs.',
          socialLinks: [
            {
              link: 'https://github.com/oliseulean/traffic-signs-recognition/',
              icon: githubIcon,
            },
          ],
        },
        {
          id: uuidv4(),
          imgUrl: TranslogImg,
          name: 'TRANSLOG T&C - company website',
          tags: [
            {
              name: '#wordpress',
              color: `background-color: ${colors.colorDarkBlue};`,
            },
            {
              name: '#seo',
              color: `background-color: ${colors.colorBluePrimary};`,
            },
          ],
          description:
            'A personal presentation website for Translog T&C company.',
          socialLinks: [{ link: 'https://translogtc.ro/', icon: internetIcon }],
        },
        {
          id: uuidv4(),
          imgUrl: CalendarAppImg,
          name: 'Calendar-App-Vue',
          tags: [
            {
              name: '#vue',
              color: `background-color: ${colors.colorVue};`,
            },
            {
              name: '#node',
              color: `background-color: ${colors.colorDarkGreen};`,
            },
            {
              name: '#vuex',
              color: `background-color: ${colors.colorBluePrimary};`,
            },
          ],
          description: 'A Calendar App in VueJS with Vuex & NodeJS.',
          socialLinks: [
            {
              link: 'https://github.com/oliseulean/Calendar-App-Vue-Node/',
              icon: githubIcon,
            },
          ],
        },
        {
          id: uuidv4(),
          imgUrl: GuessNumberImg,
          name: 'Guess the number based on voice recognition',
          tags: [
            {
              name: '#js',
              color: `background-color: ${colors.colorOrangePrimary};`,
            },
            {
              name: '#parcel',
              color: `background-color: ${colors.colorDarkBlue};`,
            },
          ],
          description:
            'A basic VanillaJs application which is using an API for guessing a number between 1 - 100 based on voice recognition.',
          socialLinks: [
            {
              link: 'https://github.com/oliseulean/guess-the-number-based-on-voice-recognition',
              icon: githubIcon,
            },
          ],
        },
        {
          id: uuidv4(),
          imgUrl: QuizAppImg,
          name: 'Dog Quiz App',
          tags: [
            {
              name: '#vue',
              color: `background-color: ${colors.colorVue};`,
            },
            {
              name: '#js',
              color: `background-color: ${colors.colorOrangePrimary};`,
            },
            {
              name: '#css',
              color: `background-color: ${colors.colorRed};`,
            },
          ],
          description:
            'I created a Dog Quiz App. There are 10 questions with only one correct answer. I fetch a breed API call to generate random pictures foreach dog breed.',
          socialLinks: [
            {
              link: 'https://github.com/oliseulean/dog-quiz-app/',
              icon: githubIcon,
            },
          ],
        },
      ],
    };
  },
  getters: {},
  actions: {},
});
