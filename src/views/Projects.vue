<script setup>
/* Imports */
import {
  ref,
  computed,
} from 'vue';
import PageTitle from '../components/PageTitle.vue';
import { sendGAEvent } from '../helpers/sendAnalyticsEvent.js';
import { colors } from '../helpers/colorsHelper.js';

/* Props */
const props = defineProps({
  projects: {
    type: Array,
    default: () => ([]),
  },
});

/* State */
const state = ref({
  maxProjectsShown: 3,
});

const visibleProjects = computed(() => props.projects.slice(0, state.value.maxProjectsShown));

const showMoreProjectsButton = computed(() => state.value.maxProjectsShown < props.projects.length);

const loadMoreProjects = () => {
  state.value.maxProjectsShown = Math.min(state.value.maxProjectsShown + 3, props.projects.length);
};

const handlerLoadMoreProjects = () => {
  loadMoreProjectsBtnGAEvent();
  loadMoreProjects();
};

const getProjectActionLabel = project => project?.isLive ? 'Visit website' : 'View source';
const getProjectTypeLabel = project => project?.isLive ? 'Live website' : 'Code project';

/* Google Analytics */
const projectsBtnGAEvent = e => {
  const projectUrl = e?.currentTarget?.href ?? '';
  const analyticsLabel = projectUrl.replace('https://github.com/oliseulean/', '');
  sendGAEvent('Olimpiu Seulean Portfolio', 'Projects click', analyticsLabel, 1);
};

const loadMoreProjectsBtnGAEvent = () => sendGAEvent('Olimpiu Seulean Portfolio', 'Projects click', 'Show More Projects', 1);
</script>

