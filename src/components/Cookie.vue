<template>
  <vue-cookie-accept-decline
    @clicked-accept="enablePlugin"
    elementId="cookies"
    position="bottom-left"
    ref="cookies"
    transitionName="slideFromBottom"
    type="floating"
  >
    <template #postponeContent>&times;</template>

    <template #message>
      I use cookies to ensure you get the best experience on my website.
      <router-link to="/cookies-policy" class="cookies-link">
        Cookies policy.
      </router-link>
    </template>

    <template #acceptContent>Accept</template>
  </vue-cookie-accept-decline>
</template>

<script setup>
/*
 * Imports
 */
import { onMounted } from 'vue';

/*
 * Handle disable/enable GA
 */
onMounted(() => (window['ga-disable-UA-232885625-1'] = true));

const enablePlugin = () => (window['ga-disable-UA-232885625-1'] = false);
</script>

<style lang="scss" scoped>
.cookies-link {
  color: $color-orange-primary;
  text-decoration: underline;
}

:deep(.cookie__floating__content) {
  @include font-roboto-slab();
  font-size: 0.875rem;
}

:deep(.cookie__floating__buttons) {
  button {
    @include font-roboto-slab();
  }
}

:deep(.cookie__floating__buttons__button--decline) {
  display: none;
}

#cookies {
  margin-left: 1.2rem;

  @include md {
    margin-left: 0;
  }

  @include lg {
    margin-left: 0;
  }
}
</style>
