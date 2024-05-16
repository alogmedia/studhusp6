<template>
  <carousel ref="carousel" :items-to-show="1">
      <slide v-for="(room, index) in rooms" :key="index" class="room-container">
            <img :src="room.imageSrc" :alt="room.title">
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
  import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

  const rooms = [
    { 
      title: 'RESEVERET TIL EVENT', 
      time: 'IDAG KL. 20.00 - 23.00', 
      description: 'Bemærk: Lokalet kan frit benyttes uden for det bookede tidsrum. Spørg i baren ved spørgsmål til lokalebooking.',
      imageSrc: 'src/assets/images/content/hero.png'
    },
    { 
      title: 'RESEVERET TIL EVENT', 
      time: 'IDAG KL. 20.00 - 23.00', 
      description: 'Bemærk: Lokalet kan frit benyttes uden for det bookede tidsrum. Spørg i baren ved spørgsmål til lokalebooking.',
      imageSrc: 'src/assets/images/content/hero.png'
    },
  ];
  </script>
  
  <style scoped> 
     .room-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap:10px;
        background-color: white;
        padding: 20px 0;
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
  