<template>
  <div
    :class="['app-back-to-top-btn ', goToTopComputedClassName]"
    tabindex="0"
    @click="handlerOnBtnClick()"
    @keydown.enter="handlerOnBtnClick()"
    @keydown.space="handlerOnBtnClick()"
  >
    <ArrowIcon />
  </div>
</template>

<script setup>
/*
 * Imports
 */
import { computed } from 'vue';
import ArrowIcon from '../assets/icons/Arrow.vue';
import { useScrollPosition } from '../composable/useScrollPosition';

/*
 * Handle hide button
 */
const { hideElement } = useScrollPosition();

const goToTopComputedClassName = computed(() => {
  return hideElement.value ? 'go-to-top-btn' : '';
});

/*
 * Handle @click event
 */
const handlerOnBtnClick = () => {
  backToTopGAEvent();
  scrollToTop();
};

const scrollToTop = () => window.scrollTo(0, 0);

const backToTopGAEvent = () => {
  /* eslint-disable-next-line no-undef */
  gtag('event', 'Back Btn', {
    event_category: 'Olimpiu Seulean Portfolio',
    event_label: 'Back To Top Button',
    value: 1,
  });
};
</script>

<style lang="scss" scoped>
.app-back-to-top-btn {
  background-color: $color-white;
  position: fixed;
  cursor: pointer;
  right: 0;
  text-align: center;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  transition: 0.6s;
  overflow: hidden;
  border: 1px $color-dark solid;
  box-shadow: 0 3px 10px rgba($color-dark, 0.1);

  @include md {
    right: 0.5rem;
  }

  &:hover {
    transition: 0.6s;
    transform: translateY(-5px);
  }

  &.go-to-top-btn {
    opacity: 1;
    visibility: visible;
    bottom: 0.5rem;
  }
}
</style>
