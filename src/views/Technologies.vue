<script setup>
/* Imports */
import {
  ref,
  computed,
} from 'vue';
import SkillsAndTools from '../components/SkillsAndTools.vue';
import PageTitle from '../components/PageTitle.vue';
import Toggle from '../components/Toggle.vue';
import { sendGAEvent } from '../helpers/sendAnalyticsEvent.js';
import { colors } from '../helpers/colorsHelper.js';

/* Props */
const props = defineProps({
  technologies: {
    type: Array,
    default: () => ([]),
  },
  tools: {
    type: Array,
    default: () => ([]),
  },
});

/* State */
const state = ref({
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
  displaySkillsList: computed(() => state.value.previousActiveID === 0),
  displayToolsList: computed(() => state.value.previousActiveID === 1),
});

/* Set active class to the clicked btn */
const setActiveClass = id => {
  if (state.value.previousActiveID === id) return;
  /* remove the active class from old active li */
  state.value.buttons.find(item => item.id === state.value.previousActiveID).class = '';
  /* set active class to new li */
  state.value.buttons.find(item => item.id === id).class = 'active';
  /* store the new active li id */
  state.value.previousActiveID = id;
};

/* Set GA tags for the technologies toogle btn */
const technologiesGAEvent = e => {
  const getToogleValue = e?.target?.innerHTML;
  sendGAEvent('Olimpiu Seulean Portfolio', 'Technologies click', getToogleValue, 1);
};
</script>

<template>
  <div class="technologies">
    <div class="technologies-section">
      <PageTitle
        :color="colors.colorWebOrange"
      >
        MY SKILLS
      </PageTitle>
      <div class="technologies-section-container">
        <Toggle
          :buttons="state.buttons"
          :set-active-class="setActiveClass"
          title="What My Programming Skills Included?"
          subtitle="I develop simple, intuitive and responsive user interface that helps users get things done with less effort and time with those technologies."
          @click="technologiesGAEvent($event)"
        />
        <div class="technologies-section-container__skills">
          <SkillsAndTools
            v-if="state.displaySkillsList"
            :icons="props.technologies"
          />

          <SkillsAndTools
            v-if="state.displayToolsList"
            :icons="props.tools"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.technologies {
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

.page-title {
  padding: 0;

  @include md {
    padding: 0;
  }

  @include lg {
    padding: 2rem 0;
  }
}
</style>
