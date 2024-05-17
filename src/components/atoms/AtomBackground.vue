<script setup>
import { onMounted } from 'vue';

let palette = [
'#FF4310',
'#FFB116', 
'#FF38B8',
'#F50004',
'#6733FE', 
'#0365FF', 
'#0FE7E2',
'#009B50'
];

let blops = [];

const generatePalette = () => {
  const ran = palette[Math.floor(Math.random() * palette.length)];
  return ran;
};


const updateColors = () => {
  blops.forEach(item => {
    item.style.fill = generatePalette();
  });
  
};

 
onMounted(() => {
  blops = document.querySelectorAll('.color-shift path');
  updateColors();
});
</script>

<template>
<div class="elementor-widget-container">
   <svg id="blob3" class="color-shift" xmlns="http://www.w3.org/2000/svg" width="723.323" height="2500" viewBox="0 0 723.323 1276.086"><defs></defs><g transform="translate(-199.719 -76.116)"><path class="a" d="M-224.719-344.219c-131.1,92.039-288.717-173.994-305.812-292.727s85.344-183.842,170.148-207.711,142.322,37.188,169.133,118.414-34.625,39.684-59.812,128.813C-275.771-510-81.752-482.536-199.281-393.766-201.554-392.049-222.227-345.968-224.719-344.219Z" transform="translate(894 926)" style="fill: rgb(103, 51, 254);"></path><path class="b" d="M-328.082-88.642c-73.143,38.25-185.743-260.695-202.4-434.049C-548.017-705.17-442.949-805.236-355.968-841.92c29.348-12.378,107.033-16.436,168.8-7.7,36.357,5.141,226.491,101.4-44.125,143.926S-254.939-126.892-328.082-88.642Z" transform="translate(732.137 1378.493)" style="fill: rgb(0, 155, 80);"></path><path class="a" d="M26.846-134.564C-43.1-187.409-145.71-167.635-137.429-80.2S-9.973,162.338,59.971,215.184s90.657,3.438,82.376-84S96.79-81.718,26.846-134.564Z" transform="translate(748.653 824.039)" style="fill: rgb(3, 101, 255);"></path><path class="c" d="M-177.58-97.789c-43.477-41.346-99.6-4.387-114.889,90.969s40.295,155.1,53.727,290.453-138.956,221.828,0,250.969S35.4,408.861,78.879,326.75-9.882,214.525-74,108.391-135.842-58.1-177.58-97.789Z" transform="translate(776.45 814)" style="fill: rgb(15, 231, 226);"></path><path class="d" d="M-28.1-678.383c-54.928-19.637-72.062-9.023-118.016,17.664s-60.1,36.365-56.125,106.18,72.766,90.664,80.031,173.078S-337.25-216.937-337.25-216.937-448.523-188.383-463.508-49.953s27.523,304.223,66.32,386.734,116.723-7.926,136.383-111.914S-397.633,60.01-318.547-79.172-93.924-159.5,8.023-276.633s92.916-161.094,62.516-254.7S26.826-658.746-28.1-678.383Z" transform="translate(832 880)" style="fill: rgb(15, 231, 226);"></path></g></svg>
</div>
</template>

<style>
.color-shift {
  filter: blur(150px);
  position: fixed;
  z-index: -100;
  fill: none;
  width: 100vh; /* Adjust the width as needed */
  height: 100vh; /* Make the height equal to the viewport height */
  left: -60vh; /* Position the blob on the left side */
  top: 0; /* Position the blob at the top */
}
</style>