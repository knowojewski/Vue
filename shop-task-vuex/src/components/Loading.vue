<template>
    <div class="loading-box">
      <svg width="50" height="50" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" class="loading-icon">
        <circle cx="9.5" cy="1.5" r="1.5" fill="black"/>
        <circle cx="5.5" cy="2.5" r="1.5" fill="black" fill-opacity="0.81"/>
        <circle cx="2.5" cy="5.5" r="1.5" fill="black" fill-opacity="0.76"/>
        <circle cx="1.5" cy="9.5" r="1.5" fill="black" fill-opacity="0.64"/>
        <circle cx="2.5" cy="13.5" r="1.5" fill="black" fill-opacity="0.54"/>
        <circle cx="5.5" cy="16.5" r="1.5" fill="black" fill-opacity="0.4"/>
        <circle cx="9.5" cy="17.5" r="1.5" fill="black" fill-opacity="0.29"/>
        <circle cx="13.5" cy="16.5" r="1.5" fill="black" fill-opacity="0.15"/>
        <circle cx="16.5" cy="13.5" r="1.5" fill="black" fill-opacity="0.1"/>
        <circle cx="17.5" cy="9.5" r="1.5" fill="black" fill-opacity="0.05"/>
      </svg>
      <h3 class="loading-message">Loading product informations ...</h3>
    </div>
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class Loading extends Vue {}
</script>

<style lang="scss" scoped>
.loading-box {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px 0;

  .loading-icon {
    margin-right: 10px;
    animation: loading-anim 1s linear infinite;
  }
}

@keyframes loading-anim {
   0% {
     transform: rotateZ(0);
   } 

   80% {
     transform: rotateZ(360deg);
   }

   100% {
     transform: rotateZ(720deg);
   }
}
</style>