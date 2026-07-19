<script setup>
/* Imports */
import {
  onMounted,
  ref,
} from 'vue';

/* State */
const state = ref({
  showCookiePopup: !(typeof window !== 'undefined' && window.localStorage.getItem('GDPR')),
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
  return state.value.showCookiePopup = false;
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
  return localStorage.getItem('GDPR') ? state.value.showCookiePopup = false : '';
});
</script>

<template>
  <Transition name="cookie-notice">
    <aside
      v-if="state.showCookiePopup"
      class="cookies"
      role="dialog"
      aria-label="Cookie notice"
    >
      <div class="cookies__floating">
        <div class="cookies__content">
          <p class="cookies__eyebrow">
            Privacy
          </p>
          <p>
            I use analytics cookies to understand how this portfolio is used.
            <RouterLink
              to="/cookies-policy"
              class="cookies__policy-link"
            >
              Read the policy
            </RouterLink>
          </p>
        </div>
        <button
          type="button"
          class="cookies__accept-button"
          @click="handlerGDPR"
        >
          Accept
        </button>
      </div>
    </aside>
  </Transition>
</template>

<style lang="scss" scoped>
.cookies {
  position: fixed;
  right: 0.75rem;
  bottom: 0.75rem;
  left: 0.75rem;
  z-index: 9999;
  @include font-primary;

  @include md {
    right: auto;
    bottom: 1.25rem;
    left: 1.25rem;
    width: min(22rem, calc(100% - 2.5rem));
  }

  &__floating {
    display: grid;
    gap: 1rem;
    padding: 1rem;
    border: 1px solid rgba($color-white, 0.16);
    border-radius: 1rem;
    background-color: rgba($color-black-pearl, 0.94);
    box-shadow: 0 1rem 3rem rgba($color-black, 0.32);
    color: $color-catskill-white;
    backdrop-filter: blur(18px);

    @include sm {
      grid-template-columns: 1fr auto;
      align-items: end;
      padding: 1.15rem;
    }
  }

  &__content {
    display: grid;
    gap: 0.45rem;
    font-size: $font-size-sm;
    line-height: 1.55;
  }

  &__eyebrow {
    color: $color-web-orange;
    @include font-weight(bold);
    font-size: $font-size-xs;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  &__policy-link {
    white-space: nowrap;
    text-decoration: underline;
    text-underline-offset: 0.2rem;
  }

  &__accept-button {
    min-height: 2.5rem;
    padding: 0.55rem 1rem;
    border: 1px solid $color-web-orange;
    border-radius: 999px;
    background-color: $color-web-orange;
    color: $color-black-pearl;
    @include font-primary;
    @include font-weight(bold);
    font-size: $font-size-sm;
    cursor: pointer;
    white-space: nowrap;
    transition:
      background-color $motion-duration-base $motion-ease-standard,
      border-color $motion-duration-base $motion-ease-standard,
      box-shadow $motion-duration-base $motion-ease-standard,
      transform $motion-duration-base $motion-ease-emphasized;

    @media (hover: hover) and (pointer: fine) {
      &:hover {
        border-color: $color-amber;
        background-color: $color-amber;
        box-shadow: 0 0.65rem 1.5rem rgba($color-web-orange, 0.18);
        transform: translateY(-1px);
      }
    }

    &:focus-visible {
      @include focus-ring(2px);
    }
  }
}

.cookie-notice-enter-active,
.cookie-notice-leave-active {
  transition: opacity $motion-duration-base $motion-ease-standard, transform $motion-duration-base $motion-ease-emphasized;
}

.cookie-notice-enter-from,
.cookie-notice-leave-to {
  opacity: 0;
  transform: translateY(0.75rem) scale(0.98);
}
</style>
