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
  activeCategoryId: 0,
});

const buttons = [
  {
    id: 0,
    text: 'Skills',
  },
  {
    id: 1,
    text: 'Tools',
  },
];

const activeIcons = computed(() => state.value.activeCategoryId === 0 ? props.technologies : props.tools);

const handleCategoryChange = id => {
  state.value.activeCategoryId = id;
  const selectedCategory = buttons.find(button => button.id === id)?.text;

  if (selectedCategory) {
    sendGAEvent('Olimpiu Seulean Portfolio', 'Technologies click', selectedCategory, 1);
  }
};
</script>

<template>
  <section
    id="skills"
    class="technologies"
  >
    <div class="technologies__section">
      <PageTitle
        :color="colors.colorWhite"
        align="left"
      >
        MY SKILLS
      </PageTitle>

      <div class="technologies__panel">
        <Toggle
          :buttons="buttons"
          :active-id="state.activeCategoryId"
          title="What My Programming Skills Included?"
          subtitle="I develop simple, intuitive and responsive user interface that helps users get things done with less effort and time with those technologies."
          @update:active-id="handleCategoryChange"
        />

        <div class="technologies__skills">
          <Transition
            name="skills-grid"
            mode="out-in"
          >
            <SkillsAndTools
              :key="state.activeCategoryId"
              :icons="activeIcons"
            />
          </Transition>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.technologies {
  display: flex;
  flex-direction: column;
  align-items: center;
  @include section-spacing;
  @include section-divider;
  background:
    radial-gradient(circle at 0 40%, rgba($color-web-orange, 0.06), transparent 30rem),
    $color-black-pearl;
  @include font-primary;

  &__section {
    @include content-section;
  }

  &__panel {
    display: grid;
    gap: 2rem;
    padding: 1.5rem;
    @include surface-card;
    @include interactive-card(0);

    @include md {
      padding: 2rem;
    }

    @include lg {
      grid-template-columns: minmax(16rem, 0.7fr) minmax(0, 1.3fr);
      gap: 3rem;
      align-items: center;
    }
  }

  &__skills {
    min-width: 0;
    color: $color-white;
  }
}

.skills-grid-enter-active,
.skills-grid-leave-active {
  transition: opacity $motion-duration-base $motion-ease-standard, transform $motion-duration-base $motion-ease-emphasized;
}

.skills-grid-enter-from {
  opacity: 0;
  transform: translateY(0.5rem);
}

.skills-grid-leave-to {
  opacity: 0;
  transform: translateY(-0.35rem);
}
</style>
