<script setup>
/* Imports */
import Tooltip from '../components/Tooltip.vue';

/* Props */
const props = defineProps({
  icons: {
    type: Array,
    default: () => [],
  },
});
</script>

<template>
  <div class="skills-and-tools">
    <ul class="skills-and-tools__items">
      <li
        v-for="(icon, index) in props.icons"
        :key="index"
        class="skills-and-tools__item"
      >
        <Tooltip
          position="top"
          :content="icon.title"
          class="skills-and-tools__tooltip"
        >
          <img
            :alt="icon.alt"
            :src="icon.source"
            height="80"
            width="80"
            class="skills-and-tools__icon"
            loading="lazy"
          >
        </Tooltip>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.skills-and-tools {
  position: relative;
  display: inline-block;

  &__items {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    gap: 0.35rem;
    flex-flow: row wrap;
    font-size: 0.85rem;
    justify-content: center;

    @include md {
      justify-content: left;
      gap: 0.75rem;
    }

    @include lg {
      justify-content: left;
      gap: 1rem;
    }
  }

  &__icon {
    border: 1px solid rgba($color-gray, 0.5);
    border-radius: 0.63rem;
    padding: 0.875rem;
  }
}
</style>
