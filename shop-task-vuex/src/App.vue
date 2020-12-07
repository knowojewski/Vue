<template>
  <div id="app">
    <sidebar></sidebar>
    <div class="w3-main">
      <top-header></top-header>
      <router-view/>
      <subscribe-section></subscribe-section>
      <footer-section></footer-section>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar';
import TopHeader from './components/TopHeader';
import SubscribeSection from './components/SubscribeSection';
import FooterSection from './components/Footer';
import { mapActions } from 'vuex';

export default {
  components: {
    Sidebar,
    TopHeader,
    SubscribeSection,
    FooterSection
  },
  methods: {
    ...mapActions(['fetchProducts'])
  },
  created() {
    this.fetchProducts();
  }
}
</script>

<style scoped>
.w3-main {
  margin-left: 250px;
}
</style>
