<template>
  <div class="app__fourOhFour">
    <img
      src="/images/fourOhFour.webp"
      alt="404 Illustration"
      width="943"
      height="390"
      class="app__fourOhFour-warningImg"
    >
    <h1 class="app__fourOhFour-warning">
      Opps!, something went wrong
    </h1>
    <p class="app__fourOhFour-notFound">
      We could not find that page you were looking for.
    </p>
    <button
      class="app__fourOhFour-btn"
      @click="$router.push('/')"
    >
      🏠 Go Home
    </button>
  </div>
</template>

<style lang="scss" scoped>
.app__fourOhFour {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;

  &-warningImg {
    width: 350px;
    height: 250px;

    @include md {
      width: 750px;
      height: 390px;
    }

    @include lg {
      width: 943px;
      height: 390px;
    }
  }

  &-warning {
    @include font-monserrat();
    text-align: center;
    display: block;
    margin: 0 auto;
  }

  &-notFound {
    @include font-roboto-slab();
    margin-top: 1rem;
  }

  &-btn {
    @include black-button();
  }
}
</style>
