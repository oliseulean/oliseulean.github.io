<script setup>
/* Imports */
import Tooltip from '../components/Tooltip';

/* Props */
const props = defineProps({
  icons: {
    type: Array,
    default() {
      return [];
    },
  },
});
</script>

<template>
  <div class="app-skills-and-tools">
    <ul class="app-skills-and-tools__items">
      <li
        v-for="(icon, index) in props.icons"
        :key="index"
        class="app-skills-and-tools__item"
      >
        <Tooltip
          position="top"
          :content="icon.title"
          class="app-skills-and-tools__tooltip"
        >
          <img
            :src="icon.source"
            :alt="icon.alt"
            height="80"
            width="80"
            class="app-skills-and-tools__icon"
          />
        </Tooltip>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.app-skills-and-tools {
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
