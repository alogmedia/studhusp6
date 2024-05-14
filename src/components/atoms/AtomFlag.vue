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

<template>
  <img :src="src" :alt="alt" class="flag-img" />
</template>

<style lang="scss" scoped>
.flag-img {
  width: 50px; // Set the desired width
  height: 50px; // Set the desired height
}
</style>