<template>
  <img :src="src" :alt="alt" class="flag-img" />
</template>

<script setup>
defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: 'Flag',
  },
});
</script>
