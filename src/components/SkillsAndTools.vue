<template>
  <div class="app__skillsAndTools">
    <div class="app__skillsAndTools__container">
      <ul>
        <li
          v-for="(icon, index) in props.icons"
          :key="index"
        >
          <Tooltip
            position="top"
            :content="icon.title"
          >
            <img
              :src="icon.source"
              :alt="icon.alt"
              height="80"
              width="80"
            />
          </Tooltip>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
/*
 * Imports
 */
import Tooltip from '../components/Tooltip';

/*
 * Props
 */
const props = defineProps({
  icons: {
    type: Array,
    default() {
      return [];
    },
  },
});
</script>

<style lang="scss" scoped>
.app__skillsAndTools__container {
  position: relative;
  display: inline-block;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    gap: 1rem;
    flex-flow: row wrap;
    font-size: 0.85rem;
    justify-content: center;

    @include sm {
      justify-content: left;
    }

    img {
      border: 1px solid rgba($color-shadow-middle-gray, 0.5);
      border-radius: 0.63rem;
      padding: 0.875rem;
    }
  }
}
</style>
