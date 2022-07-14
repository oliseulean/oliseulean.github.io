<template>
  <div class="app__projects">
    <PageTitle
      :color="globalStore?.colors?.colorDark"
      class="app__projects__title"
    >
      FEATURED PROJECTS
    </PageTitle>
    <div
      class="app__projects__card"
      v-for="project in visibleProjects"
      :key="project.id"
    >
      <div class="app__projects__card__image">
        <img
          :src="project.imgUrl"
          alt="Project Image"
          width="570"
          height="320"
          loading="lazy"
        />
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
        >
          {{ displayNameButton(project) }}
        </a>
        <hr class="app__projects__card__content--spacer" />
      </div>
    </div>
    <button
      v-if="showMoreProjectsButton"
      class="app__projects__showMoreButton"
      @click="loadMoreProjects"
    >
      show more projects
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

const showMoreProjectsButton = computed(() => {
  return maxProjectsShown.value < storeProjects?.projects?.length;
});

const displayNameButton = project => {
  return project?.wordpress === true ? 'See Website' : 'See code';
};
</script>

<style lang="scss" scoped>
.app__projects {
  &__title {
    padding: 5rem 0 2rem 0;

    @include md {
      padding: 5rem 0 2rem 0;
    }

    @include lg {
      padding: 5rem 0;
    }
  }

  &__card {
    display: flex;
    width: 100%;
    flex-direction: column;
    padding: 3.5rem 0;

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
        font-size: $font-size-medium;
        color: $color-dark;
        @include font-weight(bold);
      }

      &--projectDescription {
        margin-top: 1rem;
        color: $color-shadow-middle-gray;
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
