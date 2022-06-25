<template>
  <vue-cookie-accept-decline
    @clicked-accept="enablePlugin"
    @clicked-decline="disablePlugin"
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

    <template #declineContent>Deny</template>

    <template #acceptContent>Accept</template>
  </vue-cookie-accept-decline>
</template>

<script setup>
const getCookieStatus = localStorage['vue-cookie-accept-decline-cookies'];

// // we need this line in case the user comes again on the website.
getCookieStatus === 'decline'
  ? (window['ga-disable-UA-232885625-1'] = true)
  : (window['ga-disable-UA-232885625-1'] = false);

const enablePlugin = () => (window['ga-disable-UA-232885625-1'] = false);

const disablePlugin = () => (window['ga-disable-UA-232885625-1'] = true);
</script>

<style scoped lang="scss">
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
