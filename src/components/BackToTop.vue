<template>
  <div
    @click="scrollToTop()"
    :class="['app__backToTopBtn', { 'go-top': hideElement }]"
  >
    <ArrowIcon />
  </div>
</template>

<script setup>
import ArrowIcon from '../assets/icons/Arrow.vue';
import { useScrollPosition } from '../composable/useScrollPosition';

const { hideElement } = useScrollPosition();

const scrollToTop = () => window.scrollTo(0, 0);
</script>

<style lang="scss" scoped>
.app__backToTopBtn {
  background-color: $color-white;
  position: fixed;
  cursor: pointer;
  right: 0rem;
  text-align: center;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  transition: 0.6s;
  overflow: hidden;
  border: 1px $color-dark solid;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);

  @include md {
    right: 0.5rem;
  }

  &:hover {
    transition: 0.6s;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    transform: translateY(-5px);
  }

  &.go-top {
    opacity: 1;
    visibility: visible;
    bottom: 0.5rem;
  }
}
</style>
