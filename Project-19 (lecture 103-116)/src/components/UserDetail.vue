<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User Name backwards: {{ switchName() }}</p>
    <p>User Age: {{ userAge }}</p>
    <button v-on:click="resetName">Reset Name</button>
  </div>
</template>

<script>
// to use the eventBus we created in main.js
// we need to import it
import { eventBus } from '../main';

export default {
  // the props property allows us to let a property
  // allow and notify mutations from outside.
  // the name we give to the props property to the strings/keys
  // in its array/object has to match the properties in our component
  props:{
    myName: {
      type: [ String , Array ],
      required :true,
      // the default property allow us to set a default value
      // to our property, its syntax is default:"<<value>>"
      // default: "default"

      // if you want to use the default when the property is an object
      // use the following syntax
      // default: function(){
      //    return {
      //        name: 'Max'
      //    }
      // }
      //
    },
    userAge: Number
  },
  created(){
    // here we will add a listener to an event we created in
    // another component or our eventBus that emit to our event with a parameter that
    // will have the property that was changed
    eventBus.$on( 'ageWasEdited' , (data) => {
      // here we update our key with the parameter that the event brings
      // that was send by the $emit event
      this.userAge = data;
    });
  },
  methods: {
    switchName(){
      // we can use the properties of 'props' like a normal
      // property of our element
      return this.myName.split("").reverse().join("");
    },
    resetName(){
      this.myName = 'Carlos';
      // to emit an event we use the following syntax
      // this.$emit('<<name of the event>>' ,
      // <<property to notify changes>> )
      this.$emit('nameWasReset' , this.myName );
      // if we were to mutate a string, number or boolean
      // ther is no problem at all with our syntax to emit changes, but
      // with objects or arrays, keep in mind that objects and arrays
      // are references types wich means that they only exits in memory
      // once and the variables or properties 'storing' in them only
      // store a pointer to the place in memory, so if you were to make
      // changes in your object/array it will not be notified in the
      // parent component
    }
  }
}
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
