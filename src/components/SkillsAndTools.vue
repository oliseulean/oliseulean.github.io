<script setup>
/* Props */
const props = defineProps({
  icons: {
    type: Array,
    default: () => ([]),
  },
});

const getIconFallback = title => title.slice(0, 2).toUpperCase();

const handleImageError = event => {
  event.currentTarget.hidden = true;
};
</script>

<template>
  <div class="skills-and-tools">
    <ul class="skills-and-tools__items">
      <li
        v-for="icon in props.icons"
        :key="icon.title"
        class="skills-and-tools__item"
      >
        <span class="skills-and-tools__icon-frame">
          <span
            class="skills-and-tools__icon-fallback"
            aria-hidden="true"
          >
            {{ getIconFallback(icon.title) }}
          </span>
          <img
            :alt="icon.alt"
            :src="icon.source"
            height="80"
            width="80"
            class="skills-and-tools__icon"
            loading="lazy"
            @error="handleImageError"
          >
        </span>
        <span class="skills-and-tools__name">
          {{ icon.title }}
        </span>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.skills-and-tools {
  position: relative;
  display: block;
  width: 100%;

  &__items {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(6.25rem, 1fr));
    gap: 0.75rem;
    list-style: none;
    margin: 0;
    padding: 0;

    @include md {
      gap: 1rem;
    }
  }

  &__item {
    --skill-icon-scale: 1;
    --skill-icon-shadow: 0 0 0 rgb(0 0 0 / 0%);
    --skill-name-color: #{$color-catskill-white};

    display: flex;
    flex-direction: column;
    gap: 0.65rem;
    align-items: center;
    justify-content: center;
    height: 7.5rem;
    padding: 0.65rem;
    border: 1px solid rgba($color-white, 0.1);
    border-radius: 0.9rem;
    background-color: rgba($color-white, 0.035);
    text-align: center;
    transition:
      border-color $motion-duration-base $motion-ease-standard,
      background-color $motion-duration-base $motion-ease-standard,
      box-shadow $motion-duration-base $motion-ease-standard,
      transform $motion-duration-base $motion-ease-emphasized;

    @media (hover: hover) and (pointer: fine) {
      &:hover {
        border-color: rgba($color-web-orange, 0.45);
        background-color: rgba($color-web-orange, 0.06);
        box-shadow: 0 0.75rem 1.75rem rgba($color-black, 0.14);
        transform: translateY(-3px);

        --skill-icon-scale: 1.06;
        --skill-icon-shadow: 0 0.65rem 1.25rem rgb(0 0 0 / 20%);
        --skill-name-color: #{$color-amber};
      }
    }
  }

  &__icon-frame {
    position: relative;
    display: grid;
    place-items: center;
    width: 3.25rem;
    height: 3.25rem;
    padding: 0.45rem;
    border-radius: 0.75rem;
    background-color: rgba($color-white, 0.94);
    box-shadow: var(--skill-icon-shadow);
    transform: scale(var(--skill-icon-scale));
    transition: box-shadow $motion-duration-base $motion-ease-standard, transform $motion-duration-base $motion-ease-emphasized;
  }

  &__icon-fallback {
    color: $color-black-pearl;
    @include font-weight(bold);
    font-size: $font-size-xs;
    letter-spacing: 0.04em;
  }

  &__icon {
    position: absolute;
    inset: 0.45rem;
    display: block;
    width: calc(100% - 0.9rem);
    height: calc(100% - 0.9rem);
    background-color: $color-white;
    object-fit: contain;
  }

  &__name {
    color: var(--skill-name-color);
    @include font-weight(medium);
    font-size: $font-size-sm;
    line-height: 1.3;
    transition: color $motion-duration-fast $motion-ease-standard;
  }
}
</style>