<template>
  <section
    id="projects"
    class="projects"
  >
    <div class="projects__section">
      <PageTitle
        :color="colors.colorWhite"
        align="left"
      >
        FEATURED PROJECTS
      </PageTitle>

      <TransitionGroup
        id="projects-grid"
        name="project-card"
        tag="div"
        class="projects__grid"
        appear
      >
        <article
          v-for="project in visibleProjects"
          :key="project.link"
          class="projects__card"
        >
          <a
            :href="project.link"
            target="_blank"
            rel="noopener noreferrer"
            class="projects__media"
            :aria-label="`${getProjectActionLabel(project)}: ${project.name}`"
            @click="projectsBtnGAEvent"
          >
            <img
              :alt="project.name"
              :src="project.imgUrl"
              height="600"
              width="1440"
              loading="lazy"
            >
            <span
              class="projects__media-action"
              aria-hidden="true"
            >↗</span>
          </a>

          <div class="projects__content">
            <span class="projects__type">
              {{ getProjectTypeLabel(project) }}
            </span>
            <h3 class="projects__name">
              {{ project.name }}
            </h3>
            <p class="projects__description">
              {{ project.description }}
            </p>
            <a
              :href="project.link"
              target="_blank"
              rel="noopener noreferrer"
              class="projects__link"
              @click="projectsBtnGAEvent"
            >
              {{ getProjectActionLabel(project) }}
              <span
                class="projects__link-icon"
                aria-hidden="true"
              >↗</span>
            </a>
          </div>
        </article>
      </TransitionGroup>

      <button
        v-if="showMoreProjectsButton"
        type="button"
        class="projects__show-more-button"
        aria-controls="projects-grid"
        @click="handlerLoadMoreProjects"
      >
        Show more projects
        <span
          class="projects__show-more-icon"
          aria-hidden="true"
        >+</span>
      </button>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.projects {
  display: flex;
  flex-direction: column;
  align-items: center;
  @include section-spacing;
  @include section-divider;
  background:
    radial-gradient(circle at 100% 30%, rgba($color-web-orange, 0.06), transparent 32rem),
    $color-black-pearl;
  @include font-primary;

  &__section {
    @include content-section;
  }

  &__grid {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: 1.25rem;

    @include md {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @include lg {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }

  &__card {
    --project-image-scale: 1;
    --project-action-opacity: 0;
    --project-action-transform: translate(0.35rem, -0.35rem);
    --project-link-transform: translate(0, 0);

    display: flex;
    min-width: 0;
    overflow: hidden;
    flex-direction: column;
    @include surface-card;
    @include interactive-card;

    @media (hover: hover) and (pointer: fine) {
      &:hover {
        --project-image-scale: 1.045;
        --project-action-opacity: 1;
        --project-action-transform: translate(0, 0);
        --project-link-transform: translate(0.12rem, -0.12rem);
      }
    }

    &:focus-within {
      --project-action-opacity: 1;
      --project-action-transform: translate(0, 0);
    }
  }

  &__media {
    position: relative;
    display: block;
    overflow: hidden;
    aspect-ratio: 16 / 10;
    border-bottom: 1px solid rgba($color-white, 0.1);
    background-color: rgba($color-black, 0.2);

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transform: scale(var(--project-image-scale));
      transition: transform $motion-duration-slow $motion-ease-emphasized;
    }
  }

  &__media-action {
    position: absolute;
    top: 1rem;
    right: 1rem;
    display: grid;
    place-items: center;
    width: 2.5rem;
    height: 2.5rem;
    border: 1px solid rgba($color-white, 0.2);
    border-radius: 50%;
    background-color: rgba($color-black-pearl, 0.82);
    color: $color-amber;
    opacity: var(--project-action-opacity);
    transform: var(--project-action-transform);
    backdrop-filter: blur(10px);
    transition: opacity $motion-duration-base $motion-ease-standard, transform $motion-duration-base $motion-ease-emphasized;
  }

  &__content {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: flex-start;
    padding: 1.5rem;
  }

  &__type {
    display: inline-flex;
    padding: 0.35rem 0.65rem;
    border: 1px solid rgba($color-web-orange, 0.28);
    border-radius: 999px;
    background-color: rgba($color-web-orange, 0.08);
    color: $color-amber;
    @include font-weight(medium);
    font-size: $font-size-sm;
  }

  &__name {
    margin-top: 1rem;
    color: $color-white;
    @include font-weight(bold);
    font-size: $font-size-lg;
    line-height: 1.4;
  }

  &__description {
    display: -webkit-box;
    flex: 1;
    overflow: hidden;
    margin-top: 0.75rem;
    color: $color-bombay;
    font-size: $font-size-base;
    line-height: 1.65;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
  }

  &__link {
    display: inline-flex;
    gap: 0.45rem;
    align-items: center;
    margin-top: 1.5rem;
    color: $color-web-orange;
    @include font-weight(bold);
    font-size: $font-size-sm;
    transition: color $motion-duration-base $motion-ease-standard, gap $motion-duration-base $motion-ease-standard;

    @media (hover: hover) and (pointer: fine) {
      &:hover {
        gap: 0.65rem;
        color: $color-amber;
      }
    }

    &:focus-visible {
      border-radius: 0.2rem;
      @include focus-ring(4px);
    }
  }

  &__link-icon,
  &__show-more-icon {
    display: inline-block;
    transition: transform $motion-duration-base $motion-ease-emphasized;
  }

  &__link-icon {
    transform: var(--project-link-transform);
  }

  &__show-more-button {
    --show-more-icon-transform: rotate(0);

    display: flex;
    gap: 0.6rem;
    align-items: center;
    margin: 2rem auto 0;
    padding: 0.75rem 1.1rem;
    border: 1px solid rgba($color-web-orange, 0.45);
    border-radius: 999px;
    background-color: rgba($color-web-orange, 0.08);
    color: $color-amber;
    @include font-primary;
    @include font-weight(bold);
    font-size: $font-size-sm;
    cursor: pointer;
    transition:
      background-color $motion-duration-base $motion-ease-standard,
      border-color $motion-duration-base $motion-ease-standard,
      box-shadow $motion-duration-base $motion-ease-standard,
      color $motion-duration-base $motion-ease-standard,
      transform $motion-duration-base $motion-ease-emphasized;

    @media (hover: hover) and (pointer: fine) {
      &:hover {
        border-color: $color-web-orange;
        background-color: $color-web-orange;
        box-shadow: 0 0.8rem 2rem rgba($color-web-orange, 0.16);
        color: $color-black-pearl;
        transform: translateY(-2px);

        --show-more-icon-transform: rotate(90deg);
      }
    }

    &:focus-visible {
      @include focus-ring;
    }
  }

  &__show-more-icon {
    transform: var(--show-more-icon-transform);
  }
}

.project-card-enter-active {
  transition: opacity $motion-duration-slow $motion-ease-standard, transform $motion-duration-slow $motion-ease-emphasized;
}

.project-card-enter-from {
  opacity: 0;
  transform: translateY(0.75rem) scale(0.985);
}
</style>
