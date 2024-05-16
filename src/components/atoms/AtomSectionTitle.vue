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
  
