<template lang="html">
  <div>
    <h3>New Quote</h3>
    <button v-on:click="counter++">Increase our counter</button>
    <p>{{ counter }}</p>
  </div>
</template>

<script>
export default {
  data: function() {
      return {
        counter: 0
      }
  },
  destroyed() {
    console.log('Component app-new Destroyed!');
  },
  //this lifecycle gets activated when our component is deactivated
  deactivated() {
    console.log('Component app-new Deactivated!');
  },
  activated() {
    console.log('Component app-new Activated!');
  }
}
</script>

<style scoped lang="css">

</style>
