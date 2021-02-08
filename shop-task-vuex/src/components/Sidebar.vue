<template>
  <div class="navigation">
    <nav class="w3-sidebar w3-bar-block w3-white w3-collapse w3-top" style="z-index:3;width:250px"  :class="{'open': openMenu}">
        <div class="w3-container w3-display-container w3-padding-16">
            <i @click="openMenu = !openMenu" class="fa fa-remove w3-hide-large w3-button w3-display-topright"></i>
            <router-link to="/">
                <h3 class="w3-wide"><b>LOGO</b></h3>
            </router-link>
        </div>
        <div class="w3-padding-64 w3-large w3-text-grey" style="font-weight:bold">
            <router-link to="/" class="w3-bar-item w3-button">Products</router-link>
        </div>
        <a href="#footer" class="w3-bar-item w3-button w3-padding">Contact</a> 
        <a href="javascript:void(0)" class="w3-bar-item w3-button w3-padding" onclick="document.getElementById('newsletter').style.display='block'">Newsletter</a> 
        <a href="#footer"  class="w3-bar-item w3-button w3-padding">Subscribe</a>
    </nav>
    <header class="w3-bar w3-top w3-hide-large w3-black w3-xlarge">
        <div class="w3-bar-item w3-padding-24 w3-wide">LOGO</div>
        <button @click.prevent="openMenu = !openMenu" class="w3-bar-item w3-button w3-padding-24 w3-right"><i class="fa fa-bars"></i></button>
    </header>
    <div class="w3-overlay w3-hide-large" :class="{'open': openMenu}" @click="openMenu = !openMenu" style="cursor:pointer" title="close side menu"></div>
  </div>
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class Sidebar extends Vue {
    openMenu = false;
}
</script>

<style scoped>
.open {
    display: block;
}

a {
    text-decoration: none;
    scroll-behavior: smooth;
}

</style>