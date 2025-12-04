<script setup>
/* Imports */
import {
  onMounted,
  ref,
} from 'vue';

/* State */
const state = ref({
  showCookiePopUp: true,
});

/* Track the user info only after it accepts the policy */
onMounted(() => {
  window['ga-disable-UA-232885625-1'] = !localStorage.getItem('GDPR');
});

/* Handle cookie policy if the user press 'Accept' */
const enablePlugin = () => {
  return window['ga-disable-UA-232885625-1'] = false;
};

const acceptGDPR = () => {
  return window.localStorage.setItem('GDPR', true);
};

const hideCookiePopup = () => {
  return state.value.showCookiePopUp = false;
};

const handlerGDPR = () => {
  acceptGDPR();
  enablePlugin();
  hideCookiePopup();
};

/*
 * If the user accepted GDPR, and it refreshes/renter on the
 * page do not show again the cookie pop-up.
 */
onMounted(() => {
  return localStorage.getItem('GDPR') ? state.value.showCookiePopUp = false : '';
});
</script>

<template>
  <div
    class="cookie"
    v-if="state.showCookiePopUp"
  >
    <div class="cookie__floating cookie__floating--bottom-left">
      <div class="cookie__content">
        I use cookies to ensure you get the best experience on my website.
        <router-link
          to="/cookies-policy"
          class="cookie__content--link"
        >
          Cookies policy.
        </router-link>
      </div>
      <div class="cookie__buttons">
        <button
          class="cookie__buttons cookie__buttons--accept"
          @click="handlerGDPR"
        >
          Accept
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cookie {
  &__floating {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    box-sizing: border-box;
    width: 90%;
    position: fixed;
    overflow: hidden;
    z-index: 9999;
    background: $color-alabaster;
    box-shadow: 0 4px 8px rgba($color-alto, 0.3);
    border: 1px solid $color-alto;
    line-height: 1.5;
    border-radius: 6px;
    bottom: 10px;
    left: 0;
    right: 0;
    margin: 0 auto;

    @include font-roboto-slab();

    @include md {
      max-width: 18.75rem;

      &--bottom-left {
        bottom: 1.25rem;
        left: 1.25rem;
        right: auto;
        margin: 0;
      }
    }
  }

  &__content {
    font-size: 0.875rem;
    margin-bottom: 0.3125rem;
    padding: 0.9375rem 1.25rem;
    max-height: 6.5625rem;
    overflow: auto;

    @include md {
      margin-bottom: 0.625rem;
    }

    &--link {
      color: $color-web-orange;
      text-decoration: underline;
    }
  }

  &__buttons {
    cursor: pointer;
    color: $color-fruit-salad;
    @include font-roboto-slab();
    @include font-weight(bold);
    background-color: $color-gallery;
    font-size: 0.875rem;
    width: 100%;
    min-height: 2.5rem;
    white-space: nowrap;
    user-select: none;
    border-bottom: 0.1px solid $color-alto;
    border-top: 0.1px solid $color-alto;
    border-left: none;
    border-right: none;

    &--accept {
      &:hover {
        background: $color-goblin;
        color: $color-white;
      }
    }
  }
}
</style>
