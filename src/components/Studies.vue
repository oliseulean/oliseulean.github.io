<script setup>
/* Imports */
import PageTitle from '../components/PageTitle.vue';

/* Props */
const props = defineProps({
  studies: {
    type: Object,
    default: () => ({}),
  },
  globalStore: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<template>
  <div class="studies">
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
      class="studies__entry"
    >
      <p class="studies__university-name">
        <a
          :href="university.uniWebsite"
          target="_blank"
          class="studies__university-name-link"
        >
          {{ university.uniName }}
        </a>
        <span class="studies__university-location">
          - {{ university.city }}
        </span>
      </p>

      <p class="studies__specialization">
        {{ university.specialization }}
      </p>

      <p class="studies__grade">
        Grade:
        <span class="studies__grade-value">
          {{ university.grade }}
        </span>
      </p>

      <p class="studies__thesis">
        {{ university.thesis }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.studies {
  &__entry {
    color: $color-white;
    @include font-roboto-slab;
    @include font-weight(thin);

    &:not(:last-of-type) {
      padding-bottom: 3rem;
      margin-bottom: 3rem;
      border-bottom: 1px solid rgba($color-white, 0.25);
    }
  }

  &__university-name {
    color: $color-white;
    margin-bottom: 1.5rem;
    font-size: 1.4rem;
    @include font-weight(thin);
    line-height: 1.875rem;

    &-link {
      @include line-hover;
      @include color-web-orange-style;
    }

    @include md {
      font-size: 1.5rem;
    }

    @include lg {
      font-size: 1.75rem;
    }
  }

  &__university-location {
    color: $color-white;
  }

  &__specialization {
    display: flex;
    align-items: center;
    font-size: 1.1rem;
  }

  &__grade,
  &__thesis {
    font-size: 1.2rem;
    font-style: italic;
    margin-top: 1rem;
  }

  &__grade-value {
    @include color-web-orange-style;
  }

  &__thesis {
    font-size: $font-size-normal;
    font-style: normal;
  }
}
</style>
