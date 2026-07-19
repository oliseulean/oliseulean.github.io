<script setup>
/* Props */
const props = defineProps({
  buttons: {
    type: Array,
    default: () => ([]),
  },
  activeId: {
    type: [Number, String],
    default: 0,
  },
  title: {
    type: String,
    default: undefined,
  },
  subtitle: {
    type: String,
    default: undefined,
  },
});

/* Emits */
const emit = defineEmits(['update:activeId']);

const isButtonActive = (buttonId) => {
  return buttonId === props.activeId;
};

const getButtonClass = (buttonId) => ({
  'toggle__button': true,
  'toggle__button--active': isButtonActive(buttonId),
});

const handleButtonClick = (buttonId) => {
  emit('update:activeId', buttonId);
};
</script>

<template>
  <div class="toggle">
    <p
      v-if="props.title"
      class="toggle__title"
    >
      {{ props.title }}
    </p>

    <p
      v-if="props.subtitle"
      class="toggle__subtitle"
    >
      {{ props.subtitle }}
    </p>

    <ul class="toggle__list">
      <li
        v-for="button in props.buttons"
        :key="button.id"
        class="toggle__item"
      >
        <button
          type="button"
          class="toggle__button"
          :class="getButtonClass(button.id)"
          :aria-pressed="isButtonActive(button.id)"
          @click="handleButtonClick(button.id)"
        >
          {{ button.text }}
        </button>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.toggle {
  width: 100%;
  color: $color-white;
  text-align: left;

  &__title {
    margin: 0;
    color: $color-white;
    @include font-weight(bold);
    font-size: $font-size-lg;
    line-height: 1.5;
  }

  &__subtitle {
    max-width: 31rem;
    margin: 0.75rem 0 0;
    color: $color-bombay;
    @include font-weight(normal);
    font-size: $font-size-base;
    line-height: 1.65;
  }

  &__list {
    display: inline-flex;
    gap: 0.25rem;
    width: fit-content;
    margin: 1.5rem 0 0;
    padding: 0.25rem;
    border: 1px solid rgba($color-white, 0.12);
    border-radius: 999px;
    background-color: rgba($color-black, 0.2);
    list-style-type: none;
  }

  &__item {
    list-style-type: none;
  }

  &__button {
    min-width: 5.5rem;
    min-height: 2.5rem;
    padding: 0.55rem 1rem;
    border: none;
    border-radius: 999px;
    background-color: transparent;
    color: $color-bombay;
    @include font-weight(bold);
    font-size: $font-size-sm;
    cursor: pointer;
    transition:
      background-color $motion-duration-base $motion-ease-standard,
      box-shadow $motion-duration-base $motion-ease-standard,
      color $motion-duration-base $motion-ease-standard,
      transform $motion-duration-base $motion-ease-emphasized;

    @media (hover: hover) and (pointer: fine) {
      &:hover {
        color: $color-white;
        transform: translateY(-1px);
      }
    }

    &:focus-visible {
      @include focus-ring(2px);
    }

    &--active {
      background-color: $color-web-orange;
      box-shadow: 0 0.5rem 1.25rem rgba($color-web-orange, 0.2);
      color: $color-black-pearl;

      @media (hover: hover) and (pointer: fine) {
        &:hover {
          color: $color-black-pearl;
        }
      }
    }
  }
}
</style>
