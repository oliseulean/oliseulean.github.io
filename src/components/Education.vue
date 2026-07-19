<script setup>
/* Imports */
import PageTitle from '../components/PageTitle.vue';
import { colors } from '../helpers/colorsHelper.js';

/* Props */
const props = defineProps({
  education: {
    type: Array,
    default: () => ([]),
  },
});
</script>

<template>
  <div class="education">
    <PageTitle
      :color="colors.colorWhite"
      align="left"
    >
      EDUCATION
    </PageTitle>

    <div class="education__list">
      <article
        v-for="university in props.education"
        :key="`${university.uniName}-${university.degree}`"
        class="education__entry"
      >
        <header class="education__header">
          <div>
            <h3 class="education__university-name">
              <a
                :href="university.uniWebsite"
                target="_blank"
                rel="noopener noreferrer"
                class="education__university-link"
              >
                {{ university.uniName }}
              </a>
            </h3>
            <h4 class="education__degree">
              {{ university.degree }}
            </h4>
            <p class="education__field">
              {{ university.field }}
            </p>
          </div>

          <span class="education__period">
            {{ university.period }}
          </span>
        </header>

        <div class="education__metadata">
          <span>{{ university.city }}</span>
          <span v-if="university.distinction">{{ university.distinction }}</span>
          <span class="education__grade">Grade {{ university.grade }}</span>
        </div>

        <div
          v-if="university.thesis"
          class="education__thesis"
        >
          <span class="education__thesis-label">Thesis</span>
          <p>{{ university.thesis }}</p>
        </div>
      </article>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.education {
  &__list {
    display: grid;
    gap: 1.25rem;
  }

  &__entry {
    padding: 1.5rem;
    @include surface-card;
    @include interactive-card;
    color: $color-white;
    @include font-primary;
    @include font-weight(thin);

    @include md {
      padding: 2rem;
    }
  }

  &__header {
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
  }

  &__university-name {
    margin: 0;
    font-size: $font-size-xl;
    line-height: 1.5;
    @include font-weight(bold);

    @include md {
      font-size: $font-size-2xl;
    }
  }

  &__university-link {
    @include line-hover;
    @include color-web-orange-style;
  }

  &__degree {
    margin-top: 0.25rem;
    color: $color-white;
    font-size: $font-size-md;
    line-height: 1.5;
    @include font-weight(medium);

    @include md {
      font-size: $font-size-lg;
    }
  }

  &__field {
    margin-top: 0.25rem;
    color: $color-bombay;
    font-size: $font-size-base;
    line-height: 1.55;
  }

  &__period {
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
    margin-top: 1.25rem;
    flex-wrap: wrap;

    span {
      padding: 0.35rem 0.65rem;
      border: 1px solid rgba($color-white, 0.1);
      border-radius: 999px;
      background-color: rgba($color-white, 0.045);
      color: $color-catskill-white;
      font-size: $font-size-sm;
    }

    span:last-child {
      border-color: rgba($color-web-orange, 0.25);
      color: $color-amber;
    }
  }

  &__thesis {
    margin-top: 1.5rem;
    padding: 1rem 1.1rem;
    border-left: 3px solid rgba($color-web-orange, 0.7);
    border-radius: 0 0.65rem 0.65rem 0;
    background-color: rgba($color-black, 0.12);
    color: $color-catskill-white;
    font-size: $font-size-base;
    line-height: 1.6;
    transition: border-color $motion-duration-base $motion-ease-standard, background-color $motion-duration-base $motion-ease-standard;

    @media (hover: hover) and (pointer: fine) {
      &:hover {
        border-color: $color-web-orange;
        background-color: rgba($color-web-orange, 0.045);
      }
    }
  }

  &__thesis-label {
    display: block;
    margin-bottom: 0.3rem;
    color: $color-web-orange;
    @include font-weight(bold);
    font-size: $font-size-xs;
    letter-spacing: 0.09em;
    text-transform: uppercase;
  }
}
</style>
