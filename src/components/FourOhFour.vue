<template>
  <main class="four-oh-four">
    <img
      src="/images/fourOhFour.webp"
      alt=""
      aria-hidden="true"
      width="943"
      height="390"
      class="four-oh-four__warning-img"
    >
    <h1 class="four-oh-four__wrong-text">
      Oops, something went wrong
    </h1>
    <p class="four-oh-four__not-found-text">
      We could not find that page you were looking for.
    </p>
    <RouterLink
      to="/"
      class="four-oh-four__go-home-btn"
    >
      <span aria-hidden="true">←</span>
      Back to portfolio
    </RouterLink>
  </main>
</template>

<style lang="scss" scoped>
.four-oh-four {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100svh;
  width: 100%;
  padding: 3rem 1.5rem;
  background:
    radial-gradient(circle at 50% 20%, rgba($color-web-orange, 0.1), transparent 25rem),
    $color-black-pearl;
  color: $color-catskill-white;
  text-align: center;

  &__warning-img {
    display: block;
    width: min(100%, 48rem);
    height: auto;
    object-fit: contain;
  }

  &__wrong-text {
    @include font-montserrat;
    display: block;
    margin: 1.5rem auto 0;
    color: $color-white;
    font-size: $font-size-3xl;
    line-height: 1.2;
  }

  &__not-found-text {
    @include font-primary;
    margin-top: 1rem;
    color: $color-bombay;
    font-size: $font-size-base;
    line-height: 1.6;
  }

  &__go-home-btn {
    display: inline-flex;
    gap: 0.5rem;
    align-items: center;
    margin-top: 2rem;
    padding: 0.75rem 1.1rem;
    border: 1px solid $color-web-orange;
    border-radius: 999px;
    background-color: $color-web-orange;
    color: $color-black-pearl;
    @include font-primary;
    @include font-weight(bold);
    font-size: $font-size-sm;
    transition:
      background-color $motion-duration-base $motion-ease-standard,
      box-shadow $motion-duration-base $motion-ease-standard,
      transform $motion-duration-base $motion-ease-emphasized;

    @media (hover: hover) and (pointer: fine) {
      &:hover {
        background-color: $color-amber;
        box-shadow: 0 0.8rem 2rem rgba($color-web-orange, 0.16);
        color: $color-black-pearl;
        transform: translateY(-2px);
      }
    }

    &:focus-visible {
      @include focus-ring;
    }
  }
}
</style>
