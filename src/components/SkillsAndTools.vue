<template>
  <div class="app__skillsAndTools__container">
    <ul>
      <li v-for="(tag, index) in props.tags" :key="index">
        <Tooltip position="top" :content="tag.title">
          <img :src="tag.source" alt="main" height="80" width="80" />
        </Tooltip>
      </li>
    </ul>
  </div>
</template>

<script setup>
import Tooltip from '../components/Tooltip';
/*
 * Props
 */
const props = defineProps({
  tags: {
    type: Array,
    default() {
      return [];
    },
  },
});
</script>

<style lang="scss">
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

    @include md {
      justify-content: left;
    }

    @include lg {
      justify-content: left;
    }

    img {
      border: 1px solid rgba($color-shadow-middle-gray, 0.5);
      border-radius: 0.63rem;
      width: 80px;
      height: 80px;
      padding: 0.875rem;
    }
  }
}
</style>
