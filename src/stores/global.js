/* Imports */
import { defineStore } from 'pinia';
import colorsHelper from '../helpers/colorsHelper.js';

export const useGlobalStore = defineStore('global', {
  state: () => ({
    colors: colorsHelper?.colors[0],
  }),
});
