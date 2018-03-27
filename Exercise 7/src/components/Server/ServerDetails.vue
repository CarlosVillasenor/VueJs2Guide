<!-- A component that shows the details of the selected 'app-server'
component -->
<template>
  <div class="col-xs-12 col-sm-6">
    <!-- By using v-if if there is no selected 'app-server' component this
    element will not be shown, because the server property will be null -->
    <p v-if="!server">Please select a Server</p>
    <!-- If the server property is not equal to null this element will be
    shown -->
    <p v-else>Server #{{ server.id }} selected, Status: {{ server.status }}</p>
    <hr>
    <button @click="resetStatus">Change to Normal</button>
  </div>

</template>

<script>
import { eventBus } from '../../main';

export default {
  data: function() {
    return {
      // here we declare our property server as a default value of null
      server: null
    }
  },
  methods: {
    resetStatus() {
      this.server.status = 'Normal';
    }
  },
  created() {
    // When the event 'serverSelected' is emited the following method will be
    // called.
    eventBus.$on('serverSelected', (server) => {
      this.server = server;
    });
  }
}
</script>

<style>

</style>
