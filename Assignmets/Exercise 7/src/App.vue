<template>
  <div class="container">
    <app-header></app-header>
    <hr>
    <div class="row">
      <!-- A component that shows a dom repeat of the app-server component -->
      <servers></servers>
      <!-- A component that shows the details of the selected 'app-server'
      component -->
      <app-server-details></app-server-details>
    </div>
    <hr>
    <app-footer></app-footer>
  </div>
</template>

<script>
// here we import all the parent componets to our main section
import Header from './components/Shared/Header.vue';
import Footer from './components/Shared/Footer.vue';
import Servers from './components/Server/Servers.vue';
import ServerDetails from './components/Server/ServerDetails.vue';

// components won´t work till we declare them in the componets key
export default {
  components: {
    appHeader: Header,
    Servers,
    'app-server-details': ServerDetails,
    'app-footer': Footer
  }
}
</script>

<style>

</style>
