/* Imports */
import { defineStore } from 'pinia';
import colorsHelper from '../helpers/colorsHelper';

export const useGlobalStore = defineStore({
  id: 'global',
  state: () => ({
    colors: colorsHelper?.colors[0],
  }),
});
