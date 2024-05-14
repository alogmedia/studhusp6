<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { defineProps } from 'vue';
  
  const props = defineProps({
    buttonTitle: String 
  });

</script>
<template>
    <div id="squarebutton">
        <span> {{ buttonTitle }}</span>
        <font-awesome-icon :icon="faArrowRight" class="roundbuttonarrow" /> 
    </div>
</template>