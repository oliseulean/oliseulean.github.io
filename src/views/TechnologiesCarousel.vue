<template>
  <div class="app__technologies">
    <PageTitle
      :color="storeTechnologies.colors.colorOrangePrimary"
      class="app__technologies__title"
    >
      TOOLS &amp; TECHNOLOGIES
    </PageTitle>
    <Carousel
      :breakpoints="carousel.breakpoints"
      :autoplay="1"
      :wrapAround="true"
      :transition="1500"
    >
      <Slide
        v-for="storeTechnology in storeTechnologies.technologies"
        :key="storeTechnology.id"
      >
        <div class="carousel__item">
          <img
            :src="storeTechnology.source"
            width="50"
            height="50"
            alt="storeTechnology.title"
            loading="lazy"
          />
        </div>
      </Slide>
    </Carousel>
  </div>
</template>

<script setup>
/*
  imports
*/

import { shallowRef } from 'vue';
import { Carousel, Slide } from 'vue3-carousel';
import PageTitle from '../components/PageTitle.vue';
import { useTechnologies } from '@/stores/technologies';

/*
  technologies store
*/

const storeTechnologies = useTechnologies();

/*
  carousel settings
*/

const carousel = shallowRef({
  settings: {
    itemsToShow: 5,
    snapAlign: 'center',
  },
  breakpoints: {
    // value and up
    200: {
      itemsToShow: 3,
      snapAlign: 'center',
    },
    768: {
      itemsToShow: 5,
      snapAlign: 'center',
    },
    1024: {
      itemsToShow: 10,
      snapAlign: 'start',
    },
  },
});
</script>

<style lang="scss" scoped>
.app__technologies {
  height: auto;
  margin: 0 2rem;
  padding-bottom: 2rem;

  @include md {
    margin: 0 4.5rem;
  }

  @include lg {
    margin: 0 5.15rem;
  }

  &__title {
    padding: 5rem 0;
  }
}
</style>
