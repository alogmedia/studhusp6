<template>
  <img :src="src" :alt="alt" :style="backgroundStyle" />
</template>

<script setup>
import { defineProps, computed } from 'vue';

defineProps({
  src: String,
  alt: String
});

const backgroundStyle = computed(() => ({
  width: '100%',
  height: '400px', // Adjust the height as needed
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}));
</script>
