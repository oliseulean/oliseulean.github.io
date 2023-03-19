<script setup>
/* Imports */
import PageTitle from '../components/PageTitle.vue';
/* Props */
const props = defineProps({
  studies: {
    type: Object,
    required: true,
  },
  globalStore: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="app-studies">
    <PageTitle
      :color="props.globalStore?.colors?.colorWhite"
      align-items="left"
      text-align="left"
    >
      STUDIES
    </PageTitle>
    <div
      v-for="(university, index) in props.studies"
      :key="index"
      class="app-studies__studies"
    >
      <p class="app-studies__university-title">
        <a
          :href="university.uniWebsite"
          target="_blank"
          class="app-studies__university-title--color"
        >
          {{ university.uniName }}
        </a>
        - {{ university.city }}
      </p>

      <p class="app-studies__specialization-title">
        {{ university.specialization }}
      </p>

      <p class="app-studies__grade-title">
        Grade:
        <span class="app-studies__grade-title--color">
          {{ university.grade }}
        </span>
      </p>

      <p class="app-studies__university-thesis">
        {{ university.thesis }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app-studies {
  &__studies {
    color: $color-white;
    @include font-roboto-slab();
    @include font-weight(thin);

    &:not(:last-of-type) {
      padding-bottom: 3rem;
      margin-bottom: 3rem;
      border-bottom: 1px solid rgba($color-white, 0.25);
    }
  }

  &__university-title {
    color: $color-white;
    margin-bottom: 1.5rem;
    font-size: 1.4rem;
    @include font-weight(thin);
    line-height: 30px;

    &--color {
      @include line-hover();
      @include color-web-orange-style();
    }

    @include md {
      font-size: 1.5rem;
    }

    @include lg {
      font-size: 1.75rem;
    }
  }

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
      @include color-web-orange-style();
    }
  }

  &__university-thesis {
    font-size: $font-size-normal;
  }
}
</style>
