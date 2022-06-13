<template>
  <div class="app__workAndStudies">
    <PageTitle :color="colors.colorWhite"> WORK & STUDIES </PageTitle>
    <div class="app__workAndStudies__container">
      <div
        v-for="experienceItem in experienceItems"
        :key="experienceItem.id"
        class="app__workAndStudies__container-experience"
      >
        <h2>
          <a
            :href="experienceItem.companyWebsite"
            target="_blank"
            class="app__workAndStudies__container-companyWebsite"
          >
            {{ experienceItem.companyName }}
          </a>
          - {{ experienceItem.title }}
        </h2>
        <h3 class="app__workAndStudies__container__duration">
          <img
            :src="CalendarIcon"
            alt="Calendar_Icon_Image"
            class="app__workAndStudies__container-icon"
          />
          {{ experienceItem.duration }}
        </h3>
        <ul class="app__workAndStudies__container__work">
          <li
            v-for="res in experienceItem.work"
            :key="res"
            class="app__workAndStudies__container__work-items"
          >
            {{ res }}
          </li>
        </ul>
        <h3 class="app__workAndStudies__container__skills">
          <img
            :src="CodingIcon"
            alt="Down_Icon_Image"
            class="app__workAndStudies__container-icon"
          />
          Skills &amp; Languages
        </h3>

        <ul class="app__workAndStudies__container__languages">
          <li
            v-for="(language, index) in experienceItem.language"
            :key="index"
            class="app__workAndStudies__container__languages-items"
          >
            {{ language }}
          </li>
        </ul>
      </div>
    </div>

    <div class="app__workAndStudies__container">
      <div
        v-for="universityItem in universityItems"
        :key="universityItem.id"
        class="app__workAndStudies__container-studies"
      >
        <h2>
          <a
            :href="universityItem.uniWebsite"
            target="_blank"
            class="app__workAndStudies__container-universityWebsite"
          >
            {{ universityItem.uniName }}
          </a>
          - {{ universityItem.city }}
        </h2>

        <h3>
          {{ universityItem.specialization }}
          <h4>
            Grade:
            <span class="app__workAndStudies__container-grade">
              {{ universityItem.grade }}
            </span>
          </h4>
        </h3>
        <h4>{{ universityItem.thesis }}</h4>
      </div>
    </div>
  </div>
</template>

<script setup>
/*
  imports
*/

import { ref } from 'vue';
import experienceAndStudies from '../helpers/experienceAndStudiesItems';
import CalendarIcon from '../assets/icons/calendar.png';
import CodingIcon from '../assets/icons/coding.png';
import PageTitle from '../components/PageTitle.vue';
import colorsHelper from '../helpers/colorsHelper';

/*
  experience items
*/
const experienceItems = ref(experienceAndStudies.experience);
const universityItems = ref(experienceAndStudies.university);
const colors = ref(colorsHelper?.colors[0]);
</script>

<style scoped lang="scss">
.app__workAndStudies {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 0;
  background-color: $color-dark-blue;

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
      @include font-dm-serif();
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
      @include font-open-sans();
      &-items {
        margin-top: 1rem;
        margin-bottom: 1rem;
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
