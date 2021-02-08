<template>
  <div class="w3-display-container w3-container header">
    <img src="../assets/images/shop-list-image.jpg" alt="Jeans" style="width:100%">
    <div class="shadow"></div>
    <div class="w3-display-topleft w3-text-white" style="padding:24px 48px">
    <h1 class="w3-jumbo w3-hide-small">New arrivals</h1>
    <h1 class="w3-hide-large w3-hide-medium mobile-header">New arrivals</h1>
    <h1 class="w3-hide-small">BEST QUALITY</h1>
    <p><a href="#products" class="w3-button w3-black w3-padding-large w3-large">SHOP NOW</a></p>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class ImageHeader extends Vue {}
</script>

<style lang="scss" scoped>
.header {
  padding: 0;
  margin: 0 10px;
  position: relative;
}

.shadow {
  position: absolute;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.57);
  z-index: 0;
  top: 0;
  left: 0;
}

@media ( max-width: 340px) {
  .mobile-header {
    font-size: 30px;
  }
}

</style>