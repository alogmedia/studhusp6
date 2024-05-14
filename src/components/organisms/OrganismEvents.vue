<template>
  <div>
  <MoleculeEvents title="KOMMENDE EVENTS" :latest="true" :limit="3" />
  <AtomSquareButtonRight buttonTitle='SE FLERE' @click="navigateToEvents"/>
</div>
</template>

<script setup>
import MoleculeEvents from '@/components/molecules/MoleculeEvents.vue';
import AtomSquareButtonRight from '@/components/atoms/buttons/AtomSquareButtonRight.vue';

import { useRouter } from 'vue-router';

const router = useRouter();

const navigateToEvents = () => {
  router.push('/events');
};
</script>