<template>
  <h1 
    :style="{ color: props.color }"
    class="app__title"
  >
    <slot />
  </h1>
</template>

<script setup>
/*
    props
*/

const props = defineProps({
  color: {
    type: String,
    required: true,
  },
});
</script>

<style scoped lang="scss">
h1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  @include font-weight(light);
  font-size: $font-size-large-l;
  padding: 2.5rem 0;
}
</style>
