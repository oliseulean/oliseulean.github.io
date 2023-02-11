<template>
  <div class="app-tooltip">
    <div
      :class="`app-tooltip__position ${props.position}`"
      tabindex="0"
    >
      <slot />
      <span
        ref="hideTooltipRef"
        class="app-tooltip__text"
      >
        {{ props.content }}
      </span>
    </div>
  </div>
</template>

<script setup>
/* Imports */
import { onMounted, onUnmounted, reactive } from 'vue';

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
const state = reactive({
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
  return state.hideTooltip = true;
};
</script>

<style lang="scss" scoped>
.app-tooltip {
  &__position {
    position: relative;
    display: inline-block;
  }

  &__text {
    visibility: hidden;
    width: 100px;
    background-color: rgba($color-dark, 0.6);
    color: $color-white;
    text-align: center;
    border-radius: 6px;
    padding: 8px 0;
    position: absolute;
    z-index: 1;
    transition: opacity 0.3s;
  }
}

/*
 * Tooltip top content
 */
// stylelint-disable-next-line selector-class-pattern
.top .app-tooltip__text {
  bottom: 105%;
  left: 50%;
  margin-left: -50px;
}

/*
 * Tooltip right content
 */
// stylelint-disable-next-line selector-class-pattern
.right .app-tooltip__text {
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
.app-tooltip__position:hover .app-tooltip__text {
  visibility: visible;
  opacity: 1;
}
</style>
