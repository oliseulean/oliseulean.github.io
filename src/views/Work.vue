<script setup>
/* Imports */
import Experience from '../components/Experience.vue';
import Studies from '../components/Studies.vue';
import ProfilePicture from '../components/ProfilePicture.vue';

import CalendarIcon from '/icons/calendar.webp';
import CodingIcon from '/icons/coding.webp';

/* Props */
const props = defineProps({
  globalStore: {
    type: Object,
    required: true,
  },
  experienceStore: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div id="experience" class="app-work-and-studies">
    <ProfilePicture />
    <div class="app-work-and-studies__section">
      <Experience
        :experience-store="props.experienceStore?.experience"
        :global-store="props.globalStore"
        :calendar-icon="CalendarIcon"
        :coding-icon="CodingIcon"
      />
    </div>
    <div class="app-work-and-studies__section">
      <Studies
        :studies="props.experienceStore?.university"
        :global-store="props.globalStore"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app-work-and-studies {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 5rem;
  background-color: $color-black-pearl;

  &__section {
    width: 70%;

    @include md {
      width: 75%;
    }

    @include lg {
      width: 85%;
    }
  }
}
</style>
