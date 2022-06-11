<template>
  <nav v-if="hideNavbar" class="app__navigationBar">
    <div class="app__navigationBar-content">
      <a href="https://www.google.ro" target="_blank">Resume.</a>
    </div>
  </nav>
</template>

<script setup>
/*
  imports
*/

import { ref, onMounted, onUnmounted } from 'vue';

/*
  handle hideArrow btn
*/

const hideNavbar = ref(false);

onMounted(() => window.addEventListener('scroll', hideNavBar));

onUnmounted(() => window.removeEventListener('scroll', hideNavBar));

const hideNavBar = () => {
  const currentScrollValue = window?.pageYOffset;
  currentScrollValue > 600
    ? (hideNavbar.value = true)
    : (hideNavbar.value = false);
};
</script>

<style lang="scss" scoped>
.app__navigationBar {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: auto;
  padding: 15px 0px;
  background: $color-white;
  box-shadow: 0px 2px 3px rgba($color-dark, 0.25);
  transition: 0.4s ease-in-out;
  animation: 0.4s appear;
  z-index: 3;
  @include keyframe-appear();

  &-content {
    padding: 0.1rem 2rem;
    width: 100%;
    margin: auto;
    text-align: right;
    background: transparent;

    a {
      color: $color-orange-primary;
      font-size: 1.2rem;
      @include font-weight(bold);
      @include font-monserrat();
      padding: 0px 15px;
      background: transparent;

      &:hover,
      &:active {
        color: $color-dark-blue;
      }
    }
  }
}
</style>
