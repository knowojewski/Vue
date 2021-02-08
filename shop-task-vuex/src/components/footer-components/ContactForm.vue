<template>
  <div class="w3-col s4">
    <h4>Contact</h4>
    <p>Questions? Go ahead.</p>
    <form action="/action_page.php" target="_blank">
        <p><input class="w3-input w3-border" type="text" placeholder="Name" name="Name" required></p>
        <p><input class="w3-input w3-border" type="text" placeholder="Email" name="Email" required></p>
        <p><input class="w3-input w3-border" type="text" placeholder="Subject" name="Subject" required></p>
        <p><input class="w3-input w3-border" type="text" placeholder="Message" name="Message" required></p>
        <button type="submit" class="w3-button w3-block w3-black">Send</button>
    </form>
  </div>
</template>

<script>
export default {
    name: 'ContactForm'
}
</script>

<style>

</style>