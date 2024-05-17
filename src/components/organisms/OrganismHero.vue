<template>
  <Carousel :autoplay="4000" :wrap-around="true">
    <Slide v-for="(hero, index) in heros" :key="index">
      <div class="hero-banner">
        <!-- Pass hero.heroimg to AtomHeroImage -->
        <AtomHeroImage :src="hero.heroimg" :alt="imageAlt" />
      </div>
    </Slide>

    <template #addons>
      <Pagination />
    </template>
  </Carousel>
</template>

<script setup>
import AtomHeroImage from '@/components/atoms/AtomHeroImage.vue';
import 'vue3-carousel/dist/carousel.css'
import { ref, onMounted } from 'vue';
import { Carousel, Slide, Pagination } from 'vue3-carousel';

const heros = ref([]);

const getHeros = () => {
  fetch(`https://studhus-c0295-default-rtdb.europe-west1.firebasedatabase.app/hero.json`, {
    method: 'GET',
  })
  .then(rawData => rawData.json())
  .then(data => {
    heros.value = data; // Make sure data is correctly formatted as an array of objects
  })
  .catch(error => {
    console.error('Error fetching or processing data:', error);
  });
};

onMounted(() => {
  getHeros();
});

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
  height: 400px;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
