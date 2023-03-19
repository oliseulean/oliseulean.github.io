<script setup>
/* Props */
const props = defineProps({
  altText: {
    type: String,
    required: true,
  },
  src: {
    type: String,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
  width: {
    type: Number,
    required: true,
  },
  loading: {
    type: String,
    required: false,
  },
  class: {
    type: String,
    required: false,
  },
});
</script>

<template>
  <img
    :src="props.src"
    :alt="props.altText"
    :height="props.height"
    :width="props.width"
    :class="props.class"
    :loading="props.loading"
  />
</template>
