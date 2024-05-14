<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { defineProps } from 'vue';
  
  const props = defineProps({
    buttonTitle: String 
  });

</script>
<template>
    <div id="squarebutton">
        <font-awesome-icon :icon="faArrowLeft"/> 
        <span> {{ buttonTitle }}</span>
    </div>
</template>