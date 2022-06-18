<template>
  <div class="app__projects">
    <PageTitle
      :color="storeProjects.colors.colorDark"
      class="app__projects__title"
    >
      FEATURED PROJECTS
    </PageTitle>
    <div class="app__projects__container">
      <div
        class="app__projects__container__card"
        v-for="storeProject in storeProjects.projects"
        :key="storeProject.id"
      >
        <div class="app__projects__container__card-image">
          <picture>
            <img :src="storeProject.imgUrl" alt="Project Image" width="30" height="30" />
          </picture>
        </div>
        <div class="app__projects__container__card-heading">
          {{ storeProject.name }}
        </div>
        <div class="app__projects__container__card__tag">
          <button
            class="app__projects__container__card__tag-btn"
            v-for="tag in storeProject.tags"
            :key="tag.id"
            :style="tag.color"
          >
            {{ tag.name }}
          </button>
        </div>
        <div class="app__projects__container__card-description">
          {{ storeProject.description }}
        </div>
        <div class="app__projects__container__card-github">
          <a
            v-for="socialLinks in storeProject.socialLinks"
            :key="socialLinks.link"
            :href="socialLinks.link"
            v-tooltip="socialLinks.link"
            target="_blank"
          >
            <img
              :src="socialLinks.icon"
              width="30"
              height="30"
              :alt="socialLinks.icon"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
/*
  imports
*/
import PageTitle from '../components/PageTitle.vue';
import { useProjectsStore } from '@/stores/projects';

/*
  projects store
*/

const storeProjects = useProjectsStore();
</script>

<style lang="scss" scoped>
.app__projects {
  padding: 0 2rem;
  padding-bottom: 7rem !important;

  @include sm {
    padding-left: 5rem;
  }

  @include lg {
    padding: 0 5.15rem;
  }

  &__title {
    padding: 5rem 0;
  }

  &__container {
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;

    &__card {
      height: auto;
      padding: 1rem;
      align-items: flex-start;

      display: flex;
      flex-direction: column;
      align-items: left;
      justify-content: space-around;
      background-color: $color-white;
      margin: 0.5rem;

      border-radius: 2px;
      box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2);
      transition: 0.4s ease-out;

      @include sm {
        width: calc(50% - 1rem);
        margin: 0.5rem;
      }

      @include lg {
        width: calc(33.3333% - 2em);
        margin: 1em;
      }

      &:hover {
        transform: translateY(-5px);
        box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.3);
        transition: 0.4s ease-out;
      }

      &-image {
        width: 100%;
        flex-shrink: 0;

        @include sm {
          height: 250px;
        }

        @include lg {
          width: 100%;
        }

        img {
          width: 100%;
          object-fit: cover;
          height: 100%;
        }
      }

      &-heading {
        @include font-open-sans();
        @include font-weight(bold);
        font-size: $font-size-normal;
        line-height: 1.25rem;
        height: auto;
        margin: 1rem 0;

        @include sm {
          height: auto;
          margin-bottom: 1rem;
        }

        @include lg {
          min-height: 3.25rem;
          margin-bottom: 0;
        }
      }

      &__tag {
        margin-left: -0.5rem;

        &-btn {
          @include font-open-sans();
          margin: 0 0.5rem 1rem;
          padding: 0.5rem 0.8rem;
          border: none;
          outline: none;
          color: $color-white-light;
          border-radius: 20px;
          letter-spacing: 0.05rem;
        }
      }

      &-description {
        height: 100%;
      }

      &-github {
        margin-top: 2rem;
        a:not(:first-child) {
          img {
            margin-left: 1rem;
          }
        }
      }
    }
  }
}
</style>
