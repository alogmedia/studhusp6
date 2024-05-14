<template>
    <AtomSectionTitle title='EVENT IDAG'/>
    <HeroImage :src="DefaultImg" :alt="imageAlt" />
</template>
<script setup>
import AtomSectionTitle from '@/components/atoms/AtomSectionTitle.vue';
import HeroImage from '@/components/atoms/AtomHeroImage.vue';

defineProps({
  imageAlt: {
    type: String,
    default: 'Event idag billede',
  },
});

const DefaultImg = 'src/assets/images/content/hero.png';
 
</script>