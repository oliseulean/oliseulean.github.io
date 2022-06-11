<template>
  <div class="app__leftNavbar">
    <a
      v-for="(navItem, index) in navItems"
      :href="navItem.path"
      :key="index"
      target="_blank"
      class="app__leftNavbar-link"
    >
      <img
        v-tooltip="navItem.title"
        :src="navItem.icon"
        :alt="navItem.alt"
        class="app__leftNavbar-icon"
      />
    </a>
  </div>
</template>

<script setup>
/*
  imports
*/

import { ref } from 'vue';
import leftNavbarItems from '../helpers/leftNavbarItems';

/*
  navItems
*/

const navItems = ref(leftNavbarItems.items);
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
    font-size: $font-size-normal;

    @include sm {
      width: 30px;
    }

    &:hover {
      filter: drop-shadow(2px 2px $color-shadow-gray);
      transition: 0.2s ease-in-out;
    }
  }
}
</style>
