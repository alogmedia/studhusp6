<template>
  <div class="modal-overlay">
    <div class="modal-event">
      <div class="event-section">
        <AtomEventsBanner
          @click="togglePopup('buttonTrigger')"
          id="event-section-img"
        />
        <div class="date-event">
          <MoleculeDate />
        </div>
        <div class="info-section">
          <MoleculeInfo />
          <MoleculeQr />
        </div>
        <div class="about-event">
          <MoleculeAbout />
        </div>
      </div>
    </div>
  </div>
</template>
  
<script setup>
import AtomEventsBanner from '@/components/atoms/AtomEventsBanner.vue';
import MoleculeAbout from '@/components/molecules/MoleculeAbout.vue';
import MoleculeDate from '@/components/molecules/MoleculeDate.vue';
import MoleculeInfo from '@/components/molecules/MoleculeInfo.vue';
import MoleculeQr from '@/components/molecules/MoleculeQr.vue';
  
const props = defineProps({
  togglePopup: Function
});
</script>
  