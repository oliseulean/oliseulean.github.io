/* Imports */
import { defineStore } from 'pinia';

/* Icons */
import LinkedinIcon from '/icons/linkedin.webp';
import MediumIcon from '/icons/medium.webp';
import GithubIcon from '/icons/github.webp';
import GmailIcon from '/icons/gmail.webp';
import PhoneIcon from '/icons/phone.webp';

export const useLeftNavbarStore = defineStore({
  id: 'leftNavbar',
  state: () => ({
    items: [
      {
        path: 'https://www.linkedin.com/in/seulean-olimpiu',
        alt: 'Linkedin icon',
        icon: LinkedinIcon,
        title: 'Linkedin',
      },
      {
        path: 'https://medium.com/@olimpiuseulean',
        alt: 'Medium icon',
        icon: MediumIcon,
        title: 'Medium',
      },
      {
        path: 'https://github.com/oliseulean',
        alt: 'Github icon',
        icon: GithubIcon,
        title: 'Github',
      },
      {
        path: 'mailto:seulean.olimpiu@gmail.com',
        alt: 'Mail icon',
        icon: GmailIcon,
        title: 'Mail',
      },
      {
        path: 'tel:0741547328',
        alt: 'Telephone icon',
        icon: PhoneIcon,
        title: 'Phone',
      },
    ],
  }),
  getters: {},
  actions: {},
});
