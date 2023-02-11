<template>
  <div
    class="app-cookie"
    v-if="state.showCookiePopUp"
  >
    <div class="app-cookie__floating app-cookie__floating--bottom-left">
      <div class="app-cookie__content">
        I use cookies to ensure you get the best experience on my website.
        <router-link
          to="/cookies-policy"
          class="app-cookie__content--link"
        >
          Cookies policy.
        </router-link>
      </div>
      <div class="app-cookie__buttons">
        <button
          class="app-cookie__buttons app-cookie__buttons--accept"
          @click="handlerGDPR"
        >
          Accept
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
/* Imports */
import { onMounted, reactive } from 'vue';

/* State */
const state = reactive({
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
  return state.showCookiePopUp = false;
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
  return localStorage.getItem('GDPR') ? state.showCookiePopUp = false : '';
});
</script>

<style lang="scss" scoped>
.app-cookie {
  &__floating {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    box-sizing: border-box;
    width: 90%;
    position: fixed;
    overflow: hidden;
    z-index: 9999;
    background: $color-white-middle;
    box-shadow: 0 4px 8px rgba($color-shadow-gray, 0.3);
    border: 1px solid $color-shadow-gray;
    line-height: 1.5;
    border-radius: 6px;
    bottom: 10px;
    left: 0;
    right: 0;
    margin: 0 auto;

    @include font-roboto-slab();

    @include md {
      max-width: 300px;

      &--bottom-left {
        bottom: 20px;
        left: 20px;
        right: auto;
        margin: 0;
      }
    }
  }

  &__content {
    font-size: 0.875rem;
    margin-bottom: 5px;
    padding: 15px 20px;
    max-height: 105px;
    overflow: auto;

    @include md {
      margin-bottom: 10px;
    }

    &--link {
      color: $color-orange-primary;
      text-decoration: underline;
    }
  }

  &__buttons {
    cursor: pointer;
    color: $color-green-normal;

    @include font-roboto-slab();
    @include font-weight(bold);

    background-color: $color-white-light;
    font-size: 0.875rem;
    width: 100%;
    min-height: 40px;
    white-space: nowrap;
    user-select: none;
    border-bottom: 0.1px solid $color-gray-shadow;
    border-top: 0.1px solid $color-gray-shadow;
    border-left: none;
    border-right: none;

    &--accept {
      &:hover {
        background: $color-green-dark;
        color: $color-white;
      }
    }
  }
}
</style>
