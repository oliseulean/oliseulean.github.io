<template>
  <div class="app__fourOhFour">
    <img
      src="/images/fourOhFour.webp"
      alt="404 Illustration"
      width="500"
      height="300"
      class="app__fourOhFour-warningImg"
    />
    <h1 class="app__fourOhFour-warning">Opps!, something went wrong</h1>
    <p class="app__fourOhFour-notFound">
      We could not find that page you were looking for
    </p>
    <button @click="$router.push('/')" class="app__fourOhFour-btn">
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

    @include lg {
      width: 500px;
      height: 300px;
    }
  }

  &-warning {
    @include font-monserrat();
    text-align: center;
    display: block;
    margin: 0 auto;
  }

  &-notFound {
    @include font-open-sans();
    margin-top: 1rem;
  }

  &-btn {
    background-color: $color-dark;
    margin-bottom: 1rem;
    color: $color-white;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 0.9rem;
    padding: 0.5rem 1.2rem;
    display: block;
    width: fit-content;
    font-size: 0.9rem;
    border: 1px solid $color-dark;
    margin-top: 1rem;
    cursor: pointer;
    @include font-open-sans();
  }
}
</style>
