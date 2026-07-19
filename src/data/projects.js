/* Imports */
import LightHouseReportImg from '/images/projectsImages/lightHouseReport.webp';
import SiteromImg from '/images/projectsImages/siterom.webp';
import ReactVsVueImg from '/images/projectsImages/reactVsVue.webp';
import DraculaImg from '/images/projectsImages/dracula.webp';
import RecognitionAppImg from '/images/projectsImages/recognition.webp';
import TranslogImg from '/images/projectsImages/translogCompany.webp';
import JsChallengeImg from '/images/projectsImages/jsChallenges.webp';
import CarausulImg from '/images/projectsImages/carausul.webp';
import HanulDinPadureImg from '/images/projectsImages/hanulDinPadure.webp';

export const projects = [
  {
    imgUrl: ReactVsVueImg,
    name: 'React and Vue Architecture Patterns',
    description: 'A practical comparison of component architecture, state, routing, and testing patterns across two modern frontend ecosystems.',
    link: 'https://github.com/oliseulean/learning_react_as_a_vue_developer',
    isLive: false,
  },
  {
    imgUrl: SiteromImg,
    name: 'Siterom - Security Company Website',
    description: 'A responsive business website for a security company based in Târnăveni, Transylvania.',
    link: 'https://siterom.ro',
    isLive: true,
  },
  {
    imgUrl: DraculaImg,
    name: 'Dracula - Hotel/Restaurant/Pension Website',
    description: 'A responsive hospitality website for a hotel, restaurant, and guesthouse in Daneș, Transylvania.',
    link: 'https://dracul.ro',
    isLive: true,
  },
  {
    imgUrl: HanulDinPadureImg,
    name: 'Hanul din Pădure - Hotel/Restaurant Website',
    description: 'A responsive hospitality website presenting accommodation and restaurant services in Daneș, Transylvania.',
    link: 'https://hanuldinpadure.ro',
    isLive: true,
  },
  {
    imgUrl: CarausulImg,
    name: 'Cărăușul - Estate Company Website',
    description: 'A responsive property website for a real-estate business based in Florești, Cluj-Napoca.',
    link: 'https://carausul.ro',
    isLive: true,
  },
  {
    imgUrl: LightHouseReportImg,
    name: 'Use Python to Automate Google Lighthouse Reports',
    description: 'Automates repeated Google Lighthouse runs and preserves historical reports to make performance regressions easier to spot.',
    link: 'https://github.com/oliseulean/Google-Lighthouse-Automation-Script',
    isLive: false,
  },
  {
    imgUrl: RecognitionAppImg,
    name: 'Detection and Recognition Traffic Signs using Deep Learning',
    description: 'A Python and TensorFlow model for classifying and recognizing traffic signs from image data.',
    link: 'https://github.com/oliseulean/traffic-signs-recognition',
    isLive: false,
  },
  {
    imgUrl: TranslogImg,
    name: 'TRANSLOG T&C - Freight Company Website',
    description: 'A responsive company website for a freight and logistics business based in Sighișoara, Romania.',
    link: 'https://translogtc.ro',
    isLive: true,
  },
  {
    imgUrl: JsChallengeImg,
    name: '100 Days of JS Coding Challenges',
    description: 'A collection of one hundred JavaScript exercises focused on problem-solving and language fundamentals.',
    link: 'https://github.com/oliseulean/100-coding-js-challenges',
    isLive: false,
  },
];
