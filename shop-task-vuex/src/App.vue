<template>
  <div id="app">
    <Alert />
    <ErrorModal  />
    <Sidebar />
    <div class="w3-main">
      <div class="w3-hide-large"></div>
      <TopHeader />
      <router-view/>
      <SubscribeSection />
      <FooterSection />
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar';
import TopHeader from './components/TopHeader';
import SubscribeSection from './components/SubscribeSection';
import FooterSection from './components/Footer';
import Alert from './components/Alert';
import ErrorModal from './components/ErrorModal';
import { Action } from 'vuex-class';
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  components: {
    Sidebar,
    TopHeader,
    SubscribeSection,
    FooterSection,
    Alert,
    ErrorModal
  }
})
export default class App extends Vue {
  @Action loadCart

  created() {
    this.loadCart();
  }
}
</script>

<style scoped>
.w3-main {
  margin-left: 250px;
}
</style>

<style>
.w3-button {
  transition: color .3s, background .3s;
}
</style>
