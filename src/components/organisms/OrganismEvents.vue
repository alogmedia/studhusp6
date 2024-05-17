<template>
  <AtomLogging property="event">
    <MoleculeEvents title="KOMMENDE EVENTS" :latest="true" :limit="3" />
  </AtomLogging>
  <AtomLogging property="button">
    <AtomSquareButtonRight
      class="button-floatright"
      buttonTitle="SE FLERE"
      @click="navigateToEvents"
    />
  </AtomLogging>
</template>

<script setup>
import AtomLogging from '@/components/atoms/AtomLogging.vue';
import MoleculeEvents from '@/components/molecules/MoleculeEvents.vue';
import AtomSquareButtonRight from '@/components/atoms/buttons/AtomSquareButtonRight.vue';

import { useRouter } from 'vue-router';

const router = useRouter();

const navigateToEvents = () => {
  router.push('/events');
};
</script>
