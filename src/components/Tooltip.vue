<template>
  <div class="app__tooltip">
    <div :class="`app__tooltip__container ${props.position}`">
      <slot />
      <span class="app__tooltip__container--text">{{ props.content }}</span>
    </div>
  </div>
</template>

<script setup>
/*
 * Props
 */
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
</script>

<style lang="scss">
.app__tooltip {
  &__container {
    position: relative;
    display: inline-block;

    &--text {
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
}

/* Tooltip top content */
.top .app__tooltip__container--text {
  bottom: 105%;
  left: 50%;
  margin-left: -50px; /* 120/2 = 60 */
}

/* Tooltip right content */
.right .app__tooltip__container--text {
  top: -5px;
  left: 110%;
}

/* Tooltip bottom content */
.bottom .app__tooltip__container--text {
  top: 100%;
  left: 50%;
  margin-left: -60px; /* 120/2 = 60 */
}

/* Tooltip left content */
.left .app__tooltip__container--text {
  top: -5px;
  right: 110%;
}

.app__tooltip__container:hover .app__tooltip__container--text {
  visibility: visible;
  opacity: 1;
}
</style>
