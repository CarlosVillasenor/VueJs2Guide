<template>
  <div class="component">
    <h3>You may edit the User here</h3>
    <p>Edit me!</p>
    <p>User Age: {{ userAge }}</p>
    <button v-on:click="editAge">Change Age</button>
  </div>
</template>

<script>
// to use the eventBus we created in main.js
// we need to import it
import { eventBus } from '../main';

export default {
  props: {
    userAge:Number
  },
  methods: {
    editAge(){
      this.userAge = 30;
      // we comment this line to use the eventBus way instead
      // this.$emit( 'ageWasEdited', this.userAge );

      // In the eventBus we use the following syntax:
      // eventBus.$emit( '<< name of event>>' ,
      // this.<<property name>> );
      // the 'property name' is the property that will be send as a
      // parameter

      // we comment this line because we used the  eventBus way
      // with methods instead of the common other one
      // eventBus.$emit( 'ageWasEdited', this.userAge );

      // we can call a method of our eventBus that was declared in
      // an pass it a key as a parameter main.js
      eventBus.changeAge( this.userAge );
    }
  }
}
</script>

<style scoped>
div {
  background-color: lightgreen;
}
</style>
