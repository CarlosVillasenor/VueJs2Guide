<template>
  <div class="container">
    <!--this component is imported from main.js
    because it was globally registered-->
    <app-header></app-header>
    <hr>
    <div class="row">
      <app-servers></app-servers>
      <app-server-details></app-server-details>
    </div>
    <hr>
    <app-footer></app-footer>
  </div>
</template>

<script>
// here we import locally our components
import Footer from './components/Footer.vue';
import Servers from './components/Servers.vue';
import ServerDetails from './components/ServerDetails.vue';

export default {
  components: {
    'app-servers': Servers,
    'app-server-details': ServerDetails,
    'app-footer': Footer
  }
}
</script>

<style>

</style>
