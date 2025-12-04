<template>
  <div class="four-oh-four">
    <img
      src="/images/fourOhFour.webp"
      alt="404 Image"
      width="943"
      height="390"
      class="four-oh-four__warning-img"
    >
    <h1 class="four-oh-four__wrong-text">
      Opps!, something went wrong
    </h1>
    <p class="four-oh-four__not-found-text">
      We could not find that page you were looking for.
    </p>
    <RouterLink to="/">
      <button class="four-oh-four__go-home-btn">
        🏠 Go Home
      </button>
    </RouterLink>
  </div>
</template>

<style lang="scss" scoped>
.four-oh-four {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;

  &__warning-img {
    width: 21.875rem;
    height: 15.625rem;

    @include md {
      width: 37.5rem;
      height: 18.75rem;
    }

    @include lg {
      width: 58.9375rem;
      height: 24.375rem;
    }
  }

  &__wrong-text {
    @include font-monserrat;
    text-align: center;
    display: block;
    margin: 0 auto;
  }

  &__not-found-text {
    @include font-roboto-slab;
    margin-top: 1rem;
  }

  &__go-home-btn {
    @include black-button;
  }
}
</style>
