<template>
  <div class="hero-today">
    <AtomSectionTitle title="EVENT IDAG" />
    <AtomHeroImage :src="DefaultImg" :alt="imageAlt" />
  </div>
</template>
<script setup>
import AtomSectionTitle from '@/components/atoms/AtomSectionTitle.vue';
import AtomHeroImage from '@/components/atoms/AtomHeroImage.vue';

defineProps({
  imageAlt: {
    type: String,
    default: 'Event idag billede',
  },
});

const DefaultImg = "https://i.imgur.com/DvhhK2r.jpeg";
</script>
