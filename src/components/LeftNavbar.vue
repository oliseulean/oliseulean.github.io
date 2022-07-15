<template>
  <div class="app__leftNavbar">
    <a
      v-for="(navItem, index) in storeLeftNavbar.items"
      :href="navItem.path"
      :key="index"
      target="_blank"
      class="app__leftNavbar-link"
      @click="leftItemsGAEvent($event)"
    >
      <Tooltip
        position="right"
        :content="navItem.title"
        class="app__leftNavbar--tooltip"
      >
        <img
          :src="navItem.icon"
          :alt="navItem.alt"
          class="app__leftNavbar-icon"
          height="30"
          width="30"
          loading="lazy"
        />
      </Tooltip>
    </a>
  </div>
</template>

<script setup>
/*
 * Imports
 */
import Tooltip from '../components/Tooltip';
import { useLeftNavbarStore } from '../stores/leftNavbar';

/*
 * Store
 */
const storeLeftNavbar = useLeftNavbarStore();

/*
 * LeftNavbar Google Analytics
 */
const leftItemsGAEvent = e => {
  const getItemName = e?.target?.alt;
  const cleanUpItemName = getItemName.replace('webp', '');

  /* eslint-disable-next-line no-undef */
  gtag('event', `${cleanUpItemName}`, {
    event_category: 'Olimpiu Seulean Portfolio',
    event_label: `${cleanUpItemName} - social`,
    value: 1,
  });
};
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

  &--tooltip {
    font-size: 0.875rem;
  }

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
