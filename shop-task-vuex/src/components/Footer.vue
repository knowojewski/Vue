<template>
  <footer class="w3-padding-64 w3-light-grey w3-small w3-center" id="footer">
    <div class="w3-row-padding">
      <ContactForm />
      <FooterAbout />
      <FooterStore />
    </div>
  </footer>
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import ContactForm from './footer-components/ContactForm';
import FooterAbout from './footer-components/FooterAbout';
import FooterStore from './footer-components/FooterStore';

@Component({
  components: {
    ContactForm,
    FooterAbout,
    FooterStore
  }
})
export default class FooterSection extends Vue {}
</script>

<style>

</style>