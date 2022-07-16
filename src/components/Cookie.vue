<template>
  <div
      class="app__cookie cookie__floating cookie__floating--bottom-left"
      v-if="showCookiePopUp"
  >
    <div class="cookie__floating__wrap">
      <div class="cookie__floating__content">
        I use cookies to ensure you get the best experience on my website.
        <a href="/cookies-policy" class="cookies-link"> Cookies policy. </a>
      </div>
      <div class="cookie__floating__buttons">
        <button
            class="cookie__floating__buttons__button cookie__floating__buttons__button--accept"
            @click.prevent="handlerGDPR"
        >
          Accept
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
/*
 * Imports
 */
import { onMounted, ref } from 'vue';

/*
 * Track the user info only after it accepts the policy
 */
onMounted(() => {
  window['ga-disable-UA-232885625-1'] = !localStorage.getItem(('GDPR'));
});

/*
 * Handle cookie policy if the user press 'Accept'
 */
const enablePlugin = () => {
  return window['ga-disable-UA-232885625-1'] = false;
};

const acceptGDPR = () => {
  return window.localStorage.setItem('GDPR', true);
};

const showCookiePopUp = ref(true);

const hideCookiePopup = () => {
  return showCookiePopUp.value = false;
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
  return localStorage.getItem('GDPR') ? showCookiePopUp.value = false : '';
});
</script>

<style lang="scss" scoped>
.app__cookie {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  box-sizing: border-box;
  -ms-overflow-style: none;
  position: fixed;
  overflow: hidden;
  z-index: 9999;
  width: 90%;
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
}

@include md {
  .cookie__floating {
    max-width: 300px;
  }

  .cookie__floating--bottom-left {
    bottom: 20px;
    left: 20px;
    right: auto;
    margin: 0 0;
  }
}

.cookie__floating__buttons__button {
  cursor: pointer;

  &--accept {
    color: $color-green-normal;
    -ms-flex: 1 1 auto;

    &:hover {
      background: $color-green-dark;
      color: $color-white;
    }
  }
}

.cookie__floating__content {
  font-size: 0.875rem;
  margin-bottom: 5px;
  padding: 15px 20px;
  max-height: 105px;
  overflow: auto;

  @include md {
    margin-bottom: 10px;
  }

  a {
    color: $color-orange-primary;
    text-decoration: underline;
  }
}

.cookie__floating__buttons__button {
  @include font-roboto-slab();
  @include font-weight(bold);
  background-color: $color-white-light;
  font-size: 0.875rem;
  width: 100%;
  min-height: 40px;
  white-space: nowrap;
  user-select: none;
  border-bottom: 1px solid $color-gray-shadow;
  border-top: 1px solid $color-gray-shadow;
  border-left: none;
  border-right: none;
  padding: 0.375rem 0.75rem;
}
</style>
