<script setup>
/* Imports */
import PageTitle from './PageTitle.vue';
import { colors } from '../helpers/colorsHelper.js';
import { formatExperiencePeriod } from '../helpers/formatExperiencePeriod.js';

/* Props */
const props = defineProps({
  experience: {
    type: Array,
    default: () => ([]),
  },
  calendarIcon: {
    type: String,
    default: '',
  },
  codingIcon: {
    type: String,
    default: '',
  },
});

/* Methods */
const getPeriod = item => formatExperiencePeriod({
  startDate: item.startDate,
  endDate: item.endDate,
  referenceDate: item.referenceDate,
});
</script>

<template>
  <PageTitle
    :color="colors.colorWhite"
    align="left"
  >
    WORK EXPERIENCE
  </PageTitle>

  <div class="work__experience-list">
    <article
      v-for="(exp, index) in props.experience"
      :key="exp.companyName || index"
      class="work__experience"
      :class="{ 'work__experience--current': !exp.endDate }"
    >
      <header class="work__experience-header">
        <div class="work__company-heading">
          <div>
            <h3 class="work__company-title">
              <a
                v-if="exp.companyWebsite"
                :href="exp.companyWebsite"
                target="_blank"
                rel="noopener noreferrer"
                class="work__company-link"
              >
                {{ exp.companyName }}
              </a>
              <span v-else>{{ exp.companyName }}</span>
            </h3>
            <h4
              v-if="!exp.positions?.length"
              class="work__role-title"
            >
              {{ exp.title }}
            </h4>
          </div>

          <span
            v-if="!exp.endDate"
            class="work__current-badge"
          >
            Current role
          </span>
        </div>

        <div
          v-if="exp.employmentType || exp.location || exp.workplaceType"
          class="work__metadata"
        >
          <span v-if="exp.employmentType">{{ exp.employmentType }}</span>
          <span v-if="exp.location">{{ exp.location }}</span>
          <span v-if="exp.workplaceType">{{ exp.workplaceType }}</span>
        </div>

        <p class="work__period">
          <img
            alt=""
            aria-hidden="true"
            :src="props.calendarIcon"
            height="25"
            width="25"
            class="work__icon"
            loading="lazy"
          >
          <span>{{ getPeriod(exp).dateRange }}</span>
          <span class="work__tenure">{{ getPeriod(exp).tenure }}</span>
        </p>
      </header>

      <div
        v-if="exp.positions?.length"
        class="work__positions"
      >
        <section
          v-for="position in exp.positions"
          :key="`${position.title}-${position.startDate}`"
          class="work__position"
        >
          <div class="work__position-heading">
            <div>
              <h4 class="work__position-title">
                {{ position.title }}
              </h4>
              <p class="work__position-period">
                {{ getPeriod(position).dateRange }}
              </p>
            </div>
            <span class="work__tenure work__tenure--position">
              {{ getPeriod(position).tenure }}
            </span>
          </div>

          <p
            v-if="position.workplaceType"
            class="work__position-location"
          >
            {{ position.workplaceType }}
          </p>

          <ul
            v-if="position.work?.length"
            class="work__list-competencies work__list-competencies--position"
          >
            <!-- eslint-disable vue/no-v-html -->
            <li
              v-for="(workExperience, workExperienceIndex) in position.work"
              :key="workExperienceIndex"
              class="work__competencies"
              v-html="workExperience"
            />
            <!-- eslint-enable vue/no-v-html -->
          </ul>
        </section>
      </div>

      <ul
        v-if="exp.work?.length"
        class="work__list-competencies"
      >
        <!-- eslint-disable vue/no-v-html -->
        <li
          v-for="(workExperience, workExperienceIndex) in exp.work"
          :key="workExperienceIndex"
          class="work__competencies"
          v-html="workExperience"
        />
        <!-- eslint-enable vue/no-v-html -->
      </ul>

      <div
        v-if="exp.language?.length"
        class="work__skills"
      >
        <p class="work__skills-title">
          <img
            alt=""
            aria-hidden="true"
            :src="props.codingIcon"
            height="25"
            width="25"
            class="work__icon"
            loading="lazy"
          >
          Core technologies
        </p>

        <ul class="work__list-tools">
          <li
            v-for="(language, languageIndex) in exp.language"
            :key="languageIndex"
            class="work__tools"
          >
            {{ language }}
          </li>
        </ul>
      </div>
    </article>
  </div>
</template>

