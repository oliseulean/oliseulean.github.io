<script setup>
/* Props */
const props = defineProps({
  buttons: {
    type: Array,
    default: () => [],
  },
  setActiveClass: {
    type: Function,
    default: () => {},
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
</script>

<template>
  <div class="toggle">
    <p v-if="props.title" class="toggle__title">
      {{ props.title }}
    </p>

    <p v-if="props.subtitle" class="toggle__subtitle">
      {{ props.subtitle }}
    </p>

    <ul class="toggle__list">
      <li
        v-for="(button, index) in props.buttons"
        :key="index"
        class="toggle__item"
      >
        <button
          class="toggle__button"
          :class="{
            'toggle__button--active': button.class === 'active',
          }"
          @click="props.setActiveClass(button.id)"
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
  text-align: center;

  @include md {
    width: 100%;
  }

  @include lg {
    width: 50%;
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

  &__list {
    display: flex;
    list-style-type: none;
    margin: 2rem auto;
    width: 9.375rem;
    background: $color-black-pearl;
    border-radius: 3rem;
    justify-content: left;

    @include lg {
      margin: 0;
    }
  }

  &__item {
    list-style-type: none;
  }

  &__button {
    width: 5rem;
    height: 2.5rem;
    cursor: pointer;
    border: none;
    background: $color-black-pearl;
    color: $color-white;
    border-radius: 30px;
    @include font-weight(bold);

    &--active {
      background: $color-web-orange;
    }
  }
}
</style>
