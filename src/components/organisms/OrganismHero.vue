<template>
  <Carousel :autoplay="2000" :wrap-around="true">
    <Slide v-for="slide in 10" :key="slide">
      <div class="hero-banner">
        <AtomHeroImage />
      </div>
    </Slide>

    <template #addons>
      <Pagination />
      <Navigation />
    </template>
  </Carousel>
</template>

<script setup>
import AtomHeroImage from '@/components/atoms/AtomHeroImage.vue';
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const currentImage = "@/assets/images/heroimg1.png";

defineProps({
  imageAlt: {
    type: String,
    default: 'Hero Banner Image',
  },
});
</script>

<style scoped>
.hero-banner {
  position: relative;
  width: 100%;
  height: 500px; /* Adjust the height as needed */
  overflow: hidden;
}
</style>