<script setup>
/* Imports */
import Experience from '../components/Experience.vue';
import Studies from '../components/Studies.vue';
import ProfilePicture from '../components/ProfilePicture.vue';

import CalendarIcon from '/icons/calendar.webp';
import CodingIcon from '/icons/coding.webp';

/* Props */
const props = defineProps({
  experience: {
    type: Array,
    default: () => ([]),
  },
  studies: {
    type: Array,
    default: () => ([]),
  }
});
</script>

<template>
  <div
    id="experience"
    class="work-and-studies"
  >
    <ProfilePicture />
    <div class="work-and-studies__section">
      <Experience
        :experience="props.experience"
        :calendar-icon="CalendarIcon"
        :coding-icon="CodingIcon"
      />
    </div>

    <div class="work-and-studies__section">
      <Studies
        :studies="props.studies"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.work-and-studies {
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
