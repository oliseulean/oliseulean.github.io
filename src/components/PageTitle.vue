<script setup>
/* Props */
const props = defineProps({
  color: {
    type: String,
    default: undefined,
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
</script>

<template>
  <div class="page-title">
    <h1
      class="page-title__heading"
      :style="{
        color: props.color,
        alignItems: props.alignItems,
        textAlign: props.textAlign
      }"
    >
      <slot />
    </h1>
  </div>
</template>

<style lang="scss" scoped>
.page-title {
  &__heading {
    display: flex;
    flex-direction: column;
    padding: 2.5rem 0;
    @include font-weight(bold);
    @include font-roboto-slab;
    font-size: $font-size-large;
    line-height: 1.5;

    @include md {
      font-size: $font-size-large;
      padding: 5rem 0 2rem;
    }

    @include lg {
      font-size: $font-size-large-l;
      padding: 3rem 0;
    }
  }
}
</style>
