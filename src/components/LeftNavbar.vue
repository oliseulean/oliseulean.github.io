<script setup>
/* Imports */
import Tooltip from '../components/Tooltip';
import { useLeftNavbarStore } from '../stores/leftNavbar';

/* Store */
const storeLeftNavbar = useLeftNavbarStore();

/* LeftNavbar Google Analytics */
const leftItemsGAEvent = e => {
  if (!e) return;
  const getItemName = e.target.alt;
  const cleanUpItemName = getItemName.replace('webp', '');

  /* eslint-disable-next-line no-undef */
  gtag('event', `${cleanUpItemName}`, {
    event_category: 'Olimpiu Seulean Portfolio',
    event_label: `${cleanUpItemName} - social`,
    value: 1,
  });
};
</script>

<template>
  <div class="app-left-navbar">
    <a
      v-for="(navItem, index) in storeLeftNavbar.items"
      :key="index"
      :href="navItem.path"
      target="_blank"
      class="app-left-navbar__link"
      @click="leftItemsGAEvent($event)"
    >
      <Tooltip
        position="right"
        :content="navItem.title"
        class="app-left-navbar__tooltip"
      >
        <img
          :src="navItem.icon"
          :alt="navItem.alt"
          class="app-left-navbar__icon"
          height="30"
          width="30"
          loading="lazy"
        />
      </Tooltip>
    </a>
  </div>
</template>

<style lang="scss" scoped>
.app-left-navbar {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: fixed;
  z-index: 1;
  background-color: transparent;
  top: 0;
  left: 0;
  width: 3.5rem;

  @include md {
    width: 5.5rem;
  }

  @include lg {
    width: 7rem;
  }

  @include keyframe-appear();

  &__tooltip {
    font-size: 0.875rem;
  }

  &__icon {
    background-color: transparent;
    margin: 1.5rem 0;
    animation: 2s appear;
    transition: 0.2s ease-in-out;
    width: 20px;
    height: 20px;

    @include md {
      width: 25px;
      height: 25px;
    }

    @include lg {
      width: 30px;
      height: 30px;
    }

    &:hover {
      transform: none;

      @include lg {
        transform: scale(1.5);
      }
    }
  }
}
</style>
