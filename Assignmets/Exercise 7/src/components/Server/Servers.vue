<!-- A component that shows a dom repeat of the app-server component with the
v-for property-->
<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <app-server
      v-for="server in servers"
      :server="server"></app-server>
    </ul>
  </div>
</template>

<script>
// we import from Server.vue its component and name it 'Server' it won´t work
// till we add it as a component in the components key
import Server from './Server.vue';

export default {
  data: function() {
    return {
      // The array that contains our 'servers'
      servers: [
        { id: 1, status: 'Normal'},
        { id: 2, status: 'Critical'},
        { id: 3, status: 'Unknown'},
        { id: 4, status: 'Normal'}
      ]
    };
  },
  components: {
    appServer: Server
  }
}
</script>

<style>

</style>
