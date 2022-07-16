<template>
  <div class="app__projects">
    <PageTitle
      :color="globalStore?.colors?.colorDark"
      class="app__projects__title"
    >
      FEATURED PROJECTS
    </PageTitle>
    <div
      v-for="(project, index) in visibleProjects"
      :key="index"
      class="app__projects__card"
    >
      <div class="app__projects__card__image">
        <img
          :src="project.imgUrl"
          alt="Project Image"
          width="570"
          height="320"
          loading="lazy"
        >
      </div>
      <div class="app__projects__card__content">
        <p class="app__projects__card__content--projectName">
          {{ project.name }}
        </p>
        <p class="app__projects__card__content--projectDescription">
          {{ project.description }}
        </p>
        <a
          :href="project.link"
          target="_blank"
          class="app__projects__card__content-btn"
          @click="projectsBtnGAEvent($event)"
        >
          {{ displayNameButton(project) }}
        </a>
        <hr class="app__projects__card__content--spacer">
      </div>
    </div>
    <button
      v-if="showMoreProjectsButton"
      class="app__projects__showMoreButton"
      @click="handlerLoadMoreProjects"
    >
      SHOW MORE PROJECTS
    </button>
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
  return (maxProjectsShown.value += 3);
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
.app__projects {
  &__title {
    padding: 3rem 0 1rem 0;

    @include md {
      padding: 5rem 0 2rem 0;
    }

    @include lg {
      padding: 2rem 0 5rem 0;
    }
  }

  &__card {
    display: flex;
    width: 100%;
    flex-direction: column;
    padding: 3.5rem 0;
    @include font-roboto-slab();

    @include md {
      flex-direction: column;
      align-items: center;
      padding: 3.5rem 0;
    }

    @include lg {
      flex-direction: row;
      padding: 0 10rem 10rem 10rem;
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
      padding: 1rem 2.5rem 0 2.5rem;
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

      &--spacer {
        position: absolute;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        width: 275px;
        border: 0.2px solid $color-white-gray;
        margin-top: 2rem;

        @include md {
          margin-top: -1rem;
        }

        @include lg {
          margin-top: 10rem;
        }
      }

      &--projectName {
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

      &--projectDescription {
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

      &-btn {
        @include black-button();
        text-align: center;
        margin: 2.5rem auto;

        @include md {
          text-align: center;
        }

        @include lg {
          text-align: left;
          margin: 2rem 0;
        }

        &:hover {
          @include transition();
        }
      }
    }
  }

  &__showMoreButton {
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

/*
 * Hide the spacer for the last elem
 */
div > div:last-child > div > hr {
  border: none !important;
}
</style>
