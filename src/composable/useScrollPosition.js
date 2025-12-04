/* Imports */
import {
  ref,
  onMounted,
  onUnmounted,
} from 'vue';

/* Handle show/hide based on scroll */
export const useScrollPosition = () => {
  const shouldShow = ref(true);

  const updateShouldShowBasedOnScroll = () => {
    const currentScrollValue = window.pageYOffset ?? 0;
    // Show when scroll is <= 600, hide when > 600
    shouldShow.value = currentScrollValue <= 600;
  };

  onMounted(() =>
    window.addEventListener('scroll', updateShouldShowBasedOnScroll)
  );

  onUnmounted(() =>
    window.removeEventListener('scroll', updateShouldShowBasedOnScroll)
  );

  return {
    updateShouldShowBasedOnScroll,
    shouldShow,
  };
};