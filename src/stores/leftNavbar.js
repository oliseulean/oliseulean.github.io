import { defineStore } from 'pinia';
import { v4 as uuidv4 } from 'uuid';

import LinkedinIcon from '../assets/icons/linkedin.png';
import MediumIcon from '../assets/icons/medium.png';
import GithubIcon from '../assets/icons/github.png';
import GmailIcon from '../assets/icons/gmail.png';
import PhoneIcon from '../assets/icons/phone.png';

export const useLeftNavbarStore = defineStore({
  id: 'leftNavbar',
  state: () => ({
    items: [
      {
        id: uuidv4(),
        path: 'https://www.linkedin.com/in/seulean-olimpiu',
        alt: 'Linkedin PNG',
        icon: LinkedinIcon,
        title: 'Linkedin',
      },
      {
        id: uuidv4(),
        path: 'https://medium.com/@olimpiuseulean',
        alt: 'Medium PNG',
        icon: MediumIcon,
        title: 'Medium',
      },
      {
        id: uuidv4(),
        path: 'https://github.com/oliseulean',
        alt: 'Github PNG',
        icon: GithubIcon,
        title: 'Github',
      },
      {
        id: uuidv4(),
        path: 'mailto:seulean.olimpiu@gmail.com',
        alt: 'Mail PNG',
        icon: GmailIcon,
        title: 'Mail',
      },
      {
        id: uuidv4(),
        path: 'tel:0741547328',
        alt: 'Telephone PNG',
        icon: PhoneIcon,
        title: 'Phone',
      },
    ],
  }),
  getters: {},
  actions: {},
});
