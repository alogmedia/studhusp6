<template>
    <div class="hero-image" style></div>
  </template>
  
  <script setup>
  const props = defineProps({
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      default: 'Hero Banner Image',
    },
  });
  

  </script>
  
  <style scoped>
  .hero-image {
    position: relative;
    width: 100%;
    height: 500px; /* Adjust the height as needed */
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('@/assets/images/heroimg.png');
  }
  </style>