<script setup>
/* Imports */
import { reactive, computed } from 'vue';

import SkillsAndTools from '../components/SkillsAndTools';
import PageTitle from '../components/PageTitle';
import Toggle from '../components/Toggle';

import sendGAEvent from '../helpers/sendAnalyticsEvent';

/* Props */
const props = defineProps({
  globalStore: {
    type: Object,
    required: true,
  },
  technologiesStore: {
    type: Object,
    required: true,
  },
});

/* State */
const state = reactive({
  previousActiveID: 0,
  buttons: [
    {
      id: 0,
      text: 'Skills',
      class: 'active',
    },
    {
      id: 1,
      text: 'Tools',
      class: '',
    },
  ],
  displaySkillsList: computed(() => state.previousActiveID === 0),
  displayToolsList: computed(() => state.previousActiveID === 1),
});

const setActiveClass = id => {
  if (state.previousActiveID === id) return;
  /* remove the active class from old active li */
  state.buttons.find(item => item.id === state.previousActiveID).class = '';
  /* set active class to new li */
  state.buttons.find(item => item.id === id).class = 'active';
  /* store the new active li id */
  state.previousActiveID = id;
};

/* Set GA tags for the technologies toogle btn */
const technologiesGAEvent = e => {
  const getToogleValue = e?.target?.innerHTML;
  sendGAEvent('Olimpiu Seulean Portfolio', 'Technologies click', getToogleValue, 1);
};
</script>

<template>
  <div class="app-technologies">
    <div class="app-technologies-section">
      <PageTitle
        :color="globalStore?.colors?.colorWebOrange"
      >
        MY SKILLS
      </PageTitle>
      <div class="app-technologies-section-container">
        <Toggle
          :buttons="state.buttons"
          :set-active-class="setActiveClass"
          @click="technologiesGAEvent($event)"
          :title="'What My Programming Skills Included?'"
          :subtitle="'I develop simple, intuitive and responsive user interface that helps users get things done with less effort and time with those technologies.'"
        />
        <div class="app-technologies-section-container__skills">
          <SkillsAndTools
            v-if="state.displaySkillsList"
            :icons="props.technologiesStore.technologies"
          />

          <SkillsAndTools
            v-if="state.displayToolsList"
            :icons="props.technologiesStore.tools"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app-technologies {
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

    &-container {
      display: flex;
      flex-direction: column;

      @include md {
        flex-direction: column;
      }

      @include lg {
        flex-direction: row;
      }

      &__skills {
        width: 100%;
        color: $color-white;
        padding-bottom: 1rem;

        @include md {
          width: 100%;
          padding-bottom: 0;
        }

        @include lg {
          width: 50%;
          padding-bottom: 6rem;
        }
      }
    }
  }
}

.app-title {
  padding: 0;

  @include md {
    padding: 0;
  }

  @include lg {
    padding: 2rem 0;
  }
}
</style>
