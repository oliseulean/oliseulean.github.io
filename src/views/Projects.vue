<script setup>
/* Imports */
import {
  ref,
  computed,
} from 'vue';
import PageTitle from '../components/PageTitle.vue';
import sendGAEvent from '../helpers/sendAnalyticsEvent';

/* Props */
const props = defineProps({
  globalStore: {
    type: Object,
    default: () => ({}),
  },
  projectsStore: {
    type: Object,
    default: () => ({}),
  },
});

/* State */
const state = ref({
  maxProjectsShown: 3,
});

const visibleProjects = computed(() => props.projectsStore?.projects?.slice(0, state.value.maxProjectsShown));

const showMoreProjectsButton = computed(() => state.value.maxProjectsShown < props.projectsStore?.projects?.length);

const loadMoreProjects = () => state.value.maxProjectsShown += 3;

const handlerLoadMoreProjects = () => {
  loadMoreProjectsBtnGAEvent();
  loadMoreProjects();
};

const displayNameButton = project => project?.wordpress ? 'See Website' : 'See code';

/* Google Analytics */
const projectsBtnGAEvent = e => {
  const getProjectUrl = e?.target?.href;
  const cleanUpGithubUrl = getProjectUrl.replace('https://github.com/oliseulean/', '');
  sendGAEvent('Olimpiu Seulean Portfolio', 'Projects click', cleanUpGithubUrl, 1);
};

const loadMoreProjectsBtnGAEvent = () => sendGAEvent('Olimpiu Seulean Portfolio', 'Projects click', 'Show More Projects', 1);
</script>

<template>
  <div class="projects">
    <div class="projects-section">
      <PageTitle
        :color="props.globalStore?.colors?.colorMirage"
      >
        FEATURED PROJECTS
      </PageTitle>
      <div
        v-for="(project, index) in visibleProjects"
        :key="index"
        class="projects-section-card"
      >
        <div class="projects-section-card__image">
          <a
            :href="project.link"
            target="_blank"
            class="projects-section-card__image"
            @click="projectsBtnGAEvent($event)"
          >
            <img
              :alt="project.name"
              :src="project.imgUrl"
              height="600"
              width="1440"
              loading="lazy"
            >
          </a>
        </div>
        <div class="projects-section-card__content">
          <p class="projects-section-card__project-name">
            {{ project.name }}
          </p>
          <p class="projects-section-card__project-description">
            {{ project.description }}
          </p>
          <a
            :href="project.link"
            target="_blank"
            class="projects-section-card__see-code-btn"
            @click="projectsBtnGAEvent($event)"
          >
            {{ displayNameButton(project) }}
          </a>
          <hr class="projects-section-card__spacer">
        </div>
      </div>
      <button
        v-if="showMoreProjectsButton"
        class="projects-section__show-more-button"
        @click="handlerLoadMoreProjects"
      >
        SHOW MORE PROJECTS
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.projects {
  display: flex;
  flex-direction: column;
  align-items: center;
  @include font-roboto-slab;

  &-section {
    width: 70%;

    @include md {
      width: 75%;
    }

    @include lg {
      width: 85%;
    }

    &-card {
      display: flex;
      width: 100%;
      flex-direction: column;

      @include md {
        flex-direction: column;
        align-items: center;
      }

      @include lg {
        flex-direction: row;
      }

      &:last-child {
        padding-bottom: 4rem;
      }

      &__image {
        width: 100%;
        margin: auto 0;
        display: flex;
        justify-content: center !important;

        &:hover {
          @include transition;
        }

        @include md {
          width: 50%;
        }

        @include lg {
          width: 50%;
        }

        img {
          height: 260px;

          @include md {
            height: 400px;
          }

          @include lg {
            width: 1440px;
            height: 600px;
          }
        }
      }

      &__content {
        width: 100%;
        padding: 0.5rem 0;
        text-align: center;

        @include md {
          width: 100%;
          padding: 0 6rem;
          text-align: center;
        }

        @include lg {
          width: 50%;
          padding: 5rem;
          text-align: left;
        }
      }

      &__project-name {
        font-size: 1.25rem;
        color: $color-black;
        @include font-weight(bold);

        @include md {
          font-size: $font-size-medium;
        }

        @include lg {
          font-size: $font-size-medium;
        }
      }

      &__project-description {
        margin-top: 1rem;
        color: $color-gray;
        @include font-weight(thin);
        font-size: 0.875rem;

        @include md {
          font-size: $font-size-normal;
        }

        @include lg {
          font-size: $font-size-normal;
        }
      }

      &__see-code-btn {
        @include black-button;
        margin: 2.5rem auto;

        @include lg {
          margin: 2rem 0;
        }

        &:hover {
          @include transition;
          color: $color-white;
        }
      }

      &__spacer {
        position: absolute;
        left: 0;
        right: 0;
        width: 275px;
        border: 0.2px solid $color-bombay;
        margin: 2rem auto 0;

        @include md {
          margin-top: -1rem;
        }

        @include lg {
          margin-top: 12rem;
        }
      }
    }

    &__show-more-button {
      margin: 3rem auto 6rem !important;
      text-align: center;
      @include black-button;

      @include md {
        margin: 1.5rem auto 5rem !important;
      }

      @include lg {
        margin: 1.5rem auto 5rem !important;
      }

      &:hover {
        @include transition;
        color: $color-white;
      }
    }
  }
}

/*
 * Hide the spacer for the last elem
 */
div > div:last-child > div > hr {
  border: none !important;
}

// stylelint-disable-next-line selector-class-pattern
:deep(.page-title__heading) {
  padding-bottom: 0;
}
</style>
