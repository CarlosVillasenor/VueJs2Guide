<!--A component that shows a list element with a method that calls the
eventBus´s emit function to emit an event with a parameter -->
<template>
  <li
  class="list-group-item"
  style="cursor: pointer"
  v-on:click="serverSelected">
  Server #{{ server.id }}
</li>
</template>

<script>
import { eventBus } from '../../main';

export default {
  // props is a props wich contains the properties that the component will be
  // allow to recive from other components
  props: ['server'],
  methods: {
    serverSelected() {
      // We emit an event with eventBus.$emit that will have a property as a
      // parameter
      eventBus.$emit('serverSelected', this.server);
    }
  }
}
</script>

<style>

</style>
