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
export const eventBus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})
