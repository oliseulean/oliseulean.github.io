<template>
  <div class="app__leftNavbar">
    <a
      v-for="navItem in storeLeftNavbar.items"
      :href="navItem.path"
      :key="navItem.id"
      target="_blank"
      class="app__leftNavbar-link"
    >
      <img
        :src="navItem.icon"
        :alt="navItem.alt"
        class="app__leftNavbar-icon"
        height="30"
        width="30"
        loading="lazy"
      />
    </a>
  </div>
</template>

<script setup>
/*
  imports
*/

import { useLeftNavbarStore } from '../stores/leftNavbar';

/*
  leftNavbar store
*/

const storeLeftNavbar = useLeftNavbarStore();
</script>

<style lang="scss" scoped>
.app__leftNavbar {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: fixed;
  z-index: 1;
  background-color: transparent;
  top: none;
  left: none;
  bottom: 0;
  font-size: $font-size-normal;
  width: 2.8rem;

  @include sm {
    width: 7rem;
    top: 0;
    left: 0;
    background-color: transparent;
    font-size: $font-size-large;
  }

  @include keyframe-appear();

  &-icon {
    background-color: transparent;
    margin: 1.5rem 0;
    animation: 2s appear;
    transition: 0.2s ease-in-out;
    width: 20px;
    height: 20px;
    font-size: $font-size-normal;

    @include md {
      width: 25px;
      height: 25px;
    }

    @include lg {
      width: 30px;
      height: 30px;
    }

    &:hover {
      filter: drop-shadow(2px 2px $color-shadow-gray);
      transition: 0.2s ease-in-out;
    }
  }
}
</style>
