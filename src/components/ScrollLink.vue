<template>
  <a :href="href" @click.prevent="scroll">
    <slot />
  </a>
</template>

<script setup>

const scroll = () => document?.querySelector(props.href)?.scrollIntoView({ behavior: 'smooth' });

const props = defineProps(['href']);
</script>
