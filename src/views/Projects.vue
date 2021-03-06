<template>
  <div class="app-projects">
    <div class="app-projects-section">
      <PageTitle :color="globalStore?.colors?.colorDark">
        FEATURED PROJECTS
      </PageTitle>
      <div
        v-for="(project, index) in visibleProjects"
        :key="index"
        class="app-projects-section-card"
      >
        <div class="app-projects-section-card__image">
          <img
            :src="project.imgUrl"
            alt="Project Image"
            width="570"
            height="320"
            loading="lazy"
          />
        </div>
        <div class="app-projects-section-card__content">
          <p class="app-projects-section-card__project-name">
            {{ project.name }}
          </p>
          <p class="app-projects-section-card__project-description">
            {{ project.description }}
          </p>
          <a
            :href="project.link"
            target="_blank"
            class="app-projects-section-card__see-code-btn"
            @click="projectsBtnGAEvent($event)"
          >
            {{ displayNameButton(project) }}
          </a>
          <hr class="app-projects-section-card__spacer" />
        </div>
      </div>
      <button
        v-if="showMoreProjectsButton"
        class="app-projects-section__show-more-button"
        @click="handlerLoadMoreProjects"
      >
        SHOW MORE PROJECTS
      </button>
    </div>
  </div>
</template>

<script setup>
/*
 * Imports
 */
import PageTitle from '../components/PageTitle.vue';
import { useProjectsStore } from '../stores/projects';
import { useGlobalStore } from '../stores/global';
import { ref, computed } from 'vue';

/*
 * Store
 */
const storeProjects = useProjectsStore();
const globalStore = useGlobalStore();

/*
 * Handle showMore projects
 */
const maxProjectsShown = ref(3);

const visibleProjects = computed(() => {
  return storeProjects?.projects?.slice(0, maxProjectsShown.value);
});

const loadMoreProjects = () => {
  return maxProjectsShown.value += 3;
};

const handlerLoadMoreProjects = () => {
  loadMoreProjectsBtnGAEvent();
  loadMoreProjects();
};

const showMoreProjectsButton = computed(() => {
  return maxProjectsShown.value < storeProjects?.projects?.length;
});

const displayNameButton = project => {
  return project?.wordpress === true ? 'See Website' : 'See code';
};

/*
 * Google Analytics
 */
const projectsBtnGAEvent = e => {
  if (!e) return;
  const getProjectUrl = e?.target?.href;
  const cleanUpGithubUrl = getProjectUrl.replace(
    'https://github.com/oliseulean/',
    ''
  );
  /* eslint-disable-next-line no-undef */
  gtag('event', 'Projects click', {
    event_category: 'Olimpiu Seulean Portfolio',
    event_label: cleanUpGithubUrl,
    value: 1,
  });
};

const loadMoreProjectsBtnGAEvent = () => {
  /* eslint-disable-next-line no-undef */
  gtag('event', 'Projects click', {
    event_category: 'Olimpiu Seulean Portfolio',
    event_label: 'Show More Projects',
    value: 1,
  });
};
</script>

<style lang="scss" scoped>
.app-projects {
  display: flex;
  flex-direction: column;
  align-items: center;
  @include font-roboto-slab();

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
      padding: 2rem 0;

      @include md {
        flex-direction: column;
        align-items: center;
        padding: 3.5rem 0;
      }

      @include lg {
        flex-direction: row;
        padding: 0 0 10rem 0;
      }

      &__image {
        width: 100%;
        margin: auto 0;
        display: flex;
        justify-content: center !important;

        &:hover {
          @include transition();
        }

        @include md {
          width: 50%;
        }

        @include lg {
          width: 50%;
        }

        img {
          width: 325px;
          height: 190px;

          @include md {
            width: 500px;
            height: 275px;
          }

          @include lg {
            width: 570px;
            height: 320px;
          }
        }
      }

      &__content {
        width: 100%;
        padding: 3rem 0;
        text-align: center;

        @include md {
          width: 100%;
          padding: 2rem 6rem 0 6rem;
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
        color: $color-dark;
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
        color: $color-shadow-middle-gray;
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
        @include black-button();
        margin: 2.5rem auto;

        @include lg {
          margin: 2rem 0;
        }

        &:hover {
          @include transition();
        }
      }

      &__spacer {
        position: absolute;
        left: 0;
        right: 0;
        width: 275px;
        border: 0.2px solid $color-white-gray;
        margin: 2rem auto 0 auto;

        @include md {
          margin-top: -1rem;
        }

        @include lg {
          margin-top: 10rem;
        }
      }
    }

    &__show-more-button {
      margin: 3rem auto 4rem auto !important;
      text-align: center;
      @include black-button();

      @include md {
        margin: 0 auto 5rem auto !important;
      }

      @include lg {
        margin: 0 auto 5rem auto !important;
      }

      &:hover {
        @include transition();
      }
    }
  }
}

.app-title {
  padding-bottom: 0;

  @include md {
    padding-bottom: 0;
  }

  @include lg {
    padding-bottom: 2rem;
  }
}

/*
 * Hide the spacer for the last elem
 */
div > div:last-child > div > hr {
  border: none !important;
}
</style>
