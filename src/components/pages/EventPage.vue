<script setup>
import { ref } from 'vue';
import MoleculeBack from '@/components/molecules/MoleculeBack.vue';
import OrganismEventsPage from '@/components/organisms/OrganismEventsPage.vue';
import OrganismEventsInfoPage from '@/components/organisms/OrganismEventsInfoPage.vue';
import AtomSquareButtonRight from '@/components/atoms/buttons/AtomSquareButtonRight.vue';

const isEventInfoVisible = ref(false);

const toggleModal = () => {
  isEventInfoVisible.value = !isEventInfoVisible.value; 
};
</script>

<template>
  <main>
    <MoleculeBack />
    <OrganismEventsPage />
    <OrganismEventsInfoPage v-show="isEventInfoVisible" />
    <AtomSquareButtonRight @click="toggleModal" />
  </main>
</template>

