<template>
  <div class="app-title">
    <h1
      class="app-title__heading"
      :style="stylePageTitleObj"
    >
      <slot />
    </h1>
  </div>
</template>

<script setup>
/*
 * Imports
 */
import { reactive } from 'vue';

/*
 * Props
 */
const props = defineProps({
  color: {
    type: String,
    required: true,
  },
  alignItems: {
    type: String,
    default: 'center',
  },
  textAlign: {
    type: String,
    default: 'center',
  },
});

const stylePageTitleObj = reactive({
  color: props.color,
  alignItems: props.alignItems,
  textAlign: props.textAlign,
});
</script>

<style lang="scss" scoped>
.app-title {
  &__heading {
    display: flex;
    flex-direction: column;
    padding: 2.5rem 0;
    @include font-weight(bold);
    @include font-roboto-slab();
    font-size: $font-size-large;

    @include md {
      font-size: $font-size-large;
      padding: 5rem 0 2rem 0;
    }

    @include lg {
      font-size: $font-size-large-l;
      padding: 3rem 0;
    }
  }
}
</style>
