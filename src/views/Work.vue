<script setup>
/* Imports */
import Experience from '../components/Experience.vue';
import Education from '../components/Education.vue';

import CalendarIcon from '/icons/calendar.webp';
import CodingIcon from '/icons/coding.webp';

/* Props */
const props = defineProps({
  experience: {
    type: Array,
    default: () => ([]),
  },
  education: {
    type: Array,
    default: () => ([]),
  }
});
</script>

<template>
  <div
    id="experience"
    class="work-and-education"
  >
    <section class="work-and-education__section">
      <div class="work-and-education__inner">
        <Experience
          :experience="props.experience"
          :calendar-icon="CalendarIcon"
          :coding-icon="CodingIcon"
        />
      </div>
    </section>

    <section
      id="education"
      class="work-and-education__section work-and-education__section--divided"
    >
      <div class="work-and-education__inner">
        <Education
          :education="props.education"
        />
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.work-and-education {
  position: relative;
  background:
    radial-gradient(circle at 100% 0, rgba($color-web-orange, 0.075), transparent 32rem),
    $color-black-pearl;

  &__section {
    display: flex;
    flex-direction: column;
    align-items: center;
    @include section-spacing;

    &--divided {
      @include section-divider;
    }
  }

  &__inner {
    @include content-section;
  }
}
</style>
