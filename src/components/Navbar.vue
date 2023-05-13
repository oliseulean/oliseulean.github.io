<script setup>
/* Imports */
import { reactive } from 'vue';

import { useScrollPosition } from '../composable/useScrollPosition';
import sendGAEvent from '../helpers/sendAnalyticsEvent';

/* Handle hide navBar */
const { hideElement } = useScrollPosition();

/* State */
const state = reactive({
  resumeURL: 'https://drive.google.com/file/d/1FB8DOQORG_3ug05Ctprp-zR27cn6vBRj/view?usp=sharing',
});

/* Handle GA for the resume button */
const resumeGAEvent = () => {
  sendGAEvent('Olimpiu Seulean Portfolio', 'Resume', 'Resume btn', 1);
};
</script>

<template>
  <nav
    class="app-navigation-bar"
    v-if="hideElement"
  >
    <a
      :href="state.resumeURL"
      target="_blank"
      @click="resumeGAEvent"
      class="app-navigation-bar__link"
    >
      Resume.📎
    </a>
  </nav>
</template>

<style lang="scss" scoped>
.app-navigation-bar {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: auto;
  padding: 1rem 0;
  background: $color-white;
  box-shadow: 0 2px 3px rgba($color-black, 0.25);
  transition: 0.4s ease-in-out;
  animation: 0.4s appear;
  z-index: 3;

  @include keyframe-appear();

  &__link {
    display: flex;
    justify-content: center;
    color: $color-black-pearl;
    font-size: $font-size-medium;
    @include font-weight(bold);
    @include font-monserrat();
    background: transparent;

    &:hover,
    &:active {
      color: $color-web-orange;
    }
  }
}
</style>
