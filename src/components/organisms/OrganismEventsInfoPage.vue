<template>
    <div class="modal-overlay" v-show="isEventInfoVisible">
<div class="modal-event">
<div class="event-section">
    <AtomEventsBanner @click="closeModal" id="event-section-img"/>
    <div class="date-event">
        <MoleculeDate/>
    </div>
    <div class="info-section">
        <MoleculeInfo />
        <MoleculeQr/>
    </div>
    <div class="about-event">
        <MoleculeAbout/>
    </div>
</div>
</div>
</div>
</template>
<script setup>
import MoleculeAbout from '@/components/molecules/MoleculeAbout.vue';
import MoleculeDate from '@/components/molecules/MoleculeDate.vue';
import MoleculeInfo from '@/components/molecules/MoleculeInfo.vue';
import MoleculeQr from '@/components/molecules/MoleculeQr.vue';
import AtomEventsBanner from '@/components/atoms/AtomEventsBanner.vue';
import { ref } from 'vue';

const isEventInfoVisible = ref(true);

const closeModal = () => {
  isEventInfoVisible.value = false;
};
</script>