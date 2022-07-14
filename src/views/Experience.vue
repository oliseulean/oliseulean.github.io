<template>
  <div class="app__workAndStudies" id="experience">
    <img
      class="app__workAndStudies-profilePicture"
      ref="imgSrcRef"
      :src="avatarPath"
      width="200"
      height="200"
      alt="Profile_Picture"
      loading="lazy"
      @mouseover="onOverAvatar"
      @mouseleave="onLeaveAvatar"
    />
    <PageTitle :color="globalStore?.colors?.colorWhite">
      WORK & STUDIES
    </PageTitle>
    <div class="app__workAndStudies__container">
      <div
        v-for="experience in storeExperience.experience"
        :key="experience.id"
        class="app__workAndStudies__container-experience"
      >
        <h2>
          <a
            :href="experience.companyWebsite"
            target="_blank"
            class="app__workAndStudies__container-companyWebsite"
          >
            {{ experience.companyName }}
          </a>
          - {{ experience.title }}
        </h2>
        <h3 class="app__workAndStudies__container__duration">
          <img
            :src="CalendarIcon"
            alt="Calendar_Icon_Image"
            height="25"
            width="25"
            class="app__workAndStudies__container-icon"
            loading="lazy"
          />
          {{ experience.duration }}
        </h3>
        <ul class="app__workAndStudies__container__work">
          <li
            v-for="responsability in experience.work"
            :key="responsability"
            class="app__workAndStudies__container__work-items"
          >
            {{ responsability }}
          </li>
        </ul>
        <h3 class="app__workAndStudies__container__skills">
          <img
            :src="CodingIcon"
            width="25"
            height="25"
            alt="Down_Icon_Image"
            class="app__workAndStudies__container-icon"
            loading="lazy"
          />
          Skills &amp; Languages
        </h3>

        <ul class="app__workAndStudies__container__languages">
          <li
            v-for="language in experience.language"
            :key="language"
            class="app__workAndStudies__container__languages-items"
          >
            {{ language }}
          </li>
        </ul>
      </div>
    </div>

    <div class="app__workAndStudies__container">
      <div
        v-for="university in storeExperience.university"
        :key="university.id"
        class="app__workAndStudies__container-studies"
      >
        <h2>
          <a
            :href="university.uniWebsite"
            target="_blank"
            class="app__workAndStudies__container-universityWebsite"
          >
            {{ university.uniName }}
          </a>
          - {{ university.city }}
        </h2>

        <h3>
          {{ university.specialization }}
          <h4>
            Grade:
            <span class="app__workAndStudies__container-grade">
              {{ university.grade }}
            </span>
          </h4>
        </h3>
        <h4>{{ university.thesis }}</h4>
      </div>
    </div>
  </div>
</template>

<script setup>
/*
 * Imports
 */
import { ref, onMounted, onUnmounted } from 'vue';

import PageTitle from '../components/PageTitle.vue';

import { useExperienceStore } from '../stores/experience';
import { useGlobalStore } from '../stores/global';

import CalendarIcon from '/icons/calendar.webp';
import CodingIcon from '/icons/coding.webp';
import breakpoints from '../helpers/breakpoints';

/*
 * Store
 */
const storeExperience = useExperienceStore();
const globalStore = useGlobalStore();

/*
 * Handle avatar
 */
const avatarPath = ref('/profile.webp');
const avatarSecondPath = ref('/profileSecond.webp');
const imgSrcRef = ref(null);
const windowWidth = ref(window.innerWidth);

const onWidthChange = () => (windowWidth.value = window.innerWidth);
onMounted(() => window.addEventListener('resize', onWidthChange));
onUnmounted(() => window.removeEventListener('resize', onWidthChange));

const onOverAvatar = () => {
  windowWidth.value >= breakpoints['screen-lg']
    ? (imgSrcRef.value.src = avatarSecondPath.value)
    : '';
};

const onLeaveAvatar = () => {
  windowWidth.value >= breakpoints['screen-lg']
    ? (imgSrcRef.value.src = avatarPath.value)
    : '';
};
</script>

<style scoped lang="scss">
.app__workAndStudies {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 0;
  background-color: $color-dark-blue;

  &-profilePicture {
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

  &__container {
    width: 80%;

    &:first-of-type {
      padding-bottom: 0;
    }

    padding-bottom: 2rem;
    margin: 2rem 0;

    &-experience,
    &-studies {
      &:not(:last-of-type) {
        margin-bottom: 3rem;
        border-bottom: 1px solid rgba($color-white, 0.25);
        padding-bottom: 3rem;
      }

      h2 {
        margin-bottom: 1.5rem;
      }
    }

    &-icon {
      width: 1.5rem;
      margin-right: 1rem;
    }

    &__duration,
    &__skills {
      display: flex;
      align-items: center;
    }

    h2,
    h3,
    h4 {
      color: $color-white;
      @include font-roboto-slab();
      @include font-weight(thin);
    }

    h4 {
      margin-top: 1rem;
      font-style: italic;
    }

    &-companyWebsite,
    &-universityWebsite,
    &-grade {
      color: $color-orange-primary;
      @include font-weight(black);
      @include line-hover();
    }

    &__work,
    &__languages {
      padding-top: 0.5rem;
      margin-left: 3rem;
      padding-bottom: 1rem;
      padding-top: 1rem;
      color: $color-white;
      font-size: $font-size-normal;
      @include font-roboto-slab();

      &-items {
        margin-top: 1rem;
        margin-bottom: 1rem;
        @include font-weight(normal);
      }
    }

    &__languages {
      display: flex;
      gap: 1rem;
      list-style: none;
      margin: 0;
      flex-flow: row wrap;
      font-size: 0.85rem;
      color: $color-light;
      margin-top: 1rem;

      &-items {
        display: inline-flex;
        margin: 0;
        padding: 0.5rem 1rem;
        border: 1px solid rgba($color-orange-primary, 0.5);
      }
    }
  }
}
</style>
