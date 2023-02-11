<script setup>
/* Imports */
import { reactive, onMounted, onUnmounted } from 'vue';
import DownArrowIcon from '/icons/down-arrow.webp';

/* State */
const state = reactive({
  hideArrowButton: true,
});

onMounted(() => window.addEventListener('scroll', hideArrow));

onUnmounted(() => window.removeEventListener('scroll', hideArrow));

const hideArrow = () => {
  const currentScrollValue = window?.pageYOffset;
  currentScrollValue > 100
    ? state.hideArrowButton = false
    : state.hideArrowButton = true;
};

const scrollToExperienceSection = () => {
  const el = document.getElementById('experience');
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth' });
};

const scrollDownBtnGAEvent = () => {
  // eslint-disable-next-line no-undef
  gtag('event', 'Scroll Btn', {
    event_category: 'Olimpiu Seulean Portfolio',
    event_label: 'Scroll Down Button',
    value: 1,
  });
};

const handlerOnScrollDownBtn = () => {
  scrollDownBtnGAEvent();
  scrollToExperienceSection();
};
</script>

<template>
  <div class="app-land">
    <div class="app-land__title">
      <h1 class="app-land__title-name">
        hello! 👋🏽
        <br />
        I'm Olimpiu Șeulean
      </h1>
      <div class="app-land__title-typewriter">
        <p>and this website, is about me.</p>
      </div>
    </div>
    <div
      v-if="state.hideArrowButton"
      class="app-land__bottom"
    >
      <button
        class="app-land__bottom-btn"
        @click="handlerOnScrollDownBtn"
      >
        <img
          :src="DownArrowIcon"
          class="app-land__bottom-downIcon"
          alt="Down_Icon_Image"
          width="50"
          height="50"
        >
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app-land {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;

  &__title {
    // styling for name typing
    @include keyframe-typing();
    @include keyframe-appear();

    &-name {
      color: $color-web-orange;
      font-size: $font-size-medium;
      animation: 3s appear;
      background-color: transparent;
      line-height: 40px;

      @include font-weight(normal);
      @include font-monserrat();

      @include sm {
        font-size: $font-size-large-xl;
        line-height: 50px;
      }

      @include lg {
        font-size: $font-size-large-xxl;
        line-height: 70px;
      }
    }

    &-typewriter {
      p {
        font-size: $font-size-normal;
        font-weight: 200;

        @include font-monserrat();

        color: $color-black-pearl;
        overflow: hidden;
        white-space: nowrap;
        margin: 0;
        animation: typing 2.5s steps(40, end);
        text-align: left;
        padding-top: 0.7rem;

        @include sm {
          font-size: $font-size-medium;
          line-height: 50px;
        }

        @include lg {
          font-size: $font-size-large;
          line-height: 70px;
        }
      }
    }
  }

  &__bottom {
    position: absolute;
    bottom: 10px;

    &-btn {
      background-color: transparent;
      border: none;

      &:hover {
        cursor: pointer;
      }
    }

    &-downIcon {
      color: $color-bombay;
      animation: 2s appear infinite;
      background-color: transparent;
      width: 30px;
      height: 30px;

      @include md {
        width: 40px;
        height: 40px;
      }

      @include lg {
        width: 50px;
        height: 50px;
      }
    }
  }
}
</style>
