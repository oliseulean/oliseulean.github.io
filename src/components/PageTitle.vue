<template>
  <div class="app-title">
    <h1
      :style="{ color: props.color }"
      class="app-title__heading"
    >
      <slot />
    </h1>
  </div>
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
.app-title {

  &__heading {
    display: flex;
    flex-direction: column;
    align-items: center;
    @include font-weight(bold);
    @include font-roboto-slab();
    font-size: $font-size-medium;

    @include md {
      font-size: $font-size-large;
    }

    @include lg {
      font-size: $font-size-large-l;
    }
  }
}
</style>
