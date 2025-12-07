<script setup>
/* Imports */
import {
  ref,
  onMounted,
  onUnmounted,
  useTemplateRef,
} from 'vue';
import { breakpoints } from '../helpers/breakpoints.js';

/* State */
const state = ref({
  avatarPath: '/profile.webp',
  avatarSecondPath: '/profileSecond.webp',
  windowWidth: window.innerWidth,
});

/* Handle avatar */
const imgSrcRef = useTemplateRef('imgSrcRef');

const onWidthChange = () => {
  return state.value.windowWidth = window.innerWidth;
};

onMounted(() => window.addEventListener('resize', onWidthChange));
onUnmounted(() => window.removeEventListener('resize', onWidthChange));

const onHoverAvatar = () => {
  state.value.windowWidth >= breakpoints['screen-lg'] ? (imgSrcRef.value.src = state.value.avatarSecondPath) : null;
};

const onLeaveAvatar = () => {
  state.value.windowWidth >= breakpoints['screen-lg'] ? (imgSrcRef.value.src = state.value.avatarPath) : null;
};
</script>

<template>
  <img
    ref="imgSrcRef"
    class="profile-picture"
    :src="state.avatarPath"
    width="200"
    height="200"
    alt="Olimpiu Seulean Profile Picture"
    loading="lazy"
    @mouseover="onHoverAvatar"
    @mouseleave="onLeaveAvatar"
  >
</template>

<style lang="scss" scoped>
.profile-picture {
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
