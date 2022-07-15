<template>
  <div class="app__technologies">
    <PageTitle
      :color="globalStore?.colors?.colorOrangePrimary"
      class="app__technologies__title"
    >
      MY SKILLS
    </PageTitle>
    <div class="app__technologies__container">
      <div class="app__technologies__container__buttonGroup">
        <p class="app__technologies__container__buttonGroup--title">
          What My Programming Skills Included?
        </p>
        <p class="app__technologies__container__buttonGroup--subtitle">
          I develop simple, intuitive and responsive user interface that helps
          users get things done with less effort and time with those
          technologies.
        </p>
        <ul>
          <li v-for="(button, index) in buttons" :key="index">
            <button
              class="app__technologies__container__buttonGroup--button"
              :class="button.class"
              @click="setActiveClass(button.id)"
            >
              {{ button.text }}
            </button>
          </li>
        </ul>
      </div>
      <div class="app__technologies__container__skills">
        <SkillsAndTools
          v-if="displaySkillsList"
          :tags="storeTechnologies.technologies"
        />

        <SkillsAndTools
          v-if="displayToolsList"
          :tags="storeTechnologies.tools"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
/*
 * Imports
 */
import { ref, reactive, computed } from 'vue';

import { useTechnologies } from '../stores/technologies';
import { useGlobalStore } from '../stores/global';

import SkillsAndTools from '../components/SkillsAndTools';
import PageTitle from '../components/PageTitle';

/*
 * Store
 */
const storeTechnologies = useTechnologies();
const globalStore = useGlobalStore();

/*
 * Handle active class for the buttons
 */
const previousActiveID = ref(0);
const buttons = reactive([
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
]);

const setActiveClass = id => {
  if (previousActiveID.value === id) return;
  /* remove the active class from old active li */
  buttons.find(item => item.id === previousActiveID.value).class = '';
  /* set active class to new li */
  buttons.find(item => item.id === id).class = 'active';
  /* store the new active li id */
  previousActiveID.value = id;
};

/*
 * Handle display list of the items
 */
const displaySkillsList = computed(() => previousActiveID.value === 0);

const displayToolsList = computed(() => previousActiveID.value === 1);
</script>

<style lang="scss" scoped>
.app__technologies {
  padding: 0 2rem 2rem 2rem;

  @include md {
    padding: 0;
  }

  @include lg {
    padding: 0 7rem 7rem 7rem;
  }

  &__title {
    padding: 5rem 0 2rem 0;

    @include md {
      padding: 5rem 0 2rem 0;
    }

    @include lg {
      padding: 5rem 0;
    }
  }

  &__container {
    display: flex;
    @include font-roboto-slab();
    flex-direction: column;

    @include md {
      flex-direction: column;
    }

    @include lg {
      flex-direction: row;
    }

    &__buttonGroup {
      width: 100%;
      color: $color-white;
      text-align: center;
      padding: 0 1.25rem;

      @include md {
        width: 100%;
        padding: 0 6rem;
      }

      @include lg {
        width: 50%;
        padding: 0;
      }

      &--title {
        font-size: 1.5rem;
        letter-spacing: 1px;
        color: $color-dark;
        @include font-weight(bold);
        margin-bottom: 1.25rem;
        margin-top: 1rem;
        padding-right: 0;
        text-align: left;

        @include md {
          padding-right: 0;
        }

        @include lg {
          padding-right: 9rem;
        }
      }

      &--subtitle {
        color: $color-shadow-middle-gray;
        @include font-weight(thin);
        font-size: 1rem;
        margin: 1rem 0;
        padding-right: 0;
        text-align: left;

        @include md {
          padding-right: 0;
          margin: 1rem 0;
        }

        @include lg {
          padding-right: 5rem;
          margin: 1rem 0 3.5rem 0;
        }
      }

      ul {
        list-style-type: none;
        display: flex;
        margin: 2rem auto;
        width: 150px;
        background: $color-dark-blue;
        border-radius: 30px;

        @include md {
          width: 150px;
        }

        @include lg {
          width: 150px;
          margin: 0 !important;
          justify-content: left;
        }
      }

      &--button {
        width: 80px;
        height: 40px;
        list-style-type: none;
        cursor: pointer; /* Pointer/hand icon */
        border: none;
        background: $color-dark-blue;
        color: $color-white;
        border-radius: 30px;
        font-weight: bold;

        &.active {
          background: $color-orange-primary;
          border-radius: 30px;
        }
      }
    }

    &__skills {
      width: 100%;
      color: $color-white;
      padding: 0;

      @include md {
        width: 100%;
        padding: 0 6rem;
      }

      @include lg {
        width: 50%;
        padding: 0;
      }
    }
  }
}
</style>
