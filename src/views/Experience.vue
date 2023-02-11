<template>
  <div
    id="experience"
    class="app-work-and-studies"
  >
    <img
      ref="imgSrcRef"
      class="app-work-and-studies__profile-picture"
      :src="avatarPath"
      width="200"
      height="200"
      alt="Profile_Image"
      loading="lazy"
      @mouseover="onOverAvatar"
      @mouseleave="onLeaveAvatar"
    >
    <div class="app-work-and-studies-section">
      <PageTitle
        :color="globalStore?.colors?.colorWhite"
        align-items="left"
        text-align="left"
      >
        WORK EXPERIENCE
      </PageTitle>
      <div
        v-for="(experience, index) in storeExperience.experience"
        :key="index"
        class="app-work-and-studies-section__experience"
      >
        <p class="app-work-and-studies-section__company-history-title">
          <a
            :href="experience.companyWebsite"
            target="_blank"
            class="app-work-and-studies-section__company-history-title--bold"
          >
            {{ experience.companyName }}
          </a>
          - {{ experience.title }}
        </p>

        <p class="app-work-and-studies-section__experience-duration-title">
          <img
            :src="CalendarIcon"
            alt="Calendar_Icon"
            height="25"
            width="25"
            class="app-work-and-studies-section__icon"
            loading="lazy"
          >
          {{ experience.duration }}
        </p>

        <ul class="app-work-and-studies-section__list-competencies">
          <li
            v-for="(experience, index) in experience.work"
            :key="index"
            class="app-work-and-studies-section__competencies"
          >
            {{ experience }}
          </li>
        </ul>

        <p class="app-work-and-studies-section__skills-title">
          <img
            :src="CodingIcon"
            width="25"
            height="25"
            alt="Down_Icon"
            class="app-work-and-studies-section__icon"
            loading="lazy"
          >
          Skills &amp; Languages
        </p>

        <ul class="app-work-and-studies-section__list-tools">
          <li
            v-for="(language, index) in experience.language"
            :key="index"
            class="app-work-and-studies-section__tools"
          >
            {{ language }}
          </li>
        </ul>

      </div>
    </div>

    <div class="app-work-and-studies-section">
      <PageTitle
        :color="globalStore?.colors?.colorWhite"
        align-items="left"
        text-align="left"
      >
        STUDIES
      </PageTitle>

      <div
        v-for="(university, index) in storeExperience.university"
        :key="index"
        class="app-work-and-studies-section__studies"
      >
        <p class="app-work-and-studies-section__university-title">
          <a
            :href="university.uniWebsite"
            target="_blank"
            class="app-work-and-studies-section__university-title--bold"
          >
            {{ university.uniName }}
          </a>
          - {{ university.city }}
        </p>

        <p class="app-work-and-studies-section__specialization-title">
          {{ university.specialization }}
        </p>

        <p class="app-work-and-studies-section__grade-title">
          Grade:
          <span class="app-work-and-studies-section__grade-title--color">
            {{ university.grade }}
          </span>
        </p>

        <p class="app-work-and-studies-section__university-thesis">
          {{ university.thesis }}
        </p>

      </div>
    </div>
  </div>
</template>

<script setup>
/* Imports */
import { ref, onMounted, onUnmounted } from 'vue';

import PageTitle from '../components/PageTitle.vue';

import { useExperienceStore } from '../stores/experience';
import { useGlobalStore } from '../stores/global';

import CalendarIcon from '/icons/calendar.webp';
import CodingIcon from '/icons/coding.webp';
import breakpoints from '../helpers/breakpoints';

/* Store */
const storeExperience = useExperienceStore();
const globalStore = useGlobalStore();

/* Handle avatar */
const avatarPath = ref('/profile.webp');
const avatarSecondPath = ref('/profileSecond.webp');
const imgSrcRef = ref(null);
const windowWidth = ref(window.innerWidth);

const onWidthChange = () => {
  return windowWidth.value = window.innerWidth;
};

onMounted(() => window.addEventListener('resize', onWidthChange));
onUnmounted(() => window.removeEventListener('resize', onWidthChange));

const onOverAvatar = () => {
  windowWidth.value >= breakpoints['screen-lg']
    ? imgSrcRef.value.src = avatarSecondPath.value
    : '';
};

const onLeaveAvatar = () => {
  windowWidth.value >= breakpoints['screen-lg']
    ? imgSrcRef.value.src = avatarPath.value
    : '';
};
</script>

<style lang="scss" scoped>
.app-work-and-studies {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 5rem;
  background-color: $color-dark-blue;

  &__profile-picture {
    border-radius: 50%;
    position: relative;
    right: 0;
    margin-bottom: 2rem;
    color: $color-white;

    @include sm {
      position: absolute;
      right: 1rem;
    }
  }

  &-section {
    width: 70%;

    @include md {
      width: 75%;
    }

    @include lg {
      width: 85%;
    }

    &__experience,
    &__studies {
      @include font-roboto-slab();

      color: $color-white;

      @include font-weight(thin);

      &:not(:last-of-type) {
        margin-bottom: 3rem;
        border-bottom: 1px solid rgba($color-white, 0.25);
        padding-bottom: 3rem;
      }
    }

    &__icon {
      width: 1.5rem;
      margin-right: 1rem;
    }

    &__company-history-title,
    &__university-title {
      color: $color-white;
      margin-bottom: 1.5rem;
      font-size: 1.4rem;

      @include font-weight(thin);

      line-height: 30px;

      &--bold {
        @include font-weight(bold);
      }

      @include md {
        font-size: 1.5rem;
      }

      @include lg {
        font-size: 1.75rem;
      }
    }

    &__experience-duration-title,
    &__skills-title,
    &__specialization-title {
      display: flex;
      align-items: center;
      font-size: 1.1rem;
    }

    &__grade-title,
    &__university-thesis {
      font-size: 1.2rem;
      font-style: italic;
      margin-top: 1rem;

      &--color {
        color: $color-orange-primary;

        @include font-weight(bold);
      }
    }

    &__university-thesis {
      font-size: 1rem;
    }

    &__company-history-title--bold,
    &__university-title--bold,
    &__grade-title--color {
      color: $color-orange-primary;

      @include font-weight(bold);
      @include line-hover();

      &:hover {
        color: $color-yellow-primary;
      }
    }

    &__list-competencies,
    &__list-tools {
      font-size: $font-size-normal;
      color: $color-light;
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
      border: 1px solid rgba($color-orange-primary, 0.5);
    }

    &__competencies {
      margin: 0;
      padding: 0.5rem 0;
    }
  }
}
</style>
