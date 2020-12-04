<template>
  <footer class="w3-padding-64 w3-light-grey w3-small w3-center" id="footer">
    <div class="w3-row-padding">
      <contact-form></contact-form>
      <footer-about></footer-about>
      <footer-store></footer-store>
    </div>
  </footer>
</template>

<script>
import ContactForm from './footer-components/ContactForm';
import FooterAbout from './footer-components/FooterAbout';
import FooterStore from './footer-components/FooterStore';

export default {
    name: 'FooterSection',
    components: {
        ContactForm,
        FooterAbout,
        FooterStore
    }
}
</script>

<style>

</style>