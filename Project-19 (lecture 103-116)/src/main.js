import Vue from 'vue'
import App from './App.vue'

// A constant that works as an eventBus
// allows us to manage communication between
// components
/* An Eventbus is a mechanism that allows
different components to communicate with
each other without knowing about each
other. A component can send an Event to
the Eventbus without knowing who will
pick it up or how many others will pick
it up. */
export const eventBus = new Vue({
  methods: {
    changeAge(age){
      // when this method is called by any component it will emit a change with
      // a parameter, to call it the syntax is the following:
      // eventBus.changeAge( <<property we send as a parameter>> );
      this.$emit( 'ageWasEdited', age );
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
