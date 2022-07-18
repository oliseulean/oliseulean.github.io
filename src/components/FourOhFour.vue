<template>
  <div class="app-four-oh-four">
    <img
      src="/images/fourOhFour.webp"
      alt="404 Image"
      width="943"
      height="390"
      class="app-four-oh-four__warning-img"
    >
    <h1 class="app-four-oh-four__wrong-text">
      Opps!, something went wrong
    </h1>
    <p class="app-four-oh-four__not-found-text">
      We could not find that page you were looking for.
    </p>
    <button
      class="app-four-oh-four__go-home-btn"
      @click.prevent="$router.push('/')"
    >
      🏠 Go Home
    </button>
  </div>
</template>

<style lang="scss" scoped>
.app-four-oh-four {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;

  &__warning-img {
    width: 350px;
    height: 250px;

    @include md {
      width: 600px;
      height: 300px;
    }

    @include lg {
      width: 943px;
      height: 390px;
    }
  }

  &__wrong-text {
    @include font-monserrat();
    text-align: center;
    display: block;
    margin: 0 auto;
  }

  &__not-found-text {
    @include font-roboto-slab();
    margin-top: 1rem;
  }

  &__go-home-btn {
    @include black-button();
  }
}
</style>
