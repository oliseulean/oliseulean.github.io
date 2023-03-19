<script setup>
/* Imports */
import {
  ref,
  onMounted,
  onUnmounted,
  reactive
} from 'vue';

import breakpoints from '../helpers/breakpoints';

/* State */
const state = reactive({
  avatarPath: '/profile.webp',
  avatarSecondPath: '/profileSecond.webp',
  windowWidth: window.innerWidth,
});

/* Handle avatar */
const imgSrcRef = ref(null);

const onWidthChange = () => {
  return state.windowWidth = window.innerWidth;
};

onMounted(() => window.addEventListener('resize', onWidthChange));
onUnmounted(() => window.removeEventListener('resize', onWidthChange));

const onHoverAvatar = () => {
  state.windowWidth >= breakpoints['screen-lg'] ? (imgSrcRef.value.src = state.avatarSecondPath) : null;
};

const onLeaveAvatar = () => {
  state.windowWidth >= breakpoints['screen-lg'] ? (imgSrcRef.value.src = state.avatarPath) : null;
};
</script>

<template>
  <img
    ref="imgSrcRef"
    class="app-profile-picture"
    :src="state.avatarPath"
    width="200"
    height="200"
    alt="profile_image"
    loading="lazy"
    @mouseover="onHoverAvatar"
    @mouseleave="onLeaveAvatar"
  />
</template>

<style lang="scss" scoped>
.app-profile-picture {
  position: relative;
  border-radius: 50%;
  right: 0;
  margin-bottom: 2rem;
  color: $color-white;

  @include sm {
    position: absolute;
    right: 1rem;
  }
}
</style>
