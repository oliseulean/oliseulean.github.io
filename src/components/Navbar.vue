<script setup>
/* Helpers */
import { useScrollPosition } from '../composable/useScrollPosition';
import pdfResume from '/Olimpiu_Seulean_Resume_December_2023.pdf'
import sendGAEvent from '../helpers/sendAnalyticsEvent';

/* Handle hide navBar */
const { hideElement } = useScrollPosition();

/* Handle GA for the resume button */
const resumeGAEvent = () => {
  sendGAEvent('Olimpiu Seulean Portfolio', 'Resume', 'Resume btn', 1);
};
</script>

<template>
  <nav
    v-if="hideElement"
    class="app-navigation-bar"
  >
    <a
      :href="pdfResume"
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
