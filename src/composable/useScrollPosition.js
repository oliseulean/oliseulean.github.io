/* Imports */
import { ref, onMounted, onUnmounted } from 'vue';

/* Handle hideElement btn */
export const useScrollPosition = () => {
  const hideElement = ref(false);

  onMounted(() =>
    window.addEventListener('scroll', toggleElementVisiblityBasedOnScroll)
  );

  onUnmounted(() =>
    window.removeEventListener('scroll', toggleElementVisiblityBasedOnScroll)
  );

  const toggleElementVisiblityBasedOnScroll = () => {
    const currentScrollValue = window?.pageYOffset;
    currentScrollValue > 600
      ? (hideElement.value = true)
      : (hideElement.value = false);
  };

  return { toggleElementVisiblityBasedOnScroll, hideElement };
};