<style lang="scss" scoped>
.work {
  &__experience-list {
    display: grid;
    gap: 1.25rem;
  }

  &__experience {
    padding: 1.5rem;
    @include surface-card;
    @include interactive-card;
    color: $color-white;
    @include font-primary;
    @include font-weight(thin);

    &--current {
      border-color: rgba($color-web-orange, 0.45);
      background: linear-gradient(135deg, rgba($color-web-orange, 0.08), rgba($color-white, 0.025));
    }

    @include md {
      padding: 2rem;
    }
  }

  &__company-heading,
  &__position-heading {
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
  }

  &__company-title {
    margin: 0;
    font-size: $font-size-xl;
    line-height: 1.5;
    @include font-weight(bold);

    @include md {
      font-size: $font-size-2xl;
    }
  }

  &__company-link {
    @include line-hover;
    @include color-web-orange-style;
  }

  &__role-title {
    margin-top: 0.25rem;
    color: $color-white;
    font-size: $font-size-md;
    line-height: 1.5;
    @include font-weight(medium);

    @include md {
      font-size: $font-size-lg;
    }
  }

  &__current-badge,
  &__tenure {
    display: inline-flex;
    padding: 0.35rem 0.7rem;
    border: 1px solid rgba($color-web-orange, 0.35);
    border-radius: 999px;
    background-color: rgba($color-web-orange, 0.1);
    color: $color-amber;
    @include font-weight(medium);
    font-size: $font-size-sm;
    line-height: 1.2;
    white-space: nowrap;
  }

  &__metadata {
    display: flex;
    gap: 0.5rem;
    margin-top: 1rem;
    flex-wrap: wrap;

    span {
      padding: 0.35rem 0.65rem;
      border: 1px solid rgba($color-white, 0.1);
      border-radius: 999px;
      background-color: rgba($color-white, 0.045);
      color: $color-catskill-white;
      font-size: $font-size-sm;
    }
  }

  &__period {
    display: flex;
    gap: 0.65rem;
    align-items: center;
    margin-top: 1rem;
    color: $color-catskill-white;
    font-size: $font-size-base;
    line-height: 1.5;
    flex-wrap: wrap;
  }

  &__icon {
    width: 1.25rem;
    height: 1.25rem;
    object-fit: contain;
  }

  &__positions {
    margin: 1.75rem 0 0 0.35rem;
    padding-top: 1.75rem;
    border-top: 1px solid rgba($color-white, 0.1);

    @include md {
      margin-left: 0.75rem;
    }
  }

  &__position {
    position: relative;
    padding: 0 0 2.5rem 1.6rem;

    &::before {
      position: absolute;
      top: 0.35rem;
      left: -0.4rem;
      z-index: 1;
      width: 0.8rem;
      height: 0.8rem;
      border: 2px solid $color-black-pearl;
      border-radius: 50%;
      background-color: $color-web-orange;
      box-shadow: 0 0 0 2px rgba($color-web-orange, 0.22);
      content: '';
      transition: box-shadow $motion-duration-base $motion-ease-standard, transform $motion-duration-base $motion-ease-emphasized;
    }

    &:not(:last-child)::after {
      position: absolute;
      top: 1.25rem;
      bottom: 0.1rem;
      left: -1px;
      width: 2px;
      background: linear-gradient(rgba($color-web-orange, 0.45), rgba($color-white, 0.14));
      content: '';
    }

    &:last-child {
      padding-bottom: 0;
    }

    @include md {
      padding-left: 2rem;
    }

    @media (hover: hover) and (pointer: fine) {
      &:hover::before {
        box-shadow: 0 0 0 5px rgba($color-web-orange, 0.14);
        transform: scale(1.12);
      }
    }
  }

  &__position-title {
    margin: 0;
    color: $color-white;
    font-size: $font-size-md;
    line-height: 1.5;
    @include font-weight(medium);

    @include md {
      font-size: $font-size-lg;
    }
  }

  &__position-period,
  &__position-location {
    margin-top: 0.3rem;
    color: $color-bombay;
    font-size: $font-size-sm;
    line-height: 1.5;
  }

  &__tenure--position {
    color: $color-catskill-white;
    border-color: rgba($color-white, 0.14);
    background-color: rgba($color-white, 0.05);
  }

  &__list-competencies {
    margin: 1rem 0 0 1.1rem;
    color: $color-catskill-white;
    font-size: $font-size-base;
    line-height: 1.65;

    &--position {
      margin-top: 1rem;
    }
  }

  &__competencies {
    padding: 0.35rem 0 0.35rem 0.25rem;

    &::marker {
      color: $color-web-orange;
    }
  }

  &__skills {
    margin-top: 1.75rem;
    padding-top: 1.5rem;
    border-top: 1px solid rgba($color-white, 0.1);
  }

  &__skills-title {
    display: flex;
    gap: 0.65rem;
    align-items: center;
    color: $color-white;
    @include font-weight(medium);
    font-size: $font-size-base;
  }

  &__list-tools {
    display: flex;
    gap: 0.6rem;
    margin-top: 1rem;
    list-style: none;
    flex-wrap: wrap;
  }

  &__tools {
    display: inline-flex;
    padding: 0.4rem 0.75rem;
    border: 1px solid rgba($color-web-orange, 0.28);
    border-radius: 0.5rem;
    background-color: rgba($color-web-orange, 0.055);
    color: $color-catskill-white;
    @include font-weight(medium);
    font-size: $font-size-sm;
    transition:
      border-color $motion-duration-fast $motion-ease-standard,
      background-color $motion-duration-fast $motion-ease-standard,
      color $motion-duration-fast $motion-ease-standard,
      transform $motion-duration-base $motion-ease-emphasized;

    @media (hover: hover) and (pointer: fine) {
      &:hover {
        border-color: rgba($color-web-orange, 0.5);
        background-color: rgba($color-web-orange, 0.1);
        color: $color-white;
        transform: translateY(-1px);
      }
    }
  }
}
</style>
