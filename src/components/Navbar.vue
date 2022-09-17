<template>
  <nav
    class="app-navigation-bar"
    v-if="hideElement"
  >
    <a
      :href="resumeURL"
      target="_blank"
      @click="resumeGAEvent"
      class="app-navigation-bar__link"
    >
      Resume.📎
    </a>
  </nav>
</template>

<script setup>
/* Imports */
import { ref } from 'vue';
import { useScrollPosition } from '../composable/useScrollPosition';

/* Handle hide navBar */
const { hideElement } = useScrollPosition();

/* Resume link */
const resumeURL = ref('https://drive.google.com/file/d/14-KbNK_ZJr-k9Txo9cGYpEYzYgJanXD7/view?usp=sharing');

/* Handle GA for the resume button */
const resumeGAEvent = () => {
  /* eslint-disable-next-line no-undef */
  gtag('event', 'Resume', {
    event_category: 'Olimpiu Seulean Portfolio',
    event_label: 'Resume btn',
    value: 1,
  });
};
</script>

<style lang="scss" scoped>
.app-navigation-bar {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: auto;
  padding: 1rem 0;
  background: $color-white;
  box-shadow: 0 2px 3px rgba($color-dark, 0.25);
  transition: 0.4s ease-in-out;
  animation: 0.4s appear;
  z-index: 3;
  @include keyframe-appear();

  &__link {
    display: flex;
    justify-content: center;
    color: $color-dark-blue;
    font-size: $font-size-medium;
    @include font-weight(bold);
    @include font-monserrat();
    background: transparent;

    &:hover,
    &:active {
      color: $color-orange-primary;
    }
  }
}
</style>
