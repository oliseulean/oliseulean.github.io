<script setup>
/* Imports */
import { reactive, computed } from 'vue';

import SkillsAndTools from '../components/SkillsAndTools';
import PageTitle from '../components/PageTitle';

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
  if (!e) return;
  const getToogleValue = e.target.innerHTML;

  /* eslint-disable-next-line no-undef */
  gtag('event', 'Technologies', {
    event_category: 'Olimpiu Seulean Portfolio',
    event_label: getToogleValue,
    value: 1,
  });
};
</script>

<template>
  <div class="app-technologies">
    <div class="app-technologies-section">
      <PageTitle :color="globalStore?.colors?.colorWebOrange">
        MY SKILLS
      </PageTitle>
      <div class="app-technologies-section-container">
        <div class="app-technologies-section-container__button-group">
          <p class="app-technologies-section-container__title">
            What My Programming Skills Included?
          </p>

          <p class="app-technologies-section-container__subtitle">
            I develop simple, intuitive and responsive user interface that helps
            users get things done with less effort and time with those
            technologies.
          </p>

          <ul class="app-technologies-section-container__items">
            <li v-for="(button, index) in state.buttons" :key="index">
              <button
                class="app-technologies-section-container__button-group--button"
                :class="button.class"
                @click="setActiveClass(button.id), technologiesGAEvent($event)"
              >
                {{ button.text }}
              </button>
            </li>
          </ul>
        </div>
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

      &__title {
        font-size: $font-size-medium;
        letter-spacing: 1px;
        color: $color-black;
        @include font-weight(bold);
        margin: 1rem 0 1.25rem;
        padding-right: 0;
        text-align: left;

        @include md {
          padding-right: 0;
        }

        @include lg {
          padding-right: 9rem;
        }
      }

      &__subtitle {
        color: $color-gray;
        @include font-weight(thin);
        font-size: $font-size-normal;
        margin: 1rem 0;
        padding-right: 0;
        text-align: left;

        @include md {
          padding-right: 0;
          margin: 1rem 0;
        }

        @include lg {
          padding-right: 5rem;
          margin: 1rem 0 3.5rem;
        }
      }

      &__button-group {
        width: 100%;
        color: $color-white;
        text-align: center;

        @include md {
          width: 100%;
        }

        @include lg {
          width: 50%;
        }

        &--button {
          width: 80px;
          height: 40px;
          list-style-type: none;
          cursor: pointer;
          border: none;
          background: $color-black-pearl;
          color: $color-white;
          border-radius: 30px;

          @include font-weight(bold);

          &.active {
            background: $color-web-orange;
            border-radius: 30px;
          }
        }
      }

      &__items {
        display: flex;
        list-style-type: none;
        margin: 2rem auto;
        width: 150px;
        background: $color-black-pearl;
        border-radius: 30px;
        justify-content: left;

        @include md {
          width: 150px;
        }

        @include lg {
          width: 150px;
          margin: 0 !important;
        }
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
