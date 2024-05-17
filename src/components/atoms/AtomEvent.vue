<template>
  <img :src="src" :alt="alt" :class="class" @touchend="handleEventTouch" />
</template>

<script setup>
import AtomLogging from '@/components/atoms/AtomLogging.vue';
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
