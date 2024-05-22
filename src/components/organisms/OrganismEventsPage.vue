<template>
  <div class="container">
      <MoleculeEvents
        v-for="month in months"
        :key="month.title"
        :title="month.title"
        :limit="3"
      />
  </div>
</template>

<script setup>
import MoleculeEvents from '@/components/molecules/MoleculeEvents.vue';
import { ref } from 'vue';

const months = ref([
  { title: 'JANUAR' },
  { title: 'FEBRUAR' },
  { title: 'MARTS' },
  { title: 'APRIL' },
  { title: 'MAJ' },
  { title: 'JUNI' },
  { title: 'JULI' },
  { title: 'AUGUST' },
  { title: 'SEPTEMBER' },
  { title: 'OKTOBER' },
  { title: 'NOVEMBER' },
  { title: 'DECEMBER' },
]);
</script>
