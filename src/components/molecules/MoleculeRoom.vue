<template>
  <AtomLogging property="room">
    <carousel ref="carousel" :items-to-show="1">
      <slide v-for="(room, index) in rooms" :key="index" class="room-container">
        <img :src="room.image" :alt="room.title" class="roomimg" />
        <div class="room-text">
          <AtomH3Title class="section-h3title-lokale">
            <span class="redcircle"></span>
            {{ room.reason }}
          </AtomH3Title>
          <AtomH3Title>{{ room.time }}</AtomH3Title>
          <AtomParagraph
            ><p class="room-paragraph">{{ room.description }}</p></AtomParagraph
          >
        </div>
      </slide>
      <template #addons>
        <Navigation />
      </template>
    </carousel>
  </AtomLogging>
</template>

<script setup>
import AtomH3Title from '@/components/atoms/AtomH3Title.vue';
import AtomParagraph from '@/components/atoms/AtomParagraph.vue';
import AtomLogging from '@/components/atoms/AtomLogging.vue';

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


const handleRoomTouch = () => {
    isMobileClick('room');
  };
</script>
