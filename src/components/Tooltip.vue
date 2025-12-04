<script setup>
/* Imports */
import {
  onMounted,
  onUnmounted,
  ref,
} from 'vue';

/* Props */
const props = defineProps({
  position: {
    type: String,
    default: '',
  },
  content: {
    type: String,
    default: '',
  },
});

/* State */
const state = ref({
  hideTooltip: false,
})

/* Handle tooltip on mobile */
onMounted(() => {
  return window.addEventListener('touchmove', handleTouchMove);
});

onUnmounted(() => {
  return window.removeEventListener('touchmove', handleTouchMove);
});

const handleTouchMove = () => {
  return state.value.hideTooltip = true;
};
</script>

<template>
  <div class="tooltip">
    <div
      :class="`tooltip__position ${props.position}`"
      tabindex="0"
    >
      <slot />
      <span
        ref="hideTooltipRef"
        class="tooltip__text"
      >
        {{ props.content }}
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tooltip {
  &__position {
    position: relative;
    display: inline-block;
  }

  &__text {
    visibility: hidden;
    width: 6.25rem;
    background-color: rgba($color-black, 0.6);
    color: $color-white;
    text-align: center;
    border-radius: 6px;
    padding: 0.5rem 0;
    position: absolute;
    z-index: 1;
    transition: opacity 0.3s;
  }
}

/*
 * Tooltip top content
 */
// stylelint-disable-next-line selector-class-pattern
.top .tooltip__text {
  bottom: 105%;
  left: 50%;
  margin-left: -3.125rem;
}

/*
 * Tooltip right content
 */
// stylelint-disable-next-line selector-class-pattern
.right .tooltip__text {
  top: 1.2rem;
  left: 120%;

  @include md {
    top: 1.4rem;
  }

  @include lg {
    top: 1.5rem;
  }
}

// stylelint-disable-next-line selector-class-pattern
.tooltip__position:hover .tooltip__text {
  visibility: visible;
  opacity: 1;
}
</style>
