<script setup>
/* Imports */
import { computed } from 'vue';

/* Props */
const props = defineProps({
  color: {
    type: String,
    default: undefined,
  },
  align: {
    type: String,
    default: 'center',
    validator: value => ['left', 'center', 'right'].includes(value),
  },
  tag: {
    type: String,
    default: 'h2',
    validator: value => ['h1', 'h2'].includes(value),
  },
});

const alignmentClass = computed(() => `page-title--${props.align}`);
</script>

<template>
  <div
    class="page-title"
    :class="alignmentClass"
  >
    <component
      :is="props.tag"
      class="page-title__heading"
      :style="{
        color: props.color,
      }"
    >
      <slot />
    </component>
  </div>
</template>

<style lang="scss" scoped>
.page-title {
  &--left {
    text-align: left;
  }

  &--center {
    text-align: center;
  }

  &--right {
    text-align: right;
  }

  &__heading {
    @include section-heading-spacing;
    @include font-weight(bold);
    @include font-primary;
    font-size: $font-size-3xl;
    line-height: 1.25;

    @include md {
      font-size: $font-size-3xl;
    }

    @include lg {
      font-size: $font-size-4xl;
    }
  }
}
</style>
