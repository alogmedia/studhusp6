<template>
    <img :src="src" :alt="alt" :class="class" />
</template>

<script setup>
const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: 'Event billede',
  },
  class: {
    type: String,
    default: 'EventImage',
  },
});
</script>

<style scoped>
@import '@/assets/style/atom.css';
</style>
