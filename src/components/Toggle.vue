<script setup>
const props = defineProps({
  buttons: {
    type: Array,
    required: true,
  },
  setActiveClass: {
    type: Function,
    required: false,
  },
  title: {
    type: String,
    required: false,
  },
  subtitle: {
    type: String,
    required: false,
  },
});
</script>

<template>
  <div :class="['app-toggle', 'app-toggle__button-group']">
    <p
      v-if="props.title"
      class="app-toggle__title"
    >
      {{ props.title }}
    </p>

    <p
      v-if="props.subtitle"
      class="app-toggle__subtitle"
    >
      {{ props.subtitle }}
    </p>

    <ul class="app-toggle__items">
      <li
        v-for="(button, index) in props.buttons"
        :key="index"
      >
        <button
          class="app-toggle__button-group--button"
          :class="button.class"
          @click="props.setActiveClass(button.id)"
        >
          {{ button.text }}
        </button>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.app-toggle {
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
}
</style>
