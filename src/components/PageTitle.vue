<template>
  <h1 :style="{ color: props.color }" class="app__title">
    <slot />
  </h1>
</template>

<script setup>
/*
 * Props
 */
const props = defineProps({
  color: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss">
h1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  @include font-weight(bold);
  @include font-roboto-slab();
  font-size: $font-size-medium;
  padding: 2.5rem 0;

  @include md {
    font-size: $font-size-large;
  }

  @include lg {
    font-size: $font-size-large-l;
  }
}
</style>
