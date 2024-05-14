<script setup>
</script>

<template>
<a class="logo-container" href="/">
  <div class="logo">
    <svg class="default" xmlns="http://www.w3.org/2000/svg" width="91" height="91" viewBox="0 0 91 91"><g transform="translate(-739 -526)"><circle cx="45.5" cy="45.5" r="45.5" transform="translate(739 526)"></circle><path class="a" d="M1913.112,6512.206l-34.016-32.479-33.252,32.479h53.037v22.315h-38.873v-7.027" transform="translate(-1094.564 -5938.364)"></path></g></svg>
    <svg class="live" xmlns="http://www.w3.org/2000/svg" width="91" height="91" viewBox="0 0 91 91"><g transform="translate(-739 -586)"><g transform="translate(0 60)"><circle cx="45.5" cy="45.5" r="45.5" transform="translate(739 526)"></circle></g><path class="a" d="M2452.2,6719.405l-6.866-.419v-38.7h22.3v52.961l32.509-33.429-32.509-33.973" transform="translate(-1684 -6068)"></path></g></svg>
  </div>

  <div class="text-container">
    <div class="title">Studenterhus</div>
    <div class="sub">Odense</div>
  </div>
</a>
</template>

<style> 
.default {
 background-color: #FFF;
 border-radius: 50%;
}
.logo-container {
  display: inline-flex;
  align-items: center; 
  text-decoration: none;
}

.text-container {
  display: block;
  margin-left: 40px; 
}
  
 .logo-container a {
  color: #000;
  text-decoration: none;
}
 .logo-container a:visited {
     color: #000;
 } 
 

.title {
  font-family: "Neue Montreal", Sans-serif;
  font-weight: 600;
  font-size: 32px;
  line-height: 30px;
  color: #FFF;
}

.sub {
  font-family: "Cirka", serif;
  font-weight: 600;
  font-size: 34px;
  line-height: 30px; 
  color: #FFF;
}

.logo {
  position: relative;
  background: #000;
  min-width: 90px;
  width: 90px;
  min-height: 90px;
  max-width: 90px;
  height: 90px;
  max-height: 90px;
  border-radius: 50%; }
  .logo svg {
    position: absolute;
    stroke: #000;
    stroke-width: 0;
    fill: transparent;
    stroke-linecap: round;
    stroke-linejoin: round; }
    .logo svg circle {
      fill: transparent; }
    .logo svg path {
      fill: transparent;
      stroke: #000;
      stroke-width: 5px;
      stroke-dasharray: 215;
      stroke-dashoffset: 215;
      animation: animate-logo 5s cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite; }
    .logo svg.live path {
      animation-delay: 2.5s; }

@keyframes animate-logo {
  16.66%, 33% {
    stroke-dashoffset: 0; }
  50%, 66.66% {
    stroke-dashoffset: 215; } }
    
    @media (max-width: 640px) {
        .logo {
              min-width: 60px;
  width: 60px;
  min-height: 60px;
  max-width: 60px;
  height: 60px;
        }
        
        .title {
  font-size: 20px;
  line-height: 20px; }

.sub {
  font-size: 22px;
  line-height: 20px; }
}
</style>
