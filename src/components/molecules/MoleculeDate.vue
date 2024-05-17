<template>
    <div class="dateevent-section">
      <img
        class="dateevent-img"
        src="@/assets/images/calendarimg.png"
        alt="Kalender Dato Event"
      />
      <div class="dateevent-txt">
        <AtomH3Title class="dateevent-h3"
          >LØRDAG DEN 19. JUNI KLOKKEN 22</AtomH3Title
        >
        <AtomH3Title>DOBBELTKONCERT MED DRØM OG BÅND</AtomH3Title>
        <AtomParagraph class="dateevent-p">Studenterhuset Odense</AtomParagraph>
      </div>
    </div>
  </template>
  <script setup>
  import AtomH3Title from '@/components/atoms/AtomH3Title.vue';
  import AtomParagraph from '@/components/atoms/AtomParagraph.vue';
  </script>
  