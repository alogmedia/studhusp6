<template>
  <div class="event-details">
    <div v-for="(item, index) in eventDetails" :key="index" class="event-details-item">
      <font-awesome-icon :icon="item.icon" class="icon" />
      <AtomParagraph>{{ item.text }}</AtomParagraph>
    </div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2265.8562301577517!2d10.378011176441158!3d55.39541411946207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464cdffa0731f111%3A0x7476e0541e642175!2sForeningen%20Studenterhus%20Odense!5e0!3m2!1sda!2sdk!4v1715598277071!5m2!1sda!2sdk" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>    
    <AtomParagraph><b>Studenterhuset Odense</b></AtomParagraph>

    <AtomParagraph>Amfipladsen 6, 5000 Odense C, Danmark</AtomParagraph>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { faMusic, faUser, faMapMarkerAlt, faTicketAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import AtomParagraph from '@/components/atoms/AtomParagraph.vue'; 
import AtomH3Title from '@/components/atoms/AtomH3Title.vue';

const eventDetails = ref([
  { icon: faMusic, text: 'Musik / Pop / Rock' },
  { icon: faUser, text: 'Event af Studenterhuset Odense' },
  { icon: faMapMarkerAlt, text: 'Studenterhuset Odense' },
  { icon: faTicketAlt, text: '100 Kroner' }
]);
</script>
