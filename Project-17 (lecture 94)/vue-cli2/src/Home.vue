<!--here we only show an imported component-->
<template>
  <!--we can only have one root element in our component-->
    <div>
    <!-- here we create five iterations of our element -->
    <app-server-status v-for="server in 5"></app-server-status>
  </div>
</template>

<script>
/* here we import the component ServerStatus   */
import ServerStatus from './ServerStatus.vue';
export default {
  components: {
    'app-server-status' : ServerStatus
  }
}

</script>

<style >

</style>
