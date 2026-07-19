<script setup>
/* Imports */
import { useTemplateRef } from 'vue';
import { breakpoints } from '../helpers/breakpoints.js';

/* Props */
const props = defineProps({
  variant: {
    type: String,
    default: 'default',
    validator: value => ['default', 'compact'].includes(value),
  },
  priority: {
    type: Boolean,
    default: false,
  },
});

/* Assets */
const avatarPath = '/profile.webp';
const avatarSecondPath = '/profileSecond.webp';

/* Handle avatar */
const imgSrcRef = useTemplateRef('imgSrcRef');

const supportsHover = () => window.matchMedia('(hover: hover) and (pointer: fine)').matches;

const canSwapAvatar = () => supportsHover() && window.innerWidth >= breakpoints['screen-lg'];

const onEnterAvatar = () => {
  if (canSwapAvatar() && imgSrcRef.value) {
    imgSrcRef.value.src = avatarSecondPath;
  }
};

const onLeaveAvatar = () => {
  if (imgSrcRef.value) {
    imgSrcRef.value.src = avatarPath;
  }
};
</script>

<template>
  <figure
    class="profile-picture"
    :class="`profile-picture--${props.variant}`"
  >
    <img
      ref="imgSrcRef"
      class="profile-picture__image"
      :src="avatarPath"
      width="200"
      height="200"
      alt="Portrait of Olimpiu Seulean"
      :loading="props.priority ? 'eager' : 'lazy'"
      :fetchpriority="props.priority ? 'high' : 'auto'"
      @pointerenter="onEnterAvatar"
      @pointerleave="onLeaveAvatar"
    >
  </figure>
</template>

<style lang="scss" scoped>
.profile-picture {
  position: relative;
  display: grid;
  place-items: center;
  width: 7.5rem;
  height: 7.5rem;
  margin: 1.5rem 0 0;
  border: 1px solid rgba($color-web-orange, 0.28);
  border-radius: 1.5rem;
  background: radial-gradient(circle, rgba($color-web-orange, 0.14), rgba($color-white, 0.025) 68%);
  box-shadow: 0 1rem 2.5rem rgba($color-black, 0.18);
  transition: border-color $motion-duration-base $motion-ease-standard, box-shadow $motion-duration-base $motion-ease-standard;

  @include sm {
    width: 8.5rem;
    height: 8.5rem;
    margin: 0;
  }

  @include lg {
    width: 9.5rem;
    height: 9.5rem;
  }

  &--compact {
    width: 5.25rem;
    height: 5.25rem;
    margin: 0;
    border-radius: 1.15rem;

    @include sm {
      width: 5.75rem;
      height: 5.75rem;
    }

    @include lg {
      width: 6.25rem;
      height: 6.25rem;
    }
  }

  &__image {
    display: block;
    width: 108%;
    height: 108%;
    object-fit: contain;
    filter: drop-shadow(0 0.75rem 0.75rem rgba($color-black, 0.22));
    transition: transform $motion-duration-base $motion-ease-emphasized, filter $motion-duration-base $motion-ease-standard;

    @media (hover: hover) and (pointer: fine) {
      &:hover {
        filter: drop-shadow(0 1rem 0.9rem rgba($color-black, 0.3));
        transform: translateY(-0.15rem) scale(1.035);
      }
    }
  }
}
</style>
