<script setup>
/* Imports */
import {
  ref,
  onMounted,
  onUnmounted,
} from 'vue';
import DownArrowIcon from '/icons/down-arrow.webp';
import { sendGAEvent } from '../helpers/sendAnalyticsEvent.js';

/* State */
const state = ref({
  hideArrowButton: true,
});

const handleScrollState = () => {
  const currentScrollValue = window.pageYOffset;
  state.value.hideArrowButton = currentScrollValue <= 100;
};

onMounted(() => window.addEventListener('scroll', handleScrollState));

onUnmounted(() => window.removeEventListener('scroll', handleScrollState));

const scrollToExperienceSection = () => {
  const experienceEl = document.getElementById('experience');
  if (!experienceEl) return;
  experienceEl.scrollIntoView({ behavior: 'smooth' });
};

const handleScrollDownClick = () => {
  sendGAEvent(
    'Olimpiu Seulean Portfolio',
    'Scroll Btn',
    'Scroll Down Button',
    1
  );
  scrollToExperienceSection();
};
</script>

<template>
  <div class="hero-section">
    <div class="hero-section__content">
      <h1 class="hero-section__content__title">
        hello! 👋🏽
        <br>
        I'm Olimpiu Șeulean
      </h1>

      <div class="hero-section__linkedin">
        <p class="hero-section__linkedin-text">
          Nice to meet you! Here is my
          <a
            href="https://www.linkedin.com/in/seulean-olimpiu/"
            target="_blank"
            class="hero-section__linkedin-link"
          >
            Linkedin profile.
          </a>
        </p>
      </div>
    </div>

    <div
      v-if="state.hideArrowButton"
      class="hero-section__scroll-indicator"
    >
      <button
        class="hero-section__scroll-indicator__scroll-button"
        @click="handleScrollDownClick"
      >
        <img
          alt="Down Icon Image"
          :src="DownArrowIcon"
          height="50"
          width="50"
          class="hero-section__scroll-indicator__scroll-icon"
          loading="lazy"
        >
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100dvh;

  &__content {
    @include keyframe-typing;
    @include keyframe-appear;

    &__title {
      color: $color-web-orange;
      font-size: $font-size-medium;
      animation: 3s appear;
      background-color: transparent;
      line-height: 2.5rem;
      @include font-weight(normal);
      @include font-monserrat;

      @include sm {
        font-size: $font-size-large-xl;
        line-height: 3.125rem;
      }

      @include lg {
        font-size: $font-size-large-xxl;
        line-height: 4.375rem;
      }
    }
  }

  &__linkedin {
    width: 100%;
    overflow-x: hidden;
    box-sizing: border-box;

    &-text {
      font-size: $font-size-normal;
      @include font-monserrat;
      color: $color-black-pearl;
      overflow: hidden;
      white-space: nowrap;
      margin: 0;
      animation: typing 2.5s steps(40, end);
      text-align: left;
      padding-top: 0.7rem;

      @include sm {
        font-size: $font-size-medium;
        line-height: 3.125rem;
      }

      @include lg {
        font-size: $font-size-large;
        line-height: 4.375rem;
      }
    }

    &-link {
      text-decoration: underline;
    }
  }

  &__scroll-indicator {
    position: absolute;
    bottom: 6.5rem;

    @include sm {
      bottom: 3.5rem;
    }

    &__scroll-button {
      background-color: transparent;
      border: none;

      &:hover {
        cursor: pointer;
      }
    }

    &__scroll-icon {
      color: $color-bombay;
      animation: 2s appear infinite;
      background-color: transparent;
      width: 1.875rem;
      height: 1.875rem;

      @include md {
        width: 2.5rem;
        height: 2.5rem;
      }

      @include lg {
        width: 3.125rem;
        height: 3.125rem;
      }
    }
  }
}
</style>
