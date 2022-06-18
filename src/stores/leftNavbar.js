import { defineStore } from 'pinia';
import { v4 as uuidv4 } from 'uuid';

// icons
import LinkedinIcon from '../assets/icons/linkedin.webp';
import MediumIcon from '../assets/icons/medium.webp';
import GithubIcon from '../assets/icons/github.webp';
import GmailIcon from '../assets/icons/gmail.webp';
import PhoneIcon from '../assets/icons/phone.webp';

export const useLeftNavbarStore = defineStore({
  id: 'leftNavbar',
  state: () => ({
    items: [
      {
        id: uuidv4(),
        path: 'https://www.linkedin.com/in/seulean-olimpiu',
        alt: 'Linkedin webp',
        icon: LinkedinIcon,
        title: 'Linkedin',
      },
      {
        id: uuidv4(),
        path: 'https://medium.com/@olimpiuseulean',
        alt: 'Medium webp',
        icon: MediumIcon,
        title: 'Medium',
      },
      {
        id: uuidv4(),
        path: 'https://github.com/oliseulean',
        alt: 'Github webp',
        icon: GithubIcon,
        title: 'Github',
      },
      {
        id: uuidv4(),
        path: 'mailto:seulean.olimpiu@gmail.com',
        alt: 'Mail webp',
        icon: GmailIcon,
        title: 'Mail',
      },
      {
        id: uuidv4(),
        path: 'tel:0741547328',
        alt: 'Telephone webp',
        icon: PhoneIcon,
        title: 'Phone',
      },
    ],
  }),
  getters: {},
  actions: {},
});
