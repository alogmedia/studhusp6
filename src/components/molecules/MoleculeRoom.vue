<template>
  <carousel ref="carousel" :items-to-show="1">
      <slide v-for="(room, index) in rooms" :key="index" class="room-container">
            <img :src="room.image" :alt="room.title">
        <div class="room-text">
            <AtomH3Title class="section-h3title-lokale">
              <span class="redcircle"></span>
              {{ room.title }}
            </AtomH3Title>
            <AtomH3Title>{{ room.time }}</AtomH3Title>
            <AtomParagraph>{{ room.description }}</AtomParagraph>
        </div>
      </slide>
      <template #addons>
      <Navigation />
    </template>
  </carousel>
  
  </template>
  
  <script setup>
  import AtomH3Title from '@/components/atoms/AtomH3Title.vue';
  import AtomParagraph from '@/components/atoms/AtomParagraph.vue';
  import 'vue3-carousel/dist/carousel.css'
  import { ref, onMounted } from 'vue';
  import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

  const rooms = ref([]);

  const getRooms = () => {
    fetch(`https://studhus-c0295-default-rtdb.europe-west1.firebasedatabase.app/rooms.json`, {
      method: 'GET',
    })
    .then(rawData => rawData.json())
    .then(data => {
      rooms.value = data; // Make sure data is correctly formatted as an array of objects
    })
    .catch(error => {
      console.error('Error fetching or processing data:', error);
    });
  };

  onMounted(() => {
    getRooms();
  });

  </script>
  
  <style scoped> 
     .room-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap:10px;
        background-color: white;
    }
     .room-text {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .redcircle {
        display: inline-block;
        height: 18px; 
        width: 18px; 
        border-radius: 50%; 
        background-color: #AF3B3B;
    }

img {
    width: 30%;
    height: 100%;
    object-fit: cover;
}


.carousel {
  text-align: left;
}

.carousel__next {
  background:RED;
}

  </style>
  