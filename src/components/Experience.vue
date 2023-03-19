<script setup>
/* Imports */
import Image from './Image.vue';
/* Props */
const props = defineProps({
  experience: {
    type: Object,
    required: true,
  },
  calendarIcon: {
    type: String,
    required: true,
  },
  codingIcon: {
    type: String,
    required: true,
  },
});

/* Handle extraStyling */
const setExperienceClassName = experience => {
  return experience.shouldAddExtraStyling ? 'app-work__experience--extra-styling' : null;
};
</script>

<template>
  <div
    v-for="(experience, index) in props.experience"
    :key="index"
    :class="['app-work__experience', setExperienceClassName(experience)]"
  >
    <p class="app-work__company-title">
      <a
        v-if="experience.companyWebsite"
        :href="experience.companyWebsite"
        target="_blank"
        class="app-work__company-title--color"
      >
        {{ experience.companyName }}
      </a>
      <span v-if="!experience.isTheSameCompany">
        - {{ experience.title }}
      </span>
    </p>

    <p
      v-if="experience.isTheSameCompany"
      class="app-work__company-title"
    >
      {{ experience.title }}
    </p>

    <p class="app-work__experience-duration-title">
      <Image
        :altText="'calendar_icon'"
        :src="props.calendarIcon"
        :height="25"
        :width="25"
        :class="'app-work__icon'"
        :loading="'lazy'"
      />
      {{ experience.duration }}
    </p>

    <ul class="app-work__list-competencies">
      <li
        v-for="(experience, index) in experience.work"
        :key="index"
        class="app-work__competencies"
      >
        {{ experience }}
      </li>
    </ul>

    <p
      v-if="experience.language"
      class="app-work__skills-title"
    >
      <Image
        :altText="'coding_icon'"
        :src="props.codingIcon"
        :height="25"
        :width="25"
        :class="'app-work__icon'"
        :loading="'lazy'"
      />
      Skills &amp; Languages
    </p>

    <ul
      v-if="experience.language"
      class="app-work__list-tools"
    >
      <li
        v-for="(language, index) in experience.language"
        :key="index"
        class="app-work__tools"
      >
        {{ language }}
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.app-work {
  &__experience {
    color: $color-white;
    @include font-roboto-slab();
    @include font-weight(thin);

    &:not(:last-of-type) {
      margin-bottom: 3rem;
      border-bottom: 1px solid rgba($color-white, 0.25);
    }

    &--extra-styling {
      padding-bottom: 3rem;
    }
  }

  &__icon {
    width: 1.5rem;
    margin-right: 1rem;
  }

  &__company-title {
    color: $color-white;
    margin-bottom: 1.5rem;
    font-size: 1.4rem;
    @include font-weight(thin);
    line-height: 30px;

    &--color {
      @include line-hover();
      @include color-web-orange-style();
    }

    @include md {
      font-size: 1.5rem;
    }

    @include lg {
      font-size: 1.75rem;
    }
  }

  &__experience-duration-title,
  &__skills-title {
    display: flex;
    align-items: center;
    font-size: 1.1rem;
  }

  &__list-competencies,
  &__list-tools {
    font-size: $font-size-normal;
    color: $color-catskill-white;
    margin-left: 1.4rem;
    padding: 1.25rem 0;

    @include md {
      margin-left: 3rem;
    }

    @include lg {
      margin-left: 3rem;
    }
  }

  &__list-competencies {
    line-height: 1.5rem;
  }

  &__list-tools {
    display: flex;
    gap: 1rem;
    list-style: none;
    margin: 1rem 0 0;
    flex-flow: row wrap;
    font-size: 0.85rem;
    @include font-weight(medium);
  }

  &__tools {
    display: inline-flex;
    margin: 0;
    padding: 0.5rem 1rem;
    border: 1px solid rgba($color-web-orange, 0.5);
  }

  &__competencies {
    margin: 0;
    padding: 0.5rem 0;
  }
}
</style>
