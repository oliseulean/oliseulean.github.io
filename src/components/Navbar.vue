<script setup>
/* Imports */
import {
  ref,
  onMounted,
  onUnmounted,
  computed,
} from 'vue';
import pdfResume from '/Olimpiu-Seulean-Resume.pdf';
import ExternalLinkIcon from './icons/ExternalLinkIcon.vue';
import { sendGAEvent } from '../helpers/sendAnalyticsEvent.js';

/* State */
const state = ref({
  activeSection: 'home',
  animationFrame: undefined,
})

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'experience', label: 'Journey' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

/* Update the active section based on the scroll position */
const updateActiveSection = () => {
  if (state.value.animationFrame) return;

  state.value.animationFrame = window.requestAnimationFrame(() => {
    const pageMarker = window.innerHeight * 0.38;
    let currentSection = sections[0].id;

    sections.forEach(section => {
      const element = document.getElementById(section.id);

      if (element?.getBoundingClientRect().top <= pageMarker) {
        currentSection = section.id;
      }
    });

    const hasReachedPageEnd = window.scrollY > 0 &&
      window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
    state.value.activeSection = hasReachedPageEnd ? 'contact' : currentSection;
    state.value.animationFrame = undefined;
  });
};

/* Lifecycle hooks */
onMounted(() => {
  updateActiveSection();
  window.addEventListener('scroll', updateActiveSection, { passive: true });
  window.addEventListener('resize', updateActiveSection, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener('scroll', updateActiveSection);
  window.removeEventListener('resize', updateActiveSection);

  if (state.value.animationFrame) {
    window.cancelAnimationFrame(state.value.animationFrame);
  }
});

/* Analytics */
const resumeGAEvent = () => {
  sendGAEvent('Olimpiu Seulean Portfolio', 'Resume', 'Resume btn', 1);
};

/* Computed - aria-current attribute for the active section */
const isAriaCurrent = (sectionId) => {
  return computed(() => state.value.activeSection === sectionId ? 'location' : undefined);
};

/* Get the link class based on the active section */
const getLinkClass = (sectionId) => ({
  'navigation-bar__link': true,
  'navigation-bar__link--active': state.value.activeSection === sectionId,
});
</script>

<template>
  <nav
    class="navigation-bar"
    aria-label="Portfolio sections"
  >
    <div class="navigation-bar__inner">
      <a
        href="#home"
        class="navigation-bar__brand"
        aria-label="Back to introduction"
      >
        OȘ
      </a>

      <ul class="navigation-bar__map">
        <li
          v-for="section in sections"
          :key="section.id"
        >
          <a
            :href="`#${section.id}`"
            class="navigation-bar__link"
            :class="getLinkClass(section.id)"
            :aria-current="isAriaCurrent(section.id)"
          >
            {{ section.label }}
          </a>
        </li>
      </ul>

      <a
        :href="pdfResume"
        target="_blank"
        rel="noopener noreferrer"
        class="navigation-bar__resume"
        @click="resumeGAEvent"
      >
        Resume
        <ExternalLinkIcon />
      </a>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.navigation-bar {
  position: fixed;
  top: 0.75rem;
  right: 0;
  left: 0;
  z-index: 1000;
  width: calc(100% - 1.5rem);
  max-width: 76rem;
  margin: 0 auto;
  @include font-primary;

  &__inner {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    min-height: 3.5rem;
    padding: 0.4rem;
    border: 1px solid rgba($color-white, 0.14);
    border-radius: 999px;
    background-color: rgba($color-black-pearl, 0.88);
    box-shadow: 0 1rem 2.5rem rgba($color-black, 0.22);
    backdrop-filter: blur(16px);
    transition: border-color $motion-duration-base $motion-ease-standard, box-shadow $motion-duration-base $motion-ease-standard;

    &:focus-within {
      border-color: rgba($color-web-orange, 0.3);
      box-shadow: 0 1rem 2.75rem rgba($color-black, 0.28);
    }
  }

  &__brand {
    display: grid;
    place-items: center;
    flex: 0 0 auto;
    width: 2.65rem;
    height: 2.65rem;
    border-radius: 50%;
    background-color: $color-web-orange;
    color: $color-black-pearl;
    @include font-weight(black);
    font-size: $font-size-sm;
    transition:
      background-color $motion-duration-base $motion-ease-standard,
      box-shadow $motion-duration-base $motion-ease-standard,
      transform $motion-duration-base $motion-ease-emphasized;

    @media (hover: hover) and (pointer: fine) {
      &:hover {
        background-color: $color-amber;
        box-shadow: 0 0.65rem 1.5rem rgba($color-web-orange, 0.2);
        color: $color-black-pearl;
        transform: rotate(-4deg) scale(1.04);
      }
    }

    &:focus-visible {
      @include focus-ring(2px);
    }
  }

  &__map {
    display: flex;
    gap: 0.15rem;
    min-width: 0;
    overflow-x: auto;
    flex: 1;
    list-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }

    li {
      flex: 0 0 auto;
    }
  }

  &__link,
  &__resume {
    display: inline-flex;
    gap: 0.35rem;
    align-items: center;
    justify-content: center;
    min-height: 2.65rem;
    padding: 0.55rem 0.8rem;
    border-radius: 999px;
    color: $color-bombay;
    @include font-weight(medium);
    font-size: $font-size-sm;
    white-space: nowrap;
    transition:
      background-color $motion-duration-base $motion-ease-standard,
      color $motion-duration-base $motion-ease-standard,
      transform $motion-duration-base $motion-ease-emphasized;

    @media (hover: hover) and (pointer: fine) {
      &:hover {
        background-color: rgba($color-white, 0.07);
        color: $color-white;
        transform: translateY(-1px);
      }
    }

    &:focus-visible {
      @include focus-ring(1px);
    }
  }

  &__link--active {
    background-color: rgba($color-web-orange, 0.12);
    color: $color-amber;
  }

  &__resume {
    display: none;
    flex: 0 0 auto;
    padding-right: 1rem;
    padding-left: 1rem;
    background-color: $color-web-orange;
    color: $color-black-pearl;
    @include font-weight(bold);

    @media (hover: hover) and (pointer: fine) {
      &:hover {
        background-color: $color-amber;
        color: $color-black-pearl;
      }
    }

    @include md {
      display: inline-flex;
    }
  }
}
</style>
