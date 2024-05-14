<template>
    <div class="section-title">
      <h2>{{ title }}</h2>
      <span class="underline-section-title"></span>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
    title: String 
  });
  </script>
  
<style>
    .section-title {
        display: flex;
        flex-direction: column;
        margin-bottom: 0;
    }
    .section-title h2 {
        text-transform: uppercase;
        font-size: 30px;
        margin: 10px;
    }
    .underline-section-title {
    display: inline-block;
    width: 100%;
    border-bottom: 3px solid black; 
}
</style>